'use client';

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-dark-300 hover:text-accent-cyan transition-colors duration-200 text-sm font-medium"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-dark-800/50 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <FiMenu className="w-6 h-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-20 right-4 bg-dark-900 border border-dark-700 rounded-lg p-4 space-y-2 z-50">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleNavClick}
              className="block px-4 py-2 text-dark-300 hover:text-accent-cyan hover:bg-dark-800/50 rounded transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;
