
import { useEffect, useState } from "react";
import { useStore, OrderStatus } from "@/context/StoreContext";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  Clock,
  UtensilsCrossed,
  Bike,
  Home,
  MapPin,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const MAP_API_URL = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static";

const getStatusStep = (status: OrderStatus): number => {
  switch (status) {
    case "placed":
      return 0;
    case "confirmed":
      return 1;
    case "preparing":
      return 2;
    case "out_for_delivery":
      return 3;
    case "delivered":
      return 4;
    default:
      return 0;
  }
};

const OrderMap = ({ location }: { location?: { lat: number; lng: number } }) => {
  if (!location) return null;
  
  // Default to customer's location if no delivery location provided
  const { lat = 19.0760, lng = 72.8777 } = location;
  
  // We're using a static map image since we don't need interactive maps
  // In a production app, you'd use an interactive map library
  const mapImageUrl = `${MAP_API_URL}/pin-s+ff642f(${lng},${lat})/${lng},${lat},14,0/600x300?access_token=pk.dummy`;
  
  return (
    <div className="rounded-lg overflow-hidden mt-6 border">
      <div className="bg-gray-200 h-64 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-8 w-8 mb-2 mx-auto text-orange-500" />
          <p className="text-gray-600">Live map would appear here</p>
          <p className="text-sm text-gray-500">Using delivery coordinates: {lat.toFixed(4)}, {lng.toFixed(4)}</p>
        </div>
      </div>
    </div>
  );
};

