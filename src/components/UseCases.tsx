import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, PenTool, User } from 'lucide-react'

const UseCases = () => {
  const cases = [
    {
      icon: <Briefcase />,
      title: 'Teams and Businesses',
      examples: ['Project planning and management', 'Agile workflows and sprint planning'],
    },
    {
      icon: <GraduationCap />,
      title: 'Education',
      examples: ['Virtual classrooms and interactive lessons', 'Collaborative student projects'],
    },
    {
      icon: <PenTool />,
      title: 'Design and Creative Work',
      examples: ['Mood boards and wireframing', 'Storyboarding and concept art'],
    },
    {
      icon: <User />,
      title: 'Personal Organization',
      examples: ['Mind mapping and note-taking', 'Event planning and to-do lists'],
    },
  ]

  return (
    <section id="use-cases" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Use Cases
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold">{useCase.title}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-600">
                {useCase.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases