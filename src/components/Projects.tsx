import React from 'react';
import projects from '../projects.json';
import type { Project } from '../types/project';

const Projects: React.FC = () => {
  return (
    <main>
      <div className="projects-list">
        {projects.map((project: Project, index: number) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Repository
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects; 