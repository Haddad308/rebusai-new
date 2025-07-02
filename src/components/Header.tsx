import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'MISSION' },
    { href: '/membership', label: 'MEMBERSHIP', isRoute: true },
    { href: '#impact', label: 'IMPACT' },
    { href: '#contact', label: 'CONTACT' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-amber-400/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <Heart className="h-6 w-6 text-slate-900" />
            </div>
            <span className="text-xl font-bold text-white tracking-wide">
              DO GOOD SOCIETY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-12">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-white/90 hover:text-amber-400 font-medium text-sm tracking-wider transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-amber-400 font-medium text-sm tracking-wider transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              to="/membership"
              className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-3 rounded-none font-bold text-sm tracking-wider hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105"
            >
              JOIN NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/98 backdrop-blur-md border-t border-amber-400/20 py-6">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-white/90 hover:text-amber-400 font-medium text-sm tracking-wider transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-white/90 hover:text-amber-400 font-medium text-sm tracking-wider transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <Link 
                to="/membership"
                className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-3 rounded-none font-bold text-sm tracking-wider mt-4 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                JOIN NOW
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;