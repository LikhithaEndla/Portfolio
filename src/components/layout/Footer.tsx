'use client';

import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { personal } from '@/data/personal';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900/50 border-t border-dark-800/50 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-accent-cyan mb-2">
              {personal.name}
            </h3>
            <p className="text-dark-400 text-sm">{personal.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-dark-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-dark-400 hover:text-accent-cyan transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-dark-400 hover:text-accent-cyan transition-colors text-sm"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-dark-400 hover:text-accent-cyan transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-dark-100 mb-4">Connect</h4>
            <div className="flex items-center gap-4">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-800/50 hover:bg-accent-indigo/20 text-dark-300 hover:text-accent-indigo transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={`https://github.com/${personal.github.split('/').pop()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-800/50 hover:bg-accent-cyan/20 text-dark-300 hover:text-accent-cyan transition-all"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 rounded-lg bg-dark-800/50 hover:bg-accent-indigo/20 text-dark-300 hover:text-accent-indigo transition-all"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-800/50 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-dark-500 text-sm">
            © {currentYear} {personal.name}. All rights reserved.
          </p>
          <p className="text-dark-600 text-xs mt-4 md:mt-0">
            Crafted with ❤️ using Next.js, React, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
