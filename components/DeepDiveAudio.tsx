import React, { useState } from 'react';
import { AudioPreview } from '../types';
import { Headphones, Music } from 'lucide-react';

interface DeepDiveAudioProps {
  audio: AudioPreview;
  coverImage: string;
}

const DeepDiveAudio: React.FC<DeepDiveAudioProps> = ({ audio, coverImage }) => {
  const [imageError, setImageError] = useState(false);
  const displayImage = audio.thumbnailUrl || coverImage;

  return (
    <div className="mt-12 p-6 md:p-8 bg-[#121212] rounded-xl border border-stone-800 shadow-2xl overflow-hidden group">
      <div className="space-y-4 mb-8">
        <h3 className="font-display text-2xl text-white flex items-center gap-3">
          <Headphones className="w-6 h-6 text-amber-500 animate-pulse" />
          {audio.heading}
        </h3>
        <p className="text-stone-400 font-serif leading-relaxed">
          {audio.description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 bg-[#181818] p-4 rounded-lg border border-stone-800/50 hover:bg-[#202020] transition-colors duration-300">
        {/* Book Thumbnail with Fallback logic */}
        <div className="w-24 h-24 flex-shrink-0 bg-stone-900 rounded shadow-lg overflow-hidden border border-stone-700 flex items-center justify-center relative">
          {imageError ? (
            <div className="w-full h-full bg-gradient-to-br from-stone-800 to-stone-900 flex flex-col items-center justify-center p-2 text-center">
              <Music className="w-8 h-8 text-stone-600 mb-1" />
              <span className="text-[10px] text-stone-500 uppercase font-bold leading-tight">Audio<br/>Guide</span>
            </div>
          ) : (
            <img 
              src={displayImage} 
              alt={`${audio.title} Audio Summary`} 
              onError={() => setImageError(true)}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}
          {/* Decorative Overlay */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none"></div>
        </div>

        <div className="flex-grow space-y-3 w-full">
          <div>
            <h4 className="text-white font-display font-semibold text-lg leading-tight">
              {audio.title}
            </h4>
            <p className="text-amber-500/80 text-xs uppercase tracking-widest font-bold mt-1">
              {audio.subtitle}
            </p>
          </div>

          <div className="w-full">
            <audio 
              controls 
              className="w-full h-10 custom-audio-player"
              style={{ filter: 'invert(90%) hue-rotate(180deg)' }}
            >
              <source src={audio.sourceUrl} type="audio/mp4" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <div className="flex gap-2">
            <div className="w-1 h-1 rounded-full bg-amber-500/50"></div>
            <div className="w-1 h-1 rounded-full bg-amber-500/30"></div>
            <div className="w-1 h-1 rounded-full bg-amber-500/10"></div>
        </div>
        <span className="text-[10px] text-stone-600 uppercase tracking-widest font-bold">Cloudinary x Netlify Hosted</span>
      </div>
    </div>
  );
};

export default DeepDiveAudio;