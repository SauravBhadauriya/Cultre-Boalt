import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroBanner from './components/HeroBanner'
import Brands from './components/Brands'
import WhatWeDo from './components/WhatWeDo'
import WhyChooseUs from './components/WhyChooseUs'
import CTASection from './components/Cta'
import Contact from './pages/Contact'
import Design from './pages/Design'
import PR from './pages/PR'
import About from './pages/About'
import Social from './pages/Social'

function HomePage() {
  return (
    <>
      <HeroBanner />
      <Brands />
      <WhatWeDo />
      <CTASection />
    </>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Update URL when page changes
  const handleNavigate = (page) => {
    setCurrentPage(page)
    window.location.hash = page === 'home' ? '' : `#${page}`
  }

  // Read URL on mount and when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home'
      setCurrentPage(hash)
    }

    // Set initial page from URL
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleBack = () => {
    handleNavigate('home')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onNavigate={handleNavigate} />
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'contact' && <Contact onBack={handleBack} />}
        {currentPage === 'design' && <Design onBack={handleBack} />}
        {currentPage === 'PR' && <PR onBack={handleBack} />}
        {currentPage === 'about' && <About onBack={handleBack} />}
        {currentPage === 'why-us' && <WhyChooseUs onBack={handleBack} />}
        {currentPage === 'social' && <Social onBack={handleBack} />}
      </main>
      <Footer />
    </div>
  )
}

export default App
