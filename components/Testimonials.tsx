import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 text-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-3xl md:text-4xl text-white">What Readers Are Saying</h2>
          <div className="w-16 h-1 bg-stone-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-stone-800/50 p-8 rounded-lg border border-stone-800 hover:border-stone-700 transition-colors">
              <div className="flex gap-1 mb-6 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-serif text-lg leading-relaxed mb-6 text-stone-300 italic">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <cite className="not-italic font-display font-semibold text-white block">
                  {testimonial.author}
                </cite>
                <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;