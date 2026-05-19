import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  padding?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  padding = true,
}) => {
  return (
    <section
      id={id}
      className={`
        ${padding ? 'py-16 md:py-24 lg:py-32' : ''}
        ${className}
      `}
    >
      {children}
    </section>
  );
};

export default Section;
