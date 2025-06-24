import React from 'react';
import { Heart, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: 'Volunteer Opportunities', href: '#volunteer' },
      { name: 'Membership Benefits', href: '#membership' },
      { name: 'Impact Dashboard', href: '#impact' },
      { name: 'Partner Charities', href: '#' }
    ],
    support: [
      { name: 'How It Works', href: '#' },
      { name: 'Travel Credits', href: '#' },
      { name: 'Discount App', href: '#' },
      { name: 'Help Center', href: '#' }
    ],
    community: [
      { name: 'Success Stories', href: '#' },
      { name: 'Weekly Draws', href: '#' },
      { name: 'Recognition Program', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Transparency Report', href: '#' },
      { name: 'Contact Us', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold">RebusAI</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Be the spark behind real change. Your actions bring food to tables, 
              skills to hands, and roofs over heads.
            </p>
            {/* Impact Stats */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-4 w-4" />
                <span>hello@rebusai.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-white mb-4">Platform</h3>
              <ul className="space-y-3">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Community</h3>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Connected</h3>
              <p className="text-slate-300">Get updates on your impact and new volunteer opportunities.</p>
            </div>
            <div className="flex w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-l-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-white"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-r-xl hover:bg-blue-700 transition-colors duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 RebusAI. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>Making real change, one action at a time ❤️</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;