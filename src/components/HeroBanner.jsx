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
    "/src/assets/images/Hero/hero1.jpg",
    "/src/assets/images/Hero/hero2.jpg",
    "/src/assets/images/Hero/hero3.jpeg"
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
            <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[90vh]">
              {/* Image */}
              <img
                src={img}
                alt={`hero-${index}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center px-10 md:px-20 lg:px-48">
                <div className="text-white max-w-2xl">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    We build stories that connect
                  </h1>

                  <p className="mt-4 text-base md:text-lg text-gray-200">
                    Creative branding, design & digital experiences that make impact.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => navigate('/contact')}
                      className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      Get Started
                    </button>

                    <button 
                      onClick={() => navigate('/design')}
                      className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      View Work
                    </button>
                  </div>

                  {/* Carousel Dots */}
                  <div className="mt-8 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`h-1 transition-all cursor-pointer hover:opacity-80 ${
                          index === currentIndex 
                            ? 'w-8 bg-white shadow-lg shadow-white/60' 
                            : 'w-2 bg-white/50'
                        }`}
                      />
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