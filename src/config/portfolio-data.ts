export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface TechStackItem {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  target?: "_blank" | "_self";
  featured?: boolean;
}

export interface PortfolioData {
  fullName: string;
  location: string;
  profilePicture: string;
  tagline: string;
  about: string;
  email: string;
  socialLinks: SocialLink[];
  techStack: TechStackItem[];
  projects: Project[];
}

// Your portfolio data - customize this!
export const portfolioData: PortfolioData = {
  fullName: 'Kenji "Brocks" I. Tabugadir',
  location: 'Philippines',
  profilePicture: '/profile.jpg',
  tagline: 'IT Student | Linux & Server Enthusiast | Full-Stack Developer',

  about: `I'm an IT student who loves building, breaking, and rebuilding systems until they actually make sense.
I work with Linux servers, self-hosted services, and full-stack web applications using React, TypeScript, and modern backend stacks.

Most of my projects involve deploying real systems on my own server — Docker, firewalls, monitoring, and automation included.
When I’m not coding, I’m probably tweaking Linux configs, learning how things work under the hood, or keeping up with new tech trends.`,
  
  email: 'tabugadirkenjibrocks@gmail.com',
  
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/Wacky-sama',
      icon: 'github'
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kenji-brocks-ibus-tabugadir-6b4379311/',
      icon: 'linkedin'
    },
    {
      platform: 'Twitter',
      url: 'https://x.com/Kenji_samaaa',
      icon: 'twitter'
    },
  ],
  
  techStack: [
    // Frontend
    { name: 'React', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },
    { name: 'Next.js', category: 'frontend' },
    { name: 'Vue.js', category: 'frontend' },
    
    // Backend
    { name: 'Node.js', category: 'backend' },
    { name: 'Deno', category: 'backend' },
    { name: 'Python', category: 'backend' },
    { name: 'PostgreSQL', category: 'backend' },
    { name: 'Supabase', category: 'backend' },
    
    // DevOps
    { name: 'Docker', category: 'devops' },
    { name: 'Apache', category: 'devops' },
    { name: 'Linux', category: 'devops' },
    { name: 'Git', category: 'devops' },
    
    // Tools
    { name: 'VS Code', category: 'tools' },
    { name: 'Figma', category: 'tools' },
    { name: 'Postman', category: 'tools' },
  ],
  
  projects: [
    {
      id: '1',
      title: 'Portfolio',
      description: 'A minimalist portfolio with AI chat assistant built with React, TypeScript, and Gemini API',
      image: '/projects/portfolio-v2.png',
      techStack: ['React', 'TypeScript', 'Tailwind', 'Deno', 'Gemini AI'],
      liveUrl: 'https://yourportfolio.com',
      githubUrl: 'https://github.com/yourusername/portfolio-v2',
      featured: true
    },
    {
      id: '2',
      title: 'Linux Hive: Home Passive-Income Server',
      description: 'A self-driven project exploring Linux server administration and passive income strategies.',
      image: '/projects/project-2.png',
      techStack: ['Linux (Debian 13)', 'Docker', 'Bash', 'Honeygain'],
      githubUrl: 'https://github.com/Wacky-sama/Linux-Hive-Home-Passive-Income-Server',
      target: "_blank"
    },
    {
      id: '3',
      title: 'TRACE System',
      description: 'A role-based alumni management system with admin dashboards, event creation, and user approval features.',
      image: '/projects/project-3.png',
      techStack: ['React', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Wacky-sama/TRACE',
    },
  ]
};