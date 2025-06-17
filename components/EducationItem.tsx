
import React from 'react';
import { Education } from '../types';
import { ACCENT_COLOR } from '../constants';

interface EducationItemProps {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  return (
    <div className="relative pl-8 sm:pl-12 py-4 group">
      {/* Timeline stem */}
      <div className="absolute left-0 sm:left-2 top-0 bottom-0 w-0.5 bg-slate-700 group-hover:bg-sky-500 transition-colors duration-300"></div>
      {/* Timeline dot */}
      <div className="absolute left-[-0.60rem] sm:left-[0.10rem] top-5 w-5 h-5 rounded-full bg-slate-800 border-2 border-slate-700 group-hover:border-sky-500 transition-colors duration-300">
        <div className="w-full h-full rounded-full bg-slate-700 group-hover:bg-sky-500 scale-50 group-hover:scale-75 transition-all duration-300"></div>
      </div>
      
      <div className="flex items-start space-x-4">
        {education.logoUrl && (
          <img src={education.logoUrl} alt={`${education.institution} logo`} className="w-12 h-12 rounded-md object-contain p-1 bg-slate-700" />
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-100 group-hover:text-sky-400 transition-colors duration-300">
            {education.degree}
          </h3>
          <p className={`text-md ${ACCENT_COLOR}`}>{education.institution}</p>
          <p className="text-sm text-slate-500 font-mono mt-1">{education.duration}</p>
          {education.description && (
            <p className="text-sm text-slate-400 mt-2">{education.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
    