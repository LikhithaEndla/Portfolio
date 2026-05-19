'use client';

import React from 'react';
import { personal, ctas } from '@/data/personal';
import { Button } from '@/components/ui/Button';
import ScrollFadeIn from '@/components/common/ScrollFadeIn';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 md:pt-32 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollFadeIn delay={0.1}>
          <div className="mb-6">
            <div className="inline-block">
              <span className="text-sm md:text-base font-semibold text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 rounded-full px-4 py-2">
                Welcome to my portfolio 👋
              </span>
            </div>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-accent-cyan via-accent-indigo to-accent-cyan bg-clip-text text-transparent">
            {personal.name}
          </h1>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.3}>
          <p className="text-xl md:text-2xl text-dark-300 mb-4 font-semibold">
            {personal.shortTitle}
          </p>
          <p className="text-dark-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {personal.tagline}
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.4}>
          <p className="text-dark-300 text-base md:text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
            {personal.bio}
          </p>
        </ScrollFadeIn>

        {/* CTAs */}
        <ScrollFadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const element = document.getElementById('projects');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </Button>
          </div>
        </ScrollFadeIn>

        {/* Social Links */}
        <ScrollFadeIn delay={0.6}>
          <div className="flex items-center justify-center gap-6">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-dark-800/50 border border-dark-700 hover:border-accent-indigo hover:bg-accent-indigo/10 text-dark-300 hover:text-accent-indigo transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href={`https://github.com/${personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-dark-800/50 border border-dark-700 hover:border-accent-cyan hover:bg-accent-cyan/10 text-dark-300 hover:text-accent-cyan transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-3 rounded-lg bg-dark-800/50 border border-dark-700 hover:border-accent-indigo hover:bg-accent-indigo/10 text-dark-300 hover:text-accent-indigo transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </ScrollFadeIn>

        {/* Scroll indicator */}
        <ScrollFadeIn delay={0.7}>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse">
            <div className="flex flex-col items-center gap-2">
              <span className="text-dark-500 text-sm">Scroll to explore</span>
              <svg
                className="w-6 h-6 text-accent-cyan animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default Hero;
