import React from 'react'
import { Code, Database, Zap } from 'lucide-react'

const TechStack = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Built with Modern Technologies for Seamless Performance</h2>
        <div className="flex flex-wrap justify-center">
          <TechStackItem
            icon={<Code className="text-blue-600" size={32} />}
            title="Frontend"
            description="React.js with Konva.js/Fabric.js for canvas rendering"
          />
          <TechStackItem
            icon={<Database className="text-blue-600" size={32} />}
            title="Backend"
            description="Supabase for authentication, PostgreSQL for database, WebSockets for real-time sync"
          />
          <TechStackItem
            icon={<Zap className="text-blue-600" size={32} />}
            title="Integrations"
            description="SendGrid for email, Stripe for payments, Twilio for video"
          />
        </div>
      </div>
    </div>
  )
}

const TechStackItem = ({ icon, title, description }) => {
  return (
    <div className="w-full md:w-1/3 px-4 mb-8">
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}

export default TechStack