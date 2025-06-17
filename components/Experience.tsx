
import React from 'react';
import Section from './Section';
import ExperienceItem from './ExperienceItem';
import { EXPERIENCE_DATA, BriefcaseIcon } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Where I've Worked" Icon={BriefcaseIcon}>
      <div className="space-y-8 md:space-y-12">
        {EXPERIENCE_DATA.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
    