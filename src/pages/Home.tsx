
import HeroBanner from "@/components/HeroBanner";
import FeaturedCuisines from "@/components/FeaturedCuisines";
import PopularDishes from "@/components/PopularDishes";
import SpecialOffers from "@/components/SpecialOffers";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Tasty Bites | Food Delivery</title>
        <meta name="description" content="Order delicious food online with Tasty Bites food delivery service" />
      </Helmet>
      <main>
        <HeroBanner />
        <FeaturedCuisines />
        <PopularDishes />
        <SpecialOffers />
      </main>
    </>
  );
};

export default Home;
