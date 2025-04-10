
import { useState } from "react";
import { foodItems } from "@/utils/data";
import FoodCard from "./FoodCard";

const PopularDishes = () => {
  const popularDishes = foodItems
    .filter(item => item.rating > 4.5)
    .slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-gray-900">Popular Dishes</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Most loved dishes by our customers, handpicked for an exceptional dining experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularDishes.map((dish, index) => (
            <div 
              key={dish.id} 
              className="transform hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <FoodCard item={dish} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
