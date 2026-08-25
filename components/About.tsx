import React from 'react';
import { AUTHOR } from '../data';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-24 md:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
        <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-[#ef6a3a]/30 shadow-xl">
            <img src={AUTHOR.image} alt={`Portrait of ${AUTHOR.name}`} width="320" height="320" loading="lazy" className="h-full w-full object-cover" />
        </div>
        
        <div className="space-y-4">
          <h2 className="font-display text-3xl text-stone-900">About {AUTHOR.name}</h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="space-y-6 text-left font-serif text-base leading-8 text-stone-700 sm:text-center sm:text-lg md:text-xl">
          {AUTHOR.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="pt-8">
          <div className="relative p-8 md:p-12 bg-white rounded-lg shadow-sm border border-stone-100">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-stone-200" />
            <p className="font-display text-lg md:text-2xl text-stone-800 italic">
              "We connect more, yet relate less. Solitude isn't a problem to fix, but a space to remember."
            </p>
            <p className="mt-4 text-sm font-bold text-stone-400 uppercase tracking-widest">— From Attention By Design</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
