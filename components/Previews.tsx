import React from 'react';
import { BOOKS } from '../data';
import DeepDiveAudio from './DeepDiveAudio';

const Previews: React.FC = () => (
  <section id="previews" className="bg-white px-5 py-24 md:px-8 md:py-32">
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="eyebrow">Listen before you choose</p>
        <h2 className="section-title mt-4">A few quiet minutes with each book.</h2>
        <p className="section-intro mx-auto mt-5">These short audio introductions let you hear the central idea and decide which conversation you need right now.</p>
      </div>
      <div className="grid gap-7 lg:grid-cols-2">
        {BOOKS.map((book) => book.audioPreview && (
          <DeepDiveAudio key={book.id} audio={book.audioPreview} coverImage={book.coverImage} coverAlt={book.coverAlt} bookId={book.id} />
        ))}
      </div>
    </div>
  </section>
);

export default Previews;
