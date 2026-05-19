'use client';

import React from 'react';
import Link from 'next/link';
import { Navigation, MobileMenu } from './Navigation';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-dark-900/80 backdrop-blur-md border-b border-dark-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Name */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-accent-cyan to-accent-indigo bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Likhitha Endla
          </Link>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
