import React from 'react';
import { Plane, Target, Users, Award } from 'lucide-react';

const Services = () => {
  const opportunities = [
    {
      icon: Plane,
      title: 'Free Travel Credits',
      description: 'Every new member funnels $1 into a fund you can redeem for flights, fuel, or lodging when you serve.',
      highlight: 'Travel Fund'
    },
    {
      icon: Target,
      title: 'Clear Impact Updates',
      description: 'Your hours help deliver 30 meals per member, fund job-training, and expand subsidized housing—we send you the stats after every project.',
      highlight: 'Real Results'
    },
    {
      icon: Users,
      title: 'Partner Experience',
      description: 'Work hands-on with our charity partners and PREIP\'s affordable-housing teams—great for résumés and networking.',
      highlight: 'Career Growth'
    },
    {
      icon: Award,
      title: 'Community Recognition',
      description: 'Join a like-minded crew, log verified service hours, and enjoy weekly shout-outs and prize draws.',
      highlight: 'Recognition'
    }
  ];

  return (
    <section id="volunteer" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Volunteer Opportunities
          </h2>
          <p className="text-2xl font-semibold text-slate-700 mb-6">
            Why Choose Us
          </p>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join a community that values your time and amplifies your impact through meaningful volunteer opportunities.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 text-center"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <opportunity.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {opportunity.highlight}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {opportunity.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {opportunity.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg text-lg">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;