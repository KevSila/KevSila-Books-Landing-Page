import React from 'react';
import { ArrowDown, Compass, Focus } from 'lucide-react';

const ReadingPath: React.FC = () => (
  <section id="choose-your-book" className="relative overflow-hidden bg-stone-950 px-5 py-16 text-white sm:py-20 md:px-8 md:py-32">
    <div className="ember-orb" aria-hidden="true" />
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow eyebrow-light">Two books. One journey.</p>
        <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-6xl">First recover your attention. Then decide what deserves it.</h2>
        <p className="mx-auto mt-6 max-w-2xl font-serif text-lg leading-8 text-stone-300">The books meet two different needs, but share one conviction: a meaningful life is built deliberately.</p>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:mt-12 md:mt-16 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
        <a href="/attention-by-design/" className="path-card group">
          <span className="path-number">01</span>
          <Focus className="mt-8 h-8 w-8 text-[#d85e35]" aria-hidden="true" />
          <h3 className="mt-5 font-display text-2xl font-bold">Reclaim attention</h3>
          <p className="mt-3 font-serif leading-7 text-stone-300">Choose this path if your mind feels scattered, overstimulated or constantly interrupted.</p>
          <span className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#ff9a70]">Explore Attention By Design <span aria-hidden="true">→</span></span>
        </a>

        <div className="flex items-center justify-center text-stone-600" aria-hidden="true">
          <ArrowDown className="h-6 w-6 md:-rotate-90" />
        </div>

        <a href="/the-firelit-mind/" className="path-card group">
          <span className="path-number">02</span>
          <Compass className="mt-8 h-8 w-8 text-[#ff7535]" aria-hidden="true" />
          <h3 className="mt-5 font-display text-2xl font-bold">Build with wisdom</h3>
          <p className="mt-3 font-serif leading-7 text-stone-300">Choose this path for discernment, resilient character, better leadership and lasting legacy.</p>
          <span className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#ff9a70]">Explore The Firelit Mind <span aria-hidden="true">→</span></span>
        </a>
      </div>
    </div>
  </section>
);

export default ReadingPath;
