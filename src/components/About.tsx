import React from 'react';
import { DollarSign, Utensils, GraduationCap, Home, PieChart, Smartphone, Handshake } from 'lucide-react';

const About = () => {
  const membershipBreakdown = [
    {
      icon: PieChart,
      title: 'Transparency',
      description: '30 meals provided to a child (1 per day).',
      subtitle: '40% ($19.48) goes toward job training, guaranteed job & subsidized housing'
    },
    {
      icon: Smartphone,
      title: 'Sustainability',
      description: 'Discount Mobile App with access to 700,000+ vendors across North America, offering 10% off (avg. is 15%) on everyday purchases.',
      subtitle: 'Get travel deals guaranteed cheaper than Expedia or Booking. Join weekly—and soon daily—draws to win cruises, Disney passes, Uber credits, Airbnb stays, apparel, cosmetics, and more.'
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'Partnering with PREIP – Philanthropic Real Estate Investors Program to provide Affordable & Subsidized Housing',
      subtitle: '$2.50 per member to charities, $1 to volunteer travel'
    }
  ];

  const impactAreas = [
    {
      icon: DollarSign,
      title: 'Save Money',
      description: 'Get discounts on everyday purchases and travel deals'
    },
    {
      icon: Utensils,
      title: 'Feed Children',
      description: 'Provide 30 meals per month to children in need'
    },
    {
      icon: GraduationCap,
      title: 'Train Adults',
      description: 'Fund job training and career development programs'
    },
    {
      icon: Home,
      title: 'Build Housing',
      description: 'Expand affordable and subsidized housing options'
    }
  ];

  return (
    <section id="membership" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Membership Benefits Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-full font-semibold text-lg mb-4">
            $48.70/mo
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Members – Benefits That Outrun You
          </h2>
          <p className="text-2xl text-slate-600 mb-8">
            $48.70 Save hundreds, change lives, travel cheaper.
          </p>
          <div className="bg-slate-50 rounded-2xl p-8 max-w-4xl mx-auto mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              Your first $48.70 feeds a child 30 meals, channels 40% into accredited career training & subsidized housing, and shares $3.50 with partner charities + volunteer travel.
            </p>
          </div>
        </div>

        {/* Membership Breakdown */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Membership Breakdown
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipBreakdown.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                  <item.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h4>
                <p className="text-slate-700 mb-4 font-medium">
                  {item.description}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What's In It For Me Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-slate-900 text-center mb-8">
            WHAT'S IN IT FOR ME?
          </h3>
          <p className="text-xl text-slate-600 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Save money on daily life and travel while feeding children, training adults, and expanding affordable housing—all through one membership or one volunteer shift.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                  <area.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {area.title}
                </h4>
                <p className="text-slate-600 text-sm">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-50 rounded-2xl p-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">$286/yr</div>
              <div className="text-slate-600">Avg member saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">1.8M</div>
              <div className="text-slate-600">Meals funded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">148</div>
              <div className="text-slate-600">Families housed</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg text-lg">
            Become a Member
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;