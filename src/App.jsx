import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroBanner from './components/HeroBanner'
import Brands from './components/Brands'
import WhatWeDo from './components/WhatWeDo'
import WhyChooseUs from './components/WhyChooseUs'
import CTASection from './components/Cta'
import AboutUsSection from './components/AboutUsSection'
import BusinessVerticals from './components/BusinessVerticals'
import NewsEvents from './components/NewsEvents'
import ResourcesNewsletter from './components/ResourcesNewsletter'
import ProminentCustomers from './components/ProminentCustomers'
import Testimonials from './components/Testimonials'
import Contact from './pages/Contact'
import Design from './pages/Design'
import PR from './pages/PR'
import About from './pages/About'
import Social from './pages/Social'
import Career from './pages/Career'
import PrivacyPolicy from './pages/PrivacyPolicy'

function HomePage() {
  return (
    <>
      <HeroBanner />
      <Brands />
      <AboutUsSection />
      <BusinessVerticals />
      <WhatWeDo />
      <NewsEvents />
      <ResourcesNewsletter />
      <ProminentCustomers />
      <Testimonials />
      <CTASection />
    </>
  )
}

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/design" element={<Design />} />
          <Route path="/pr" element={<PR />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-us" element={<WhyChooseUs />} />
          <Route path="/social" element={<Social />} />
          <Route path="/career" element={<Career />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
