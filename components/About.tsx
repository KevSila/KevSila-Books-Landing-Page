import React from 'react';
import { AUTHOR } from '../data';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-4xl space-y-8 px-6 text-center sm:space-y-10 md:space-y-12">
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

        <div className="pt-2 sm:pt-5 md:pt-8">
          <div className="rounded-lg border border-stone-100 bg-white p-6 shadow-sm sm:p-8 md:p-12">
            <Quote className="mx-auto mb-4 h-8 w-8 text-stone-300" aria-hidden="true" />
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
