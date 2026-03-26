import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"
import { useState } from 'react'
import ContactModal from './ContactModal'

export default function CTASection() {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="contact" className="relative overflow-hidden">
        {/* Background images */}
        <div className="grid grid-cols-3 h-48 sm:h-56 md:h-64 lg:h-72">
          <img src="/images/Blog/Blog1.jpg" alt="" className="w-full h-full object-cover" />
          <img src="/images/Blog/Blog3.jpg" alt="" className="w-full h-full object-cover" />
          <img src="/images/Blog/Blog5.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        {/* Teal overlay + content */}
        <div className="absolute inset-0 bg-[var(--brand-teal)]/80 flex items-center justify-center p-3 sm:p-4">
          <div className="text-center text-white max-w-xl">
            <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 tracking-tight leading-snug">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-teal-100 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
              Let's work together to create something extraordinary.
              <br />
              Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center w-full">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[var(--brand-blue)] hover:bg-blue-50 transition-all duration-300 font-semibold text-xs sm:text-sm md:text-base px-3 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full w-full sm:w-auto min-h-[36px] sm:min-h-[40px] flex items-center justify-center cursor-pointer"
              >
                <Mail className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Contact Us
              </Button>
              <Button
                onClick={() => navigate('/design')}
                className="border-2 border-white text-white hover:bg-white/10 font-semibold text-xs sm:text-sm md:text-base px-3 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full w-full sm:w-auto bg-transparent cursor-pointer min-h-[36px] sm:min-h-[40px] flex items-center justify-center whitespace-nowrap"
              >
                <ArrowRight className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
