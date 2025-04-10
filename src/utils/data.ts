
import { FoodItem } from "@/context/StoreContext";

export const cuisines = [
  {
    id: "indian",
    name: "Indian",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "chinese",
    name: "Chinese",
    image: "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "italian",
    name: "Italian",
    image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "american",
    name: "American",
    image: "https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "mexican",
    name: "Mexican", 
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "japanese",
    name: "Japanese",
    image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80&w=500&auto=format&fit=crop"
  }
];

export const categories = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Appetizers",
  "Main Course",
  "Desserts",
  "Beverages",
  "Fast Food"
];

export const foodItems: FoodItem[] = [
  // Indian Cuisine
  {
    id: "1",
    name: "Butter Chicken",
    description: "Tender chicken cooked in a creamy tomato sauce with Indian spices",
    price: 350,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=500&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "indian",
    rating: 4.8
  },
  {
    id: "2",
    name: "Paneer Tikka",
    description: "Marinated cottage cheese grilled to perfection with bell peppers and onions",
    price: 250,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a973be911?q=80&w=500&auto=format&fit=crop",
    category: "Appetizers",
    cuisine: "indian",
    rating: 4.6
  },
  {
    id: "3",
    name: "Masala Dosa",
    description: "Crispy rice and lentil crepe filled with spiced potatoes",
    price: 150,
    image: "https://images.unsplash.com/photo-1627462900813-fa656480e253?q=80&w=500&auto=format&fit=crop",
    category: "Breakfast",
    cuisine: "indian",
    rating: 4.5
  },
  
  // Chinese Cuisine
  {
    id: "4",
    name: "Kung Pao Chicken",
    description: "Stir-fried chicken with peanuts, vegetables, and chili peppers",
    price: 280,
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=500&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "chinese",
    rating: 4.4
  },
  {
    id: "5",
    name: "Vegetable Fried Rice",
    description: "Chinese-style rice stir-fried with mixed vegetables and soy sauce",
    price: 220,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=500&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "chinese",
    rating: 4.2
  },
  {
    id: "6",
    name: "Dim Sum Platter",
    description: "Assortment of steamed dumplings with various fillings",
    price: 320,
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=500&auto=format&fit=crop",
    category: "Appetizers",
    cuisine: "chinese",
    rating: 4.7
  },
  
  // Italian Cuisine
  {
    id: "7",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
    price: 299,
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=500&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "italian",
    rating: 4.5
  },
  {
    id: "8",
    name: "Spaghetti Carbonara",
    description: "Pasta with creamy sauce made from eggs, cheese, pancetta, and black pepper",
    price: 270,
    image: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?q=80&w=500&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "italian",
    rating: 4.6
  },
  {
    id: "9",
    name: "Tiramisu",
    description: "Coffee-flavored Italian dessert made of ladyfingers dipped in coffee, layered with mascarpone cheese",
    price: 180,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=500&auto=format&fit=crop",
    category: "Desserts",
    cuisine: "italian",
    rating: 4.8
  },
  
  // American Cuisine
  {
    id: "10",
    name: "Classic Cheeseburger",
    description: "Beef patty with cheese, lettuce, tomato, and special sauce on a toasted bun",
    price: 249,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop",
    category: "Fast Food",
    cuisine: "american",
    rating: 4.3
  },
  {
    id: "11",
    name: "BBQ Ribs",
    description: "Tender pork ribs slow-cooked and glazed with smoky barbecue sauce",
    price: 450,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "american",
    rating: 4.7
  },
  {
    id: "12",
    name: "Apple Pie",
    description: "Traditional American dessert with sweet apple filling in a flaky pastry crust",
    price: 199,
    image: "https://images.unsplash.com/photo-1621743478914-cc8a68d76208?q=80&w=500&auto=format&fit=crop",
    category: "Desserts",
    cuisine: "american",
    rating: 4.4
  },
  
  // Mexican Cuisine
  {
    id: "13",
    name: "Beef Tacos",
    description: "Soft corn tortillas filled with seasoned beef, lettuce, cheese, and salsa",
    price: 280,
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=500&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "mexican",
    rating: 4.5
  },
  {
    id: "14",
    name: "Chicken Quesadilla",
    description: "Grilled flour tortilla filled with chicken, cheese, and peppers",
    price: 240,
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=500&auto=format&fit=crop",
    category: "Appetizers",
    cuisine: "mexican",
    rating: 4.2
  },
  {
    id: "15",
    name: "Guacamole & Chips",
    description: "Fresh avocado dip with lime, cilantro, and crispy tortilla chips",
    price: 190,
    image: "https://images.unsplash.com/photo-1594070319944-7c0cbebb6f58?q=80&w=500&auto=format&fit=crop",
    category: "Appetizers",
    cuisine: "mexican",
    rating: 4.6
  },
  
  // Japanese Cuisine
  {
    id: "16",
    name: "Salmon Sushi Platter",
    description: "Assortment of fresh salmon sushi including nigiri and maki rolls",
    price: 550,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=500&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "japanese",
    rating: 4.9
  },
  {
    id: "17",
    name: "Chicken Teriyaki",
    description: "Grilled chicken glazed with sweet teriyaki sauce served with rice",
    price: 320,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=500&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "japanese",
    rating: 4.4
  },
  {
    id: "18",
    name: "Miso Soup",
    description: "Traditional Japanese soup with tofu, seaweed, and green onions",
    price: 120,
    image: "https://images.unsplash.com/photo-1606658624159-589f9a718c4b?q=80&w=500&auto=format&fit=crop",
    category: "Appetizers",
    cuisine: "japanese",
    rating: 4.3
  }
];

export const offers = [
  {
    id: "offer1",
    title: "50% OFF up to ₹100",
    code: "WELCOME50",
    description: "Valid on your first order above ₹199"
  },
  {
    id: "offer2",
    title: "FREE DELIVERY",
    code: "FREEDEL",
    description: "On orders above ₹499"
  },
  {
    id: "offer3",
    title: "20% OFF",
    code: "TASTY20",
    description: "On minimum order of ₹599"
  }
];
