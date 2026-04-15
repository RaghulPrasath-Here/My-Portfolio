import type { Skill, Project, ContactInfo } from '../types';

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React',         icon: 'devicon-react-original colored',        category: 'Frontend' },
  { name: 'Next.js',       icon: 'devicon-nextjs-plain',                  category: 'Frontend' },
  { name: 'TypeScript',    icon: 'devicon-typescript-plain colored',      category: 'Frontend' },
  { name: 'Tailwind CSS',  icon: 'devicon-tailwindcss-plain colored',     category: 'Frontend' },

  // Backend
  { name: 'Python',        icon: 'devicon-python-plain colored',          category: 'Backend' },
  { name: 'FastAPI',       icon: 'devicon-fastapi-plain colored',         category: 'Backend' },
  { name: 'Node.js',       icon: 'devicon-nodejs-plain colored',          category: 'Backend' },
  { name: 'REST APIs',     icon: 'devicon-openapi-plain colored',         category: 'Backend' },

  // Database
  { name: 'PostgreSQL',    icon: 'devicon-postgresql-plain colored',      category: 'Database' },
  { name: 'MongoDB',       icon: 'devicon-mongodb-plain colored',         category: 'Database' },

  // DevOps
  { name: 'Docker',        icon: 'devicon-docker-plain colored',          category: 'DevOps' },
  { name: 'AWS',           icon: 'devicon-amazonwebservices-plain colored', category: 'DevOps' },
  { name: 'CI/CD',         icon: 'devicon-githubactions-plain colored',   category: 'DevOps' },
  { name: 'Git',           icon: 'devicon-git-plain colored',             category: 'DevOps' },

  // Other
  { name: 'GraphQL',            icon: 'devicon-graphql-plain colored',    category: 'Other' },
  { name: 'AI API Integration', icon: 'devicon-tensorflow-original colored', category: 'Other' },
];

export const PROJECTS: Project[] = [
  {
    title: 'BookMyRoom',
    description: 'AI-powered Dublin room search that turns messy listing query into a searchable marketplace using GPT and vector embeddings.',
    tags: ['React', 'FastAPI', 'Supabase', 'PostgreSQL', 'pgvector', 'OpenAI', 'NLP'],
    featured: true,
    gradient: 'linear-gradient(135deg, #0a1628, #0d2040)',
    emoji: '📦',
    githubUrl: 'https://github.com/RaghulPrasath-Here/BookMyRoom',
    liveUrl: 'https://book-my-room-psi.vercel.app/',
  },
  {
    title: 'PlanHattan',
    description: 'A web app that helps users plan their day in Manhattan New York City by recommending attractions and restaurants based on Predicted busyness levels',
    tags: ['React', 'Java', 'SpringBoot', 'MySql', 'ML'],
    gradient: 'linear-gradient(135deg, #1a0a28, #200d40)',
    emoji: '📊',
    githubUrl: 'https://github.com/RaghulPrasath-Here/PlanHattan-FrontEnd',
    liveUrl: 'https://github.com/RaghulPrasath-Here/PlanHattan-FrontEnd',
  },
  {
    title: 'Social Media App',
    description: 'Modern social platform with real-time messaging, stories, and content sharing features.',
    tags: ['React Native', 'Firebase', 'Socket.io'],
    gradient: 'linear-gradient(135deg, #0a1a14, #0d2818)',
    emoji: '💬',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Medical RAG System',
    description: 'RAG system for medical document Q&A using local LLMs — retrieves, cites, and guards against hallucinations.',
    tags: ['RAG', 'LLM', 'Chromadb', 'llama3', 'streamlit', 'nlp', 'Python'],
    gradient: 'linear-gradient(135deg, #1a1208, #28200d)',
    emoji: '✅',
    githubUrl: 'https://github.com/RaghulPrasath-Here/medical-RAG',
    liveUrl: 'https://github.com/RaghulPrasath-Here/medical-RAG',
  },
];

export const CONTACT_INFO: ContactInfo[] = [
  { icon: '✉', label: 'Email', value: 'raghulprasathhere@gmail.com' },
  { icon: '📍', label: 'Location', value: 'Dublin, Ireland' },
  { icon: '📞', label: 'Phone', value: '+353 831265366' },
];

export const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

export const ABOUT_STATS = [
  { icon: '⟨/⟩', label: 'Clean Code', value: '3+ Years' },
  { icon: '🎓', label: 'Education', value: 'MSc CS, UCD' },
  { icon: '⚡', label: 'Projects', value: '5+' },
];
