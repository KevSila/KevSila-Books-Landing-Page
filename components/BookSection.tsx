import React from 'react';
import { BOOKS } from '../data';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';

const BookSection: React.FC = () => {
  return (
    <section id="books" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-32">
        {BOOKS.map((book, index) => (
          <div 
            key={book.id} 
            className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Book Cover Side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className={`relative w-64 md:w-80 aspect-[2/3] shadow-2xl rounded-sm overflow-hidden transform transition-transform hover:-translate-y-2 duration-500 ${book.themeColor}`}>
                <img 
                  src={book.coverImage} 
                  alt={book.title} 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                />
                {/* Visual Spine Effect */}
                <div className="absolute left-0 top-0 h-full w-2 bg-black/10 bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-2">
                <span className="text-stone-500 text-sm font-bold tracking-widest uppercase">{book.subtitle}</span>
                <h2 className="font-display text-4xl md:text-5xl text-stone-900">{book.title}</h2>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {book.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="font-serif text-lg text-stone-600 space-y-4 leading-relaxed">
                {book.longDescription.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="pt-6 flex items-center gap-6">
                <a 
                  href={book.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-md font-medium hover:bg-stone-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Buy Now {book.price}</span>
                </a>
                <div className="flex items-center gap-2 text-stone-500 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Instant Download</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookSection;