import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function HeroBanner() {
  const navigate = useNavigate()
  const images = [
    "/images/Hero/hero1.jpg",
    "/images/Hero/hero2.jpg",
    "/images/Hero/hero3.jpeg"
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [api, setApi] = useState(null)

  const handleDotClick = (index) => {
    if (api) {
      api.scrollTo(index)
    }
  }

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    onSelect()

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        loop: true,
        duration: 80,
      }}
      className="w-full"
      setApi={setApi}
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-[45vh] sm:h-[50vh] md:h-[70vh] lg:h-screen">
              {/* Image */}
              <img
                src={img}
                alt={`hero-${index}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 sm:px-6 md:px-20 lg:px-48">
                <div className="text-white text-center max-w-xl sm:max-w-2xl">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-2 sm:mb-3 md:mb-4">
                    We build stories that connect
                  </h1>

                  <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 line-clamp-2 sm:line-clamp-none">
                    <span className="typewriter">
                      Creative branding, design & digital experiences that make impact.
                    </span>
                  </p>

                  <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
                    <button 
                      onClick={() => navigate('/contact')}
                      className="bg-white text-black px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:bg-gray-100 transition-colors cursor-pointer w-auto min-h-[36px] sm:min-h-[40px] flex items-center justify-center whitespace-nowrap"
                    >
                      Get Started
                    </button>

                    <button 
                      onClick={() => navigate('/design')}
                      className="border border-white text-white px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:bg-white/10 transition-colors cursor-pointer w-auto min-h-[36px] sm:min-h-[40px] flex items-center justify-center whitespace-nowrap"
                    >
                      View Work
                    </button>
                  </div>

                  {/* Progress Dots */}
                  <div className="mt-5 sm:mt-6 md:mt-8 flex gap-1.5 sm:gap-2 justify-center">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handleDotClick(i)}
                        className="h-1 w-6 sm:w-8 bg-white/30 rounded-full overflow-hidden cursor-pointer"
                      >
                        <div
                          className={`h-full bg-white rounded-full ${
                            i === currentIndex
                              ? 'animate-progress'
                              : i < currentIndex
                              ? 'w-full'
                              : 'w-0'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}