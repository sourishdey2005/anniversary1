
import React, { useState, useEffect } from 'react';
import { COUPLE_NAMES, ANNIVERSARY_YEARS } from '../constants';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number}>({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  // Simple countdown logic - assuming today is the day or near it
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      // Logic for demonstration: Countdown within the day or just ticking
      setTimeLeft({
        days: 17, // Symbolic 17
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#fff5f5] to-white px-6">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-rose-100 blur-3xl opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-amber-100 blur-3xl opacity-50"></div>

      <div className="text-center z-10">
        <p className="uppercase tracking-[0.3em] text-rose-500 font-semibold mb-4 text-sm md:text-base animate-pulse">
          Celebrating 17 Years of Devotion
        </p>
        <h1 className="text-6xl md:text-9xl font-bold text-gray-900 mb-6 flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="serif">{COUPLE_NAMES.her}</span>
          <span className="dancing text-rose-400 text-4xl md:text-6xl">&</span>
          <span className="serif">{COUPLE_NAMES.him}</span>
        </h1>
        <div className="flex gap-4 justify-center items-center text-gray-500 mt-8 mb-12">
          <div className="flex flex-col items-center bg-white shadow-sm p-3 rounded-lg min-w-[70px]">
            <span className="text-3xl font-serif font-bold text-rose-500">17</span>
            <span className="text-[10px] uppercase tracking-widest">Years</span>
          </div>
          <span className="text-2xl font-light">·</span>
          <div className="flex flex-col items-center bg-white shadow-sm p-3 rounded-lg min-w-[70px]">
            <span className="text-3xl font-serif font-bold text-rose-500">204</span>
            <span className="text-[10px] uppercase tracking-widest">Months</span>
          </div>
          <span className="text-2xl font-light">·</span>
          <div className="flex flex-col items-center bg-white shadow-sm p-3 rounded-lg min-w-[70px]">
            <span className="text-3xl font-serif font-bold text-rose-500">6209</span>
            <span className="text-[10px] uppercase tracking-widest">Days</span>
          </div>
        </div>

        <button 
          onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-rose-600 transition-all transform hover:scale-105 shadow-xl"
        >
          Relive the Journey
        </button>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
