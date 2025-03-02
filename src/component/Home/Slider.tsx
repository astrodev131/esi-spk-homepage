"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/img/w=640&q=90 (1).webp",
    "/img/w=640&q=90 (2).webp",
    "/img/w=640&q=90 (3).webp",
    "/img/w=640&q=90 (4).webp",
    "/img/w=640&q=90 (5).webp",
    "/img/w=640&q=90 (6).webp",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative sm:w-[50%] lg:w-full w-full max-w-[590px] right-0 flex justify-end sm:h-[50%] lg:h-full h-full max-h-[419px] border border-gray-800 rounded-[5px]"
      onMouseDown={(e) => {
        e.preventDefault();
        const startX = e.clientX;
        const handleMouseMove = (moveEvent: MouseEvent) => {
          const diffX = moveEvent.clientX - startX;
          if (diffX > 50) {
            setCurrentSlide(
              (prev) => (prev - 1 + slides.length) % slides.length
            );
            document.removeEventListener("mousemove", handleMouseMove);
          } else if (diffX < -50) {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            document.removeEventListener("mousemove", handleMouseMove);
          }
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener(
          "mouseup",
          () => {
            document.removeEventListener("mousemove", handleMouseMove);
          },
          { once: true }
        );
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={slide || "/img/w=640&q=90.webp"}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      <div className="absolute -bottom-4 z-50 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-[3px] rounded-full transition-all duration-900 ease-in-out
        ${
          index === currentSlide
            ? "bg-gradient-to-r from-[#32ffdc] to-[#144d43] w-8"
            : "bg-white/50 w-4"
        }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <style jsx>{`
        .swiper-horizontal
          > .swiper-pagination-bullets
          .swiper-pagination-bullet,
        .swiper-pagination-horizontal.swiper-pagination-bullets
          .swiper-pagination-bullet {
          margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
        }

        .swiper-pagination-clickable .swiper-pagination-bullet {
          cursor: pointer;
        }

        .swiper-pagination-bullet-active {
          width: 32px;
          background: linear-gradient(90deg, #32ffdc, #144d43);
        }
      `}</style>
    </div>
  );
}
