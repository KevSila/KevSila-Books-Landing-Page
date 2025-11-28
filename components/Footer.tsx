import React from 'react';
import { Mail, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-400 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-display text-white text-xl">Kevin Sila</h3>
          <p className="text-sm">Written in Kenya. Read Worldwide.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="mailto:contact@kevinsila.com" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
        </div>

        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Kevin Yumbya Sila.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;