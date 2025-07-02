import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Video */}
      <div className="absolute inset-0">
        <div className="w-full h-full">
          <iframe 
            width="100%" 
            height="100%" 
            style={{
              border: 0,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }} 
            scrolling="no" 
            src="https://go.screenpal.com/player/cTinI5nl2fy?width=100%&height=100%&ff=1&title=0&controls=0&autoplay=1&loop=1&muted=1" 
            allowFullScreen={true}
            allow="autoplay; fullscreen"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
      </div>

      {/* Geometric Accents */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-amber-400/30 rotate-45"></div>
      <div className="absolute bottom-32 right-20 w-24 h-24 bg-amber-400/10 rotate-12"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center space-x-3 bg-amber-400/10 backdrop-blur-sm rounded-none px-8 py-4 border border-amber-400/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            <span className="text-amber-400 font-medium tracking-wider text-sm">GLOBAL IMPACT COMMUNITY</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight mb-8">
              BE THE SPARK
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                BEHIND CHANGE
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            JOIN THE WORLD'S MOST IMPACTFUL COMMUNITY WHERE YOUR ACTIONS
            <br className="hidden md:block" />
            TRANSFORM LIVES AND BUILD SUSTAINABLE FUTURES
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center pt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <button className="group bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-12 py-5 rounded-none font-bold text-lg tracking-wider hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
              <span>JOIN US</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-none font-bold text-lg tracking-wider hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-3">
              <Play className="h-5 w-5" />
              <span>LEARN MORE</span>
            </button>
          </motion.div>

          {/* Impact Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-12 pt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <div className="text-center border-r border-amber-400/20 last:border-r-0">
              <div className="text-4xl md:text-5xl font-black text-amber-400 mb-2">50K+</div>
              <div className="text-white/70 text-sm tracking-wider font-medium">LIVES TRANSFORMED</div>
            </div>
            <div className="text-center border-r border-amber-400/20 last:border-r-0">
              <div className="text-4xl md:text-5xl font-black text-amber-400 mb-2">180+</div>
              <div className="text-white/70 text-sm tracking-wider font-medium">GLOBAL COMMUNITIES</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-amber-400 mb-2">24/7</div>
              <div className="text-white/70 text-sm tracking-wider font-medium">IMPACT SUPPORT</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-amber-400"></div>
          <div className="text-amber-400 text-xs tracking-wider font-medium">SCROLL</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;