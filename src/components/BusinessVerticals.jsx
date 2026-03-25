import { useRef } from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { verticalsData } from '@/data/verticalsData'

export default function BusinessVerticals() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-48">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-3">
            {verticalsData.subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900">
            {verticalsData.title}
          </h2>
        </div>

        {/* Verticals Carousel */}
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {verticalsData.verticals.map((vertical) => (
              <CarouselItem 
                key={vertical.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div className="flex flex-col items-center gap-4">
                  {/* Image */}
                  <div className="w-full aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img
                      src={vertical.image}
                      alt={vertical.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 text-center">
                    {vertical.name}
                  </h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative position-static" />
            <CarouselNext className="relative position-static" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
