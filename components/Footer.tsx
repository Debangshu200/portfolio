
import React from 'react';
import { PROFILE_DATA, GitHubIcon, LinkedInIcon, TwitterIcon, ACCENT_COLOR, HOVER_ACCENT_COLOR } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 md:py-12 text-center bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-center space-x-6 mb-6">
            <a href={PROFILE_DATA.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={`text-slate-400 ${HOVER_ACCENT_COLOR} transition-colors`}>
              <GitHubIcon className="w-6 h-6" />
            </a>
            <a href={PROFILE_DATA.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`text-slate-400 ${HOVER_ACCENT_COLOR} transition-colors`}>
              <LinkedInIcon className="w-6 h-6" />
            </a>
            {PROFILE_DATA.socialLinks.twitter && (
              <a href={PROFILE_DATA.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={`text-slate-400 ${HOVER_ACCENT_COLOR} transition-colors`}>
                <TwitterIcon className="w-6 h-6" />
              </a>
            )}
        </div>
        <p className="text-slate-500 text-sm">
          Designed & Built by <span className={`${ACCENT_COLOR}`}>{PROFILE_DATA.name}</span>
        </p>
        <p className="text-slate-500 text-xs mt-1">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
    