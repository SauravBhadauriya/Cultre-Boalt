import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Brands() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  const images = [
    "/src/assets/images/Brandlogo/brand-logo1.avif",
    "/src/assets/images/Brandlogo/brand-logo2.avif",
    "/src/assets/images/Brandlogo/brand-logo3.png",
    "/src/assets/images/Brandlogo/brand-logo4.jpg",
    "/src/assets/images/Brandlogo/brand-logo5.jpg",
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12 text-slate-900">
          Our Brand Partners
        </h3>
        
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((img, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <div className="p-1">
                  <div className="flex aspect-video items-center justify-center p-4 md:p-6 border border-slate-200 rounded-xl bg-white hover:shadow-md transition-shadow">
                    <img
                      src={img}
                      alt={`brandlogo-${index}`}
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  )
}