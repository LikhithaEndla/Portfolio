'use client';

import React from 'react';
import { projects, getFeaturedProjects } from '@/data/projects';
import Section from '@/components/ui/Section';
import ScrollFadeIn from '@/components/common/ScrollFadeIn';
import ProjectCard from '@/components/cards/ProjectCard';

export const Projects: React.FC = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <Section id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent-cyan to-accent-indigo bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-indigo rounded mb-12" />
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project, idx) => (
            <ScrollFadeIn key={project.id} delay={0.1 * idx}>
              <ProjectCard project={project} />
            </ScrollFadeIn>
          ))}
        </div>

        {/* Project Details Highlight */}
        <ScrollFadeIn delay={0.5}>
          <div className="mt-16 pt-12 border-t border-dark-800 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-800/30 border border-dark-700/50 rounded-lg p-6 hover:border-accent-cyan/30 transition-colors">
              <div className="text-3xl mb-2">💼</div>
              <h4 className="text-accent-cyan font-semibold mb-2">Enterprise Scale</h4>
              <p className="text-dark-300 text-sm">
                Tested applications used by 500+ organizations with strict SLAs
              </p>
            </div>
            <div className="bg-dark-800/30 border border-dark-700/50 rounded-lg p-6 hover:border-accent-indigo/30 transition-colors">
              <div className="text-3xl mb-2">🔍</div>
              <h4 className="text-accent-indigo font-semibold mb-2">Comprehensive Coverage</h4>
              <p className="text-dark-300 text-sm">
                End-to-end automation from functional to security testing
              </p>
            </div>
            <div className="bg-dark-800/30 border border-dark-700/50 rounded-lg p-6 hover:border-accent-cyan/30 transition-colors">
              <div className="text-3xl mb-2">📈</div>
              <h4 className="text-accent-cyan font-semibold mb-2">Impact & Results</h4>
              <p className="text-dark-300 text-sm">
                70%+ reduction in manual testing effort across projects
              </p>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </Section>
  );
};

export default Projects;
