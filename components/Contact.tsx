
import React from 'react';
import Section from './Section';
import { PROFILE_DATA, ACCENT_COLOR, HOVER_ACCENT_COLOR, ACCENT_BG_COLOR, ACCENT_BORDER_COLOR, HOVER_ACCENT_BG_COLOR } from '../constants';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="text-center max-w-xl mx-auto">
        <h3 className="text-2xl md:text-3xl text-slate-200 font-semibold mb-4">
          What's Next?
        </h3>
        <p className="text-slate-400 mb-8 text-lg">
          I'm currently looking for new opportunities, and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a
          href={`mailto:${PROFILE_DATA.email}`}
          className={`inline-block px-10 py-4 border ${ACCENT_BORDER_COLOR} ${ACCENT_COLOR} rounded-md text-lg font-medium ${HOVER_ACCENT_BG_COLOR} hover:text-slate-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/50`}
        >
          Say Hello
        </a>
      </div>
    </Section>
  );
};

export default Contact;
    