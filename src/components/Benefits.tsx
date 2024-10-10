import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Lightbulb, TrendingUp } from 'lucide-react';

const benefits = [
  { icon: Zap, title: 'Increased Productivity', description: 'Streamline your workflow and get more done in less time.' },
  { icon: Clock, title: 'Time Savings', description: 'Reduce meeting times and eliminate the need for follow-ups.' },
  { icon: Lightbulb, title: 'Enhanced Creativity', description: 'Foster innovation with a shared space for brainstorming.' },
  { icon: TrendingUp, title: 'Improved Collaboration', description: 'Break down silos and work seamlessly across teams.' },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Benefits of Using Our Whiteboard
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <benefit.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;