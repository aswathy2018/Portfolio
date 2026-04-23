import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="border-t border-light-border dark:border-dark-border py-12">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="mailto:aswathysudhakaran3002@gmail.com" className="text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-sm text-light-muted dark:text-dark-muted text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Aswathy Sudhakaran.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
