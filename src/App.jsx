import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import HamburgerMenu from "./components/HamburgerMenu";
import HeroCarousel from "./components/HeroCarousel";
import FeaturedCarousel from "./components/FeaturedCarousel";

function App() {
  const [products, setProducts] = useState([]);
  const [navState, setNavState] = useState("navigation");

  // fetches the data from the json
  useEffect(() => {
    fetch("/coffee.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="m-0 p-0">
      {navState === "navigation" && (
        <Navigation openMenu={() => setNavState("menu")} />
      )}
      {navState === "menu" && (
        <HamburgerMenu closeMenu={() => setNavState("navigation")} />
      )}

      <HeroCarousel />
      <FeaturedCarousel products={products} />
    </div>
  );
}

export default App;
