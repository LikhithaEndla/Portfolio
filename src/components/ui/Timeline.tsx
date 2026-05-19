import React from 'react';

interface TimelineItem {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  isActive?: boolean;
  children?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  children?: React.ReactNode;
}

export const Timeline: React.FC<TimelineProps> = ({ items, children }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-cyan to-accent-indigo md:left-1/2 md:-translate-x-1/2"
        style={{
          opacity: 0.3,
        }}
      />

      {/* Timeline items */}
      <div className="space-y-8 md:space-y-12">
        {items.map((item, index) => (
          <div key={item.id} className="relative">
            {/* Dot */}
            <div
              className={`
                absolute left-0 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2
                w-3 h-3 rounded-full border-4 border-dark-900 z-10 top-0
                ${item.isActive ? 'bg-accent-cyan' : 'bg-accent-indigo'}
                transition-colors duration-300
              `}
            />

            {/* Content */}
            <div
              className={`
                pl-8 md:pl-0 md:w-1/2
                ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}
              `}
            >
              <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 hover:border-accent-cyan/50 rounded-lg p-6 transition-all duration-300 hover-lift">
                <h3 className="text-xl font-bold text-accent-cyan mb-1">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-dark-400 text-sm mb-2">{item.subtitle}</p>
                )}
                <p className="text-dark-500 text-sm mb-4">{item.date}</p>
                {item.children}
              </div>
            </div>
          </div>
        ))}
      </div>

      {children}
    </div>
  );
};

export default Timeline;
