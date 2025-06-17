
import React from 'react';
import { Experience } from '../types';
import { ACCENT_COLOR, HOVER_ACCENT_COLOR } from '../constants';

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="relative pl-8 sm:pl-12 py-6 group">
      {/* Timeline stem */}
      <div className="absolute left-0 sm:left-2 top-0 bottom-0 w-0.5 bg-slate-700 group-hover:bg-sky-500 transition-colors duration-300"></div>
      {/* Timeline dot */}
      <div className="absolute left-[-0.60rem] sm:left-[0.10rem] top-7 w-5 h-5 rounded-full bg-slate-800 border-2 border-slate-700 group-hover:border-sky-500 transition-colors duration-300">
        <div className="w-full h-full rounded-full bg-slate-700 group-hover:bg-sky-500 scale-50 group-hover:scale-75 transition-all duration-300"></div>
      </div>
      
      <div className="mb-1">
        <h3 className="text-xl font-semibold text-slate-100 group-hover:text-sky-400 transition-colors duration-300">
          {experience.role} 
          {experience.companyUrl ? (
            <a 
              href={experience.companyUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`ml-2 ${ACCENT_COLOR} ${HOVER_ACCENT_COLOR} text-lg`}
            >
              @ {experience.company}
            </a>
          ) : (
            <span className="ml-2 text-lg text-sky-500">@ {experience.company}</span>
          )}
        </h3>
        <p className="text-sm text-slate-500 font-mono mt-1">{experience.duration}</p>
      </div>
      <ul className="list-none space-y-2 mt-3">
        {experience.descriptionPoints.map((point, index) => (
          <li key={index} className="flex text-slate-400">
            <span className={`mr-2 mt-1 ${ACCENT_COLOR}`}>▹</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
    