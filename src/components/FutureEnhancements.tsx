import React from 'react'
import { Brain, Puzzle, Smartphone, Globe } from 'lucide-react'

const FutureEnhancements = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What's Next for Real-time Collaborative Whiteboard?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <EnhancementCard
            icon={<Brain className="text-blue-600" size={32} />}
            title="AI-powered Recognition"
            description="Handwriting and shape recognition powered by artificial intelligence."
          />
          <EnhancementCard
            icon={<Puzzle className="text-blue-600" size={32} />}
            title="Plugins & Extensions"
            description="Support for custom plugins and extensions to enhance functionality."
          />
          <EnhancementCard
            icon={<Smartphone className="text-blue-600" size={32} />}
            title="Mobile App"
            description="Native mobile app development for on-the-go access and collaboration."
          />
          <EnhancementCard
            icon={<Globe className="text-blue-600" size={32} />}
            title="Internationalization"
            description="Support for multiple languages and localization options."
          />
        </div>
      </div>
    </div>
  )
}

const EnhancementCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}

export default FutureEnhancements