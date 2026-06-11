import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../data/mockData";
import { SectionHeader } from "../components/SectionHeader";

const CATEGORIES = ["All", "Residential", "Upholstery", "Floors", "Commercial", "Specialist"];

export function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0B2545] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#00B67A] text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h1 className="text-4xl md:text-5xl text-white mt-3 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            Professional Cleaning for Every Need
          </h1>
          <p className="text-white/60 text-lg">
            From sofas to post-construction sites — we bring the same commitment to quality and professionalism to every job.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-[#F4B942] text-xs font-semibold uppercase tracking-wider">{service.category}</span>
                    <h3 className="text-white text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{service.name}</h3>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{service.shortDesc}</p>
                  <div className="mb-4 space-y-1.5">
                    {service.benefits.slice(0, 3).map((b) => (
                      <div key={b} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00B67A] shrink-0" />
                        {b}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#0B2545] font-semibold">{service.price}</span>
                    <span className="text-gray-400 text-xs">{service.duration}</span>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to={`/services/${service.slug}`}
                      className="flex-1 text-center py-2.5 text-sm border border-[#0B2545] text-[#0B2545] rounded-lg hover:bg-[#0B2545] hover:text-white transition-all"
                    >
                      Learn More
                    </Link>
                    <Link
                      to={`/booking?service=${service.id}`}
                      className="flex-1 text-center py-2.5 text-sm bg-[#00B67A] text-white rounded-lg hover:bg-[#009d6a] transition-all"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl text-[#0B2545] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-500 mb-6">Our team will assess your needs and recommend the right service for your situation.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="px-6 py-3 bg-[#0B2545] text-white rounded-lg hover:bg-[#1a3a5c] transition-colors font-medium flex items-center gap-2">
              Get a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/254796578077" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20be5c] transition-colors font-medium">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
