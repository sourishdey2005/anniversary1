
import React, { useState } from 'react';

const SeventeenReasons: React.FC = () => {
  const reasons = [
    "Your unwavering support through every storm.",
    "The way your eyes light up when we talk about the future.",
    "The 6,209 mornings we've woken up side by side.",
    "Our shared inside jokes that no one else understands.",
    "The beautiful life and home we've built from scratch.",
    "How we still choose each other, every single day.",
    "The way we've grown as individuals while staying united.",
    "Your patience and kindness in the messy moments.",
    "The travel memories that are etched in our souls.",
    "How you still know exactly how I take my tea.",
    "The strength we find in our collective resilience.",
    "The laughter that echoes through our home.",
    "17 years of learning, loving, and laughing.",
    "The silent communication we have in crowded rooms.",
    "The foundation of trust we've laid for our family.",
    "Your smile, which is still my favorite sight.",
    "The excitement for the next 17 years and beyond."
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-rose-50 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-4xl font-serif mb-12 text-center">17 Reasons for 17 Years</h2>
        
        <div className="relative w-full max-w-2xl h-[300px] flex items-center justify-center">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 flex flex-col items-center justify-center p-12 text-center transition-all duration-500 ${
                idx === activeIndex 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-20'
              }`}
            >
              <span className="text-7xl font-serif text-rose-200 mb-6 font-bold">{idx + 1}</span>
              <p className="text-2xl md:text-3xl font-serif italic text-gray-800 leading-relaxed">
                "{reason}"
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-12 flex-wrap justify-center">
          <button 
            onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : reasons.length - 1))}
            className="p-4 rounded-full bg-white shadow-lg hover:bg-rose-500 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button 
            onClick={() => setActiveIndex((prev) => (prev < reasons.length - 1 ? prev + 1 : 0))}
            className="p-4 rounded-full bg-white shadow-lg hover:bg-rose-500 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeventeenReasons;
