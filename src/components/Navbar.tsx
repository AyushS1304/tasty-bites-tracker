
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "@/context/StoreContext";
import { useState } from "react";

const Navbar = () => {
  const { state } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const cartItemCount = state.cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl text-orange-500">Tasty<span className="text-navy-500">Bites</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-orange-500 transition-colors">Home</Link>
            <Link to="/menu" className="font-medium hover:text-orange-500 transition-colors">Menu</Link>
            <div className="relative flex items-center">
              <Search className="absolute left-2 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search foods..."
                className="pl-8 w-64 h-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <div className="relative flex items-center mb-4">
              <Search className="absolute left-2 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search foods..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Link 
              to="/" 
              className="block py-2 font-medium hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="block py-2 font-medium hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
