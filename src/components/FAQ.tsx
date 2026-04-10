import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'How long does delivery take?',
    answer: '2 to 5 working days from the date of order.'
  },
  {
    id: 2,
    question: 'What is your return policy?',
    answer: '30 Days of purchase for a refund or an exchange for unworn items.'
  },
  {
    id: 3,
    question: 'Are your products genuine?',
    answer: 'Yes, we only sell 100% original brands. No fakes or first copies are allowed on Nascar Prime.'
  },
  {
    id: 4,
    question: 'How can I track my order?',
    answer: 'Once your order is shipped, you will receive a tracking link via email and SMS to monitor your delivery status in real-time.'
  }
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Frequently <br />
            <span className="text-red-600">Asked Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="border-b border-gray-100 last:border-0"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-bold uppercase tracking-tight transition-colors duration-300 ${openId === faq.id ? 'text-red-600' : 'text-black'}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`${openId === faq.id ? 'text-red-600' : 'text-gray-400'}`}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-gray-500 text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
