import { useRef } from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { brandPartners } from '@/data/brandData'

export default function Brands() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <section className="py-16 md:py-24 bg-white">
      {/* Brand Partners Section */}
      <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-48">
        <div className="text-center mb-12">
          <p className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-3">Our Partners</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Trusted by Leading Brands</h2>
        </div>

        {/* Brand Partners Carousel */}
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {brandPartners.map((partner, index) => (
              <CarouselItem 
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="flex flex-col items-center justify-center p-6 border border-slate-200 rounded-xl bg-white hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer group h-full">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 md:h-20 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-xs md:text-sm font-semibold text-slate-900 text-center mb-2">{partner.name}</p>
                  <p className="text-xs text-blue-600 font-medium text-center">{partner.tagline}</p>
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
