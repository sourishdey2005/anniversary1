
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import LoveTimeline from './components/LoveTimeline';
import AIPoetry from './components/AIPoetry';
import MemoriesGallery from './components/MemoriesGallery';
import SeventeenReasons from './components/SeventeenReasons';

const App: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  // Confetti helper
  const createConfetti = () => {
    for (let i = 0; i < 50; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart-particle';
      heart.innerHTML = '❤️';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.top = '100vh';
      heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
      heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
      heart.style.animationDelay = (Math.random() * 2) + 's';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    }
  };

  const handleCelebrate = () => {
    createConfetti();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen relative selection:bg-rose-200 selection:text-rose-900">
      {/* Floating Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 pointer-events-none">
        <div className="dancing text-2xl font-bold text-gray-800 pointer-events-auto cursor-default">
          A & S
        </div>
        <div className="pointer-events-auto">
          <button 
            onClick={handleCelebrate}
            className="bg-white/80 backdrop-blur-md border border-rose-100 p-3 rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95"
            title="Celebrate!"
          >
            🥂
          </button>
        </div>
      </nav>

      <Hero />
      <LoveTimeline />
      <SeventeenReasons />
      <AIPoetry />
      <MemoriesGallery />

      <footer className="py-20 bg-gray-900 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="dancing text-4xl mb-6">Always & Forever</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Arunima & Sourish — 17 years down, a lifetime to go.
            The best is yet to come.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <span className="w-12 h-[1px] bg-rose-500/50 mt-3"></span>
            <span className="text-rose-500">Established 2007</span>
            <span className="w-12 h-[1px] bg-rose-500/50 mt-3"></span>
          </div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-gray-600">
            Made with Love for 17 Years of Magic
          </div>
        </div>
      </footer>

      {/* Virtual Toast Notification */}
      {showToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl z-[100] animate-bounce">
          Cheers to Arunima & Sourish! 🥂✨
        </div>
      )}
    </div>
  );
};

export default App;
