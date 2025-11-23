'use client';

import { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: 'What should I wear?',
    answer: 'We\'d love to see our family and friends dress up with us! We\'re requesting cocktail attire. Think elegant and comfortable - dresses, suits, or dressy separates.',
  },
  {
    question: 'Will the ceremony and reception be indoors or outdoors?',
    answer: 'Both the ceremony and reception will be held outdoors, weather permitting. We\'ll have a backup plan in case of inclement weather.',
  },
  {
    question: 'Can I bring a date?',
    answer: 'We have a strict guest list to stay on budget. Our celebration is strictly RSVP only. We will only be able to accommodate those listed on your invitation.',
  },
  {
    question: 'What time should I arrive?',
    answer: 'We recommend arriving 15-20 minutes before the ceremony begins to allow time for parking and finding your seat.',
  },
  {
    question: 'Will there be parking available?',
    answer: 'Yes, there will be complimentary parking available at the venue. We\'ll provide more details closer to the date.',
  },
  {
    question: 'Are children welcome?',
    answer: 'While we love your little ones, our wedding is going to be an adults-only event so that everyone can relax and enjoy the evening. We appreciate you making arrangements ahead of time and leaving the kids at home so you can celebrate with us.',
  },
];

export default function FAQs() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen">
      {/* Background Image - Absolute positioned to cover section, won't resize with content */}
      <div className="absolute inset-0">
        <Image
          src="/faqs.jpg"
          alt="FAQs Background"
          fill
          className="object-cover"
          style={{ objectPosition: 'center center' }}
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-white/20"></div>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-serif text-center text-gray-800 mb-12">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform ${faqOpen === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {faqOpen === index && (
                <div className="px-6 py-4 text-gray-700 border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

