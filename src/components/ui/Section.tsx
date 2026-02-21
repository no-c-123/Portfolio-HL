import React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  return (
    <section id={id} className={cn("py-20 md:py-32 relative overflow-hidden", className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {children}
      </div>
    </section>
  );
};
