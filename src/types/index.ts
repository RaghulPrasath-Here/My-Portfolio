export interface Skill {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Database' | 'Other';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  gradient: string;
  emoji: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

export type SkillFilter = 'All' | 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Other';
