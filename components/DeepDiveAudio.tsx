import React from 'react';
import { Flame, Headphones } from 'lucide-react';
import { AudioPreview } from '../types';
import { trackEvent } from '../analytics';

interface DeepDiveAudioProps {
  audio: AudioPreview;
  coverImage: string;
  coverAlt?: string;
  bookId?: string;
}

const DeepDiveAudio: React.FC<DeepDiveAudioProps> = ({ audio, coverImage, coverAlt = '', bookId }) => {
  const isFirelit = audio.theme === 'firelit';

  return (
    <article className={`audio-card ${isFirelit ? 'audio-card-firelit' : 'audio-card-attention'}`}>
      <div className="flex items-start gap-4">
        <span className="audio-icon" aria-hidden="true">
          {isFirelit ? <Flame className="h-5 w-5" /> : <Headphones className="h-5 w-5" />}
        </span>
        <div>
          <h3 className="font-display text-2xl font-bold text-white">{audio.heading}</h3>
          <p className="mt-2 font-serif leading-7 text-stone-300">{audio.description}</p>
        </div>
      </div>

      <div className="mt-7 grid items-center gap-5 rounded-xl border border-white/10 bg-white/[.045] p-4 sm:grid-cols-[72px_1fr]">
        <img src={coverImage} alt={coverAlt ? `${coverAlt}, audio preview thumbnail` : ''} width="148" height="236" loading="lazy" className="mx-auto h-24 w-16 rounded-sm object-cover shadow-xl" />
        <div className="min-w-0">
          <h4 className="font-display text-base font-semibold leading-snug text-white">{audio.title}</h4>
          <p className="mt-1 font-sans text-[10px] font-bold uppercase tracking-[.18em] text-[#ff9a70]">{audio.subtitle}</p>
          <audio controls preload="metadata" className="mt-4 h-10 w-full" onPlay={() => trackEvent('audio_play', { book: bookId || audio.title })}>
            <source src={audio.sourceUrl} type="audio/mp4" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </article>
  );
};

export default DeepDiveAudio;