const OrderTracking = () => {
  const { state, updateOrderStatus } = useStore();
  const { currentOrder } = state;
  const navigate = useNavigate();
  const { toast } = useToast();
  const [timeRemaining, setTimeRemaining] = useState<number>(25); // minutes

  // Redirect if no current order
  useEffect(() => {
    if (!currentOrder) {
      toast({
        title: "No active order",
        description: "You don't have any active orders to track",
        variant: "destructive",
      });
      navigate("/");
      return;
    }
  }, [currentOrder, navigate, toast]);

  // Simulate order status updates
  useEffect(() => {
    if (!currentOrder) return;
    
    let timeouts: NodeJS.Timeout[] = [];
    
    if (currentOrder.status === "placed") {
      const timeout = setTimeout(() => {
        updateOrderStatus(currentOrder.id, "confirmed");
      }, 10000);
      timeouts.push(timeout);
    }

    if (currentOrder.status === "confirmed" || currentOrder.status === "placed") {
      const timeout = setTimeout(() => {
        updateOrderStatus(currentOrder.id, "preparing");
      }, 15000);
      timeouts.push(timeout);
    }

    if (
      currentOrder.status === "preparing" || 
      currentOrder.status === "confirmed" || 
      currentOrder.status === "placed"
    ) {
      const timeout = setTimeout(() => {
        updateOrderStatus(currentOrder.id, "out_for_delivery", {
          lat: 19.0870, // Simulated delivery location
          lng: 72.8877,
        });
      }, 25000);
      timeouts.push(timeout);
    }

    if (currentOrder.status !== "delivered") {
      const timeout = setTimeout(() => {
        updateOrderStatus(currentOrder.id, "delivered");
        toast({
          title: "Order delivered!",
          description: "Your order has been delivered. Enjoy your meal!",
        });
      }, 40000);
      timeouts.push(timeout);
    }

    // Countdown timer
    const interval = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1/60 : 0));
    }, 1000);
    
    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [currentOrder, updateOrderStatus, toast]);

  // Format time remaining
  const formatTimeRemaining = () => {
    if (timeRemaining <= 0) return "0 min";
    const minutes = Math.floor(timeRemaining);
    const seconds = Math.floor((timeRemaining - minutes) * 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!currentOrder) {
    return null; // We'll redirect in the useEffect
  }

  const currentStep = getStatusStep(currentOrder.status);

  return (
    <>
      <Helmet>
        <title>Order Tracking | Tasty Bites</title>
        <meta name="description" content="Track your food order in real-time" />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Order Tracking</h1>
        <p className="text-gray-600 mb-6">
          Order ID: <span className="font-medium">{currentOrder.id}</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Order Status</span>
                  {currentOrder.status !== "delivered" && (
                    <span className="text-sm font-normal bg-orange-100 text-orange-700 px-3 py-1 rounded-full flex items-center">
                      <Clock className="w-4 h-4 mr-1" /> ETA: {formatTimeRemaining()} min
                    </span>
                  )}
                </CardTitle>
                <CardDescription>
                  Track the real-time status of your order
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="py-4">
                  <ol className="relative border-l border-gray-200 ml-3">
                    <li className={`mb-10 ml-6 ${currentStep >= 0 ? "text-black" : "text-gray-400"}`}>
                      <span className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ${
                        currentStep >= 0 ? "bg-orange-500" : "bg-gray-200"
                      }`}>
                        <CheckCircle2 className={`w-4 h-4 ${currentStep >= 0 ? "text-white" : "text-gray-500"}`} />
                      </span>
                      <h3 className="font-semibold">Order Placed</h3>
                      <p className="text-sm text-gray-500">
                        We have received your order and are processing it
                      </p>
                    </li>
                    <li className={`mb-10 ml-6 ${currentStep >= 1 ? "text-black" : "text-gray-400"}`}>
                      <span className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ${
                        currentStep >= 1 ? "bg-orange-500" : "bg-gray-200"
                      }`}>
                        <CheckCircle2 className={`w-4 h-4 ${currentStep >= 1 ? "text-white" : "text-gray-500"}`} />
                      </span>
                      <h3 className="font-semibold">Order Confirmed</h3>
                      <p className="text-sm text-gray-500">
                        Restaurant has confirmed your order
                      </p>
                    </li>
                    <li className={`mb-10 ml-6 ${currentStep >= 2 ? "text-black" : "text-gray-400"}`}>
                      <span className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ${
                        currentStep >= 2 ? "bg-orange-500" : "bg-gray-200"
                      }`}>
                        <UtensilsCrossed className={`w-4 h-4 ${currentStep >= 2 ? "text-white" : "text-gray-500"}`} />
                      </span>
                      <h3 className="font-semibold">Preparing Your Food</h3>
                      <p className="text-sm text-gray-500">
                        The restaurant is preparing your delicious meal
                      </p>
                    </li>
                    <li className={`mb-10 ml-6 ${currentStep >= 3 ? "text-black" : "text-gray-400"}`}>
                      <span className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ${
                        currentStep >= 3 ? "bg-orange-500" : "bg-gray-200"
                      }`}>
                        <Bike className={`w-4 h-4 ${currentStep >= 3 ? "text-white" : "text-gray-500"}`} />
                      </span>
                      <h3 className="font-semibold">Out for Delivery</h3>
                      <p className="text-sm text-gray-500">
                        Your order is on its way to you
                      </p>
                    </li>
                    <li className={`ml-6 ${currentStep >= 4 ? "text-black" : "text-gray-400"}`}>
                      <span className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ${
                        currentStep >= 4 ? "bg-orange-500" : "bg-gray-200"
                      }`}>
                        <Home className={`w-4 h-4 ${currentStep >= 4 ? "text-white" : "text-gray-500"}`} />
                      </span>
                      <h3 className="font-semibold">Delivered</h3>
                      <p className="text-sm text-gray-500">
                        Your order has been delivered. Enjoy your meal!
                      </p>
                    </li>
                  </ol>
                </div>

                <OrderMap location={currentOrder.currentLocation} />
              </CardContent>
              <CardFooter className="flex justify-center border-t pt-6">
                <Button
                  variant="outline"
                  onClick={() => navigate("/")}
                  className="mr-2"
                >
                  Back to Home
                </Button>
                <Button onClick={() => navigate("/menu")} className="bg-orange-500 hover:bg-orange-600">
                  Order More
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>
                  {currentOrder.items.length} item{currentOrder.items.length > 1 ? "s" : ""}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentOrder.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded overflow-hidden mr-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-500">
                            x{item.quantity}
                          </p>
                        </div>
                      </div>
                      <p>₹{item.price * item.quantity}</p>
                    </div>
                  ))}

                  <div className="border-t pt-4 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>₹{currentOrder.total}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      (including taxes and delivery)
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-medium mb-1">Delivery Address</h4>
                    <p className="text-sm text-gray-600">
                      {currentOrder.address}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTracking;
