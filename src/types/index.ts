export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}