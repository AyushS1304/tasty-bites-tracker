
import { useState } from "react";
import { useStore, CartItem } from "@/context/StoreContext";
import { Button } from "@/components/ui/button";
import {
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  Tag,
  Info,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { offers } from "@/utils/data";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet-async";

const CartItem = ({ item }: { item: CartItem }) => {
  const { updateQuantity, removeFromCart } = useStore();

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="flex border-b py-4">
      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="ml-4 flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium">{item.name}</h3>
          <p className="font-semibold">₹{item.price}</p>
        </div>
        <p className="text-sm text-gray-500 mb-2">{item.category}</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center border rounded-md">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={() => handleQuantityChange(item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center">{item.quantity}</span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={() => handleQuantityChange(item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-red-500 hover:text-red-700 hover:bg-red-50 -mr-2"
            onClick={() => removeFromCart(item.id)}
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const { state, placeOrder } = useStore();
  const { cart } = state;
  const { toast } = useToast();
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [address, setAddress] = useState("");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 499 ? 0 : 40;
  const taxes = Math.round(subtotal * 0.05); // 5% tax
  const total = subtotal + deliveryFee + taxes - discount;

  const handleApplyPromo = () => {
    const offer = offers.find((o) => o.code === promoCode);
    if (offer) {
      if (offer.code === "WELCOME50") {
        const discountAmount = Math.min(subtotal * 0.5, 100);
        setDiscount(discountAmount);
        toast({
          title: "Promo code applied!",
          description: `You saved ₹${discountAmount}`,
        });
      } else if (offer.code === "FREEDEL") {
        setDiscount(deliveryFee);
        toast({
          title: "Promo code applied!",
          description: "Free delivery applied to your order",
        });
      } else if (offer.code === "TASTY20") {
        if (subtotal >= 599) {
          const discountAmount = Math.round(subtotal * 0.2);
          setDiscount(discountAmount);
          toast({
            title: "Promo code applied!",
            description: `You saved ₹${discountAmount}`,
          });
        } else {
          toast({
            title: "Invalid promo code",
            description: "Minimum order value of ₹599 required",
            variant: "destructive",
          });
        }
      }
    } else if (promoCode) {
      toast({
        title: "Invalid promo code",
        description: "Please enter a valid promo code",
        variant: "destructive",
      });
    }
  };

  const handlePlaceOrder = () => {
    if (!address) {
      toast({
        title: "Address required",
        description: "Please enter your delivery address",
        variant: "destructive",
      });
      return;
    }

    setIsPlacingOrder(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      placeOrder(address);
      toast({
        title: "Order placed successfully!",
        description: "Your order is being prepared",
      });
      navigate("/tracking");
      setIsPlacingOrder(false);
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <>
        <Helmet>
          <title>Cart | Tasty Bites</title>
          <meta name="description" content="Your food order cart" />
        </Helmet>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-12 h-12 text-gray-400"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600">
                <Link to="/menu">Browse Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Cart | Tasty Bites</title>
        <meta name="description" content="Your food order cart" />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <div className="mt-6 flex items-end justify-between">
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-orange-500" />
                  <span className="font-medium">Have a promo code?</span>
                </div>
                <div className="flex">
                  <Input
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    className="w-40 rounded-r-none focus-visible:ring-orange-500"
                  />
                  <Button 
                    onClick={handleApplyPromo}
                    className="rounded-l-none bg-orange-500 hover:bg-orange-600"
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
                <CardDescription>Review your order before checkout</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>{deliveryFee > 0 ? `₹${deliveryFee}` : "Free"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600">Taxes</span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Info className="h-3 w-3 text-gray-400 cursor-help" />
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Tax Information</DialogTitle>
                          <DialogDescription>
                            A 5% tax is applied to all orders as per local regulations.
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <span>₹{taxes}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600 font-medium">
                    <span>Discount</span>
                    <span>- ₹{discount}</span>
                  </div>
                )}

                <div className="border-t pt-4 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
                      Proceed to Checkout
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Delivery Address</DialogTitle>
                      <DialogDescription>
                        Enter your delivery address to complete your order
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="address" className="text-right">
                          Address
                        </Label>
                        <Textarea
                          id="address"
                          className="col-span-3"
                          placeholder="Enter your full address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="p-1">
                        Total: ₹{total}
                      </Badge>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline" className="mr-2">
                            Cancel
                          </Button>
                        </DialogClose>
                        <Button 
                          onClick={handlePlaceOrder} 
                          className="bg-orange-500 hover:bg-orange-600"
                          disabled={isPlacingOrder}
                        >
                          {isPlacingOrder ? "Processing..." : "Place Order"}
                        </Button>
                      </DialogFooter>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="text-xs text-center text-gray-500 mt-4">
                  By proceeding, you agree to our terms of service and privacy policy.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
