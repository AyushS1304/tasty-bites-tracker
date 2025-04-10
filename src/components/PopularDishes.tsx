
import { useState } from "react";
import { foodItems } from "@/utils/data";
import FoodCard from "./FoodCard";

const PopularDishes = () => {
  // Get top rated dishes (rating > 4.5)
  const popularDishes = foodItems
    .filter(item => item.rating > 4.5)
    .slice(0, 4);

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Popular Dishes</h2>
        <p className="text-gray-600 mb-8">Most loved dishes by our customers</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularDishes.map((dish) => (
            <FoodCard key={dish.id} item={dish} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
