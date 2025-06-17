
import React from 'react';
import Section from './Section';
import { PROFILE_DATA, SKILLS_DATA, ACCENT_COLOR } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-3 text-slate-400 space-y-4 text-lg leading-relaxed">
          <p>{PROFILE_DATA.bio}</p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 mt-4 text-slate-300">
            {SKILLS_DATA.map((skill) => (
              <li key={skill.name} className="flex items-center">
                <span className={`mr-2 ${ACCENT_COLOR}`}>▹</span>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 flex justify-center md:justify-end">
          <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 relative group">
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-md group-hover:blur-sm`}></div>
            <img
              src={PROFILE_DATA.profileImageUrl}
              alt={PROFILE_DATA.name}
              className="relative w-full h-full object-cover rounded-lg shadow-xl border-2 border-slate-700 group-hover:border-sky-400 transition-all duration-300 transform group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
    