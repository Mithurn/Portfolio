import React from 'react';
import JarvisHologram from './JarvisHologram';

const WhoAmI = () => (
  <div id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 py-8 md:py-16 px-2 sm:px-6 md:px-8 bg-jarvis-bg">
    <div className="w-full md:w-[50%] h-48 md:h-[40rem] mb-6 md:mb-0 flex items-center justify-center animate-fade-in-up">
      <div className="relative w-full h-full bg-jarvis-bg2 rounded-lg overflow-hidden shadow-neon transition-all duration-500 hover:shadow-[0_0_30px_rgba(156,229,231,0.4)]">
        <JarvisHologram />
      </div>
    </div>
    <div className="w-full md:w-[60%] space-y-4 md:space-y-6 font-techmono px-2 md:px-4 text-left animate-fade-in-up" style={{ animationDelay: '200ms' }}>
      <h1 className="font-orbitron capitalize text-jarvis-accent text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 text-shadow-neon font-bold text-center w-full animate-fade-in">
        Who am i
      </h1>
      <div className="space-y-3 md:space-y-4">
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-techmono mx-auto transition-colors duration-300 hover:text-white animate-fade-in" style={{ animationDelay: '400ms' }}>
          I&apos;m Mithurn Jeromme — a software developer and embedded systems innovator passionate about building products that solve real problems, not just pass code reviews.
        </p>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-techmono mx-auto transition-colors duration-300 hover:text-white animate-fade-in" style={{ animationDelay: '500ms' }}>
          With a foundation in Computer Science Engineering, I thrive at the intersection of AI, hardware, and software — designing systems that think, respond, and evolve. Whether it&apos;s deploying intelligent web apps or building complex robots, I believe in engineering with purpose.
        </p>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-techmono mx-auto transition-colors duration-300 hover:text-white animate-fade-in" style={{ animationDelay: '600ms' }}>
          My work spans from full-stack platforms to impactful AI projects, where NLP and computer vision come together to tackle real-world challenges.
        </p>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-techmono mx-auto transition-colors duration-300 hover:text-white animate-fade-in" style={{ animationDelay: '700ms' }}>
          When I&apos;m not coding, you&apos;ll find me in the gym, vibing to music, and questioning the meaning of life.
        </p>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-techmono mx-auto transition-colors duration-300 hover:text-white animate-fade-in" style={{ animationDelay: '800ms' }}>
          I don&apos;t just write code.<br />I design experiences, solve constraints, and build with impact.
        </p>
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '900ms' }}>
        <a 
          href="/resume/Mithurn_s_Resume.pdf" 
          target="_blank"
          className="inline-block w-auto px-3 py-2 md:px-4 md:py-2 bg-transparent text-jarvis-accent border border-jarvis-accent font-orbitron 
                   hover:bg-jarvis-accent hover:text-jarvis-bg2 hover:shadow-[0_0_20px_rgba(156,229,231,0.6)] hover:scale-105 transition-all duration-300 rounded-md text-[9px] sm:text-xs md:text-base shadow-neon text-left"
        >
          Download Resume
        </a>
      </div>
    </div>
  </div>
);

export default WhoAmI; 