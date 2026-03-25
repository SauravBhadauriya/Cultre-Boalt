import { useRef } from 'react'
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import SectionHeader from '@/components/ui/SectionHeader'
import { verticalsData } from '@/data/verticalsData'

export default function BusinessVerticals() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  return (
    <section className="section-base bg-white">
      <div className="container-base">
        <SectionHeader label={verticalsData.subtitle} title={verticalsData.title} />

        <Carousel plugins={[plugin.current]} className="w-full" opts={{ align: "center", loop: true }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {verticalsData.verticals.map((vertical) => (
              <CarouselItem key={vertical.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img
                      src={vertical.image}
                      alt={vertical.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 text-center">
                    {vertical.name}
                  </h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative position-static" />
            <CarouselNext className="relative position-static" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
