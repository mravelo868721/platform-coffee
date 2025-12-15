import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import HamburgerMenu from "./components/HamburgerMenu";
import HeroCarousel from "./components/HeroCarousel";
import Mission from "./components/Mission";
import FeaturedCarousel from "./components/FeaturedCarousel";
import ContactForm from "./components/ContactForm";
import ContactInformation from "./components/ContactInformation";

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
      <Mission />
      <FeaturedCarousel products={products} />
      <div className="flex px-[10%] gap-5">
        <ContactInformation />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
