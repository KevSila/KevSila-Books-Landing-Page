import React from 'react';
import { ArrowRight, Headphones } from 'lucide-react';

const FinalCTA: React.FC = () => (
  <section className="bg-white px-5 py-20 md:px-8 md:py-24">
    <div className="cta-panel mx-auto max-w-5xl text-center">
      <p className="eyebrow eyebrow-light">Your next chapter can begin here</p>
      <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl">What do you need most right now—clarity or wisdom?</h2>
      <p className="mx-auto mt-5 max-w-2xl font-serif text-lg leading-8 text-stone-300">Choose the book that speaks to your present season. Both are available worldwide in digital and print formats.</p>
      <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <a href="#books" className="button-light">Choose your book <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
        <a href="#previews" className="button-dark-outline"><Headphones className="h-4 w-4" aria-hidden="true" /> Listen first</a>
      </div>
    </div>
  </section>
);

export default FinalCTA;
