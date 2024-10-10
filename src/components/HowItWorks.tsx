import React from 'react'
import { motion } from 'framer-motion'
import { PlusCircle, UserPlus, Edit3, Share } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    { icon: <PlusCircle />, title: 'Create a Board', description: 'Sign up and start a new whiteboard in seconds.' },
    { icon: <UserPlus />, title: 'Invite Your Team', description: 'Add collaborators with a simple invite link.' },
    { icon: <Edit3 />, title: 'Collaborate in Real-Time', description: 'Use interactive tools to brainstorm and create together.' },
    { icon: <Share />, title: 'Save and Share', description: 'Export your board or share it directly with others.' },
  ]

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <div className="text-blue-600">{step.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks