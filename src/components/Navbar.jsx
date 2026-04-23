import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="hero" smooth={true} duration={800} className="text-xl font-bold tracking-tight text-black dark:text-white">
              Aswathy<span className="text-gray-400">.</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={800}
                spy={true}
                activeClass="text-black dark:text-white"
                className="cursor-pointer text-sm font-medium text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-card transition-all"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-light-muted dark:text-dark-muted"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black dark:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-nav absolute w-full left-0 py-6 border-b border-light-border dark:border-dark-border shadow-2xl">
          <div className="flex flex-col space-y-6 px-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={800}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-xl font-medium text-light-muted dark:text-dark-muted hover:text-black dark:hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
