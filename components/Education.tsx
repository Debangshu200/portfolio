
import React from 'react';
import Section from './Section';
import EducationItem from './EducationItem';
import { EDUCATION_DATA, GraduationCapIcon } from '../constants';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" Icon={GraduationCapIcon}>
      <div className="space-y-8">
        {EDUCATION_DATA.map((edu) => (
          <EducationItem key={edu.id} education={edu} />
        ))}
      </div>
    </Section>
  );
};

export default Education;
    