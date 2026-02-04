import type { TechStackItem } from '../config/portfolio-data';

interface TechStackProps {
  techStack: TechStackItem[];
}

const CategorySection = ({ title, items }: { title: string; items: TechStackItem[] }) => (
    <div>
      <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <span
            key={tech.name}
            className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200 transition-colors"
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );

export default function TechStack({ techStack }: TechStackProps) {
  const categories = {
    frontend: techStack.filter(tech => tech.category === 'frontend'),
    backend: techStack.filter(tech => tech.category === 'backend'),
    devops: techStack.filter(tech => tech.category === 'devops'),
    tools: techStack.filter(tech => tech.category === 'tools'),
  };

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Tech Stack</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CategorySection title="Frontend" items={categories.frontend} />
        <CategorySection title="Backend" items={categories.backend} />
        <CategorySection title="DevOps" items={categories.devops} />
        <CategorySection title="Tools" items={categories.tools} />
      </div>
    </section>
  );
}