import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Crown, 
  Zap,
  ChevronDown,
  ChevronUp,
  Smartphone,
  Plane,
  Gift,
  Shield,
  Users,
  Award,
  Heart,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MembershipPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const membershipTiers = [
    {
      name: 'IMPACT STARTER',
      price: '$48.70',
      period: '/month',
      description: 'Begin your journey of meaningful change',
      icon: Star,
      popular: false,
      features: [
        '30 meals provided monthly',
        'Basic discount app access',
        'Quarterly impact reports',
        'Community forum access',
        'Standard travel credits',
        'Basic volunteer opportunities'
      ],
      cta: 'START IMPACT'
    },
    {
      name: 'CHANGE LEADER',
      price: '$97.40',
      period: '/month',
      description: 'Amplify your impact and unlock premium benefits',
      icon: Crown,
      popular: true,
      features: [
        '60 meals provided monthly',
        'Premium discount app (15% avg savings)',
        'Monthly impact reports',
        'Priority community access',
        'Enhanced travel credits',
        'Leadership volunteer roles',
        'Exclusive member events',
        'Direct charity selection'
      ],
      cta: 'LEAD CHANGE'
    },
    {
      name: 'GLOBAL TRANSFORMER',
      price: '$194.80',
      period: '/month',
      description: 'Maximum impact with exclusive elite benefits',
      icon: Zap,
      popular: false,
      features: [
        '120 meals provided monthly',
        'VIP discount app (20% avg savings)',
        'Weekly impact reports',
        'Executive community access',
        'Premium travel credits & concierge',
        'Executive volunteer programs',
        'VIP member events & retreats',
        'Custom charity partnerships',
        'Personal impact dashboard',
        'Direct founder access'
      ],
      cta: 'TRANSFORM GLOBALLY'
    }
  ];

  const benefits = [
    {
      icon: Smartphone,
      title: 'PREMIUM SAVINGS APP',
      description: 'Access 700,000+ vendors with guaranteed savings up to 20%'
    },
    {
      icon: Plane,
      title: 'EXCLUSIVE TRAVEL DEALS',
      description: 'Cheaper than Expedia with luxury upgrades and member-only rates'
    },
    {
      icon: Gift,
      title: 'WEEKLY PRIZE DRAWS',
      description: 'Win cruises, Disney passes, Uber credits, and premium experiences'
    },
    {
      icon: Shield,
      title: 'IMPACT GUARANTEE',
      description: '100% transparency with verified impact tracking and reporting'
    },
    {
      icon: Users,
      title: 'ELITE COMMUNITY',
      description: 'Connect with like-minded leaders and changemakers globally'
    },
    {
      icon: Award,
      title: 'RECOGNITION PROGRAM',
      description: 'Earn badges, certificates, and public recognition for your impact'
    }
  ];

  const faqs = [
    {
      question: 'How is my membership fee allocated?',
      answer: 'Your membership is transparently allocated: 40% funds job training and subsidized housing, 30% provides meals to children, 20% supports our discount platform and member benefits, 7% goes to partner charities, and 3% supports volunteer travel programs.'
    },
    {
      question: 'What makes the discount app different?',
      answer: 'Our AI-powered platform partners with 700,000+ vendors globally, offering verified savings that average 15-20%. Unlike other apps, we guarantee our rates beat major competitors like Expedia and Booking.com, with exclusive member-only deals.'
    },
    {
      question: 'How do I track my impact?',
      answer: 'Every member receives detailed impact reports showing exactly how their contribution has been used - from specific meals provided to training programs funded. Our blockchain-verified tracking ensures 100% transparency.'
    },
    {
      question: 'Can I change my membership tier?',
      answer: 'Yes, you can upgrade or downgrade your membership at any time. Changes take effect at your next billing cycle, and your impact allocation adjusts accordingly.'
    },
    {
      question: 'What volunteer opportunities are available?',
      answer: 'Members can participate in local food distribution, job training mentorship, housing support programs, and community outreach. Higher tiers unlock leadership roles and international volunteer travel opportunities.'
    },
    {
      question: 'Is there a commitment period?',
      answer: 'No long-term commitment required. You can cancel anytime with 30 days notice. However, we recommend staying for at least 6 months to see the full impact of your contribution.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-amber-400/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-slate-900" />
              </div>
              <span className="text-xl font-bold text-white tracking-wide">
                DO GOOD SOCIETY
              </span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-white/90 hover:text-amber-400 transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Confident woman speaking on stage" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <div className="w-16 h-1 bg-amber-400 mx-auto mb-8"></div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
                JOIN OUR GLOBAL
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  COMMUNITY
                </span>
              </h1>
            </div>
            
            <p className="text-2xl md:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
              EMPOWER YOUR CAREER | TRANSFORM COMMUNITIES | SAVE MONEY
            </p>

            <div className="bg-slate-800/50 border border-amber-400/20 p-8 max-w-4xl mx-auto">
              <p className="text-lg text-white/70 leading-relaxed">
                Every membership creates measurable impact: <span className="text-amber-400 font-semibold">30+ meals monthly</span>, 
                <span className="text-amber-400 font-semibold"> career training funding</span>, and 
                <span className="text-amber-400 font-semibold"> premium member benefits</span> that save you hundreds annually.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-32 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
              MEMBERSHIP TIERS
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Choose your level of impact and unlock benefits that grow with your commitment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative bg-slate-900 border-2 p-8 ${
                  tier.popular 
                    ? 'border-amber-400 transform scale-105' 
                    : 'border-slate-700 hover:border-amber-400/50'
                } transition-all duration-500 group`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-2 font-bold text-sm tracking-wider">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="space-y-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-amber-600/20 mx-auto mb-6 flex items-center justify-center group-hover:from-amber-400/30 group-hover:to-amber-600/30 transition-all duration-300">
                      <tier.icon className="h-8 w-8 text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">{tier.name}</h3>
                    <p className="text-white/60 text-sm mb-6">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-black text-amber-400">{tier.price}</span>
                      <span className="text-white/60 ml-2">{tier.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-4 font-bold text-lg tracking-wider transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 hover:from-amber-500 hover:to-amber-600'
                      : 'bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10'
                  }`}>
                    {tier.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="w-16 h-1 bg-amber-400 mx-auto mb-8"></div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
              WHY JOIN?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Exclusive advantages that deliver real value while creating global impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-amber-400/20 p-8 hover:border-amber-400/40 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center group-hover:from-amber-400/30 group-hover:to-amber-600/30 transition-all duration-300">
                    <benefit.icon className="h-8 w-8 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 tracking-wide">{benefit.title}</h3>
                    <p className="text-white/70 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="w-16 h-1 bg-amber-400 mx-auto mb-8"></div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
              FREQUENTLY ASKED
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900 border border-slate-700 hover:border-amber-400/30 transition-all duration-300"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-white font-semibold text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-amber-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-amber-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-transparent"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-1 bg-amber-400 mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              READY TO JOIN?
            </h2>
            <p className="text-xl text-white/70">
              Get started today and begin creating measurable impact
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-900 border border-amber-400/20 p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2 tracking-wide">
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-800 border border-slate-600 text-white px-4 py-3 focus:border-amber-400 focus:outline-none transition-colors duration-300"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2 tracking-wide">
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-800 border border-slate-600 text-white px-4 py-3 focus:border-amber-400 focus:outline-none transition-colors duration-300"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2 tracking-wide">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  className="w-full bg-slate-800 border border-slate-600 text-white px-4 py-3 focus:border-amber-400 focus:outline-none transition-colors duration-300"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2 tracking-wide">
                  MEMBERSHIP TIER
                </label>
                <select className="w-full bg-slate-800 border border-slate-600 text-white px-4 py-3 focus:border-amber-400 focus:outline-none transition-colors duration-300">
                  <option>Impact Starter - $48.70/month</option>
                  <option>Change Leader - $97.40/month</option>
                  <option>Global Transformer - $194.80/month</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 font-bold text-lg tracking-wider hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105"
              >
                START MY MEMBERSHIP
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;