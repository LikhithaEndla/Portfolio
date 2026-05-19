import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'danger';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const badgeVariants = {
  default: 'bg-accent-indigo/20 text-accent-indigo border border-accent-indigo/30',
  secondary: 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30',
  success: 'bg-green-500/20 text-green-400 border border-green-500/30',
  warning: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
  danger: 'bg-red-500/20 text-red-400 border border-red-500/30',
};

const sizeVariants = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
  size = 'sm',
}) => {
  return (
    <span
      className={`
        inline-flex items-center rounded-full font-medium
        ${badgeVariants[variant]}
        ${sizeVariants[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
