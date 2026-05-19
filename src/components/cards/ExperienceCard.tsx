import React from 'react';
import { ExperienceEntry } from '@/data/experience';
import { Badge } from '@/components/ui/Badge';

interface ExperienceCardProps {
  experience: ExperienceEntry;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 hover:border-accent-cyan/50 rounded-lg p-6 transition-all duration-300 hover-lift">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-accent-cyan">{experience.role}</h3>
          <p className="text-dark-300 text-sm font-medium">{experience.company}</p>
        </div>
        {experience.current && (
          <Badge variant="success" size="sm">
            Current
          </Badge>
        )}
      </div>

      <p className="text-dark-500 text-sm mb-3">
        {experience.startDate} – {experience.endDate}
      </p>

      {experience.clients && experience.clients.length > 0 && (
        <div className="mb-4">
          <p className="text-dark-400 text-xs uppercase tracking-wider mb-2">
            Clients
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.clients.map((client) => (
              <Badge key={client} variant="secondary" size="sm">
                {client}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <p className="text-dark-200 text-sm mb-4">{experience.description}</p>

      <div className="mb-4">
        <p className="text-dark-400 text-xs uppercase tracking-wider mb-2">
          Highlights
        </p>
        <ul className="list-disc list-inside space-y-1">
          {experience.highlights.slice(0, 3).map((highlight, idx) => (
            <li key={idx} className="text-dark-300 text-sm">
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-dark-400 text-xs uppercase tracking-wider mb-2">
          Technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="default" size="sm">
              {tech}
            </Badge>
          ))}
          {experience.technologies.length > 4 && (
            <Badge variant="default" size="sm">
              +{experience.technologies.length - 4} more
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
