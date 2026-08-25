import React from 'react';
import { ArrowLeft, Check, Headphones } from 'lucide-react';
import { BOOKS } from '../data';
import { Book } from '../types';
import DeepDiveAudio from './DeepDiveAudio';
import FormatOptions from './FormatOptions';

const BookDetailPage: React.FC<{ book: Book }> = ({ book }) => {
  const related = BOOKS.find((candidate) => candidate.id !== book.id)!;

  return (
    <main id="main-content">
      <section className={`book-detail-hero book-detail-${book.theme} px-5 pb-16 pt-28 sm:pb-20 md:px-8 md:pb-24 md:pt-32 lg:pb-28 lg:pt-40`}>
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[.72fr_1.28fr] md:gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-14">
          <div className="order-2 mx-auto w-44 sm:w-56 md:order-1 md:w-full md:max-w-80">
            <img src={book.coverImage} alt={book.coverAlt} width="1128" height="1800" className="w-full rounded-sm shadow-[0_35px_80px_rgba(0,0,0,.28)]" />
          </div>
          <div className="order-1 md:order-2">
            <a href="/#books" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-stone-500 hover:text-stone-900"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> All books</a>
            <p className="eyebrow mt-7 md:mt-8">{book.eyebrow}</p>
            <h1 className="mt-4 font-display text-[clamp(2.65rem,11vw,4.5rem)] font-black leading-none tracking-[-.045em] text-stone-950">{book.title}</h1>
            <p className="mt-4 font-sans text-xs font-bold uppercase leading-5 tracking-[.12em] text-stone-500 sm:text-sm sm:tracking-[.15em]">{book.subtitle}</p>
            <p className="mt-7 max-w-2xl font-serif text-xl font-semibold leading-8 text-stone-800 sm:text-2xl sm:leading-9">{book.shortPromise}</p>
            <p className="mt-5 max-w-2xl font-serif text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">{book.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {book.tags.map((tag) => <span key={tag} className="benefit-chip">{tag}</span>)}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#buy" className="button-primary w-full sm:w-auto">Choose a format · from {book.formats[0].price}</a>
              <a href="#listen" className="button-secondary w-full sm:w-auto"><Headphones className="h-4 w-4" aria-hidden="true" /> Listen first</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow">Inside the book</p>
            <h2 className="section-title mt-4">What this book will help you do</h2>
            <ul className="mt-9 space-y-5">
              {book.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-4 font-serif text-lg leading-8 text-stone-700">
                  <span className={`check-disc check-disc-${book.theme}`}><Check className="h-4 w-4" aria-hidden="true" /></span>
                  {outcome}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-2xl bg-[#f7f4ee] p-7">
              <p className="font-sans text-xs font-bold uppercase tracking-[.16em] text-stone-500">This book is for</p>
              <p className="mt-3 font-serif text-lg leading-8 text-stone-700">{book.idealFor}</p>
            </div>
          </div>
          <div className="space-y-5 font-serif text-lg leading-8 text-stone-700">
            {book.longDescription.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section id="buy" className="bg-[#f7f4ee] px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Available worldwide</p>
            <h2 className="section-title mt-4">Choose how you want to read.</h2>
            <p className="section-intro mt-5">Select a format and the retailer that works best for your location.</p>
          </div>
          <FormatOptions book={book} />
        </div>
      </section>

      {book.audioPreview && (
        <section id="listen" className="bg-white px-5 py-24 md:px-8 md:py-28">
          <div className="mx-auto max-w-3xl">
            <DeepDiveAudio audio={book.audioPreview} coverImage={book.coverImage} coverAlt={book.coverAlt} bookId={book.id} />
          </div>
        </section>
      )}

      <section className="bg-stone-950 px-5 py-20 text-white md:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <p className="eyebrow eyebrow-light">Continue the journey</p>
            <h2 className="mt-3 font-display text-3xl font-bold">Next: {related.title}</h2>
            <p className="mt-3 max-w-xl font-serif leading-7 text-stone-300">{related.shortPromise}</p>
          </div>
          <a href={`/${related.id}/`} className="button-light flex-none">Explore {related.title}</a>
        </div>
      </section>
    </main>
  );
};

export default BookDetailPage;
