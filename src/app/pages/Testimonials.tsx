import { motion } from "motion/react";
import { Link } from "react-router";
import { Star, ArrowRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/mockData";
import { SectionHeader } from "../components/SectionHeader";

export function Testimonials() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0B2545] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#00B67A] text-sm font-semibold uppercase tracking-wider">Client Reviews</span>
          <h1 className="text-4xl md:text-5xl text-white mt-3 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            What Our Clients Say
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/60">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#F4B942] text-[#F4B942]" />)}
            </div>
            <span>4.9/5 average from 200+ verified reviews</span>
          </div>
        </div>
      </section>

      {/* Overall rating */}
      <section className="py-12 bg-[#f0f4f8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "5 Stars", value: "87%", color: "#F4B942" },
              { label: "4 Stars", value: "9%", color: "#00B67A" },
              { label: "3 Stars", value: "3%", color: "#6b7a8d" },
              { label: "Total Reviews", value: "200+", color: "#0B2545" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-5 text-center border border-gray-100">
                <p className="text-2xl font-bold mb-0.5" style={{ color: stat.color, fontFamily: "var(--font-display)" }}>{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Reviews Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Written Reviews" title="Client Stories" subtitle="Real experiences from real customers across Nairobi." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#f0f4f8] rounded-2xl p-6 border border-gray-100 relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-[#0B2545]/10" />
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#F4B942] text-[#F4B942]" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.review}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover bg-gray-200" />
                  <div>
                    <p className="text-[#0B2545] text-sm font-semibold">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.location}</p>
                    <p className="text-[#00B67A] text-xs">{t.service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-16 bg-[#0B2545]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center gap-0.5 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-[#F4B942] text-[#F4B942]" />)}
          </div>
          <h2 className="text-3xl text-white mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            We're Rated 4.9/5 on Google
          </h2>
          <p className="text-white/60 mb-8">Join hundreds of satisfied clients and experience the HomeGlow difference.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/booking" className="px-6 py-3 bg-[#00B67A] text-white rounded-xl font-semibold hover:bg-[#009d6a] transition-all flex items-center gap-2">
              Book a Service <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-medium transition-all">
              Leave a Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
