import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Is there a limit to the number of collaborators?",
    answer: "The number of collaborators depends on your plan. The Free plan allows up to 3 team members, the Pro plan up to 10, and the Enterprise plan has no limit."
  },
  {
    question: "Can I use the whiteboard offline?",
    answer: "While the full collaborative features require an internet connection, we offer an offline mode that allows you to continue working on your boards. Changes will sync once you're back online."
  },
  {
    question: "How secure is my data?",
    answer: "We take data security very seriously. All data is encrypted in transit and at rest, and we use industry-standard security measures to protect your information. Enterprise plans also offer additional security features."
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <span className="text-gray-900 dark:text-white">{faq.question}</span>
                  <ChevronDown className="transition group-open:rotate-180 text-gray-500 dark:text-gray-400" />
                </summary>
                <p className="text-gray-600 dark:text-gray-300 mt-3 ml-4">{faq.answer}</p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;