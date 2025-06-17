
import React from 'react';
import { Profile, Skill, Experience, Project, Education } from './types';

export const ACCENT_COLOR = "text-sky-400"; // Was #64FFDA, using Tailwind class
export const ACCENT_BG_COLOR = "bg-sky-400";
export const ACCENT_BORDER_COLOR = "border-sky-400";
export const HOVER_ACCENT_COLOR = "hover:text-sky-300";
export const HOVER_ACCENT_BG_COLOR = "hover:bg-sky-300";

export const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${className}`}>
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.074 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${className}`}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764S7.466 6.732 6.5 6.732zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
  </svg>
);

export const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${className}`}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);


export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25V14.15M16.5 8.25h-9M12.75 4.5h-1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 8.25A2.25 2.25 0 019 6h6a2.25 2.25 0 012.25 2.25v2.25H6.75V8.25zM12 14.15V12m0 0H9m3 0h3" />
 </svg>
);

export const GraduationCapIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
    <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3M3.75 3v1.5M20.25 3v1.5M3.75 3h16.5M12 3v1.5m0 9.75L6.75 12M12 14.25L17.25 12" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25v6.75m0 0l-3-1.5m3 1.5l3-1.5M6 16.5l-3 1.5m3-1.5l-3-1.5m12 1.5l3-1.5m-3 1.5l3 1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);


export const PROFILE_DATA: Profile = {
  name: "Debangshu Das",
  title: "Software Engineer",
  shortBio: "Crafting beautiful and performant web experiences with a passion for clean code and user-centric approach.",
  bio: "Hi, I'm Debangshu Das, a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. I have expertise in languages such as C/C++, Python, JavaScript, and SQL, and I work with modern frameworks including ReactJS, NodeJS, ExpressJS, and ContextAPI. My experience also extends to working with databases like MySQL and MongoDB, and I regularly use developer tools like VS Code, GitHub, and Postman. I earned my Bachelor of Technology in Computer Science from Rungta College of Engineering and Technology, which has not only provided me with a solid technical background but also enhanced my problem-solving skills. During my internships at Genwave LLC and Awwaltech, I gained practical experience by debugging web pages, implementing innovative features like reverse key identification, integrating passwordless authentication, and assisting in significant backend migrations. Alongside my professional journey, I have built projects such as a full-stack e-commerce website and a React-based food app—each reflecting my ability to combine user-friendly design with robust functionality. My achievements, including scoring in the top ranks of my college and earning a 5-star rating for problem solving on HackerRank, are a testament to my commitment towards continuous learning and excellence. I am always excited to explore new technologies and collaborate on projects that push boundaries in web development.",
  profileImageUrl: "https://i.postimg.cc/vTGNdRjq/Whats-App-Image-2025-06-10-at-9-55-39-AM-1-removebg-preview.jpg",
  resumeUrl: "https://drive.google.com/file/d/1wOi7LTTqU7FxTowIuzRVB6Lai1uct4yA/view?usp=sharing", // Placeholder for resume link
  email: "debangshudas.deb@gmail.com",
  socialLinks: {
    github: "https://github.com/Debangshu200",
    linkedin: "https://linkedin.com/in/debangshu-das",
    twitter: "https://twitter.com/alexjohnsondev"
  }
};


export const SKILLS_DATA: Skill[] = [
  { name: "React" }, { name: "TypeScript" }, { name: "JavaScript (ES6+)" },
  { name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Node.js" },
  { name: "GraphQL" }, { name: "REST APIs" }, { name: "UI/UX Design" },
  { name: "Firebase" }, { name: "Git & GitHub" }, { name: "Agile Methodologies" }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "exp1",
    role: "Lead Frontend Developer",
    company: "Innovatech Solutions",
    companyUrl: "#",
    duration: "Jan 2021 - Present",
    descriptionPoints: [
      "Led a team of 5 frontend developers in building a new flagship product.",
      "Architected and implemented a scalable micro-frontend solution using React and TypeScript.",
      "Improved application performance by 30% through code optimization and lazy loading.",
      "Mentored junior developers and conducted code reviews."
    ],
    logoUrl: "https://picsum.photos/seed/innovatech/50/50"
  },
  {
    id: "exp2",
    role: "Senior Software Engineer",
    company: "TechCore Inc.",
    companyUrl: "#",
    duration: "Jun 2018 - Dec 2020",
    descriptionPoints: [
      "Developed and maintained key features for a SaaS platform used by thousands of users.",
      "Collaborated with backend and UX teams to deliver high-quality software.",
      "Successfully migrated legacy codebase to modern React hooks and context API.",
      "Contributed to CI/CD pipeline improvements."
    ],
    logoUrl: "https://picsum.photos/seed/techcore/50/50"
  },
  {
    id: "exp3",
    role: "Frontend Developer",
    company: "WebWorks Agency",
    duration: "Aug 2016 - May 2018",
    descriptionPoints: [
      "Built responsive websites and web applications for various clients.",
      "Worked with JavaScript, HTML5, CSS3, and jQuery.",
      "Gained experience with various CMS platforms."
    ],
    logoUrl: "https://picsum.photos/seed/webworks/50/50"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart functionality, and user authentication, built with Next.js and Firebase.",
    imageUrl: "https://picsum.photos/seed/ecom/600/400",
    techStack: ["Next.js", "React", "Firebase", "Tailwind CSS", "Stripe"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    id: "proj2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop interface, and notification system.",
    imageUrl: "https://picsum.photos/seed/taskapp/600/400",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    id: "proj3",
    title: "Portfolio Website V1",
    description: "My previous personal portfolio website, showcasing my skills and projects. Built with vanilla HTML, CSS, and JavaScript.",
    imageUrl: "https://picsum.photos/seed/portfolioV1/600/400",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "#",
    repoLink: "#"
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: "edu1",
    institution: "University of Technology",
    degree: "M.S. in Computer Science",
    duration: "2014 - 2016",
    description: "Focused on software engineering and human-computer interaction.",
    logoUrl: "https://picsum.photos/seed/uoftech/50/50"
  },
  {
    id: "edu2",
    institution: "State College",
    degree: "B.S. in Information Systems",
    duration: "2010 - 2014",
    description: "Graduated with honors.",
    logoUrl: "https://picsum.photos/seed/statecollege/50/50"
  }
];

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

    