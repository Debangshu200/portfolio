
import React from 'react';
import { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon, ACCENT_COLOR, HOVER_ACCENT_COLOR } from '../constants';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-sky-500/30 hover:-translate-y-1 group flex flex-col">
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-300"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-sky-400 transition-colors duration-300">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-4">
          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li key={tech} className="text-xs text-sky-300 bg-sky-900/50 px-2 py-1 rounded-full font-mono">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto flex space-x-4 items-center">
          {project.repoLink && (
            <a 
              href={project.repoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub repository"
              className={`text-slate-400 ${HOVER_ACCENT_COLOR} transition-colors`}
            >
              <GitHubIcon className="w-6 h-6" />
            </a>
          )}
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Live demo"
              className={`text-slate-400 ${HOVER_ACCENT_COLOR} transition-colors`}
            >
              <ExternalLinkIcon className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
    