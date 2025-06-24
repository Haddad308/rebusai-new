import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#volunteer', label: 'Volunteer' },
    { href: '#membership', label: 'Membership' },
    { href: '#impact', label: 'Impact' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className={`h-8 w-8 transition-colors duration-300 ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`} />
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              RebusAI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg">
              Become a Member
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm rounded-lg mt-2 p-4 shadow-xl">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 mt-4">
                Become a Member
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;