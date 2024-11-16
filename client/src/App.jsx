import "./App.css";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import StoreContext from "./hooks/StoreContext";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";
import Ratings from "./components/ratings/Ratings";
import SocialMedia from "./components/social media/SocialMedia";
import Subscribtion from "./components/subscribtion/Subscribtion";
import Footer from "./components/footer/Footer";

function App() {
  const [filtered, setFiltered] = useState(
    "http://localhost:1337/api/products?populate=*"
  );
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  return (
    <>
      <StoreContext.Provider
        value={{
          filtered,
          setFiltered,
          selectedCategories,
          setSelectedCategories,
          categories,
          setCategories,
        }}
      >
        <Header />
        <Hero />
        <div className="container">
          <Categories />
          <Products />
        </div>
        <Ratings />
        <SocialMedia />
        <Subscribtion />
        <Footer />
      </StoreContext.Provider>
    </>
  );
}

export default App;
