'use client';

import React from 'react';
import Section from '@/components/ui/Section';
import ScrollFadeIn from '@/components/common/ScrollFadeIn';
import Badge from '@/components/ui/Badge';

const certifications = [
  {
    id: 1,
    title: 'EPAM AI Literacy Program',
    issuer: 'EPAM Systems',
    year: '2024',
    description: 'Advanced certification in AI applications and Generative AI integration in QA',
  },
  {
    id: 2,
    title: 'Agile Methodology & Scrum Foundation',
    issuer: 'Multiple Platforms',
    year: '2022',
    description: 'Certified in Agile practices and Scrum framework implementation',
  },
];

const education = {
  degree: "Bachelor's Degree",
  field: 'Computer Science & Engineering',
  institution: 'G. Narayanamma Institute of Technology & Science',
  graduationYear: '2017',
  location: 'Hyderabad, India',
};

export const Certifications: React.FC = () => {
  return (
    <Section id="certifications">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent-cyan to-accent-indigo bg-clip-text text-transparent">
            Certifications & Education
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-indigo rounded mb-12" />
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <ScrollFadeIn delay={0.1}>
              <h3 className="text-xl font-semibold text-dark-100 mb-6">
                Certifications
              </h3>
            </ScrollFadeIn>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <ScrollFadeIn key={cert.id} delay={0.1 * (idx + 1)}>
                  <div className="bg-dark-800/30 border border-dark-700/50 hover:border-accent-cyan/30 rounded-lg p-6 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-accent-cyan font-semibold">
                        {cert.title}
                      </h4>
                      <Badge variant="secondary" size="sm">
                        {cert.year}
                      </Badge>
                    </div>
                    <p className="text-dark-400 text-sm mb-2">{cert.issuer}</p>
                    <p className="text-dark-300 text-sm">{cert.description}</p>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <ScrollFadeIn delay={0.2}>
              <h3 className="text-xl font-semibold text-dark-100 mb-6">Education</h3>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.3}>
              <div className="bg-dark-800/30 border border-dark-700/50 hover:border-accent-indigo/30 rounded-lg p-6 transition-colors h-full">
                <h4 className="text-accent-indigo font-semibold text-lg mb-2">
                  {education.degree}
                </h4>
                <p className="text-dark-400 font-medium mb-3">
                  {education.field}
                </p>
                <p className="text-dark-300 text-sm mb-4">
                  {education.institution}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-dark-700">
                  <span className="text-dark-400 text-sm">
                    Graduated: {education.graduationYear}
                  </span>
                  <Badge variant="default" size="sm">
                    {education.location}
                  </Badge>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Certifications;
