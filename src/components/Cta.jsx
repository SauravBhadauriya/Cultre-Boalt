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
        <div className="grid grid-cols-3 h-36 sm:h-48 md:h-64 lg:h-72">
          <img src="/images/Blog/Blog1.jpg" alt="" className="w-full h-full object-cover" />
          <img src="/images/Blog/Blog3.jpg" alt="" className="w-full h-full object-cover" />
          <img src="/images/Blog/Blog5.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        {/* Teal overlay + content */}
        <div className="absolute inset-0 bg-[var(--brand-teal)]/80 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-teal-100 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Let's work together to create something extraordinary. Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[var(--brand-blue)] hover:bg-blue-50 hover:scale-105 transition-all duration-300 font-bold text-base md:text-lg px-6 md:px-8 py-6 rounded-full w-full sm:w-auto cursor-pointer"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
              <Button
                onClick={() => navigate('/design')}
                className="border-2 border-white text-white hover:bg-white/10 font-bold text-base md:text-lg px-6 md:px-8 py-6 rounded-full w-full sm:w-auto bg-transparent cursor-pointer"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
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
