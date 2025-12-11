import { useState, useEffect } from "react";

export default function ProductCard({
  name = "No Name",
  img = "",
  tagline = "",
  desc = "",
  price = 0,
  tags = [],
}) {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="
        product-card flex flex-col h-full
        "
    >
      <div
        className="
          product-image-container
          flex w-full h-[325px] mb-6
          "
      >
        <img
          className="w-full h-full object-cover rounded-lg"
          src={img}
          alt={name}
        />
      </div>
      {/* Product Name and Like Button */}
      <div
        className="
                name-and-like-container
                flex
                justify-between
                mb-4"
      >
        <h2 className="text-2xl font-bold">{name}</h2>
        <button onClick={() => setLiked(!liked)}>{liked ? "❤️" : "🤍"}</button>
      </div>
      {/* Product Information */}
      <div
        className="
          product-information 
          flex flex-col 
        "
      >
        <div
          className="
            product-desc flex flex-col
            min-h-20 mb-6
          "
        >
          <p className="text-[1.375rem] mb-2">{tagline}</p>
          <p className="text-base">{desc}</p>
        </div>
        <p
          className="
            text-xl
            font-bold
            mb-2
          "
        >
          ${price.toFixed(2)}
        </p>
        {/* Fixes price to 2 decimal places */}
      </div>
      {/* Product Tags */}
      <div
        className="
                product-tags-container
                flex
                flex-wrap
                items-start
                mb-4
                grow
                "
      >
        {tags &&
          tags.map((tag, index) => (
            <span
              key={index}
              className="
                    product-tag
                    inline-flex
                    items-center
                    bg-gray-200
                    rounded-lg
                    p-2
                    mr-2
                    mb-2
                    text-nowrap"
            >
              {tag}
            </span>
          ))}
      </div>

      <button
        className="
                add-to-cart
                p-4
                bg-black
                text-white
                rounded-lg
                justify-self-end
                "
      >
        Add to Cart
      </button>
    </div>
  );
}
