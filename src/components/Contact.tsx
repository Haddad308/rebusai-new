import React from 'react';
import { Utensils, Hammer, Heart, Plane } from 'lucide-react';

const Contact = () => {
  const impactStats = [
    {
      icon: Utensils,
      number: '30',
      label: 'Meals',
      subtitle: 'every month'
    },
    {
      icon: Hammer,
      number: '40%',
      label: 'funds careers & homes',
      subtitle: ''
    },
    {
      icon: Heart,
      number: '$2.50',
      label: 'sent to chosen charity',
      subtitle: ''
    },
    {
      icon: Plane,
      number: '$1',
      label: 'helps volunteers travel',
      subtitle: ''
    }
  ];

  return (
    <section id="impact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Impact Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            THE IMPACT I AM MAKING
          </h2>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                <stat.icon className="h-10 w-10 text-blue-600" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-slate-700 mb-1">
                {stat.label}
              </div>
              {stat.subtitle && (
                <div className="text-sm text-slate-500">
                  {stat.subtitle}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Platform Description */}
        <div className="bg-white rounded-2xl p-12 shadow-lg text-center mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            About Do Good Society Platform
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
            Do Good Society is an affordable, AI-powered, all-in-one platform designed for creators and changemakers. 
            We offer 'Done-for-You' marketing and premium services alongside our volunteer and membership platform, 
            ensuring your journey to making an impact is both seamless and effective.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Ready to Make an Impact?
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300"
                placeholder="john@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                I'm interested in
              </label>
              <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300">
                <option>Becoming a Member ($48.70/mo)</option>
                <option>Volunteering Opportunities</option>
                <option>Partnership Opportunities</option>
                <option>Learning More About Impact</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Message (Optional)
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 resize-none"
                placeholder="Tell us about your interest in making an impact..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Started Today
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;