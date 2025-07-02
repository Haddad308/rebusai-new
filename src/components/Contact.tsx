import React from 'react';
import { motion } from 'framer-motion';
import { 
  Utensils, 
  GraduationCap, 
  Home, 
  Heart,
  Target,
  Globe,
  Users,
  TrendingUp
} from 'lucide-react';

const Contact = () => {
  const impactStats = [
    {
      icon: Utensils,
      number: '30+',
      label: 'MEALS PROVIDED',
      subtitle: 'every month per member',
      color: 'from-amber-400 to-amber-500'
    },
    {
      icon: GraduationCap,
      number: '40%',
      label: 'CAREER FUNDING',
      subtitle: 'job training & housing',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Heart,
      number: '$2.50',
      label: 'CHARITY SUPPORT',
      subtitle: 'to chosen organizations',
      color: 'from-amber-400 to-amber-500'
    },
    {
      icon: Home,
      number: '$1.00',
      label: 'VOLUNTEER TRAVEL',
      subtitle: 'supporting global service',
      color: 'from-amber-500 to-amber-600'
    }
  ];

  const platformFeatures = [
    {
      icon: Target,
      title: 'AI-POWERED PLATFORM',
      description: 'Advanced technology driving efficient impact allocation and member benefits optimization.'
    },
    {
      icon: Globe,
      title: 'GLOBAL REACH',
      description: 'Operating across 180+ communities worldwide with verified local partnerships and impact tracking.'
    },
    {
      icon: Users,
      title: 'CREATOR SUPPORT',
      description: 'Done-for-you marketing and premium services for changemakers building their own impact initiatives.'
    },
    {
      icon: TrendingUp,
      title: 'MEASURABLE RESULTS',
      description: 'Blockchain-verified impact tracking with transparent reporting and guaranteed outcome delivery.'
    }
  ];

  return (
    <div id="impact" className="bg-slate-900">
      {/* Impact Header */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent"></div>
          <div className="absolute top-20 left-20 w-48 h-48 border border-amber-400/20 rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-amber-400/10 rotate-12"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <div className="w-16 h-1 bg-amber-400 mx-auto mb-8"></div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
                THE IMPACT
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  I AM MAKING
                </span>
              </h1>
            </div>
            
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
              Every action creates measurable change. See exactly how your membership transforms lives globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Grid */}
      <section className="py-32 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900 border border-amber-400/20 p-8 text-center hover:border-amber-400/40 transition-all duration-500 group"
              >
                <div className="space-y-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} bg-opacity-20 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-10 w-10 text-amber-400" />
                  </div>
                  
                  <div>
                    <div className="text-5xl font-black text-amber-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-bold text-white mb-2 tracking-wide">
                      {stat.label}
                    </div>
                    <div className="text-sm text-white/60 tracking-wide">
                      {stat.subtitle}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Description */}
      <section className="py-32 relative">
        <div className="absolute inset-0">
          <img 
            src="/qtq80-Eyl6T2.jpeg" 
            alt="Global impact visualization" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div>
                  <div className="w-16 h-1 bg-amber-400 mb-6"></div>
                  <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                    ABOUT THE
                    <br />
                    <span className="text-amber-400">PLATFORM</span>
                  </h2>
                </div>
                
                <p className="text-xl text-white/80 leading-relaxed font-light">
                  Do Good Society is an affordable, AI-powered, all-in-one platform designed for creators 
                  and changemakers. We offer 'Done-for-You' marketing and premium services alongside our 
                  volunteer and membership platform, ensuring your journey to making an impact is both 
                  seamless and effective.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white/70 leading-relaxed">
                      <span className="text-amber-400 font-semibold">VERIFIED IMPACT:</span> Blockchain-verified 
                      tracking ensures every dollar creates measurable, transparent change.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white/70 leading-relaxed">
                      <span className="text-amber-400 font-semibold">PREMIUM BENEFITS:</span> Members save 
                      an average of $286 annually through exclusive discounts and travel deals.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white/70 leading-relaxed">
                      <span className="text-amber-400 font-semibold">GLOBAL COMMUNITY:</span> Join 50,000+ 
                      changemakers creating lasting impact across 180+ communities worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 gap-8">
                {platformFeatures.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 border border-amber-400/20 p-6 hover:border-amber-400/40 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 tracking-wide">{feature.title}</h3>
                        <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 bg-slate-800/30">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-1 bg-amber-400 mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              READY TO MAKE
              <br />
              <span className="text-amber-400">AN IMPACT?</span>
            </h2>
            <p className="text-xl text-white/70">
              Join thousands creating measurable change worldwide
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
                  <label className="block text-white font-medium mb-2 tracking-wide text-sm">
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-800 border border-slate-600 text-white px-4 py-3 focus:border-amber-400 focus:outline-none transition-colors duration-300"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2 tracking-wide text-sm">
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
                <label className="block text-white font-medium mb-2 tracking-wide text-sm">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  className="w-full bg-slate-800 border border-slate-600 text-white px-4 py-3 focus:border-amber-400 focus:outline-none transition-colors duration-300"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2 tracking-wide text-sm">
                  I'M INTERESTED IN
                </label>
                <select className="w-full bg-slate-800 border border-slate-600 text-white px-4 py-3 focus:border-amber-400 focus:outline-none transition-colors duration-300">
                  <option>Becoming a Member</option>
                  <option>Volunteer Opportunities</option>
                  <option>Partnership Opportunities</option>
                  <option>Learning More About Impact</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2 tracking-wide text-sm">
                  MESSAGE (OPTIONAL)
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-slate-800 border border-slate-600 text-white px-4 py-3 focus:border-amber-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your interest in making an impact..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 font-bold text-lg tracking-wider hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105"
              >
                GET STARTED TODAY
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Final Impact Statement */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              EVERY ACTION
              <br />
              <span className="text-amber-400">CREATES CHANGE</span>
            </h2>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              Join the movement where your membership, volunteer hours, and advocacy create 
              measurable, lasting impact in communities worldwide.
            </p>
            <div className="pt-8">
              <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-12 py-4 font-bold text-lg tracking-wider hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105">
                START YOUR IMPACT TODAY
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;