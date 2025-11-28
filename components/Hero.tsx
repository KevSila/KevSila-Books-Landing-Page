import React from 'react';
import { AUTHOR } from '../data';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-20">
      <div className="max-w-5xl space-y-12 animate-fade-in-up">
        {/* Tagline */}
        <span className="inline-block px-4 py-1.5 rounded-full border border-stone-300 text-stone-600 text-xs md:text-sm tracking-[0.2em] uppercase font-semibold font-sans">
          {AUTHOR.tagline}
        </span>
        
        {/* Main Title */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-stone-900 leading-[1.2] md:leading-tight tracking-tight font-bold">
          From Ancient Wisdom to <br />
          <span className="italic font-serif font-normal text-stone-600">Digital Clarity</span>: <br />
          
          {/* Stylish Line Container */}
          <span className="relative inline-block mt-3 md:mt-4">
            <span className="relative z-10 font-display italic font-semibold text-stone-900">
              Principles for a Life Well-Lived
            </span>
            {/* Brush Stroke SVG Underline */}
            <svg 
              className="absolute -bottom-2 left-0 w-full h-4 text-amber-500/40 -z-0" 
              viewBox="0 0 200 9" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path 
                d="M2.00025 6.99997C25.7509 2.83362 83.2864 -1.16439 197.502 6.99997C198.813 7.0937 186.762 6.50001 187.502 6.50001" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="font-serif text-lg md:text-2xl text-stone-700 max-w-2xl mx-auto leading-relaxed opacity-90">
          A Guide to Building Enduring Character and Finding Focus in the Modern Age
        </p>
        
        <div className="pt-8">
          <a 
            href="#books" 
            className="group inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-sm font-sans font-medium tracking-wide hover:bg-stone-800 transition-all hover:-translate-y-1 shadow-lg shadow-stone-200"
          >
            Explore The Books
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 w-full flex justify-center opacity-40">
        <p className="text-[10px] tracking-[0.3em] uppercase text-stone-900 font-sans font-bold">Scroll to discover</p>
      </div>
    </header>
  );
};

export default Hero;