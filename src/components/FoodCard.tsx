
import { useState } from "react";
import { FoodItem, useStore } from "@/context/StoreContext";
import { Button } from "@/components/ui/button";
import { Plus, Check, Star, LogIn } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useSupabase } from "@/context/SupabaseContext";
import { Link } from "react-router-dom";

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard = ({ item }: FoodCardProps) => {
  const { state, addToCart } = useStore();
  const { toast } = useToast();
  const { user } = useSupabase();
  const [isAdding, setIsAdding] = useState(false);

  const isInCart = state.cart.some((cartItem) => cartItem.id === item.id);

  const handleAddToCart = () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to add items to your cart.",
        variant: "destructive",
      });
      return;
    }
    
    setIsAdding(true);
    addToCart(item);
    
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
      duration: 2000,
    });
    
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md food-card-shadow transition-all hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full px-2 py-1 flex items-center">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="text-sm font-medium">{item.rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{item.category}</p>
          </div>
          <div className="bg-orange-50 text-orange-700 font-medium px-2 py-1 rounded text-sm">
            ₹{item.price}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
        
        {user ? (
          <Button
            onClick={handleAddToCart}
            className={`w-full ${
              isInCart
                ? "bg-green-600 hover:bg-green-700"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
            disabled={isAdding}
          >
            {isInCart ? (
              <>
                <Check className="mr-2 h-4 w-4" /> Added
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" /> Add to Cart
              </>
            )}
          </Button>
        ) : (
          <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
            <Link to="/auth">
              <LogIn className="mr-2 h-4 w-4" /> Sign in to Add
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
