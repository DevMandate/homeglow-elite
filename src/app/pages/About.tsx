import { motion } from "motion/react";
import { Link } from "react-router";
import { STATS, TEAM } from "../data/mockData";
import { SectionHeader } from "../components/SectionHeader";
import { CheckCircle, ArrowRight } from "lucide-react";

const TIMELINE = [
  { year: "2018", title: "Founded in Westlands", desc: "HomeGlow started as a small sofa-cleaning service with just two technicians and a single van." },
  { year: "2019", title: "Expanded to 9 Services", desc: "Added carpet, mattress, and post-construction cleaning to meet growing client demand." },
  { year: "2020", title: "100 Clients Milestone", desc: "Reached our first 100 happy clients despite the challenging year, driven by word-of-mouth referrals." },
  { year: "2021", title: "Airbnb Partnership Program", desc: "Launched dedicated Airbnb host cleaning packages with calendar integration." },
  { year: "2022", title: "500 Homes Cleaned", desc: "Passed the 500-homes milestone and expanded our team to 15 trained technicians." },
  { year: "2023", title: "1,000+ Happy Clients", desc: "Achieved the 1,000 client mark and launched our loyalty program." },
  { year: "2024", title: "Expanding Across Kenya", desc: "Launching in Mombasa, Kisumu, and Nakuru with the same premium service standards." },
];

const VALUES = [
  { title: "Integrity", desc: "We do what we say, every time. Honesty is the foundation of every client relationship." },
  { title: "Excellence", desc: "Good enough isn't our standard. We pursue perfection in every clean." },
  { title: "Respect", desc: "We treat every home as if it were our own — with care, attention, and professionalism." },
  { title: "Community", desc: "We invest in our team's growth and give back to the communities we serve." },
];

export function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[#0B2545] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=600&fit=crop&auto=format" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#00B67A] text-sm font-semibold uppercase tracking-wider">Our Story</span>
          <h1 className="text-4xl md:text-5xl text-white mt-3 mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            Cleaning with Purpose, <br /><span className="text-[#F4B942]">Powered by People</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            HomeGlow Services was born from a simple belief: every Kenyan family deserves a clean, healthy, and comfortable home — without breaking the bank.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0B2545] rounded-2xl p-8 text-white"
            >
              <span className="text-[#00B67A] text-sm font-semibold uppercase tracking-wider">Our Mission</span>
              <h3 className="text-2xl mt-3 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                Making Professional Cleaning Accessible to All
              </h3>
              <p className="text-white/70 leading-relaxed">
                To provide affordable, reliable, and eco-friendly cleaning services that enhance the quality of life for every client we serve, while building a skilled and fairly compensated cleaning workforce in Kenya.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#00B67A] rounded-2xl p-8 text-white"
            >
              <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">Our Vision</span>
              <h3 className="text-2xl mt-3 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                East Africa's Most Trusted Cleaning Brand
              </h3>
              <p className="text-white/80 leading-relaxed">
                To become the most recognized and trusted professional cleaning company in East Africa, known for exceptional quality, innovation, and a team of highly trained cleaning professionals.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { value: "500+", label: "Services Done" },
              { value: "98%", label: "Customer Satisfaction" },
              { value: "1,000+", label: "Happy Clients" },
              { value: "< 24hrs", label: "Response Time" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center py-6 px-4 bg-[#f0f4f8] rounded-xl border border-gray-100"
              >
                <p className="text-3xl font-bold text-[#0B2545] mb-1" style={{ fontFamily: "var(--font-display)" }}>{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Core Values */}
          <SectionHeader eyebrow="What Drives Us" title="Our Core Values" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border-l-4 border-[#00B67A] bg-[#f0f4f8] rounded-r-xl"
              >
                <h4 className="text-[#0B2545] mb-2 text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Meet the Team" title="The People Behind HomeGlow" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="h-52 overflow-hidden bg-gray-200">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h4 className="text-[#0B2545] mb-0.5" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{member.name}</h4>
                  <p className="text-[#00B67A] text-xs font-semibold mb-2 uppercase tracking-wide">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Our Journey" title="HomeGlow Timeline" />
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#0B2545]/10" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-6"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#0B2545] flex items-center justify-center text-white text-xs font-bold z-10 relative">
                      {item.year.slice(2)}
                    </div>
                  </div>
                  <div className="pb-2">
                    <span className="text-[#00B67A] text-xs font-semibold">{item.year}</span>
                    <h4 className="text-[#0B2545] mb-1" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-[#0B2545]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl text-white mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Ready to Experience the HomeGlow Difference?</h2>
          <p className="text-white/60 mb-8">Join over 1,000 satisfied clients who trust HomeGlow for their cleaning needs.</p>
          <Link to="/booking" className="inline-flex items-center gap-2 px-8 py-4 bg-[#00B67A] hover:bg-[#009d6a] text-white rounded-xl font-semibold transition-all">
            Book Your Clean <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
