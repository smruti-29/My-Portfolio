import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          >
            Smruti Ranjan Basantia
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-gray-700 hover:text-purple-600 transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/smruti-29" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-gray-700 hover:text-purple-600 transition-colors" />
            </a>
            <a href="www.linkedin.com/in/smruti-ranjan-basantia" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-gray-700 hover:text-purple-600 transition-colors" />
            </a>
            <a href="https://x.com/SmrutiBasantia" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-gray-700 hover:text-purple-600 transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        className="md:hidden bg-white/90 backdrop-blur-md"
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {['home', 'about', 'projects', 'experience', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors capitalize"
            >
              {item}
            </button>
          ))}
          <div className="flex space-x-4 px-3 py-2">
            <a href="https://github.com/smruti-29" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-gray-700 hover:text-purple-600 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/smruti-ranjan-basantia/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-gray-700 hover:text-purple-600 transition-colors" />
            </a>
            <a href="https://x.com/SmrutiBasantia" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-gray-700 hover:text-purple-600 transition-colors" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;