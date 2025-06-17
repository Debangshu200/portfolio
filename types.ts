
export interface Profile {
  name: string;
  title: string;
  bio: string;
  shortBio: string;
  profileImageUrl: string;
  resumeUrl: string;
  email: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string; // Optional
  };
}

export interface Skill {
  name: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  duration: string;
  descriptionPoints: string[];
  logoUrl?: string; // Optional, e.g., from picsum or a generic one
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
}

export interface Education {
  id:string;
  institution: string;
  degree: string;
  duration: string;
  description?: string; // Optional
  logoUrl?: string; // Optional
}
    