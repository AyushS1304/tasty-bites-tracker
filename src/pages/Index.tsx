
import Home from "./Home";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Tasty Bites | Food Delivery</title>
        <meta name="description" content="Order delicious food online with Tasty Bites food delivery service" />
      </Helmet>
      <Home />
    </>
  );
};

export default Index;
