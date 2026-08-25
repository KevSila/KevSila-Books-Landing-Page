import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Book } from '../types';
import { trackEvent } from '../analytics';

const FormatOptions: React.FC<{ book: Book }> = ({ book }) => (
  <div className="space-y-3">
    {book.formats.map((format) => (
      <div key={format.type} className="format-row">
        <div className="min-w-[110px]">
          <p className="font-display font-bold text-stone-950">{format.type}</p>
          <p className="mt-1 font-sans text-xs text-stone-500">From {format.price}</p>
        </div>
        <div className="flex flex-1 flex-wrap justify-start gap-2 sm:justify-end">
          {format.links.map((link) => (
            <a
              key={`${format.type}-${link.label}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="retailer-link"
              onClick={() => trackEvent('retailer_click', { book: book.id, format: format.type, retailer: link.retailer, market: link.market })}
              aria-label={`${link.label}, opens in a new tab`}
            >
              <span>{link.label}</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    ))}
    <p className="pt-2 font-sans text-xs leading-5 text-stone-500">Retailer pricing and availability may vary by country. Amazon links serve worldwide readers; Nuria provides a Kenya-based option where listed.</p>
  </div>
);

export default FormatOptions;
