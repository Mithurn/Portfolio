import React from 'react';

type Project = {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  github?: string;
};

type ProjectsProps = {
  projects: Project[];
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <section id="projects" className="min-h-screen w-full flex flex-col items-center justify-center py-8 md:py-16 px-4 sm:px-6 md:px-8 bg-jarvis-bg">
    <div className="max-w-6xl mx-auto w-full">
      <h2 className="font-orbitron text-jarvis-accent text-shadow-neon text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 animate-fade-in">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-20">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            className="group flex flex-col bg-jarvis-bg2 rounded-2xl h-full md:h-[500px] lg:h-[540px] border border-jarvis-accent/20 hover:border-jarvis-accent/50 focus:border-jarvis-accent transition-all duration-300 shadow-neon font-techmono mx-1 sm:mx-2 md:mx-4 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_40px_rgba(156,229,231,0.5)] focus:shadow-[0_0_20px_rgba(156,229,231,0.3)] animate-fade-in-up"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="aspect-video w-full relative overflow-hidden rounded-t-2xl bg-jarvis-bg2">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 bg-jarvis-bg2"
                style={{ backgroundColor: '#10151a' }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="p-2 sm:p-3 md:p-4 flex flex-col flex-grow space-y-2 md:space-y-3 font-techmono text-left">
              <div className="flex items-center justify-between">
                <h3 className="font-orbitron text-jarvis-accent text-base sm:text-lg md:text-xl font-semibold mb-2 text-shadow-neon text-left tracking-tight transition-all duration-300 group-hover:text-jarvis-secondary">
                  {project.name}
                </h3>
                <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-jarvis-accent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:text-jarvis-secondary hover:shadow-neon hover:scale-110 font-techmono"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[18px] sm:h-[18px]">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-jarvis-accent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:text-jarvis-secondary hover:shadow-neon hover:scale-110 font-techmono"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[18px] sm:h-[18px]">
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <p className="text-gray-300 font-techmono text-xs sm:text-sm md:text-base flex-grow leading-relaxed text-left transition-colors duration-300 group-hover:text-white">
                {project.description}
              </p>
              <div className="flex items-center gap-1 md:gap-2 overflow-x-auto scrollbar-none py-2 text-left mt-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className="px-1.5 sm:px-2 py-1 rounded-full whitespace-nowrap cursor-default font-techmono text-xs sm:text-sm md:text-base bg-jarvis-bg2 border border-jarvis-accent/40 text-jarvis-accent shadow-neon text-left transition-all duration-300 hover:border-jarvis-accent hover:shadow-[0_0_15px_rgba(156,229,231,0.6)] hover:scale-105 focus:border-jarvis-accent focus:shadow-[0_0_10px_rgba(156,229,231,0.4)] animate-fade-in min-h-[32px] min-w-[32px] flex items-center justify-center"
                    style={{ animationDelay: `${(index * 200) + (techIndex * 50)}ms` }}
                    tabIndex={0}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects; 