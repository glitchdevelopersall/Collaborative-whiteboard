'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check, X, Menu, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function LandingPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            CollabBoard
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#features" className="hover:text-blue-400 transition-colors">Features</Link>
            <Link href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</Link>
            <Link href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</Link>
            <Link href="#faq" className="hover:text-blue-400 transition-colors">FAQ</Link>
          </div>
          <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
          <Button variant="ghost" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-y-0 right-0 w-64 bg-gray-800 z-50 p-4"
          >
            <Button variant="ghost" className="absolute top-4 right-4 text-white" onClick={() => setIsMenuOpen(false)}>
              <X />
            </Button>
            <div className="flex flex-col space-y-4 mt-12">
              <Link href="#features" className="hover:text-blue-400 transition-colors">Features</Link>
              <Link href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</Link>
              <Link href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</Link>
              <Link href="#faq" className="hover:text-blue-400 transition-colors">FAQ</Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-80"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjEyMTIxIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzYTNhM2EiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-[800px] h-[800px] bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="w-[600px] h-[600px] bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <div className="w-[400px] h-[400px] bg-green-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              Collaborate in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Real-Time
              </span>
              , From Anywhere
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Unleash your team's creativity on a shared digital canvas.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                Get Started for Free
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full">
                Try the Live Demo
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Animated elements */}
        <motion.div
          className="absolute bottom-0 left-0 w-full"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#1a202c" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </motion.div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/placeholder.svg?height=600&width=1000"
              alt="CollabBoard in action"
              width={1000}
              height={600}
              className="rounded-lg shadow-2xl border border-gray-700"
            />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Real-time Collaboration", description: "See changes instantly as your team works together." },
                { title: "Infinite Canvas", description: "Unlimited space for all your ideas and projects." },
                { title: "Smart Tools", description: "AI-powered features to boost your productivity." },
              ].map((feature, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-blue-400">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>
              {[
                { title: "Create a Board", description: "Sign up and start a new whiteboard in seconds." },
                { title: "Invite Your Team", description: "Add collaborators with a simple invite or shareable link." },
                { title: "Collaborate in Real-Time", description: "Use interactive tools to brainstorm and create together." },
                { title: "Save and Share", description: "Export your board or share it directly with stakeholders." },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="relative z-10 mb-8 flex items-center w-full"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`flex items-center w-1/2 ${index % 2 === 0 ? 'justify-start pr-8' : 'justify-end pl-8'}`}>
                    <div className="bg-blue-600 rounded-full p-4">
                      <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Key Features</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {[
              { title: "Real-time Collaboration", description: "Work simultaneously with team members, see live cursor movements." },
              { title: "Interactive Tools", description: "Drawing tools, shape  tools, text and sticky notes, image and file uploads." },
              { title: "Easy Sharing", description: "Invite team members via email or shareable links, set permissions." },
              { title: "Board Management", description: "Create unlimited boards, organize with folders or tags." },
              { title: "Communication", description: "In-app chat and comments, notifications for updates and mentions." },
              { title: "Cross-platform Compatibility", description: "Access from desktop, tablet, and mobile devices." },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="text-blue-400">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">What Our Users Say</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                quote: "This tool has transformed our remote meetings—it's like we're all in the same room!",
                author: "Alex P., Team Lead",
                company: "Tech Innovators Inc."
              },
              {
                quote: "The real-time collaboration feature has boosted our team's productivity significantly.",
                author: "Sarah M., Project Manager",
                company: "Global Solutions Ltd."
              },
              {
                quote: "As an educator, this platform has made online teaching so much more engaging for my students.",
                author: "Dr. James L., University Professor",
                company: "State University"
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="bg-gray-900 border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <blockquote className="text-lg italic mb-4 text-gray-300">"{testimonial.quote}"</blockquote>
                    <div>
                      <p className="font-semibold text-blue-400">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400  to-purple-600">Pricing Plans</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                name: "Free",
                price: "$0",
                features: ["Basic features to get started", "Limited boards and storage", "Up to 3 team members"],
                cta: "Get Started"
              },
              {
                name: "Pro",
                price: "$19",
                period: "per month",
                features: ["Unlimited boards", "Advanced tools", "Priority support", "Up to 10 team members"],
                cta: "Choose Pro",
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Custom solutions", "Dedicated support", "Enhanced security", "Unlimited team members"],
                cta: "Contact Sales"
              },
            ].map((plan, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className={`bg-gray-800 border-gray-700 overflow-hidden ${plan.popular ? 'border-blue-400 relative' : ''} transition-all duration-300 transform hover:-translate-y-2`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-blue-400">{plan.name}</CardTitle>
                    <CardDescription>
                      <span className="text-3xl font-bold text-white">{plan.price}</span>
                      {plan.period && <span className="text-gray-400 ml-1">{plan.period}</span>}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <Check className="mr-2 h-5 w-5 text-blue-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}>
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-center mt-8 text-gray-300">All plans come with a 30-day money-back guarantee</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            {[
              {
                question: "Is there a limit to the number of collaborators?",
                answer: "The number of collaborators depends on your plan. The Free plan allows up to 3 team members, the Pro plan up to 10, and the Enterprise plan has no limit."
              },
              {
                question: "Can I use the whiteboard offline?",
                answer: "While the full collaborative features require an internet connection, we offer an offline mode that allows you to continue working on your boards. Changes will sync once you're back online."
              },
              {
                question: "How secure is my data?",
                answer: "We take data security very seriously. All data is encrypted in transit and at rest, and we use industry-standard security measures to protect your information. Enterprise plans also offer additional security features."
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-blue-400">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Ready to revolutionize your team's collaboration?</h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">Join thousands of teams already using our platform</p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-blue-400">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Features</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Use Cases</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-blue-400">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-blue-400">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Documentation</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Help Center</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-blue-400">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Real-time Collaborative Whiteboard. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 p-4 rounded-lg max-w-3xl w-full"
            >
              <div className="flex justify-end mb-2">
                <Button variant="ghost" onClick={() => setIsVideoPlaying(false)} className="text-gray-300 hover:text-white">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}