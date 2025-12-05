import { useState, useEffect } from "react";

export default function HeroCarousel() {
  //Slide content
  const slides = [
    {
      id: 1,
      title: "Fuel For The Bold.\nRoasts Redefined.",
      text: "We roast for builders, makers, and early risers — the ones who don’t wait for motivation to show up. You pour the effort. We’ll pour the fuel.",
      image: "/images/banners/hero-img1.jpg",
      cta: "Shop our roasts",
    },
    {
      id: 2,
      title: "Crafted For Makers.\nPerfected Every Day.",
      text: "Every batch is tested, refined, and recreated until it performs flawlessly — consistent, reliable, craft-first coffee.",
      image: "/images/banners/hero-img2.jpg",
      cta: "See the Process",
    },
    {
      id: 3,
      title: "For Early Risers\n& Relentless Thinkers.",
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
    <div
      className="
        hero-carousel
        flex flex-wrap relative w-full
        px-[5%] mt-8 h-[75lvh]
        "
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`
          hero-carousel-slide
          flex rounded-xl p-16 mx-[5%]
          absolute inset-0 transition-opacity duration-1000 ease-out
          ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="
          flex flex-col w-[60%]
          hero-carousel-slide-text
          "
          >
            <h1
              className="
              text-7xl font-bold text-white
              mb-4 whitespace-pre-line
              "
            >
              {slide.title}
            </h1>
            <p
              className="
              text-lg text-white
              w-[60%] mb-4
              "
            >
              {slide.text}
            </p>
            <button
              className="
            max-w-[296px] px-9 py-6 rounded-lg cursor-pointer
          text-gray-700 font-semibold tracking-widest uppercase bg-white
          "
              onclick=""
            >
              {slide.cta}
            </button>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}
