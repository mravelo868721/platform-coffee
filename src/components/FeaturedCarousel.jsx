// I will create a product grid of 4 products.
// I will need to set the currentIndex = 0 and the initial visible products will utilize a slice(0, 4)
// If user clicks NEXT that adds 4 to the currentIndex
// If user clicks PREV that subtracts 4 from the currentIndex

//Step 2: I need to create a new component for the carousel that will need products passed from App, the local state of currentIndex, visibleProducts to derive from that via slice, and Next/Prev Handlers

//Step 3: Think about UX rules. Prev will be disabled at index 0, next will be disabled at last of index. OR we can wrap around using the modulo operation.

import { useState } from "react";
import ProductCard from "./ProductCard";

export default function FeaturedCarousel({ products }) {
  //Guards against first render if no data is found.
  if (!products || products.length === 0) return null;
  const [currentIndex, setCurrentIndex] = useState(0);
  const visible = products.slice(currentIndex, currentIndex + 3);

  const pageSize = 3;
  const totalPages = Math.ceil(products.length / pageSize);
  const currentPage = currentIndex;

  return (
    <div>
      <div className="flex justify-between items-center px-[10%]">
        <h1
          className="
        text-4xl font-bold my-6
      "
        >
          Our Featured Products
        </h1>
        <div className="flex">
          <button
            className="
            flex px-8 py-2 ml-8 cursor-pointer
            text-xl font-semibold tracking-wider uppercase
            bg-gray-900 text-white rounded
            "
            onClick={() =>
              setCurrentIndex((currentIndex - 1 + totalPages) % totalPages)
            }
          >
            Prev
          </button>
          <button
            className="
            flex px-8 py-2 ml-8 cursor-pointer
            text-xl font-semibold tracking-wider uppercase
            bg-gray-900 text-white rounded
            "
            onClick={() => setCurrentIndex((currentIndex + 1) % totalPages)}
          >
            Next
          </button>
        </div>
      </div>

      <div
        className="
        carousel-grid grid px-[10%]
        grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
        grid-rows-auto gap-x-5 gap-y-10
      "
      >
        {visible.map((item) => (
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
  );
}
