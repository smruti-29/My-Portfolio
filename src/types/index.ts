export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  company: string;
  logo: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}