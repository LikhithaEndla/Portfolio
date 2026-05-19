import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Skill, SkillCategory } from '@/data/skills';

interface SkillCardProps {
  skill: Skill;
  colorClass?: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  colorClass = 'bg-blue-500/10 border-blue-500/30 text-blue-400',
}) => {
  return (
    <div
      className={`
        flex items-center justify-between
        p-3 rounded-lg border
        ${colorClass}
        transition-all duration-300 hover:scale-105
      `}
    >
      <span className="font-medium text-sm">{skill.name}</span>
      <Badge variant="secondary" size="sm">
        {skill.proficiency}
      </Badge>
    </div>
  );
};

export default SkillCard;
