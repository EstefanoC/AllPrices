// React
import React, { useEffect } from "react";

// Components
import { getMain } from "../Utils/Getter";
// import Info from "../Components/Contact/Info.jsx";
// import HomeStories from "../stories/home/home";
import { Home as HomeStories } from "../stories/home/Home";

const Home = () => {
  // const [products, setProducts] = useState([]);

  // Call the products
  useEffect(() => {
    getMain();
  }, []);

  return <HomeStories />;
};

export default Home;
