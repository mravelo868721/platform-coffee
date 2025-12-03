import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import HeroCarousel from "./components/HeroCarousel";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  // fetches the data from the json
  useEffect(() => {
    fetch("/coffee.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="m-0 p-0">
      <Navigation />
      <HeroCarousel />
      <div>
        <h1
          className="
        text-4xl
        font-bold
        my-6
        px-[10%]
      "
        >
          Our Products
        </h1>
        <div
          className="
        product-grid grid 
        grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
        grid-rows-auto 
        gap-x-5
        gap-y-10 
        px-[10%]"
        >
          {products.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              tagline={item.tagline}
              desc={item.description}
              price={item.price}
              img={item.image}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
