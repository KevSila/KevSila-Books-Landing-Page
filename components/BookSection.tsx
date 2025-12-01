import React from 'react';
import { BOOKS } from '../data';
import { ShoppingBag, Clock } from 'lucide-react';

const BookSection: React.FC = () => {
  return (
    <section id="books" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-32">
        {BOOKS.map((book, index) => (
          <div 
            key={book.id} 
            className={`flex flex-col md:flex-row gap-12 items-start md:items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
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
            <div className="w-full md:w-1/2 space-y-8">
              <div className="space-y-2">
                <span className="text-stone-500 text-sm font-bold tracking-widest uppercase">{book.subtitle}</span>
                <h2 className="font-display text-4xl md:text-5xl text-stone-900">{book.title}</h2>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {book.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-amber-600 text-white text-xs rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="font-serif text-lg text-stone-600 space-y-4 leading-relaxed">
                {book.longDescription.map((para, i) => {
                  const isBullet = para.startsWith('•');
                  return (
                    <p 
                      key={i} 
                      className={isBullet ? "pl-4 text-stone-700 font-medium" : ""}
                    >
                      {para}
                    </p>
                  );
                })}
              </div>

              {/* Purchasing Options */}
              <div className="pt-4 border-t border-stone-200">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-400 mb-4">Select Format</h3>
                <div className="grid gap-4">
                  {book.formats.map((format) => (
                    <div key={format.type} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-stone-50 rounded-lg border border-stone-100">
                      <div className="mb-3 sm:mb-0">
                        <div className="flex items-center gap-2">
                          <span className="font-display font-semibold text-stone-900">{format.type}</span>
                          <span className="text-stone-500 text-sm">{format.price}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {format.available && format.links.length > 0 ? (
                          format.links.map((link) => (
                            <a 
                              key={link.label}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 bg-amber-600 text-white text-sm px-4 py-2 rounded hover:bg-amber-700 transition-colors"
                            >
                              <ShoppingBag className="w-3 h-3" />
                              <span className="whitespace-nowrap">{link.label.replace('Buy on ', '')}</span>
                            </a>
                          ))
                        ) : (
                          <div className="flex items-center gap-2 text-stone-400 text-sm italic px-2">
                            <Clock className="w-3 h-3" />
                            <span>Coming Soon</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
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