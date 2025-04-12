import { FoodItem } from "@/context/StoreContext";

export const cuisines = [
  {
    id: "indian",
    name: "Indian",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "chinese",
    name: "Chinese",
    image: "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "italian",
    name: "Italian",
    image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "american",
    name: "American",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mexican",
    name: "Mexican", 
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "japanese",
    name: "Japanese",
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "thai",
    name: "Thai",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mediterranean",
    name: "Mediterranean",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "korean",
    name: "Korean",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=800&auto=format&fit=crop"
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
  "Fast Food",
  "Vegan",
  "Vegetarian",
  "Snacks"
];

export const foodItems: FoodItem[] = [
  // Indian Cuisine - More dishes
  {
    id: "1",
    name: "Butter Chicken",
    description: "Tender chicken cooked in a creamy tomato sauce with Indian spices",
    price: 199,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "indian",
    rating: 4.8
  },
  {
    id: "2",
    name: "Paneer Tikka",
    description: "Marinated cottage cheese grilled to perfection with bell peppers and onions",
    price: 149,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a973be911?q=80&w=800&auto=format&fit=crop",
    category: "Appetizers",
    cuisine: "indian",
    rating: 4.6
  },
  {
    id: "3",
    name: "Masala Dosa",
    description: "Crispy rice and lentil crepe filled with spiced potatoes",
    price: 99,
    image: "https://images.unsplash.com/photo-1627462900813-fa656480e253?q=80&w=800&auto=format&fit=crop",
    category: "Breakfast",
    cuisine: "indian",
    rating: 4.5
  },
  {
    id: "4",
    name: "Chole Bhature",
    description: "Spicy chickpea curry served with deep-fried bread",
    price: 280,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "indian",
    rating: 4.7
  },
  {
    id: "5",
    name: "Biryani",
    description: "Fragrant rice dish with aromatic spices and tender meat or vegetables",
    price: 320,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "indian",
    rating: 4.9
  },
  {
    id: "in1",
    name: "Idli Sambar",
    description: "Soft steamed rice cakes served with lentil soup and coconut chutney",
    price: 120,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop",
    category: "Breakfast",
    cuisine: "indian",
    rating: 4.3
  },
  {
    id: "in2",
    name: "Aloo Paratha",
    description: "Whole wheat flatbread stuffed with spiced potatoes, served with yogurt",
    price: 130,
    image: "https://images.unsplash.com/photo-1631788012442-633d4f91bbc5?q=80&w=800&auto=format&fit=crop",
    category: "Breakfast",
    cuisine: "indian",
    rating: 4.4
  },
  {
    id: "in3",
    name: "Vada Pav",
    description: "Spicy potato fritter in a bun with chutneys - Mumbai's favorite street food",
    price: 80,
    image: "https://images.unsplash.com/photo-1606755456206-b25206cde27e?q=80&w=800&auto=format&fit=crop",
    category: "Snacks",
    cuisine: "indian",
    rating: 4.7
  },
  {
    id: "in4",
    name: "Pani Puri",
    description: "Hollow crispy puris filled with spicy and tangy water, potatoes and chickpeas",
    price: 100,
    image: "https://images.unsplash.com/photo-1604803089535-b5321d8bf82d?q=80&w=800&auto=format&fit=crop",
    category: "Snacks",
    cuisine: "indian",
    rating: 4.8
  },
  {
    id: "in5",
    name: "Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas, served with mint chutney",
    price: 90,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
    category: "Snacks",
    cuisine: "indian",
    rating: 4.6
  },
  {
    id: "in6",
    name: "Dal Makhani",
    description: "Creamy black lentils slow-cooked with butter and spices",
    price: 240,
    image: "https://images.unsplash.com/photo-1627473614605-713714888886?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "indian",
    rating: 4.5
  },
  {
    id: "in7",
    name: "Palak Paneer",
    description: "Cottage cheese cubes in a creamy spinach gravy",
    price: 260,
    image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "indian",
    rating: 4.4
  },
  {
    id: "in8",
    name: "Gulab Jamun",
    description: "Deep-fried milk solids soaked in sugar syrup - a classic Indian dessert",
    price: 120,
    image: "https://images.unsplash.com/photo-1627308595245-360f5f1d049b?q=80&w=800&auto=format&fit=crop",
    category: "Desserts",
    cuisine: "indian",
    rating: 4.7
  },
  
  // Chinese Cuisine
  {
    id: "6",
    name: "Kung Pao Chicken",
    description: "Stir-fried chicken with peanuts, vegetables, and chili peppers",
    price: 280,
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "chinese",
    rating: 4.4
  },
  {
    id: "7",
    name: "Vegetable Fried Rice",
    description: "Chinese-style rice stir-fried with mixed vegetables and soy sauce",
    price: 220,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "chinese",
    rating: 4.2
  },
  {
    id: "8",
    name: "Dim Sum Platter",
    description: "Assortment of steamed dumplings with various fillings",
    price: 320,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop",
    category: "Appetizers",
    cuisine: "chinese",
    rating: 4.7
  },
  {
    id: "9",
    name: "Sweet and Sour Pork",
    description: "Crispy pork with a tangy, sweet and sour sauce",
    price: 290,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "chinese",
    rating: 4.5
  },
  {
    id: "10",
    name: "Mapo Tofu",
    description: "Spicy Sichuan dish with tofu, minced meat, and chili bean paste",
    price: 260,
    image: "https://images.unsplash.com/photo-1582252093867-500e3420703b?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "chinese",
    rating: 4.3
  },
  {
    id: "ch1",
    name: "Spring Rolls",
    description: "Crispy rolled appetizers filled with vegetables and sometimes meat",
    price: 180,
    image: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?q=80&w=800&auto=format&fit=crop",
    category: "Appetizers",
    cuisine: "chinese",
    rating: 4.4
  },
  {
    id: "ch2",
    name: "Honey Chili Potato",
    description: "Crispy fried potato strips tossed in a sweet and spicy honey chili sauce",
    price: 200,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
    category: "Snacks",
    cuisine: "chinese",
    rating: 4.6
  },
  
  // Italian Cuisine
  {
    id: "11",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
    price: 299,
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "italian",
    rating: 4.5
  },
  {
    id: "12",
    name: "Spaghetti Carbonara",
    description: "Pasta with creamy sauce made from eggs, cheese, pancetta, and black pepper",
    price: 270,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "italian",
    rating: 4.6
  },
  {
    id: "13",
    name: "Tiramisu",
    description: "Coffee-flavored Italian dessert made of ladyfingers, mascarpone, and cocoa",
    price: 180,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop",
    category: "Desserts",
    cuisine: "italian",
    rating: 4.8
  },
  {
    id: "14",
    name: "Risotto ai Funghi",
    description: "Creamy Italian rice dish with mushrooms and parmesan",
    price: 310,
    image: "https://images.unsplash.com/photo-1633964931579-53f659e5d647?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "italian",
    rating: 4.4
  },
  {
    id: "15",
    name: "Lasagna",
    description: "Layers of pasta, rich meat sauce, béchamel, and cheese",
    price: 330,
    image: "https://images.unsplash.com/photo-1619895092538-128341789043?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "italian",
    rating: 4.7
  },
  
  // American Cuisine
  {
    id: "16",
    name: "Classic Cheeseburger",
    description: "Beef patty with cheese, lettuce, tomato, and special sauce on a toasted bun",
    price: 249,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    category: "Fast Food",
    cuisine: "american",
    rating: 4.3
  },
  {
    id: "17",
    name: "BBQ Ribs",
    description: "Tender pork ribs slow-cooked and glazed with smoky barbecue sauce",
    price: 450,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "american",
    rating: 4.7
  },
  {
    id: "18",
    name: "Apple Pie",
    description: "Traditional American dessert with sweet apple filling in a flaky pastry crust",
    price: 199,
    image: "https://images.unsplash.com/photo-1621743478914-cc8a68d76208?q=80&w=800&auto=format&fit=crop",
    category: "Desserts",
    cuisine: "american",
    rating: 4.4
  },
  {
    id: "19",
    name: "Mac and Cheese",
    description: "Creamy macaroni pasta with rich cheese sauce",
    price: 220,
    image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "american",
    rating: 4.2
  },
  {
    id: "20",
    name: "Buffalo Wings",
    description: "Spicy chicken wings with blue cheese dip",
    price: 280,
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=800&auto=format&fit=crop",
    category: "Appetizers",
    cuisine: "american",
    rating: 4.5
  },
  {
    id: "am1",
    name: "Loaded Nachos",
    description: "Tortilla chips topped with cheese, jalapeños, salsa, guacamole and sour cream",
    price: 220,
    image: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?q=80&w=800&auto=format&fit=crop",
    category: "Snacks",
    cuisine: "american",
    rating: 4.3
  },
  {
    id: "am2",
    name: "Chicken Tenders",
    description: "Crispy breaded chicken strips served with variety of dipping sauces",
    price: 240,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",
    category: "Snacks",
    cuisine: "american",
    rating: 4.1
  },
  
  // Mexican Cuisine
  {
    id: "21",
    name: "Beef Tacos",
    description: "Soft corn tortillas filled with seasoned beef, lettuce, cheese, and salsa",
    price: 280,
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "mexican",
    rating: 4.5
  },
  {
    id: "22",
    name: "Chicken Quesadilla",
    description: "Grilled flour tortilla filled with chicken, cheese, and peppers",
    price: 240,
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=800&auto=format&fit=crop",
    category: "Appetizers",
    cuisine: "mexican",
    rating: 4.2
  },
  {
    id: "23",
    name: "Guacamole & Chips",
    description: "Fresh avocado dip with lime, cilantro, and crispy tortilla chips",
    price: 190,
    image: "https://images.unsplash.com/photo-1594070319944-7c0cbebb6f58?q=80&w=800&auto=format&fit=crop",
    category: "Appetizers",
    cuisine: "mexican",
    rating: 4.6
  },
  {
    id: "24",
    name: "Enchiladas",
    description: "Corn tortillas rolled around a filling and covered with chili sauce",
    price: 290,
    image: "https://images.unsplash.com/photo-1534352211968-8d25dbe0e091?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "mexican",
    rating: 4.4
  },
  {
    id: "25",
    name: "Churros",
    description: "Fried dough pastry with cinnamon sugar and chocolate dipping sauce",
    price: 160,
    image: "https://images.unsplash.com/photo-1624371414361-e670edb9b8d3?q=80&w=800&auto=format&fit=crop",
    category: "Desserts",
    cuisine: "mexican",
    rating: 4.3
  },
  
  // Japanese Cuisine
  {
    id: "26",
    name: "Salmon Sushi Platter",
    description: "Assortment of fresh salmon sushi including nigiri and maki rolls",
    price: 550,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "japanese",
    rating: 4.9
  },
  {
    id: "27",
    name: "Chicken Teriyaki",
    description: "Grilled chicken glazed with sweet teriyaki sauce served with rice",
    price: 320,
    image: "https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "japanese",
    rating: 4.4
  },
  {
    id: "28",
    name: "Miso Soup",
    description: "Traditional Japanese soup with tofu, seaweed, and green onions",
    price: 120,
    image: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?q=80&w=800&auto=format&fit=crop",
    category: "Appetizers",
    cuisine: "japanese",
    rating: 4.3
  },
  {
    id: "29",
    name: "Tempura",
    description: "Lightly battered and deep-fried vegetables and seafood",
    price: 280,
    image: "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?q=80&w=800&auto=format&fit=crop",
    category: "Appetizers",
    cuisine: "japanese",
    rating: 4.5
  },
  {
    id: "30",
    name: "Ramen",
    description: "Japanese noodle soup with rich broth, meat, and vegetables",
    price: 290,
    image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "japanese",
    rating: 4.7
  },
  {
    id: "jp1",
    name: "Takoyaki",
    description: "Ball-shaped Japanese snack filled with minced octopus",
    price: 180,
    image: "https://images.unsplash.com/photo-1612801636534-894179849374?q=80&w=800&auto=format&fit=crop",
    category: "Snacks",
    cuisine: "japanese",
    rating: 4.5
  },
  
  // Thai Cuisine
  {
    id: "th1",
    name: "Pad Thai",
    description: "Stir-fried rice noodles with eggs, tofu, bean sprouts and peanuts",
    price: 280,
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "thai",
    rating: 4.7
  },
  {
    id: "th2",
    name: "Green Curry",
    description: "Spicy Thai curry with coconut milk, vegetables and your choice of protein",
    price: 310,
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "thai",
    rating: 4.6
  },
  {
    id: "th3",
    name: "Mango Sticky Rice",
    description: "Sweet glutinous rice with fresh mango slices and coconut milk",
    price: 190,
    image: "https://images.unsplash.com/photo-1688104426915-677da5088ce3?q=80&w=800&auto=format&fit=crop",
    category: "Desserts",
    cuisine: "thai",
    rating: 4.8
  },
  
  // Korean Cuisine
  {
    id: "ko1",
    name: "Bibimbap",
    description: "Mixed rice bowl with vegetables, meat, egg and spicy gochujang sauce",
    price: 280,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "korean",
    rating: 4.6
  },
  {
    id: "ko2",
    name: "Korean Fried Chicken",
    description: "Crispy double-fried chicken glazed with sweet and spicy sauce",
    price: 320,
    image: "https://images.unsplash.com/photo-1575932444877-5106bee2a599?q=80&w=800&auto=format&fit=crop",
    category: "Main Course",
    cuisine: "korean",
    rating: 4.8
  },
  {
    id: "ko3",
    name: "Tteokbokki",
    description: "Spicy rice cakes in gochujang sauce - a popular Korean street food",
    price: 220,
    image: "https://images.unsplash.com/photo-1635364377482-063c0bef3494?q=80&w=800&auto=format&fit=crop",
    category: "Snacks",
    cuisine: "korean",
    rating: 4.5
  },
  
  // Mediterranean Cuisine
  {
    id: "med1",
    name: "Greek Salad",
    description: "Fresh salad with tomatoes, cucumbers, olives, feta cheese and olive oil",
    price: 240,
    image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=800&auto=format&fit=crop",
    category: "Appetizers",
    cuisine: "mediterranean",
    rating: 4.4
  },
  {
    id: "med2",
    name: "Hummus with Pita",
    description: "Creamy chickpea dip with tahini, served with warm pita bread",
    price: 190,
    image: "https://images.unsplash.com/photo-1608104924622-6a8a6f39e49c?q=80&w=800&auto=format&fit=crop",
    category: "Snacks",
    cuisine: "mediterranean",
    rating: 4.5
  },
  {
    id: "med3",
    name: "Falafel Wrap",
    description: "Crispy chickpea fritters wrapped in flatbread with tahini sauce and vegetables",
    price: 220,
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=800&auto=format&fit=crop",
    category: "Fast Food",
    cuisine: "mediterranean",
    rating: 4.3
  },
  
  // Popular Snacks (Additional)
  {
    id: "snk1",
    name: "French Fries",
    description: "Crispy golden potato fries served with ketchup and mayo",
    price: 120,
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=800&auto=format&fit=crop",
    category: "Snacks",
    cuisine: "american",
    rating: 4.2
  },
  {
    id: "snk2",
    name: "Onion Rings",
    description: "Crispy battered onion rings served with dipping sauce",
    price: 140,
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=800&auto=format&fit=crop",
    category: "Snacks",
    cuisine: "american",
    rating: 4.1
  },
  {
    id: "snk3",
    name: "Cheese Garlic Bread",
    description: "Warm bread topped with garlic butter and melted cheese",
    price: 160,
    image: "https://images.unsplash.com/photo-1573140401552-3fab0b24427f?q=80&w=800&auto=format&fit=crop",
    category: "Snacks",
    cuisine: "italian",
    rating: 4.4
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
