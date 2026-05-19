'use client';

import React from 'react';
import { experience } from '@/data/experience';
import Section from '@/components/ui/Section';
import ScrollFadeIn from '@/components/common/ScrollFadeIn';
import ExperienceCard from '@/components/cards/ExperienceCard';

export const Experience: React.FC = () => {
  const timelineItems = experience.map((exp) => ({
    id: exp.id,
    title: exp.role,
    subtitle: exp.company,
    date: `${exp.startDate} – ${exp.endDate}`,
    isActive: exp.current,
    children: <ExperienceCard experience={exp} />,
  }));

  return (
    <Section id="experience">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent-cyan to-accent-indigo bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-indigo rounded mb-12" />
        </ScrollFadeIn>

        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <ScrollFadeIn key={exp.id} delay={0.1 * idx}>
              <ExperienceCard experience={exp} />
            </ScrollFadeIn>
          ))}
        </div>

        {/* Summary */}
        <ScrollFadeIn delay={0.5}>
          <div className="mt-16 pt-12 border-t border-dark-800">
            <h3 className="text-xl font-semibold text-dark-100 mb-4">
              Key Accomplishments
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Led QA automation for 4+ Fortune 500 clients',
                'Mentored 5+ QA engineers in modern frameworks',
                'Architected cloud migration testing strategies',
                'Integrated Generative AI into QA workflows',
                'Achieved 0 critical defects in production launches',
                'Reduced test maintenance time by 60%+',
              ].map((accomplishment, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-accent-cyan font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-dark-300 text-sm">{accomplishment}</span>
                </div>
              ))}
            </ul>
          </div>
        </ScrollFadeIn>
      </div>
    </Section>
  );
};

export default Experience;
