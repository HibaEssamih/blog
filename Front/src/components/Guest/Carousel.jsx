import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <div className="group relative">
        <div
          className="group/cardGallerySlide flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>

        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={next}
            className="absolute w-8 h-8 right-3 top-[calc(50%-16px)] bg-white border border-neutral-200 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none z-10 transform translate-x-0 translate-y-0"
          >
            <ChevronRight />
          </button>

          <button
            onClick={prev}
            className="absolute w-8 h-8 left-3 top-[calc(50%-16px)] bg-white border-neutral-200 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none z-10 transform translate-x-0 translate-y-0"
          >
            <ChevronLeft />
          </button>
        </div>

        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`
                  transition-all w-1.5 h-1.5 rounded-full bg-white
                  ${curr === i ? "p-1" : "bg-white/60"}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
