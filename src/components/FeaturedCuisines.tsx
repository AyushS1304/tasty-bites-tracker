
import { cuisines } from "@/utils/data";
import { Link } from "react-router-dom";

const FeaturedCuisines = () => {
  return (
    <section id="featured-cuisines" className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Explore Cuisines</h2>
        <p className="text-gray-600 mb-8">Discover flavors from around the world</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cuisines.map((cuisine) => (
            <Link
              key={cuisine.id}
              to={`/menu?cuisine=${cuisine.id}`}
              className="group relative rounded-lg overflow-hidden h-32 md:h-40"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" 
                style={{ backgroundImage: `url(${cuisine.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white font-medium text-lg">{cuisine.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCuisines;
