import React from 'react';
import { ArrowDown, Headphones } from 'lucide-react';
import { BOOKS } from '../data';

const Hero: React.FC = () => (
  <header className="hero-shell overflow-hidden px-5 pb-16 pt-28 sm:pb-20 md:px-8 md:pb-24 md:pt-32 lg:pb-28 lg:pt-40">
    <div className="mx-auto grid max-w-6xl items-center gap-10 sm:gap-14 md:grid-cols-[1.05fr_.95fr] md:gap-8 lg:gap-16">
      <div className="animate-fade-in-up text-center md:text-left">
        <p className="eyebrow mb-6">Books by Kenyan author Kevin Yumbya Sila</p>
        <h1 className="font-display text-[clamp(2.8rem,7vw,5.8rem)] font-black leading-[.98] tracking-[-0.05em] text-stone-950">
          Reclaim your attention.
          <span className="mt-3 block font-serif font-normal italic text-stone-600">Build a life of wisdom.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl font-serif text-base leading-7 text-stone-600 sm:text-lg sm:leading-8 md:mx-0 lg:text-xl">
          Two books for depth seekers in a noisy world—one helps you recover focus and presence; the other turns that clarity into character, discernment and legacy.
        </p>
        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:justify-start">
          <a href="#choose-your-book" className="button-primary group w-full sm:w-auto">
            Find your starting point
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" aria-hidden="true" />
          </a>
          <a href="#previews" className="button-secondary w-full sm:w-auto">
            <Headphones className="h-4 w-4" aria-hidden="true" />
            Listen to the previews
          </a>
        </div>
        <p className="mt-6 font-sans text-xs font-semibold uppercase tracking-[.2em] text-stone-400">
          Second editions · Ebook, paperback and hardcover
        </p>
      </div>

      <div className="relative mx-auto h-[330px] w-full max-w-[520px] sm:h-[470px] md:h-[330px] lg:h-[540px]" aria-label="Kevin Sila's two books">
        <div className="absolute left-[2%] top-10 w-[49%] -rotate-3 sm:left-[5%]">
          <a href="/attention-by-design/" className="book-cover-link group block" aria-label="Explore Attention By Design">
            <img src={BOOKS[0].coverImage} alt={BOOKS[0].coverAlt} width="1128" height="1800" className="book-cover-image" />
            <span className="book-cover-caption">Start with clarity</span>
          </a>
        </div>
        <div className="absolute right-[2%] top-0 z-10 w-[49%] rotate-3 sm:right-[5%]">
          <a href="/the-firelit-mind/" className="book-cover-link group block" aria-label="Explore The Firelit Mind">
            <img src={BOOKS[1].coverImage} alt={BOOKS[1].coverAlt} width="1128" height="1800" className="book-cover-image" />
            <span className="book-cover-caption book-cover-caption-fire">Continue with wisdom</span>
          </a>
        </div>
        <div className="hero-glow" aria-hidden="true" />
      </div>
    </div>
  </header>
);

export default Hero;
