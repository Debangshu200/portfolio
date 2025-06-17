
import React from 'react';
import { ACCENT_COLOR } from '../constants';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  Icon?: React.FC<{ className?: string }>;
}

const Section: React.FC<SectionProps> = ({ id, title, children, Icon }) => {
  return (
    <section id={id} className="py-16 md:py-24 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-slate-200 flex items-center">
          {Icon && <Icon className={`w-8 h-8 mr-3 ${ACCENT_COLOR}`} />}
          <span className={`${ACCENT_COLOR} mr-2`}>#</span>{title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
    