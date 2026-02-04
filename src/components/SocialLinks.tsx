import type { SocialLink } from '../config/portfolio-data';
import { Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';
import type { ReactElement } from 'react';

interface SocialLinksProps {
  socialLinks: SocialLink[];
  email: string;
}

export default function SocialLinks({ socialLinks, email }: SocialLinksProps) {
  const getIcon = (iconName: string): ReactElement => {
    const icons: Record<string, ReactElement> = {
      github: <Github size={20} />,
      linkedin: <Linkedin size={20} />,
      twitter: <Twitter size={20} />,
      globe: <Globe size={20} />,
    };
    return icons[iconName.toLowerCase()] || <Globe size={20} />;
  };

  return (
    <section className="mt-16 pb-16 border-b border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect</h2>
      
      <div className="flex flex-wrap gap-4">
        {/* Social Links */}
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all group"
          >
            <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
              {getIcon(link.icon)}
            </span>
            <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
              {link.platform}
            </span>
          </a>
        ))}
        
        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all group"
        >
          <Mail size={20} />
          <span className="text-sm">Email Me</span>
        </a>
      </div>
    </section>
  );
}