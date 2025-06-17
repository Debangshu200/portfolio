
import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Things I've Built">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
       <div className="text-center mt-12">
          <a 
            href={PROJECTS_DATA[0]?.repoLink || '#'} // Link to first project's repo or a general GitHub profile
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sky-400 border border-sky-400 px-6 py-3 rounded-md hover:bg-sky-400 hover:text-slate-900 transition-colors duration-300 font-medium"
          >
            View More on GitHub
          </a>
        </div>
    </Section>
  );
};

export default Projects;
    