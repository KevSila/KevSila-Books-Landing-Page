import React from 'react';
import { BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-stone-800" />
          <span className="font-display font-semibold tracking-wider text-stone-900">KEVIN SILA</span>
        </div>
        <div className="flex gap-6 text-sm font-medium text-stone-600">
          <a href="#books" className="hover:text-stone-900 transition-colors">Books</a>
          <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;