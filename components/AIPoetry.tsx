
import React, { useState } from 'react';
import { generateAnniversaryPoem } from '../services/gemini';
import { PoemResult } from '../types';

const AIPoetry: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PoemResult | null>(null);
  const [mood, setMood] = useState('romantic and nostalgic');

  const moods = [
    { label: '💖 Romantic', value: 'romantic and nostalgic' },
    { label: '✨ Dreamy', value: 'dreamy and ethereal' },
    { label: '🥂 Joyful', value: 'joyful and celebratory' },
    { label: '📜 Classic', value: 'stately and classic' }
  ];

  const handleGenerate = async () => {
    setLoading(true);
    const data = await generateAnniversaryPoem(mood);
    setResult(data);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-[#faf9f6]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass p-10 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-rose-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-serif mb-6">AI Love Song</h2>
            <p className="text-gray-600 mb-10">Select a mood and let the magic of Gemini compose a 17th-year tribute just for you.</p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {moods.map((m) => (
                <button
                  key={m.value}
                  onClick={() => setMood(m.value)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    mood === m.value 
                    ? 'bg-rose-500 text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-rose-50'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Composing...
                </span>
              ) : 'Generate Anniversary Poem'}
            </button>

            {result && (
              <div className="mt-16 animate-fadeIn">
                <div className="max-w-2xl mx-auto bg-white p-12 rounded-2xl shadow-inner border border-rose-50">
                  <span className="text-xs uppercase tracking-[0.2em] text-rose-400 mb-4 block">— {result.theme} —</span>
                  <div className="whitespace-pre-line text-lg md:text-xl font-serif leading-relaxed text-gray-800 italic">
                    {result.poem}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPoetry;
