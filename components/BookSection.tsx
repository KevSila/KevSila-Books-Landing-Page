import React from 'react';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';
import { BOOKS } from '../data';
import { trackEvent } from '../analytics';

const BookSection: React.FC = () => (
  <section id="books" className="bg-[#f7f4ee] px-5 py-16 sm:py-20 md:px-8 md:py-32">
    <div className="mx-auto max-w-6xl">
      <div className="mb-10 max-w-3xl sm:mb-12 md:mb-14">
        <p className="eyebrow">The collection</p>
        <h2 className="section-title mt-4">Choose the book that meets you where you are.</h2>
        <p className="section-intro mt-5">Each title stands on its own. Together, they form a journey from attention to wisdom—from recovering your inner space to building a life of character.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {BOOKS.map((book) => {
          const ebook = book.formats[0];
          const primaryLink = ebook.links[0];
          return (
            <article key={book.id} className={`book-card book-card-${book.theme}`}>
              <div className="grid gap-8 sm:grid-cols-[190px_1fr]">
                <a href={`/${book.id}/`} className="mx-auto block w-44 self-start sm:w-full" aria-label={`Read more about ${book.title}`}>
                  <img src={book.coverImage} alt={book.coverAlt} width="1128" height="1800" loading="lazy" className="w-full rounded-sm shadow-2xl transition-transform duration-500 hover:-translate-y-2" />
                </a>
                <div>
                  <p className="eyebrow">{book.eyebrow}</p>
                  <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-950 md:text-4xl">{book.title}</h3>
                  <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-[.13em] text-stone-500">{book.subtitle}</p>
                  <p className="mt-5 font-serif text-lg font-semibold leading-7 text-stone-800">{book.shortPromise}</p>
                </div>
              </div>

              <ul className="mt-8 space-y-3" aria-label={`What you will gain from ${book.title}`}>
                {book.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3 font-serif leading-7 text-stone-700">
                    <Check className="mt-1 h-5 w-5 flex-none text-current" aria-hidden="true" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 border-t border-stone-900/10 pt-6 sm:flex-row">
                <a
                  href={primaryLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary flex-1 justify-center"
                  onClick={() => trackEvent('retailer_click', { book: book.id, format: ebook.type, retailer: primaryLink.retailer })}
                >
                  Buy ebook · {ebook.price}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={`/${book.id}/`} className="button-secondary flex-1 justify-center" onClick={() => trackEvent('book_detail_click', { book: book.id })}>
                  Explore the book
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-4 text-center font-sans text-xs text-stone-500">Paperback and hardcover also available</p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default BookSection;
