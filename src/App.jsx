import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

// Always-loaded (part of main bundle)
import Header from './components/Header'
import Footer from './components/Footer'

// Lazy-loaded page components
const HeroBanner         = lazy(() => import('./components/HeroBanner'))
const Brands             = lazy(() => import('./components/Brands'))
const WhatWeDo           = lazy(() => import('./components/WhatWeDo'))
const WhyChooseUs        = lazy(() => import('./components/WhyChooseUs'))
const CTASection         = lazy(() => import('./components/Cta'))
const AboutUsSection     = lazy(() => import('./components/AboutUsSection'))
const BusinessVerticals  = lazy(() => import('./components/BusinessVerticals'))
const NewsEvents         = lazy(() => import('./components/Bolg'))
const ResourcesNewsletter = lazy(() => import('./components/ResourcesNewsletter'))
const ProminentCustomers = lazy(() => import('./components/ProminentCustomers'))
const Testimonials       = lazy(() => import('./components/Testimonials'))

const Contact      = lazy(() => import('./pages/Contact'))
const Design       = lazy(() => import('./pages/Design'))
const PR           = lazy(() => import('./pages/PR'))
const About        = lazy(() => import('./pages/About'))
const Social       = lazy(() => import('./pages/Social'))
const Career       = lazy(() => import('./pages/Career'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-[var(--brand-blue)] border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

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

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div key={location.pathname} className="page-transition">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location}>
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
      </Suspense>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  )
}
