import React, { useState } from "react";
import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { CheckCircle, ArrowRight, ChevronRight, Star } from "lucide-react";
import { SERVICES, TESTIMONIALS } from "../data/mockData";
import { SectionHeader } from "../components/SectionHeader";

const FAQ_BY_SERVICE: Record<string, { q: string; a: string }[]> = {
  "sofa-cleaning": [
    { q: "How long does sofa cleaning take?", a: "Most sofas take 1–2 hours. L-shapes and sectionals may take up to 3 hours." },
    { q: "Is the cleaning safe for kids and pets?", a: "Yes. We use non-toxic, biodegradable solutions safe for children and pets." },
    { q: "How long before the sofa dries?", a: "Typically 4–6 hours. We recommend leaving windows open for faster drying." },
    { q: "Can you remove all stains?", a: "We remove most stains but cannot guarantee 100% removal of set-in stains." },
  ],
  "mattress-cleaning": [
    { q: "How often should I clean my mattress?", a: "Every 6 months is recommended for optimal hygiene." },
    { q: "Do you use chemicals on mattresses?", a: "We use food-grade, non-toxic enzyme cleaners safe for direct skin contact." },
    { q: "How long does it take to dry?", a: "Approximately 2–4 hours with good ventilation." },
  ],
  default: [
    { q: "How do I prepare for the service?", a: "Simply ensure easy access to the area to be cleaned and move any valuable or fragile items." },
    { q: "Do you bring your own equipment?", a: "Yes, our team arrives fully equipped with professional-grade cleaning equipment and eco-friendly products." },
    { q: "What if I'm not satisfied?", a: "We offer a 100% satisfaction guarantee. If you're not happy, we'll re-clean at no extra charge." },
    { q: "Do I need to be home during cleaning?", a: "You don't need to be present, but we recommend being available for the initial walkthrough." },
  ],
};

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-32 text-center py-20">
        <h2 className="text-2xl text-[#0B2545]" style={{ fontFamily: "var(--font-display)" }}>Service not found</h2>
        <Link to="/services" className="mt-4 inline-flex items-center gap-2 text-[#00B67A]">
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Services
        </Link>
      </div>
    );
  }

  const related = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);
  const faqs = FAQ_BY_SERVICE[slug as string] || FAQ_BY_SERVICE.default;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-[#f0f4f8] py-3 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-[#0B2545]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/services" className="hover:text-[#0B2545]">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#0B2545]">{service.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0B2545]/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#00B67A] text-sm font-semibold uppercase tracking-wider">{service.category}</span>
          <h1 className="text-4xl md:text-5xl text-white mt-3 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            {service.name}
          </h1>
          <p className="text-white/70 text-lg mb-8">{service.tagline}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to={`/booking?service=${service.id}`} className="px-8 py-3.5 bg-[#00B67A] hover:bg-[#009d6a] text-white rounded-xl font-semibold transition-all">
              Book This Service
            </Link>
            <Link to="/contact" className="px-8 py-3.5 bg-white/15 hover:bg-white/25 text-white border border-white/30 rounded-xl font-medium transition-all">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-2xl text-[#0B2545] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Service Overview</h2>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl text-[#0B2545] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Key Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-3 p-3 bg-[#f0f4f8] rounded-lg">
                      <CheckCircle className="w-5 h-5 text-[#00B67A] shrink-0" />
                      <span className="text-gray-700 text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl text-[#0B2545] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Our Cleaning Process</h2>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-[#0B2545] font-semibold mb-1">{step.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-2xl text-[#0B2545] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Before & After Gallery</h2>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative rounded-xl overflow-hidden h-40 bg-gray-200">
                    <img src={service.image} alt="Before" className="w-full h-full object-cover grayscale opacity-80" />
                    <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">BEFORE</span>
                  </div>
                  <div className="relative rounded-xl overflow-hidden h-40 bg-gray-200">
                    <img src={service.image} alt="After" className="w-full h-full object-cover" />
                    <span className="absolute top-2 left-2 bg-[#00B67A] text-white text-xs px-2 py-0.5 rounded">AFTER</span>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl text-[#0B2545] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Frequently Asked Questions</h2>
                <div className="space-y-2">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left text-[#0B2545] font-medium hover:bg-gray-50 transition-colors"
                      >
                        {faq.q}
                        <ChevronRight className={`w-4 h-4 transition-transform ${openFaq === i ? "rotate-90" : ""}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-4 text-gray-500 text-sm leading-relaxed">{faq.a}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div>
                <h2 className="text-2xl text-[#0B2545] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Client Reviews</h2>
                <div className="space-y-4">
                  {TESTIMONIALS.slice(0, 2).map((t) => (
                    <div key={t.id} className="bg-[#f0f4f8] rounded-xl p-5">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-[#F4B942] text-[#F4B942]" />)}
                      </div>
                      <p className="text-gray-600 text-sm italic mb-3">"{t.review}"</p>
                      <div className="flex items-center gap-2">
                        <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full object-cover bg-gray-200" />
                        <div>
                          <p className="text-[#0B2545] text-sm font-semibold">{t.name}</p>
                          <p className="text-gray-400 text-xs">{t.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking card */}
              <div className="bg-[#0B2545] rounded-2xl p-6 text-white sticky top-24">
                <h3 className="text-xl mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Book This Service</h3>
                <p className="text-white/60 text-sm mb-4">Get a professional clean booked in minutes.</p>
                <div className="mb-4 p-3 bg-white/10 rounded-lg">
                  <p className="text-white/60 text-xs mb-1">Starting from</p>
                  <p className="text-2xl font-bold text-[#F4B942]" style={{ fontFamily: "var(--font-display)" }}>{service.price}</p>
                  <p className="text-white/50 text-xs mt-0.5">{service.duration}</p>
                </div>
                <Link
                  to={`/booking?service=${service.id}`}
                  className="block w-full py-3 bg-[#00B67A] hover:bg-[#009d6a] text-center text-white rounded-xl font-semibold transition-all mb-3"
                >
                  Book Now
                </Link>
                <Link
                  to="/contact"
                  className="block w-full py-3 bg-white/10 hover:bg-white/20 text-center text-white rounded-xl transition-all text-sm"
                >
                  Get a Custom Quote
                </Link>
                <div className="mt-4 pt-4 border-t border-white/10 text-center">
                  <p className="text-white/40 text-xs mb-1">Need help? WhatsApp us</p>
                  <a href="https://wa.me/254712345678" className="text-[#25D366] font-semibold text-sm hover:text-[#20be5c]">+254796578077</a>
                </div>
              </div>

              {/* Related services */}
              <div>
                <h4 className="text-[#0B2545] font-semibold mb-3" style={{ fontFamily: "var(--font-display)" }}>Related Services</h4>
                <div className="space-y-3">
                  {related.map((s) => (
                    <Link key={s.id} to={`/services/${s.slug}`} className="flex items-center gap-3 p-3 bg-[#f0f4f8] rounded-xl hover:bg-gray-200 transition-colors">
                      <img src={s.image} alt={s.name} className="w-12 h-12 rounded-lg object-cover bg-gray-200" />
                      <div>
                        <p className="text-[#0B2545] text-sm font-medium">{s.name}</p>
                        <p className="text-gray-400 text-xs">{s.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

