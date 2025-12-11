// I will create a product grid of 4 products.
// I will need to set the currentIndex = 0 and the initial visible products will utilize a slice(0, 4)
// If user clicks NEXT that adds 4 to the currentIndex
// If user clicks PREV that subtracts 4 from the currentIndex

//Step 2: I need to create a new component for the carousel that will need products passed from App, the local state of currentIndex, visibleProducts to derive from that via slice, and Next/Prev Handlers

//Step 3: Think about UX rules. Prev will be disabled at index 0, next will be disabled at last of index. OR we can wrap around using the modulo operation.

import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductCarousel() {
  return (
    <div>
      <h1 className="text-4xl">Our Featured Products</h1>
      <button
        className="
            flex px-8 py-2 ml-8 cursor-pointer
            text-xl font-semibold tracking-wider uppercase
            bg-gray-900 text-white rounded
            "
      >
        Prev
      </button>
      <button
        className="
            flex px-8 py-2 ml-8 cursor-pointer
            text-xl font-semibold tracking-wider uppercase
            bg-gray-900 text-white rounded
            "
      >
        Next
      </button>
      <div className="carousel-grid">
        <ProductCard />
      </div>
    </div>
  );
}
