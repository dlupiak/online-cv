export interface Profile {
  name: string;
  title: string;
  github: string;
  linkedin?: string;
  summary: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  project: string;
  details: string;
  technologies: string[];
  contributions: string[];
}

export interface Achievement {
  title: string;
  event: string;
}

export interface OpenSourceProject {
  name: string;
  url: string;
  description: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface CVData {
  profile: Profile;
  skills: SkillCategory[];
  achievements: Achievement[];
  openSource: OpenSourceProject[];
  experience: Experience[];
  education: Education[];
  languages: Language[];
}
