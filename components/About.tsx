import React from 'react';
import { AUTHOR } from '../data';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-stone-100/50">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-stone-200">
            {/* Using a generic silhouette if placeholder fails, but styled nicely */}
            <img src={AUTHOR.image} alt={AUTHOR.name} className="w-full h-full object-cover" />
        </div>
        
        <div className="space-y-4">
          <h2 className="font-display text-3xl text-stone-900">About {AUTHOR.name}</h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="font-serif text-xl text-stone-700 leading-relaxed space-y-6">
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
            <p className="mt-4 text-sm font-bold text-stone-400 uppercase tracking-widest">— From Solitude In The Digital Age</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;