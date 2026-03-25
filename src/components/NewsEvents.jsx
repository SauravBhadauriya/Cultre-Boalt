import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { newsEventsData } from '@/data/newsEventsData'

export default function NewsEvents() {
  const [showAll, setShowAll] = useState(false)

  // Show only 4 items by default, or all if showAll is true
  const displayedItems = showAll ? newsEventsData.newsItems : newsEventsData.newsItems.slice(0, 4)

  return (
    <section className="py-16 md:py-24 bg-teal-700">
      <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-48">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-teal-100 font-bold text-sm uppercase tracking-widest mb-3">
            {newsEventsData.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {newsEventsData.title}
          </h2>
        </div>

        {/* News Grid - 2x2 Layout with Image Left, Content Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {displayedItems.map((item) => (
            <Card 
              key={item.id}
              className="flex flex-col md:flex-row gap-0 bg-teal-600 border-teal-500 hover:shadow-lg transition-shadow duration-300 cursor-pointer group overflow-hidden p-0"
            >
              {/* Image - Left Side */}
              <div className="w-full md:w-48 flex-shrink-0 h-40 md:h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content - Right Side */}
              <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
                <div>
                  <p className="text-teal-100 text-xs md:text-sm font-semibold mb-2">
                    {item.date}
                  </p>
                  <h3 className="text-white font-semibold text-sm md:text-base mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-teal-50 text-xs md:text-sm line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <a 
                  href="#"
                  className="text-teal-100 text-xs md:text-sm font-medium hover:text-white transition-colors mt-2 inline-block"
                >
                  {item.link}
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Button 
            onClick={() => setShowAll(!showAll)}
            className="bg-teal-600 hover:bg-teal-600 text-white font-semibold cursor-pointer border border-teal-500"
          >
            {showAll ? 'Show Less ↑' : 'View All →'}
          </Button>
        </div>
      </div>
    </section>
  )
}
