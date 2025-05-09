import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { ShoppingCart, User, LogIn, LogOut, Menu as MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/context/StoreContext";
import { useSupabase } from "@/context/SupabaseContext";
import SearchDropdown from "@/components/SearchDropdown";
import { foodItems } from "@/utils/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const { state } = useStore();
  const { user, loading: isAuthLoading, signOut } = useSupabase();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const cartItemCount = state.cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const searchParam = searchParams.get("search");
    if (searchParam) {
      setSearchQuery(searchParam);
    } else {
      setSearchQuery("");
    }
  }, [searchParams]);

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Signed out successfully",
      description: "Hope to see you again soon!",
    });
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-orange-500" : "text-gray-700";
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const handleSelectSearchItem = (item: any) => {
    navigate(`/menu?search=${encodeURIComponent(item.name)}`);
  };

  

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl">
              Tasty<span className="text-orange-500">Bites</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-orange-500 ${isActive("/")}`}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`font-medium transition-colors hover:text-orange-500 ${isActive("/menu")}`}
            >
              Menu
            </Link>
            <div className="w-72">
              <SearchDropdown
                searchQuery={searchQuery}
                items={foodItems}
                onSelect={handleSelectSearchItem}
                onSearchChange={handleSearchChange}
                onClear={handleClearSearch}
                placeholder="Search foods..."
                className="w-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              to="/cart" 
              className="relative hover:text-orange-500 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-fade-in">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            {isAuthLoading ? (
              <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white">
                    <span className="sr-only">User menu</span>
                    {user.email?.charAt(0).toUpperCase() || <User className="h-5 w-5" />}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 z-50">
                  <div className="px-3 py-2 text-sm font-medium truncate">
                    {user.email}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="w-full cursor-pointer">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/orders" className="w-full cursor-pointer">
                      Order History
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="text-red-500 cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2" /> Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="ghost" 
                size="sm" 
                asChild
                className="text-orange-500 hover:bg-orange-50"
              >
                <Link to="/auth">
                  <LogIn className="mr-1 h-4 w-4" /> Sign In
                </Link>
              </Button>
            )}
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <div className="relative mb-4">
              <SearchDropdown
                searchQuery={searchQuery}
                items={foodItems}
                onSelect={handleSelectSearchItem}
                onSearchChange={handleSearchChange}
                onClear={handleClearSearch}
                placeholder="Search foods..."
                className="w-full"
              />
            </div>
            <Link 
              to="/" 
              className={`block py-2 font-medium hover:text-orange-500 transition-colors ${isActive("/")}`}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`block py-2 font-medium hover:text-orange-500 transition-colors ${isActive("/menu")}`}
            >
              Menu
            </Link>
            {!user && (
              <Link
                to="/auth"
                className="block py-2 font-medium text-orange-500 hover:text-orange-600 transition-colors"
              >
                Sign In / Register
              </Link>
            )}
            {user && (
              <>
                <Link
                  to="/profile"
                  className="block py-2 font-medium hover:text-orange-500 transition-colors"
                >
                  My Profile
                </Link>
                <Link
                  to="/orders"
                  className="block py-2 font-medium hover:text-orange-500 transition-colors"
                >
                  Order History
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left py-2 font-medium text-red-500 hover:text-red-600 transition-colors"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
