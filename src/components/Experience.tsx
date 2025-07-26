import React from 'react';

type WorkHistory = {
  company: React.ReactNode;
  role: React.ReactNode;
  period: string;
  location: string;
  image?: string;
  achievements: string[];
  technologies: string[];
};

type ExperienceProps = {
  workHistory: WorkHistory[];
};

const Experience: React.FC<ExperienceProps> = ({ workHistory }) => (
  <div id="history" className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 md:px-8 bg-jarvis-bg">
    <h1 className="font-orbitron text-jarvis-accent text-shadow-neon text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 animate-fade-in">
      History
    </h1>
    <div className="w-full max-w-7xl space-y-8 md:space-y-16">
      {workHistory.map((job, index) => (
        <div 
          key={index} 
          className="flex flex-col lg:flex-row gap-6 md:gap-10 items-center justify-center font-techmono mx-1 sm:mx-4 animate-fade-in-up"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className={`w-full md:w-[200px] lg:w-[500px] ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}> 
            <div className="w-full min-h-[60px] md:h-64 bg-jarvis-bg2 border border-jarvis-accent/30 rounded-xl flex flex-col items-center justify-center p-2 md:p-6 gap-1 md:gap-3 shadow-neon font-techmono transition-all duration-300 hover:border-jarvis-accent/50 hover:shadow-[0_0_20px_rgba(156,229,231,0.3)]">
              {job.image && (
                <img src={job.image} alt={typeof job.company === 'string' ? job.company : undefined} className="h-10 md:h-24 w-auto object-contain mb-1 md:mb-2 rounded shadow transition-transform duration-300 hover:scale-105" />
              )}
              <div className="text-jarvis-accent font-orbitron text-center text-shadow-neon w-full">
                <div className="font-semibold text-base sm:text-lg md:text-xl font-orbitron text-jarvis-accent text-shadow-neon text-center w-full">{job.company}</div>
                <div className="font-semibold text-base sm:text-lg md:text-xl font-orbitron text-jarvis-text text-center w-full">{job.role}</div>
              </div>
            </div>
          </div>
          <div className={`flex-1 p-3 sm:p-4 md:p-6 cursor-default ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} font-techmono text-left bg-jarvis-bg2 rounded-xl shadow-neon transition-all duration-300 hover:shadow-[0_0_25px_rgba(156,229,231,0.2)]`}>
            <div className="mb-2 md:mb-4">
              <h2 className="text-base sm:text-lg md:text-2xl font-orbitron font-bold text-jarvis-accent mb-2 md:mb-3 text-shadow-neon text-left uppercase transition-colors duration-300 hover:text-jarvis-secondary">
                {job.company}
              </h2>
              <h3 className="text-sm sm:text-base md:text-xl font-orbitron font-bold text-jarvis-text mb-2 md:mb-3 text-left transition-colors duration-300 hover:text-white">
                {job.role}
              </h3>
              <p className="font-techmono text-gray-300 font-light leading-relaxed text-left text-xs sm:text-sm md:text-lg mb-2 md:mb-4">
                {job.period} | {job.location}
              </p>
            </div>
            <div className="space-y-4 md:space-y-8">
              <div className="mt-2 md:mt-4">
                <h4 className="font-techmono text-jarvis-accent text-xs sm:text-sm md:text-base capitalize mb-2 md:mb-3 text-left leading-none">
                  Achievements
                </h4>
                <ul className="list-disc list-outside ml-4 space-y-1 md:space-y-2 font-techmono text-left">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-300 font-techmono leading-relaxed text-left text-xs sm:text-sm md:text-base transition-colors duration-300 hover:text-white">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 md:mt-4">
                <h4 className="font-techmono cursor-default text-jarvis-accent text-xs sm:text-sm md:text-base capitalize mb-2 md:mb-3 text-left leading-none">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1 md:gap-2 text-left mt-2 md:mt-2">
                  {job.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-1.5 sm:px-2 md:px-4 py-0.5 md:py-1.5 rounded-full cursor-default font-techmono bg-jarvis-bg2 border border-jarvis-accent/40 text-jarvis-accent text-xs sm:text-sm md:text-base shadow-neon text-left transition-all duration-300 hover:border-jarvis-accent hover:shadow-[0_0_15px_rgba(156,229,231,0.6)] hover:scale-105 animate-fade-in"
                      style={{ animationDelay: `${(index * 200) + (techIndex * 30)}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Experience; 