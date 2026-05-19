import React from 'react';
import { ProjectCard as ProjectType } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';

interface ProjectCardProps {
  project: ProjectType;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 hover:border-accent-cyan/50 rounded-lg overflow-hidden transition-all duration-300 hover-lift flex flex-col h-full">
      {/* Image placeholder */}
      {project.image && (
        <div className="w-full h-48 bg-gradient-to-br from-accent-indigo/20 to-accent-cyan/20 flex items-center justify-center text-dark-600">
          {project.image}
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title and client */}
        <h3 className="text-lg font-bold text-accent-cyan mb-1">{project.title}</h3>
        <p className="text-dark-400 text-sm mb-3">{project.client}</p>

        {/* Description */}
        <p className="text-dark-200 text-sm mb-4 flex-grow">{project.description}</p>

        {/* Tech stack */}
        <div className="mb-4">
          <p className="text-dark-400 text-xs uppercase tracking-wider mb-2">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" size="sm">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="secondary" size="sm">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Testing scope preview */}
        {project.testingScope && project.testingScope.length > 0 && (
          <div className="mb-4">
            <p className="text-dark-400 text-xs uppercase tracking-wider mb-2">
              Testing Scope
            </p>
            <ul className="list-disc list-inside space-y-1">
              {project.testingScope.slice(0, 2).map((scope, idx) => (
                <li key={idx} className="text-dark-300 text-xs">
                  {scope}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Impact highlight */}
        {project.impact && (
          <div className="pt-4 border-t border-dark-700 mt-auto">
            <p className="text-accent-cyan text-sm italic">
              💡 {project.impact.substring(0, 80)}...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
