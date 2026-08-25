import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

const Testimonials: React.FC = () => (
  <section className="bg-[#171411] px-5 py-24 text-stone-100 md:px-8 md:py-28">
    <div className="mx-auto max-w-6xl">
      <div className="mb-14 text-center">
        <p className="eyebrow eyebrow-light">Reader reflections</p>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">What readers are saying</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <figure key={testimonial.id} className={`testimonial-card ${index === TESTIMONIALS.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
            <Quote className="h-6 w-6 text-[#ef6a3a]" aria-hidden="true" />
            {testimonial.book && <p className="mt-5 font-sans text-[10px] font-bold uppercase tracking-[.18em] text-[#ff9a70]">On {testimonial.book}</p>}
            <blockquote className="mt-4 font-serif text-lg italic leading-8 text-stone-200">“{testimonial.quote}”</blockquote>
            <figcaption className="mt-7 border-t border-white/10 pt-5">
              <span className="block font-display font-bold text-white">{testimonial.author}</span>
              <span className="mt-1 block font-sans text-xs uppercase tracking-wider text-stone-500">{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
