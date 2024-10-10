import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Lock, Globe, MessageSquare, Smartphone } from 'lucide-react';

const features = [
  { icon: Users, title: 'Real-time Collaboration', description: 'Work simultaneously with team members, see live cursor movements.' },
  { icon: Zap, title: 'Interactive Tools', description: 'Drawing tools, shape tools, text and sticky notes, image and file uploads.' },
  { icon: Lock, title: 'Secure Sharing', description: 'Invite team members via email or shareable links, set permissions.' },
  { icon: Globe, title: 'Unlimited Boards', description: 'Create unlimited boards, organize with folders or tags.' },
  { icon: MessageSquare, title: 'In-app Communication', description: 'Chat, comments, and notifications for updates and mentions.' },
  { icon: Smartphone, title: 'Cross-platform', description: 'Access from desktop, tablet, and mobile devices.' },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;