
import React, { useState, useEffect } from 'react';
import { PROFILE_DATA, ACCENT_COLOR, HOVER_ACCENT_COLOR, ACCENT_BORDER_COLOR, HOVER_ACCENT_BG_COLOR, GitHubIcon, LinkedInIcon, TwitterIcon, EmailIcon } from '../constants';

const WORDS = ["system", "web", "Networks", "AI"];
const CHANGE_INTERVAL = 3000; // ms, time each word is displayed
const FADE_DURATION = 300; // ms, duration of fade in/out animation

const Hero: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(WORDS[0]);
  const [textOpacity, setTextOpacity] = useState(1);

  useEffect(() => {
    let wordIndex = 0;
    const intervalId = setInterval(() => {
      setTextOpacity(0); // Start fade out

      setTimeout(() => {
        wordIndex = (wordIndex + 1) % WORDS.length;
        setCurrentWord(WORDS[wordIndex]);
        setTextOpacity(1); // Start fade in
      }, FADE_DURATION);
    }, CHANGE_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 md:pt-0">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-3/5 text-center md:text-left mb-10 md:mb-0">
          <p className={`text-lg ${ACCENT_COLOR} mb-2 md:mb-4`}>Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100 mb-3 md:mb-4">
            {PROFILE_DATA.name}.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-400 mb-6 md:mb-8">
            I work with{' '}
            <span
              className={`${ACCENT_COLOR} transition-opacity duration-${FADE_DURATION} ease-in-out inline-block`}
              style={{ opacity: textOpacity }}
              aria-live="polite"
              aria-atomic="true"
            >
              {currentWord}
            </span>.
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto md:mx-0 mb-8 md:mb-10">
            {PROFILE_DATA.shortBio}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className={`px-8 py-3 border ${ACCENT_BORDER_COLOR} ${ACCENT_COLOR} rounded-md text-lg font-medium ${HOVER_ACCENT_BG_COLOR} hover:text-slate-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/50`}
            >
              Get In Touch
            </a>
             <a 
              href={PROFILE_DATA.resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 border border-slate-400 text-slate-300 rounded-md text-lg font-medium hover:bg-slate-700 hover:border-slate-700 transition-colors duration-300 transform hover:scale-105"
            >
              View Resume
            </a>
          </div>
          
          {/* Social Links */}
          <div className="mt-10 md:mt-12 flex justify-center md:justify-start space-x-6">
            <a href={PROFILE_DATA.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={`text-slate-400 ${HOVER_ACCENT_COLOR} transition-colors`}>
              <GitHubIcon className="w-7 h-7" />
            </a>
            <a href={PROFILE_DATA.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`text-slate-400 ${HOVER_ACCENT_COLOR} transition-colors`}>
              <LinkedInIcon className="w-7 h-7" />
            </a>
            {PROFILE_DATA.socialLinks.twitter && (
              <a href={PROFILE_DATA.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={`text-slate-400 ${HOVER_ACCENT_COLOR} transition-colors`}>
                <TwitterIcon className="w-7 h-7" />
              </a>
            )}
            <a href={`mailto:${PROFILE_DATA.email}`} aria-label="Email" className={`text-slate-400 ${HOVER_ACCENT_COLOR} transition-colors`}>
              <EmailIcon className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Profile Image - optional, can be enabled if desired */}
        {/* 
        <div className="md:w-2/5 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-sky-500 shadow-2xl">
            <img 
              src={PROFILE_DATA.profileImageUrl} 
              alt={PROFILE_DATA.name} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default Hero;
