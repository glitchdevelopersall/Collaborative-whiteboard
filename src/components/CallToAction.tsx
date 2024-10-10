import React from 'react'

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Collaboration Experience?</h2>
        <p className="text-xl mb-8">Join thousands of teams already using Real-time Collaborative Whiteboard</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
            Get Started for Free
          </button>
          <button className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
            Explore Premium Features
          </button>
        </div>
      </div>
    </div>
  )
}

export default CallToAction