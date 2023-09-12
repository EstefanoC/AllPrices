import React, { useEffect, useState } from "react";

// Components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { getMain } from "../Utils/Getter";

const Home = () => {
  const [products, setProducts] = useState([]);

  // Call the products
  useEffect(() => {
    getMain();
  }, []);

  return (
    <>
      <Header />
      <main className="flex bg-red-800">return Home</main>
      <Footer />
    </>
  );
};

export default Home;
