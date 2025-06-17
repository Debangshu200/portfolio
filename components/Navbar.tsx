
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, PROFILE_DATA, ACCENT_COLOR, HOVER_ACCENT_COLOR, ACCENT_BORDER_COLOR, HOVER_ACCENT_BG_COLOR, ACCENT_BG_COLOR } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-slate-200 transition ease transform duration-300`;

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-20">
        <a href="#" className={`text-2xl font-bold ${ACCENT_COLOR} ${HOVER_ACCENT_COLOR} transition-colors`}>
          {PROFILE_DATA.name.split(' ')[0][0]}.{PROFILE_DATA.name.split(' ')[1][0]}.
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative group text-slate-300 ${HOVER_ACCENT_COLOR} transition-colors px-3 pt-2 pb-3 rounded-md text-sm font-medium`}
            >
              {link.name}
              <span className={`absolute bottom-1.5 left-0 w-0 h-0.5 ${ACCENT_BG_COLOR} transition-all duration-300 ease-out group-hover:w-full`}></span>
            </a>
          ))}
          <a 
            href={PROFILE_DATA.resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-4 py-2 border ${ACCENT_BORDER_COLOR} ${ACCENT_COLOR} rounded-md text-sm font-medium ${HOVER_ACCENT_BG_COLOR} hover:text-slate-900 transition-colors`}
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col h-10 w-10 border-2 border-transparent rounded justify-center items-center group focus:outline-none"
            aria-label="Open menu"
          >
            <div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-2 group-hover:opacity-100" : "group-hover:opacity-100"}`} />
            <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "group-hover:opacity-100"}`} />
            <div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-2 group-hover:opacity-100" : "group-hover:opacity-100"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900 shadow-lg rounded-b-lg">
          <div className="flex flex-col items-center py-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`relative group block text-slate-300 ${HOVER_ACCENT_COLOR} transition-colors px-3 py-3 rounded-md text-base font-medium w-full text-center`}
              >
               {link.name}
               <span className={`absolute bottom-1 left-0 w-0 h-0.5 ${ACCENT_BG_COLOR} transition-all duration-300 ease-out group-hover:w-full`}></span>
              </a>
            ))}
            <a 
              href={PROFILE_DATA.resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className={`mt-2 px-6 py-3 border ${ACCENT_BORDER_COLOR} ${ACCENT_COLOR} rounded-md text-base font-medium ${HOVER_ACCENT_BG_COLOR} hover:text-slate-900 transition-colors w-3/4 text-center`}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
