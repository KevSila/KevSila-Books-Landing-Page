import React, { useState } from 'react';
import { FAQS } from '../data';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-3xl md:text-4xl text-stone-900">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-stone-200 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="border border-stone-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-stone-400"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left bg-stone-50 hover:bg-stone-100 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-display font-medium text-lg text-stone-900 pr-8">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-stone-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-stone-500 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 bg-stone-50 text-stone-600 font-serif leading-relaxed border-t border-stone-100/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;