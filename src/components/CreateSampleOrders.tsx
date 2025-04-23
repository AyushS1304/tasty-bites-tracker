
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useSupabase } from "@/context/SupabaseContext";

const CreateSampleOrders = () => {
  const [loading, setLoading] = useState(false);
  const { supabase, user } = useSupabase();
  const { toast } = useToast();

  const handleCreateSampleOrders = async () => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Authentication required",
        description: "You must be logged in to create sample orders",
      });
      return;
    }

    setLoading(true);
    
    try {
      // Sample order data
      const sampleOrders = [
        {
          user_id: user.id,
          items: [
            {
              id: "item1",
              name: "Butter Chicken",
              price: 12.99,
              quantity: 1,
              image: "/dishes/butter-chicken.jpg"
            },
            {
              id: "item2",
              name: "Garlic Naan",
              price: 3.99,
              quantity: 2,
              image: "/dishes/naan.jpg"
            }
          ],
          total: 20.97,
          status: "delivered",
          delivery_address: "123 Main St, Mumbai, India"
        },
        {
          user_id: user.id,
          items: [
            {
              id: "item3", 
              name: "Paneer Tikka", 
              price: 10.99, 
              quantity: 1,
              image: "/dishes/paneer-tikka.jpg"
            },
            {
              id: "item4", 
              name: "Mango Lassi", 
              price: 4.99, 
              quantity: 1,
              image: "/dishes/mango-lassi.jpg"
            }
          ],
          total: 15.98,
          status: "preparing",
          delivery_address: "123 Main St, Mumbai, India"
        },
        {
          user_id: user.id,
          items: [
            {
              id: "item5", 
              name: "Chicken Biryani", 
              price: 14.99, 
              quantity: 1,
              image: "/dishes/biryani.jpg"
            },
            {
              id: "item6", 
              name: "Raita", 
              price: 2.99, 
              quantity: 1,
              image: "/dishes/raita.jpg"
            }
          ],
          total: 17.98,
          status: "confirmed",
          delivery_address: "123 Main St, Mumbai, India"
        }
      ];

      // Insert sample orders
      for (const order of sampleOrders) {
        const { error } = await supabase.from("orders").insert(order);
        if (error) throw error;
      }

      toast({
        title: "Sample orders created",
        description: "Sample orders have been added to your history",
      });
    } catch (error) {
      console.error("Error creating sample orders:", error);
      toast({
        variant: "destructive",
        title: "Failed to create sample orders",
        description: error.message || "An unexpected error occurred",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleCreateSampleOrders} 
      disabled={loading}
      variant="outline"
      className="w-full"
    >
      {loading ? "Creating..." : "Create Sample Orders"}
    </Button>
  );
};

export default CreateSampleOrders;
