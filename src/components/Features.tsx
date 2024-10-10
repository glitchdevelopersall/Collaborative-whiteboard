import React from 'react'
import { motion } from 'framer-motion'
import { Users, Pencil, Share2, FolderOpen, MessageCircle, Download } from 'lucide-react'

const Features = () => {
  const features = [
    { icon: <Users />, title: 'Real-time Collaboration', description: 'Work simultaneously with team members, see live cursor movements.' },
    { icon: <Pencil />, title: 'Interactive Tools', description: 'Drawing tools, shapes, text, sticky notes, and file uploads.' },
    { icon: <Share2 />, title: 'Easy Sharing', description: 'Invite team members via email or shareable links with customizable permissions.' },
    { icon: <FolderOpen />, title: 'Board Management', description: 'Create unlimited boards, organize with folders or tags.' },
    { icon: <MessageCircle />, title: 'Communication', description: 'In-app chat, comments, and notifications for updates and mentions.' },
    { icon: <Download />, title: 'Export Options', description: 'Save boards as PDF, PNG, JPEG, or SVG for easy sharing and presentation.' },
  ]

  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Powerful Features for Seamless Collaboration
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features