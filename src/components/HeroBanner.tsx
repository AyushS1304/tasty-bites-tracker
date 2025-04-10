
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-navy-600 to-navy-800 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-30 bg-blend-overlay"
           style={{backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop')"}} />
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow">
            Delicious Food Delivered to Your Doorstep
          </h1>
          <p className="text-xl text-white/90 mb-8 text-shadow">
            Order your favorite meals from the best restaurants in town. 
            Fast delivery, contactless payment, and real-time order tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link to="/menu">Order Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              <a href="#featured-cuisines">Explore Cuisines</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
