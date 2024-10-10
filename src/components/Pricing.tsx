import React from 'react'
import { Check } from 'lucide-react'

const Pricing = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Flexible Plans for Everyone</h2>
        <div className="flex flex-wrap justify-center">
          <PricingCard
            title="Free"
            price="$0"
            features={[
              'Basic collaboration features',
              'Up to 3 team members',
              'Limited storage',
              'Community support',
            ]}
            buttonText="Get Started"
            buttonColor="bg-blue-600"
          />
          <PricingCard
            title="Pro"
            price="$19"
            period="/month"
            features={[
              'Advanced collaboration tools',
              'Unlimited team members',
              '50GB storage',
              'Priority support',
              'Custom branding',
            ]}
            buttonText="Upgrade to Pro"
            buttonColor="bg-indigo-600"
            highlighted={true}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            features={[
              'All Pro features',
              'Dedicated account manager',
              'Custom integrations',
              'On-premise deployment option',
              '24/7 phone support',
            ]}
            buttonText="Contact Sales"
            buttonColor="bg-gray-800"
          />
        </div>
      </div>
    </div>
  )
}

const PricingCard = ({ title, price, period, features, buttonText, buttonColor, highlighted = false }) => {
  return (
    <div className={`w-full md:w-1/3 px-4 mb-8 ${highlighted ? 'md:-mt-4' : ''}`}>
      <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${highlighted ? 'border-4 border-indigo-600' : ''}`}>
        <div className={`px-6 py-8 ${highlighted ? 'bg-indigo-600 text-white' : ''}`}>
          <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
          <div className="text-center">
            <span className="text-4xl font-bold">{price}</span>
            {period && <span className="text-gray-600">{period}</span>}
          </div>
        </div>
        <div className="p-6">
          <ul className="mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center mb-2">
                <Check className="text-green-500 mr-2" size={20} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button className={`w-full ${buttonColor} text-white font-bold py-2 px-4 rounded hover:opacity-90 transition duration-300`}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing