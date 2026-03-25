import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Download } from 'lucide-react'
import { resourcesData } from '@/data/resourcesData'

export default function ResourcesNewsletter() {
  const [email, setEmail] = useState('')
  const [selectedResource, setSelectedResource] = useState(null)
  const [displayedCount, setDisplayedCount] = useState(2)

  const handleSubscribe = () => {
    if (!email) return
    setEmail('')
  }

  const handleResourceClick = (resourceId) => {
    setSelectedResource(selectedResource === resourceId ? null : resourceId)
  }

  const handleDownload = () => {
    if (!selectedResource) return
    const resource = resourcesData.downloadSection.resources.find(r => r.id === selectedResource)
    if (resource) window.open(resource.image, '_blank')
  }

  const handleScroll = (e) => {
    const element = e.target
    // Check if scrolled to bottom (with 10px tolerance)
    if (element.scrollHeight - element.scrollTop - element.clientHeight < 10) {
      setDisplayedCount((prev) => 
        Math.min(prev + 1, resourcesData.downloadSection.resources.length)
      )
    }
  }

  const displayedResources = resourcesData.downloadSection.resources.slice(0, displayedCount)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-10 md:px-20   lg:pl-40 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left Side - Download Resources */}
          <Card className="lg:col-span-2 bg-white border border-slate-200 rounded-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl md:text-3xl font-bold text-fuchsia-600 mb-2">
                {resourcesData.downloadSection.title}
              </CardTitle>
              <CardDescription className="text-sm md:text-base text-slate-600 mt-2">
                {resourcesData.downloadSection.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Steps */}
              <div className="flex gap-3 flex-wrap">
                {resourcesData.downloadSection.steps.map((step) => (
                  <div key={step.number} className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs">
                      {step.number}
                    </div>
                    <span className="text-slate-700 text-xs md:text-sm font-medium">{step.label}</span>
                  </div>
                ))}
              </div>

              {/* Resources List - Scrollable Container */}
              <div className="space-y-4 h-80 overflow-y-scroll pr-3 border border-slate-200 rounded-lg p-4 bg-white" onScroll={handleScroll}>
                {displayedResources.map((resource) => (
                  <Card
                    key={resource.id}
                    onClick={() => handleResourceClick(resource.id)}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedResource === resource.id
                        ? 'border-2 border-teal-500 bg-teal-50'
                        : 'border border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <CardContent className="p-4 flex gap-3">
                      {/* Resource Image */}
                      <div className="w-20 h-20 flex-shrink-0">
                        <img
                          src={resource.image}
                          alt={resource.title}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>

                      {/* Resource Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <h3 className="font-semibold text-slate-900 mb-1 text-sm md:text-base leading-tight line-clamp-1">
                              {resource.title}
                            </h3>
                            <p className="text-slate-600 text-xs md:text-sm line-clamp-2 leading-relaxed">
                              {resource.description}
                            </p>
                          </div>
                          {selectedResource === resource.id && (
                            <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Download Button - Shows when resource is selected */}
              {selectedResource && (
                <div className="flex justify-center pt-4">
                  <Button
                    onClick={handleDownload}
                    className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-semibold cursor-pointer px-8 py-2 rounded-lg flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Right Side - Newsletter */}
          <Card className="bg-gradient-to-br from-purple-600 via-purple-700 to-teal-600 border-0 rounded-2xl shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl  md:text-3xl text-white leading-tight">
                {resourcesData.newsletterSection.title}
              </CardTitle>
              <CardDescription className="text-purple-100 text-sm md:text-base mt-2">
                {resourcesData.newsletterSection.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Benefits */}
              <div className="space-y-3">
                {resourcesData.newsletterSection.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-lg flex-shrink-0">{benefit.icon}</span>
                    <span className="text-purple-100 text-xs md:text-sm leading-relaxed">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Email Input */}
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder={resourcesData.newsletterSection.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/25 border border-white/40 text-white placeholder:text-white/70 rounded-lg h-10 text-sm"
                />
                <Button
                  onClick={handleSubscribe}
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-semibold cursor-pointer h-10 text-sm rounded-lg"
                >
                  {resourcesData.newsletterSection.buttonText} 🔔
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
