export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  image: string;
}

export interface Skill {
  name: string;
  icon: string; // URL or component name
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
