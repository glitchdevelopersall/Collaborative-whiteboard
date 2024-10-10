import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Real-time Collaborative Whiteboard</h3>
            <p className="text-gray-400">Transform your ideas into reality with our intuitive, collaborative whiteboard.</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition duration-300">About</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition duration-300">Features</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-300">Support</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">Email: support@rtcwhiteboard.com</p>
            <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition duration-300"><Facebook size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition duration-300"><Twitter size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition duration-300"><Instagram size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition duration-300"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2023 Real-time Collaborative Whiteboard. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300 mr-4">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer