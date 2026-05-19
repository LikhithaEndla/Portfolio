'use client';

import React from 'react';
import { personal } from '@/data/personal';
import Section from '@/components/ui/Section';
import ScrollFadeIn from '@/components/common/ScrollFadeIn';

export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent-cyan to-accent-indigo bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-indigo rounded mb-8" />
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column */}
          <ScrollFadeIn delay={0.1}>
            <div className="space-y-4">
              <p className="text-dark-200 text-lg leading-relaxed">
                With {personal.yearsOfExperience}+ years of hands-on experience in enterprise
                QA automation, I specialize in building robust, scalable test frameworks that
                drive quality and efficiency.
              </p>
              <p className="text-dark-200 text-lg leading-relaxed">
                My journey spans Fortune 500 companies across various industries, including
                financial services, healthcare, and enterprise software. I've led QA initiatives
                for global clients like Microsoft, Swiss Re, LSEG, and GE HealthCare.
              </p>
            </div>
          </ScrollFadeIn>

          {/* Right column */}
          <ScrollFadeIn delay={0.2}>
            <div className="space-y-4">
              {personal.aboutSections.map((section, index) => (
                <div
                  key={index}
                  className="flex gap-3 p-4 bg-dark-800/30 border border-dark-700/50 rounded-lg hover:border-accent-cyan/30 transition-colors"
                >
                  <div className="text-accent-cyan text-xl font-bold flex-shrink-0">
                    ✓
                  </div>
                  <p className="text-dark-200 text-sm leading-relaxed">{section}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>

        {/* Stats */}
        <ScrollFadeIn delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-dark-800">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-cyan mb-2">
                {personal.yearsOfExperience}+
              </div>
              <p className="text-dark-400 text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-indigo mb-2">
                4
              </div>
              <p className="text-dark-400 text-sm">Fortune 500 Clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-cyan mb-2">
                7
              </div>
              <p className="text-dark-400 text-sm">Skill Categories</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-indigo mb-2">
                500+
              </div>
              <p className="text-dark-400 text-sm">Test Scenarios</p>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </Section>
  );
};

export default About;
