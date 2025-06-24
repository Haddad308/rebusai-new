import {
  DollarSign,
  Utensils,
  GraduationCap,
  Home,
  PieChart,
  Smartphone,
  Handshake,
  Heart,
  Users,
  Clock,
  MapPin,
} from "lucide-react"
import image1 from "/food-bank-volunteer-1.jpg"
import image2 from "/Forming_a_partnership_-_high-scaled.jpg"
import image3 from "/qtq80-Eyl6T2.jpeg" 

const About = () => {
  const membershipBreakdown = [
    {
      icon: PieChart,
      title: "Transparency",
      description: "30 meals provided to a child (1 per day).",
      subtitle: "40% ($19.48) goes toward job training, guaranteed job & subsidized housing",
    },
    {
      icon: Smartphone,
      title: "Sustainability",
      description:
        "Discount Mobile App with access to 700,000+ vendors across North America, offering 10% off (avg. is 15%) on everyday purchases.",
      subtitle:
        "Get travel deals guaranteed cheaper than Expedia or Booking. Join weekly—and soon daily—draws to win cruises, Disney passes, Uber credits, Airbnb stays, apparel, cosmetics, and more.",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description:
        "Partnering with PREIP – Philanthropic Real Estate Investors Program to provide Affordable & Subsidized Housing",
      subtitle: "$2.50 per member to charities, $1 to volunteer travel",
    },
  ]

  const impactAreas = [
    {
      icon: DollarSign,
      title: "Save Money",
      description: "Get discounts on everyday purchases and travel deals",
    },
    {
      icon: Utensils,
      title: "Feed Children",
      description: "Provide 30 meals per month to children in need",
    },
    {
      icon: GraduationCap,
      title: "Train Adults",
      description: "Fund job training and career development programs",
    },
    {
      icon: Home,
      title: "Build Housing",
      description: "Expand affordable and subsidized housing options",
    },
  ]

  const volunteerOpportunities = [
    {
      icon: Utensils,
      title: "Food Distribution",
      description: "Help pack and distribute meals to families in need",
      time: "4 hours",
      location: "Local Food Banks",
    },
    {
      icon: GraduationCap,
      title: "Skills Training",
      description: "Mentor adults in job training and career development",
      time: "6 hours",
      location: "Training Centers",
    },
    {
      icon: Home,
      title: "Housing Support",
      description: "Assist with housing applications and support services",
      time: "3 hours",
      location: "Community Centers",
    },
    {
      icon: Heart,
      title: "Community Outreach",
      description: "Connect with families and provide ongoing support",
      time: "5 hours",
      location: "Various Locations",
    },
  ]

  return (
    <div>
       {/* Volunteer Section */}
      <section id="volunteer" className="py-24 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Volunteer Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500 text-white px-6 py-2 rounded-full font-semibold text-lg mb-4">
              Volunteer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Make a Direct Impact</h2>
            <p className="text-2xl text-slate-600 mb-8">
              Join our community of volunteers and see the change you create firsthand.
            </p>
            <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto mb-12 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                Every volunteer shift directly impacts lives in your community. Whether you have 3 hours or a full day,
                your time creates lasting change for families in need.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-20">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={image1}
                alt="Volunteers packing food for families in need"
                width={1200}
                height={600}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Volunteers in Action</h3>
                <p className="text-lg opacity-90">Making a difference, one meal at a time</p>
              </div>
            </div>
          </div>

          {/* Volunteer Opportunities */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Volunteer Opportunities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {volunteerOpportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 rounded-2xl mb-4">
                    <opportunity.icon className="h-7 w-7 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{opportunity.title}</h4>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{opportunity.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-slate-500">
                      <Clock className="h-4 w-4 mr-2" />
                      {opportunity.time}
                    </div>
                    <div className="flex items-center text-sm text-slate-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      {opportunity.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Building Partnerships for Change</h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  We believe in the power of collaboration. Our partnerships with local organizations, businesses, and
                  community leaders amplify the impact of every volunteer hour and membership dollar.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-orange-600 mr-3" />
                    <span className="text-slate-700">Community Organizations</span>
                  </div>
                  <div className="flex items-center">
                    <Handshake className="h-6 w-6 text-orange-600 mr-3" />
                    <span className="text-slate-700">Local Businesses</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-6 w-6 text-orange-600 mr-3" />
                    <span className="text-slate-700">Nonprofit Partners</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={image2}
                  alt="Partnership handshake representing collaboration"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Volunteer Impact Stats */}
          <div className="bg-white rounded-2xl p-12 text-center shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Volunteer Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">2,400+</div>
                <div className="text-slate-600">Volunteer Hours</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">850</div>
                <div className="text-slate-600">Active Volunteers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">45</div>
                <div className="text-slate-600">Community Partners</div>
              </div>
            </div>
          </div>

          {/* Inspirational Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
            <img
              src={image3}
              alt="Peaceful sunset over water representing hope and community"
              width={1200}
              height={400}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Together We Rise</h3>
                <p className="text-xl opacity-90">Building stronger communities, one act of service at a time</p>
              </div>
            </div>
          </div>

          {/* Volunteer CTA */}
          <div className="text-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg text-lg mr-4">
              Start Volunteering
            </button>
            <button className="bg-white text-orange-500 border-2 border-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 shadow-lg text-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Membership Benefits Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-full font-semibold text-lg mb-4">
              $48.70/mo
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Members – Benefits That Outrun You</h2>
            <p className="text-2xl text-slate-600 mb-8">$48.70 Save hundreds, change lives, travel cheaper.</p>
            <div className="bg-slate-50 rounded-2xl p-8 max-w-4xl mx-auto mb-12">
              <p className="text-lg text-slate-700 leading-relaxed">
                Your first $48.70 feeds a child 30 meals, channels 40% into accredited career training & subsidized
                housing, and shares $3.50 with partner charities + volunteer travel.
              </p>
            </div>
          </div>

          {/* Membership Breakdown */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Membership Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {membershipBreakdown.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                    <item.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-slate-700 mb-4 font-medium">{item.description}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What's In It For Me Section */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-slate-900 text-center mb-8">WHAT'S IN IT FOR ME?</h3>
            <p className="text-xl text-slate-600 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
              Save money on daily life and travel while feeding children, training adults, and expanding affordable
              housing—all through one membership or one volunteer shift.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impactAreas.map((area, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                    <area.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{area.title}</h4>
                  <p className="text-slate-600 text-sm">{area.description}</p>
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
    </div>
  )
}

export default About
