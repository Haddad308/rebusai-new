import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="/Flow for Coupons.png" 
          alt="People joining hands together" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 border border-white/20">
            <Heart className="h-4 w-4" />
            <span className="text-sm font-medium">Creating Positive Impact</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Be the Spark Behind
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Real Change
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Your actions bring food to tables, skills to hands, and roofs over heads.
            Together, we create meaningful impact that transforms communities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="group bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center space-x-2">
              <span>Start Making Impact</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105">
              Learn Our Mission
            </button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">10K+</div>
              <div className="text-white/70 text-sm md:text-base">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
              <div className="text-white/70 text-sm md:text-base">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">24/7</div>
              <div className="text-white/70 text-sm md:text-base">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;