import React, { useRef, useEffect, useState } from 'react';

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillsCategory = {
  [category: string]: Skill[];
};

type SkillsProps = {
  skills: SkillsCategory;
};

const categoryLabels: { [key: string]: string } = {
  fullstack: 'Full Stack',
  aiml: 'AI/ML',
  embedded: 'Embedded',
  tools: 'Tools',
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  // Track which categories overflow on mobile
  const [overflowing, setOverflowing] = useState<{ [key: string]: boolean }>({});
  const rowRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const checkOverflow = () => {
      const newOverflowing: { [key: string]: boolean } = {};
      Object.keys(skills).forEach((category) => {
        const el = rowRefs.current[category];
        if (el) {
          newOverflowing[category] = el.scrollWidth > el.clientWidth;
        }
      });
      setOverflowing(newOverflowing);
    };
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [skills]);

  return (
    <div id="skills" className="relative w-full overflow-hidden bg-jarvis-bg py-8 md:py-12 px-4 sm:px-6 md:px-8">
      <div className="w-full flex flex-col items-center md:items-center mb-4 md:mb-6">
        <h1 className="font-orbitron capitalize text-jarvis-accent text-shadow-neon text-2xl md:text-3xl font-bold text-center mb-6 animate-fade-in">
          Skills
        </h1>
      </div>
      <div className="flex flex-col gap-8 md:gap-10 w-full">
        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
          <div key={category} className="w-full animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 150}ms` }}>
            <h2 className="font-orbitron text-jarvis-accent text-lg md:text-xl font-semibold mb-2 text-left tracking-wide capitalize animate-fade-in" style={{ animationDelay: `${categoryIndex * 150 + 100}ms` }}>
              {categoryLabels[category] || category}
            </h2>
            <div className="w-full overflow-x-auto scrollbar-none">
              <div
                ref={el => { rowRefs.current[category] = el; }}
                className={`flex gap-3 sm:gap-4 md:gap-8 w-max justify-start ${['fullstack', 'tools'].includes(category) && overflowing[category] ? 'max-md:marquee' : ''}`}
                style={{ minWidth: '100%' }}
              >
                {skillList.map((skill, index) => (
                  <div 
                    key={index} 
                    className="group flex flex-col items-start justify-center p-2 md:p-4 font-techmono animate-fade-in"
                    style={{ animationDelay: `${categoryIndex * 150 + (index * 50)}ms` }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-jarvis-bg2 border border-jarvis-accent/40 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:border-jarvis-accent group-hover:shadow-[0_0_20px_rgba(156,229,231,0.4)] transition-all duration-300 shadow-neon text-lg sm:text-xl md:text-3xl">
                      {skill.icon}
                    </div>
                    <p className="mt-1 md:mt-2 text-jarvis-text group-hover:text-jarvis-accent transition-colors duration-300 font-roboto text-xs sm:text-sm md:text-base text-left font-medium">
                      {skill.name}
                    </p>
                  </div>
                ))}
                {/* Duplicate for seamless loop only if overflowing and on mobile */}
                {['fullstack', 'tools'].includes(category) && overflowing[category] && (
                  <div className="flex max-md:flex md:hidden">
                    {skillList.map((skill, index) => (
                      <div key={`dupe-${index}`} className="group flex flex-col items-start justify-center p-2 md:p-4 font-techmono opacity-50 pointer-events-none select-none">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-jarvis-bg2 border border-jarvis-accent/40 rounded-lg flex items-center justify-center text-lg sm:text-xl md:text-3xl">
                          {skill.icon}
                        </div>
                        <p className="mt-1 md:mt-2 text-jarvis-text text-xs sm:text-sm md:text-base text-left">
                          {skill.name}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 