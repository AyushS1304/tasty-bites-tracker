
import HeroBanner from "@/components/HeroBanner";
import FeaturedCuisines from "@/components/FeaturedCuisines";
import PopularDishes from "@/components/PopularDishes";
import SpecialOffers from "@/components/SpecialOffers";

const Home = () => {
  return (
    <main>
      <HeroBanner />
      <FeaturedCuisines />
      <PopularDishes />
      <SpecialOffers />
    </main>
  );
};

export default Home;
