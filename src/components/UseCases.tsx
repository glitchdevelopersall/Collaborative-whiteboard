import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Presentation, Palette, GraduationCap } from 'lucide-react';

const useCases = [
  { icon: Briefcase, title: 'Project Management', description: 'Plan, track, and visualize project progress in real-time.' },
  { icon: Presentation, title: 'Remote Meetings', description: 'Conduct engaging virtual meetings with interactive whiteboards.' },
  { icon: Palette, title: 'Design Collaboration', description: 'Iterate on designs and gather feedback from stakeholders.' },
  { icon: GraduationCap, title: 'Education', description: 'Create interactive lessons and facilitate group learning activities.' },
];

const UseCases: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Use Cases
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <useCase.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{useCase.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;