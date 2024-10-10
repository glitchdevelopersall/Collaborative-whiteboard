import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Benefits from '../components/Benefits'
import UseCases from '../components/UseCases'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import CallToAction from '../components/CTA'
import Footer from '../components/Footer'

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CallToAction />
      <Footer />
    </motion.div>
  )
}

export default App