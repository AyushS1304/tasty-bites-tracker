
import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { categories, cuisines, foodItems } from "@/utils/data";
import { FoodItem } from "@/context/StoreContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FoodCard from "@/components/FoodCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Filter, Search } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filteredItems, setFilteredItems] = useState<FoodItem[]>(foodItems);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const location = useLocation();

  // Handle cuisine filter and search query from URL params
  useEffect(() => {
    const cuisineParam = searchParams.get("cuisine");
    const searchParam = searchParams.get("search");
    
    if (searchParam) {
      setSearchQuery(searchParam);
    }
    
    filterItems(cuisineParam, activeCategory, searchParam || searchQuery);
  }, [searchParams]);

  // Handle category filter and search
  useEffect(() => {
    const cuisineParam = searchParams.get("cuisine");
    filterItems(cuisineParam, activeCategory, searchQuery);
  }, [activeCategory, searchQuery]);

  // Filter items based on cuisine, category, and search query
  const filterItems = (cuisine: string | null, category: string, query: string) => {
    let results = foodItems;
    
    // Filter by cuisine if specified
    if (cuisine) {
      results = results.filter(item => item.cuisine === cuisine);
    }
    
    // Filter by category if not "all"
    if (category !== "all") {
      results = results.filter(item => item.category === category);
    }
    
    // Filter by search query if present
    if (query) {
      const searchLower = query.toLowerCase();
      results = results.filter(item => 
        item.name.toLowerCase().includes(searchLower) || 
        item.description.toLowerCase().includes(searchLower) ||
        item.category.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredItems(results);
  };

  // Get active cuisine name for display
  const activeCuisine = searchParams.get("cuisine")
    ? cuisines.find((c) => c.id === searchParams.get("cuisine"))?.name
    : null;

  // Clear cuisine filter
  const handleClearCuisine = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("cuisine");
    setSearchParams(newParams);
  };

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    
    // Update URL with search param
    const newParams = new URLSearchParams(searchParams);
    if (e.target.value) {
      newParams.set("search", e.target.value);
    } else {
      newParams.delete("search");
    }
    setSearchParams(newParams);
  };

  // Clear search
  const handleClearSearch = () => {
    setSearchQuery("");
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("search");
    setSearchParams(newParams);
  };

  return (
    <>
      <Helmet>
        <title>Menu | Tasty Bites</title>
        <meta name="description" content="Explore our delicious menu options" />
      </Helmet>
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Our Menu</h1>
          
          <div className="flex items-center space-x-2">
            {activeCuisine && (
              <div className="flex items-center mr-2">
                <Badge variant="outline" className="mr-2 text-base px-3 py-1">
                  {activeCuisine} Cuisine
                </Badge>
                <Button variant="ghost" size="sm" onClick={handleClearCuisine}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
        
        {/* Search bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for dishes, categories..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 pr-10 py-2 w-full"
            />
            {searchQuery && (
              <button 
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-medium mb-3 flex items-center">
            <Filter className="h-4 w-4 mr-2" /> Filter by Category
          </h2>
          <div className="overflow-x-auto pb-2">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="flex overflow-x-auto pb-1 justify-start h-auto">
                <TabsTrigger
                  value="all"
                  className="px-4 py-2 whitespace-nowrap"
                  onClick={() => setActiveCategory("all")}
                >
                  All Items
                </TabsTrigger>
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="px-4 py-2 whitespace-nowrap"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-500">No items found</h2>
            <p className="mt-2 text-gray-400">Try changing your filters or search query</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Menu;
