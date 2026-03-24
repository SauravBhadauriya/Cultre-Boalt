import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function HeroBanner({ onNavigate }) {
  const images = [
    "/src/assets/images/Hero/hero1.jpg",
    "/src/assets/images/Hero/hero2.jpg",
    "/src/assets/images/Hero/hero3.jpeg"
  ]

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[90vh]">
              {/* Image */}
              <img
                src={img}
                alt={`hero-${index}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center px-4 md:px-8 lg:px-20">
                <div className="text-white max-w-2xl">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    We build stories that connect
                  </h1>

                  <p className="mt-4 text-base md:text-lg text-gray-200">
                    Creative branding, design & digital experiences that make impact.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => onNavigate('contact')}
                      className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      Get Started
                    </button>

                    <button 
                      onClick={() => onNavigate('design')}
                      className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      View Work
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="hidden md:block">
        <CarouselPrevious className="left-4 lg:left-8" />
        <CarouselNext className="right-4 lg:right-8" />
      </div>
    </Carousel>
  )
}