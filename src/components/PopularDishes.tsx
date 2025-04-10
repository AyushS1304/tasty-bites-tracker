
import { useState, useEffect } from "react";
import { foodItems } from "@/utils/data";
import FoodCard from "./FoodCard";
import { motion } from "framer-motion";

const PopularDishes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const popularDishes = foodItems
    .filter(item => item.rating > 4.5)
    .slice(0, 4);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-gray-900">
            Popular Dishes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Most loved dishes by our customers, handpicked for an exceptional dining experience
          </p>
        </div>
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {popularDishes.map((dish) => (
            <motion.div 
              key={dish.id} 
              className="transform hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
            >
              <FoodCard item={dish} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PopularDishes;
