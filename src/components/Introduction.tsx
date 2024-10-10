import React from 'react'
import { Users, Lightbulb, Palette } from 'lucide-react'

const Introduction = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Real-time Collaborative Whiteboard?</h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Our SaaS platform enables synchronous collaboration on a shared digital canvas, perfect for teams, educators, and creatives who need a space for brainstorming, teaching, and visualizing ideas.
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex items-center mb-4">
              <Users className="text-blue-600 mr-2" size={24} />
              <h3 className="text-xl font-semibold">Teams</h3>
            </div>
            <p className="text-gray-600">Collaborate seamlessly with your team members, no matter where they are.</p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex items-center mb-4">
              <Lightbulb className="text-blue-600 mr-2" size={24} />
              <h3 className="text-xl font-semibold">Educators</h3>
            </div>
            <p className="text-gray-600">Engage your students with interactive lessons and visual explanations.</p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex items-center mb-4">
              <Palette className="text-blue-600 mr-2" size={24} />
              <h3 className="text-xl font-semibold">Creatives</h3>
            </div>
            <p className="text-gray-600">Bring your ideas to life with a versatile digital canvas and powerful tools.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction