import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const faqs = [
    {
      question: 'Is there a limit to the number of collaborators?',
      answer: 'Our free plan allows up to 3 collaborators per board. Pro and Enterprise plans offer unlimited collaborators.',
    },
    {
      question: 'Can I use the whiteboard offline?',
      answer: `While our platform is primarily designed for real-time online collaboration, we offer a limited offline mode that allows you to continue working on your boards when you're not connected to the internet. Your changes will sync once you're back online.`,
    },
    {
      question: 'How secure is my data?',
      answer: 'We take data security very seriously. All data is encrypted in transit and at rest. We use industry-standard security measures and regularly perform security audits to ensure your information is protected.',
    },
    {
      question: 'Can I integrate the whiteboard with other tools?',
      answer: 'Yes, we offer integrations with popular tools like Slack, Google Drive, and Trello. Our API also allows for custom integrations on our Enterprise plan.',
    },
  ]

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="mb-4 border-b border-gray-200 pb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gray-600"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default FAQ