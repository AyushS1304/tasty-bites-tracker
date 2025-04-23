import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useSupabase } from "@/context/SupabaseContext";
import { format } from "date-fns";
import { Package, Calendar } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import OrderDetails from "@/components/OrderDetails";
import CreateSampleOrders from "@/components/CreateSampleOrders";

type Order = {
  id: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
  status: string;
  delivery_address: string;
  created_at: string;
};

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const { supabase, user } = useSupabase();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }

    const fetchOrders = async () => {
      try {
        console.log("Fetching orders for user:", user.id);
        const { data, error } = await supabase
          .from("orders")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching orders:", error);
          toast({
            variant: "destructive",
            title: "Error fetching orders",
            description: error.message,
          });
          throw error;
        }
        
        console.log("Orders data:", data);
        setOrders(data || []);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user, navigate, supabase, toast]);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "placed":
        return "bg-blue-500";
      case "confirmed":
        return "bg-yellow-500";
      case "preparing":
        return "bg-purple-500";
      case "out_for_delivery":
        return "bg-orange-500";
      case "delivered":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-8 h-8 border-t-2 border-orange-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Order History | Tasty Bites</title>
        <meta name="description" content="View your order history" />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Package className="h-6 w-6" />
              Order History
            </CardTitle>
            <CardDescription>
              View and track all your previous orders
            </CardDescription>
          </CardHeader>
          <CardContent>
            {orders.length === 0 ? (
              <div className="text-center py-8 space-y-4">
                <p className="text-gray-500">No orders found</p>
                <div className="flex flex-col gap-2 max-w-xs mx-auto">
                  <Button
                    onClick={() => navigate("/menu")}
                    className="bg-orange-500 hover:bg-orange-600"
                  >
                    Browse Menu
                  </Button>
                  <CreateSampleOrders />
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">
                          {order.id.slice(0, 8)}...
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {format(new Date(order.created_at), "MMM d, yyyy")}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status.replace(/_/g, " ")}
                          </Badge>
                        </TableCell>
                        <TableCell>${order.total.toFixed(2)}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedOrder(order)}
                          >
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <OrderDetails
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />
    </>
  );
};

export default Orders;
