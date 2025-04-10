
import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { categories, cuisines, foodItems } from "@/utils/data";
import { FoodItem } from "@/context/StoreContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FoodCard from "@/components/FoodCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Filter } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filteredItems, setFilteredItems] = useState<FoodItem[]>(foodItems);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // Handle cuisine filter from URL params
  useEffect(() => {
    const cuisineParam = searchParams.get("cuisine");
    
    if (cuisineParam) {
      setFilteredItems(foodItems.filter((item) => item.cuisine === cuisineParam));
    } else {
      setFilteredItems(foodItems);
    }
  }, [searchParams]);

  // Handle category filter
  useEffect(() => {
    const cuisineParam = searchParams.get("cuisine");
    
    if (activeCategory === "all") {
      if (cuisineParam) {
        setFilteredItems(foodItems.filter((item) => item.cuisine === cuisineParam));
      } else {
        setFilteredItems(foodItems);
      }
    } else {
      setFilteredItems(
        foodItems.filter((item) => {
          const matchesCategory = item.category === activeCategory;
          const matchesCuisine = cuisineParam ? item.cuisine === cuisineParam : true;
          return matchesCategory && matchesCuisine;
        })
      );
    }
  }, [activeCategory, searchParams]);

  // Get active cuisine name for display
  const activeCuisine = searchParams.get("cuisine")
    ? cuisines.find((c) => c.id === searchParams.get("cuisine"))?.name
    : null;

  // Clear cuisine filter
  const handleClearCuisine = () => {
    searchParams.delete("cuisine");
    setSearchParams(searchParams);
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
          
          {activeCuisine && (
            <div className="flex items-center">
              <Badge variant="outline" className="mr-2 text-base px-3 py-1">
                {activeCuisine} Cuisine
              </Badge>
              <Button variant="ghost" size="sm" onClick={handleClearCuisine}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
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
            <p className="mt-2 text-gray-400">Try changing your filters</p>
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
