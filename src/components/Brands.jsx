import { useRef } from 'react'
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import SectionHeader from '@/components/ui/SectionHeader'
import { brandPartners } from '@/data/brandData'

export default function Brands() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  return (
    <section className="section-base bg-white">
      <div className="container-base">
        <SectionHeader label="Our Partners" title="Trusted by Leading Brands" />

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
                <div className="flex flex-col items-center justify-center p-6 border border-slate-200 rounded-xl bg-white hover:shadow-lg hover:border-[var(--brand-blue)]/40 transition-all duration-300 cursor-pointer group h-full">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 md:h-20 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-xs md:text-sm font-semibold text-slate-900 text-center mb-2">{partner.name}</p>
                  <p className="text-xs text-[var(--brand-blue)] font-medium text-center">{partner.tagline}</p>
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
