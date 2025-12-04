import { useState } from "react";

//Slide content
const slides = [
  { title: "", text: "", image: "" },
  { title: "", text: "", image: "" },
  { title: "", text: "", image: "" },
];

export default function HeroCarousel() {
  return (
    <div className="flex w-full px-[5%] pt-8">
      <div
        className="
        hero-carousel
        flex flex-col h-[65lvh] p-12
        text-white
        bg-[url(/images/banners/hero-img1.jpg)] bg-cover
        rounded-xl "
      >
        <h1
          className="
          text-6xl font-semibold
          w-full pb-4"
        >
          Fuel for the Bold.<br></br>Roasts Redefined.
        </h1>
        <p
          className="
          text-3xl  w-[50%] pb-4
          "
        >
          We roast for builders, makers, and early risers — the ones who don’t
          wait for motivation to show up. You pour the effort. We’ll pour the
          fuel.
        </p>
        <button
          className="
          bg-white text-gray-900 text-xl
          font-semibold uppercase tracking-wider
          max-w-[300px] px-8 py-6 rounded-lg
          "
        >
          Shop our Roasts
        </button>
      </div>
    </div>
  );
}
