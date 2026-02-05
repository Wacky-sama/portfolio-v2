import Header from './components/Header';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { portfolioData } from './config/portfolio-data';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Header Section */}
        <Header
          fullName={portfolioData.fullName}
          location={portfolioData.location}
          profilePicture={portfolioData.profilePicture}
        />

        <About
          tagline={portfolioData.tagline}
          about={portfolioData.about}
        />

        {/* Tech Stack Section */}
        <TechStack techStack={portfolioData.techStack} />

        {/* Projects Section */}
        <Projects projects={portfolioData.projects} />

        {/* Social Links Section */}
        <SocialLinks
          socialLinks={portfolioData.socialLinks}
          email={portfolioData.email}
        />

        {/* Footer */}
        <Footer />
      </div>
      <ChatWidget />
    </div>
  );
}

export default App;