import { useState } from "react";

export default function HeroCarousel() {
  return (
    <div className="container px-[10%]">
      <div
        className="
        hero-carousel
        flex flex-col p-12
          text-white
        bg-amber-950 rounded-xl"
      >
        <h1 className="text-6xl font-semibold">
          Fuel for the Bold.<br></br>Roasts Redefined.
        </h1>
        <p>
          We roast for builders, makers, and early risers — the ones who don’t
          wait for motivation to show up. You pour the effort. We’ll pour the
          fuel.
        </p>
        <button>Shop our Roasts</button>
      </div>
    </div>
  );
}
