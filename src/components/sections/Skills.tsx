'use client';

import React from 'react';
import { skills } from '@/data/skills';
import Section from '@/components/ui/Section';
import ScrollFadeIn from '@/components/common/ScrollFadeIn';
import SkillCard from '@/components/cards/SkillCard';

export const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent-cyan to-accent-indigo bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-indigo rounded mb-12" />
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, idx) => (
            <ScrollFadeIn key={category.category} delay={0.05 * idx}>
              <div>
                <h3 className="text-xl font-semibold text-dark-100 mb-4">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      colorClass={category.color}
                    />
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* Skills Summary */}
        <ScrollFadeIn delay={0.5}>
          <div className="mt-16 pt-12 border-t border-dark-800 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-800/30 border border-dark-700/50 rounded-lg p-6 hover:border-accent-cyan/30 transition-colors">
              <h4 className="text-accent-cyan font-semibold mb-2">Core Expertise</h4>
              <p className="text-dark-300 text-sm">
                Selenium, Playwright, NUnit, SpecFlow, C#, TypeScript, BDD/TDD
              </p>
            </div>
            <div className="bg-dark-800/30 border border-dark-700/50 rounded-lg p-6 hover:border-accent-indigo/30 transition-colors">
              <h4 className="text-accent-indigo font-semibold mb-2">Cloud & DevOps</h4>
              <p className="text-dark-300 text-sm">
                Azure DevOps, Azure Test Plans, Jenkins, GitHub Actions, Docker
              </p>
            </div>
            <div className="bg-dark-800/30 border border-dark-700/50 rounded-lg p-6 hover:border-accent-cyan/30 transition-colors">
              <h4 className="text-accent-cyan font-semibold mb-2">Modern Practice</h4>
              <p className="text-dark-300 text-sm">
                API Testing, Cloud Migration, Generative AI in QA, GitHub Copilot
              </p>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </Section>
  );
};

export default Skills;
