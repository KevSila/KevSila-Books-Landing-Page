import React from 'react';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-400 py-16 px-6 border-t border-stone-800/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-display text-white text-xl font-semibold tracking-tight">Kevin Sila</h3>
          <p className="text-sm text-stone-500 font-sans tracking-wide">Written in Kenya. Read Worldwide.</p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a 
            href="https://www.linkedin.com/in/kevin-sila-9143b618a/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-stone-800/30 text-stone-400 hover:text-white hover:bg-stone-800 rounded-full transition-all duration-300 transform hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:contact@kevinsila.com" 
            className="p-3 bg-stone-800/30 text-stone-400 hover:text-white hover:bg-stone-800 rounded-full transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://wa.me/254717578394" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-stone-800/30 text-stone-400 hover:text-white hover:bg-stone-800 rounded-full transition-all duration-300 transform hover:-translate-y-1"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        <div className="text-sm text-center md:text-right font-sans text-stone-500">
          <p>&copy; {new Date().getFullYear()} Kevin Yumbya Sila.</p>
          <p className="mt-1">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;