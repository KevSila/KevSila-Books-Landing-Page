import React from 'react';
import { AUTHOR } from '../data';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-20">
      <div className="max-w-4xl space-y-8 animate-fade-in-up">
        <span className="inline-block px-3 py-1 rounded-full bg-stone-200 text-stone-600 text-xs tracking-widest uppercase font-semibold">
          {AUTHOR.tagline}
        </span>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-stone-900 leading-tight">
          From Ancient Wisdom to <br />
          <span className="italic font-serif text-stone-600">Digital Clarity</span>: <br />
          Principles for a Life Well-Lived
        </h1>
        <p className="font-serif text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
          A Practical Guide to Building Enduring Character and Finding Focus in the Modern Age
        </p>
        <div className="pt-8">
          <a 
            href="#books" 
            className="group inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-800 transition-all hover:scale-105"
          >
            Explore The Books
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 w-full flex justify-center opacity-50">
        <p className="text-xs tracking-widest uppercase text-stone-400">Scroll to discover</p>
      </div>
    </header>
  );
};

export default Hero;