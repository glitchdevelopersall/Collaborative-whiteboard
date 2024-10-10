import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Lightbulb, Globe, Smile, Shield } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    { icon: <Zap />, title: 'Boost Productivity', description: 'Streamline collaboration and reduce meeting times.' },
    { icon: <Lightbulb />, title: 'Enhance Creativity', description: 'Provide a flexible space for brainstorming and idea development.' },
    { icon: <Globe />, title: 'Improve Remote Workflows', description: 'Connect distributed teams seamlessly.' },
    { icon: <Smile />, title: 'User-Friendly Interface', description: 'Intuitive design that requires no learning curve.' },
    { icon: <Shield />, title: 'Secure and Reliable', description: 'Protect your data with enterprise-grade security measures.' },
  ]

  return (
    <section id="benefits" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Benefits of Using Our Whiteboard
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits