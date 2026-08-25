import React from 'react';
import { BookOpen } from 'lucide-react';

interface NavbarProps {
  compact?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ compact = false }) => (
  <nav aria-label="Primary navigation" className="fixed left-0 top-0 z-50 w-full border-b border-stone-900/10 bg-[#fbfaf7]/90 backdrop-blur-xl">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
      <a href="/" className="flex items-center gap-2 text-stone-950" aria-label="Kevin Sila Books home">
        <BookOpen className="h-5 w-5" aria-hidden="true" />
        <span className="font-display text-sm font-bold tracking-[.08em] sm:text-base">KEVIN SILA</span>
      </a>
      <div className="flex items-center gap-4 font-sans text-xs font-semibold text-stone-600 sm:gap-7 sm:text-sm">
        <a href={compact ? "/#books" : "#books"} className="nav-link">Books</a>
        <a href={compact ? "/#about" : "#about"} className="nav-link hidden min-[360px]:inline">About</a>
        <a href={compact ? "/#previews" : "#previews"} className="nav-cta">Listen free</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
