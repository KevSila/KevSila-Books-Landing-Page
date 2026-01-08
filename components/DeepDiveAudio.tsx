import React from 'react';
import { AudioPreview } from '../types';
import { Headphones, Flame } from 'lucide-react';

interface DeepDiveAudioProps {
  audio: AudioPreview;
  coverImage: string;
}

const DeepDiveAudio: React.FC<DeepDiveAudioProps> = ({ audio, coverImage }) => {
  const isFirelit = audio.theme === 'firelit';

  const containerStyles = isFirelit 
    ? "bg-[#1a0f05] border-[#422006]" 
    : "bg-[#121212] border-stone-800";

  const innerStyles = isFirelit
    ? "bg-[#2d1a0a] border-[#5a300a]/50"
    : "bg-[#181818] border-stone-800/50";

  const iconColor = isFirelit ? "text-orange-500" : "text-amber-500";
  const accentColor = isFirelit ? "text-orange-400" : "text-amber-500/80";

  return (
    <div className={`mt-12 p-6 md:p-8 rounded-xl border shadow-2xl overflow-hidden transition-all duration-500 ${containerStyles}`}>
      <div className="space-y-4 mb-8">
        <h3 className="font-display text-2xl text-white flex items-center gap-3">
          {isFirelit ? (
            <Flame className={`w-6 h-6 ${iconColor} animate-pulse`} />
          ) : (
            <Headphones className={`w-6 h-6 ${iconColor}`} />
          )}
          {audio.heading}
        </h3>
        <p className="text-stone-400 font-serif leading-relaxed">
          {audio.description}
        </p>
      </div>

      <div className={`flex flex-col sm:flex-row items-center gap-6 p-4 rounded-lg border transition-colors ${innerStyles}`}>
        {/* Book Thumbnail - Referencing the main cover image */}
        <div className={`w-24 h-24 flex-shrink-0 rounded shadow-lg overflow-hidden border ${isFirelit ? 'border-orange-900/50' : 'border-stone-700'}`}>
          <img 
            src={coverImage} 
            alt={audio.title} 
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="flex-grow space-y-3 w-full">
          <div>
            <h4 className="text-white font-display font-semibold text-lg leading-tight">
              {audio.title}
            </h4>
            <p className={`text-xs uppercase tracking-widest font-bold mt-1 ${accentColor}`}>
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
        {isFirelit && (
          <div className="flex gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-orange-500/60 animate-bounce" style={{ animationDelay: '0s' }}></div>
             <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
             <div className="w-1.5 h-1.5 rounded-full bg-orange-500/20 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        )}
        <span className="text-[10px] text-stone-600 uppercase tracking-widest font-bold ml-auto">Cloudinary x Netlify Hosted</span>
      </div>
    </div>
  );
};

export default DeepDiveAudio;