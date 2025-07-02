import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: 'Membership Tiers', href: '#membership' },
      { name: 'Volunteer Programs', href: '#volunteer' },
      { name: 'Impact Dashboard', href: '#impact' },
      { name: 'Global Partners', href: '#partners' }
    ],
    support: [
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Member Benefits', href: '#benefits' },
      { name: 'Travel Credits', href: '#travel' },
      { name: 'Help Center', href: '#help' }
    ],
    community: [
      { name: 'Success Stories', href: '#stories' },
      { name: 'Recognition Program', href: '#recognition' },
      { name: 'Global Events', href: '#events' },
      { name: 'Impact Blog', href: '#blog' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Impact Transparency', href: '#transparency' },
      { name: 'Contact Us', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const impactStats = [
    { number: '50K+', label: 'Lives Transformed' },
    { number: '1.8M', label: 'Meals Provided' },
    { number: '180+', label: 'Global Communities' },
    { number: '98%', label: 'Member Satisfaction' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-amber-400/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                  <Heart className="h-7 w-7 text-slate-900" />
                </div>
                <span className="text-2xl font-bold text-white tracking-wide">
                  DO GOOD SOCIETY
                </span>
              </div>
              
              <p className="text-white/70 leading-relaxed text-lg">
                The world's most impactful membership community where your actions create 
                measurable change. Join 50,000+ changemakers transforming lives globally.
              </p>

              {/* Impact Stats */}
              <div className="grid grid-cols-2 gap-6">
                {impactStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-black text-amber-400 mb-1">{stat.number}</div>
                    <div className="text-white/60 text-sm tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-white/70">
                  <Mail className="h-5 w-5 text-amber-400" />
                  <span>hello@dogoodsociety.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone className="h-5 w-5 text-amber-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin className="h-5 w-5 text-amber-400" />
                  <span>Global Headquarters, San Francisco</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-slate-800 border border-amber-400/20 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 group"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-white mb-6 tracking-wide text-sm">PLATFORM</h3>
                <ul className="space-y-4">
                  {footerLinks.platform.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-amber-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white mb-6 tracking-wide text-sm">SUPPORT</h3>
                <ul className="space-y-4">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-amber-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white mb-6 tracking-wide text-sm">COMMUNITY</h3>
                <ul className="space-y-4">
                  {footerLinks.community.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-amber-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white mb-6 tracking-wide text-sm">LEGAL</h3>
                <ul className="space-y-4">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-amber-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-amber-400/20 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">STAY CONNECTED</h3>
              <p className="text-white/70">Get exclusive updates on your impact and new opportunities to create change.</p>
            </div>
            <div className="flex w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-slate-800 border border-slate-600 text-white focus:border-amber-400 focus:outline-none transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 font-bold tracking-wider hover:from-amber-500 hover:to-amber-600 transition-all duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-400/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 Do Good Society. All rights reserved.
            </p>
            <div className="flex items-center space-x-8 text-sm text-white/60">
              <span>Creating measurable impact worldwide</span>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-amber-400" />
                <span>Made with purpose</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;