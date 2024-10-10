import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, UserPlus, Users, Share2 } from 'lucide-react';

const steps = [
  { icon: PlusCircle, title: 'Create a Board', description: 'Sign up and start a new whiteboard in seconds.' },
  { icon: UserPlus, title: 'Invite Your Team', description: 'Add collaborators with a simple invite or shareable link.' },
  { icon: Users, title: 'Collaborate in Real-Time', description: 'Use interactive tools to brainstorm and create together.' },
  { icon: Share2, title: 'Save and Share', description: 'Export your board or share it directly with stakeholders.' },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          How It Works
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600 dark:bg-blue-400"></div>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative z-10 mb-8 flex items-center w-full"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`flex items-center w-1/2 ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                  <div className="bg-blue-600 dark:bg-blue-400 rounded-full p-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;