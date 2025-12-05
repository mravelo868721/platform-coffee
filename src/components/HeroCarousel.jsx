import { useState, useEffect } from "react";

export default function HeroCarousel() {
  //Slide content
  const slides = [
    {
      id: 1,
      title: "Fuel for the Bold. Roasts Redefined.",
      text: "We roast for builders, makers, and early risers — the ones who don’t wait for motivation to show up. You pour the effort. We’ll pour the fuel.",
      image: "/images/banners/hero-img1.jpg",
      cta: "Shop our roasts",
    },
    {
      id: 2,
      title: "Crafted for Makers.Perfected for Every Day.",
      text: "Every batch is tested, refined, and recreated until it performs flawlessly — consistent, reliable, craft-first coffee.",
      image: "/images/banners/hero-img2.jpg",
      cta: "See the Process",
    },
    {
      id: 3,
      title: "For Early Risers & Relentless Thinkers.",
      text: "Get ahead of the day with coffee designed for clarity, consistency, and that first spark of direction.",
      image: "/images/banners/hero-img3.jpg",
      cta: "Browse Blends",
    },
  ];

  // Track which slide is active
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[65vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`
            absolute inset-0
            transition-opacity duration-1000 ease-out
          ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-full w-full bg-black/40 p-[10%] flex flex-col justify-center text-white">
            <h1 className="text-6xl font-bold whitespace-pre-line mb-6">
              {slide.title}
            </h1>
            <p className="text-2xl w-[50%] mb-6">{slide.text}</p>
            <button className="bg-white text-gray-900 text-lg font-semibold uppercase tracking-wide px-6 py-4 rounded-lg max-w-[260px]">
              {slide.cta}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
