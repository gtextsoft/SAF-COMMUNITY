import React, { useState, useEffect } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Compass } from 'lucide-react';

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: 'Tech Founders', href: '#tech-founders' },
  { name: 'Entrepreneurs', href: '#entrepreneurs' },
  { name: 'Authors & Speakers', href: '#authors-speakers' },
  { name: 'Realtors', href: '#realtors' },
  { name: 'Creatives', href: '#creatives' },
  { name: 'Money', href: '#finance' },
  { name: 'Wellness Experts', href: '#wellness' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openSignupModal = () => {
    const modal = document.getElementById('signup-modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Compass className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Dr. Stephen's Circle</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>


          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-600 hover:text-primary-600 font-medium transition-colors text-left px-4 py-2 hover:bg-gray-50 rounded"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;