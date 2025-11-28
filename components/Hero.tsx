import React from 'react';
import { AUTHOR } from '../data';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-20">
      <div className="max-w-4xl space-y-10 animate-fade-in-up">
        {/* Tagline */}
        <span className="inline-block px-4 py-1.5 rounded-full border border-stone-300 text-stone-600 text-xs md:text-sm tracking-[0.2em] uppercase font-semibold font-sans">
          {AUTHOR.tagline}
        </span>
        
        {/* Main Title - Using Merriweather (Display) */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-stone-900 leading-[1.1] md:leading-tight tracking-tight font-bold">
          From Ancient Wisdom to <br />
          <span className="italic font-serif font-normal text-stone-600">Digital Clarity</span>: <br />
          Principles for a Life Well-Lived
        </h1>
        
        {/* Subtitle - Using Lora (Serif) */}
        <p className="font-serif text-lg md:text-2xl text-stone-700 max-w-2xl mx-auto leading-relaxed opacity-90">
          A Practical Guide to Building Enduring Character and Finding Focus in the Modern Age
        </p>
        
        <div className="pt-10">
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