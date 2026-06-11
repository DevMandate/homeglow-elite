import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Star, CheckCircle, ArrowRight, Play, ChevronLeft, ChevronRight,
  Shield, Leaf, DollarSign, Clock, Award, ThumbsUp,
  MapPin, Phone,
} from "lucide-react";
import { SERVICES, TESTIMONIALS, SERVICE_AREAS } from "../data/mockData";
import { SectionHeader } from "../components/SectionHeader";

const HERO_SLIDES = [
  {
    bg: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781164534/F.2_xyqqid.jpg",
    label: "Deep Home Cleaning",
  },
  {
    bg: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781166773/Max_zyi03x.jpg",
    label: "Sofa Cleaning",
  },
  {
    bg: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781167342/WhatsApp_Image_2026-06-11_at_11.36.05_1_marttg.jpg",
    label: "Carpet Cleaning",
  },
  {
    bg: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1920&h=1080&fit=crop&auto=format",
    label: "Airbnb Cleaning",
  },
];

const WHY_ITEMS = [
  { icon: Shield, title: "Trained Professionals", desc: "All technicians are vetted, trained, and insured for your peace of mind." },
  { icon: Leaf, title: "Eco-Friendly Products", desc: "We use biodegradable, non-toxic cleaning solutions safe for your family." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Transparent rates with no hidden charges. Value for every shilling." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Book at your convenience — weekdays, weekends, same day available." },
  { icon: Award, title: "Reliable Service", desc: "We show up on time, every time. Consistent quality guaranteed." },
  { icon: ThumbsUp, title: "Customer Satisfaction", desc: "98% satisfaction rate. We don't leave until you're happy." },
];

const BEFORE_AFTER = [
  { label: "Sofa Restoration", before: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781168236/N4s_lz8v3x.jpg", after: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781168253/after_q7teer.jpg" },
  { label: "Carpet Revival", before: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781168990/Carpetsb4_ykghlc.png", after: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781167342/WhatsApp_Image_2026-06-11_at_11.36.05_1_marttg.jpg" },
  { label: "Mattress Clean", before: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781169037/WhatsApp_Image_2026-06-11_at_11.53.02_1_jdjkr7.jpg", after: "https://res.cloudinary.com/dmvrgj0sy/image/upload/v1781169039/WhatsApp_Image_2026-06-11_at_11.53.02_nhnn85.jpg" },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background slides */}
      {HERO_SLIDES.map((slide, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.bg})` }}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.2 }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/90 via-[#0B2545]/70 to-[#0B2545]/30" />

      {/* Slide labels */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-[#00B67A]" : "w-2 bg-white/40"}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20">
        <div className="max-w-2xl">
          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            {["5-Star Rated", "Professional Team", "Affordable Pricing", "Reliable Service"].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-xs bg-white/15 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/20">
                <CheckCircle className="w-3 h-3 text-[#00B67A]" />
                {b}
              </span>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#F4B942] text-sm font-medium tracking-wider uppercase">
                {HERO_SLIDES[current].label}
              </span>
            </motion.div>
          </AnimatePresence>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl text-white mt-2 mb-5 leading-[1.1]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            Professional Cleaning Services{" "}
            <span className="text-[#00B67A]">You Can Trust</span>
          </h1>
          <p className="text-white/75 text-lg mb-8 leading-relaxed">
            Bringing freshness, comfort, and hygiene to homes and businesses through expert cleaning solutions.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              to="/booking"
              className="flex items-center gap-2 px-6 py-3.5 bg-[#00B67A] hover:bg-[#009d6a] text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Book a Service <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 rounded-lg font-medium transition-all"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Quick booking widget */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
            <p className="text-white/70 text-sm mb-3 font-medium">Quick Booking</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="bg-white/20 text-white text-sm rounded-lg px-3 py-2.5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00B67A] [&>option]:text-gray-900"
              >
                <option value="">Select Service</option>
                {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-white/20 text-white text-sm rounded-lg px-3 py-2.5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00B67A] [&>option]:text-gray-900"
              >
                <option value="">Select Location</option>
                {SERVICE_AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-white/20 text-white text-sm rounded-lg px-3 py-2.5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00B67A] [color-scheme:dark]"
              />
            </div>
            <Link
              to={service ? `/booking?service=${service}` : "/booking"}
              className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 bg-[#F4B942] hover:bg-[#e5a830] text-[#0B2545] rounded-lg text-sm font-semibold transition-all"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const featured = SERVICES.filter((s) => s.featured);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="What We Offer"
          title="Our Cleaning Services"
          subtitle="From everyday tidying to specialist deep cleans — we have the right solution for every space."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featured.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-sm font-medium px-2 py-0.5 bg-[#00B67A]/80 rounded-md">
                  {service.price}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-[#0B2545] mb-1.5" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                <div className="flex gap-2">
                  <Link
                    to={`/services/${service.slug}`}
                    className="flex-1 text-center py-2 text-sm border border-[#0B2545] text-[#0B2545] rounded-lg hover:bg-[#0B2545] hover:text-white transition-all"
                  >
                    Learn More
                  </Link>
                  <Link
                    to={`/booking?service=${service.id}`}
                    className="flex-1 text-center py-2 text-sm bg-[#00B67A] text-white rounded-lg hover:bg-[#009d6a] transition-all"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0B2545] text-[#0B2545] rounded-lg hover:bg-[#0B2545] hover:text-white transition-all font-medium"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="py-20 bg-[#f0f4f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Why HomeGlow"
          title="Cleaning You Can Count On"
          subtitle="We combine professional expertise with genuine care to deliver results that exceed your expectations."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0B2545]/8 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-[#0B2545]" />
              </div>
              <h3 className="text-[#0B2545] mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="py-20 bg-[#0B2545]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Transformations"
          title="See the Difference"
          subtitle="Real results from real clients. Drag the slider to compare before and after."
          light
        />
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-2 justify-center mb-6">
            {BEFORE_AFTER.map((item, i) => (
              <button
                key={i}
                onClick={() => { setActiveSlide(i); setSliderPos(50); }}
                className={`px-4 py-2 rounded-full text-sm transition-all ${i === activeSlide ? "bg-[#00B67A] text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div
            className="relative h-72 rounded-2xl overflow-hidden cursor-ew-resize select-none"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setSliderPos(((e.clientX - rect.left) / rect.width) * 100);
            }}
            onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setSliderPos(((e.touches[0].clientX - rect.left) / rect.width) * 100);
            }}
          >
            <img src={BEFORE_AFTER[activeSlide].after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
              <img src={BEFORE_AFTER[activeSlide].before} alt="Before" className="w-full h-full object-cover" style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: "none" }} />
            </div>
            <div className="absolute top-0 bottom-0" style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}>
              <div className="w-0.5 h-full bg-white" />
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                <div className="flex gap-0.5">
                  <ChevronLeft className="w-3 h-3 text-[#0B2545]" />
                  <ChevronRight className="w-3 h-3 text-[#0B2545]" />
                </div>
              </div>
            </div>
            <span className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded">BEFORE</span>
            <span className="absolute top-3 right-3 bg-[#00B67A] text-white text-xs px-2 py-1 rounded">AFTER</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const visible = TESTIMONIALS.slice(idx, idx + 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Client Stories"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it — hear from the homeowners and businesses we've served."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#f0f4f8] rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#F4B942] text-[#F4B942]" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{t.review}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover bg-gray-200" />
                <div>
                  <p className="text-[#0B2545] text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location} · {t.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 text-[#00B67A] hover:text-[#009d6a] font-medium text-sm transition-colors"
          >
            Read all reviews <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "500+", label: "Services Done" },
    { value: "1000+", label: "Happy Clients" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "< 24hrs", label: "Response Time" },
  ];
  return (
    <section className="py-16 bg-[#00B67A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
                {stat.value}
              </p>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 bg-[#f0f4f8]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <SectionHeader
          eyebrow="Stay Updated"
          title="Get Cleaning Tips, Offers & Home Care Advice"
          subtitle="Join 800+ homeowners who receive our monthly cleaning tips and exclusive subscriber discounts."
        />
        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#00B67A]/10 border border-[#00B67A]/30 rounded-xl p-8">
            <CheckCircle className="w-12 h-12 text-[#00B67A] mx-auto mb-3" />
            <p className="text-[#0B2545] font-semibold">You're subscribed!</p>
            <p className="text-gray-500 text-sm mt-1">Welcome to the HomeGlow community. Check your inbox for a welcome gift.</p>
          </motion.div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00B67A] text-sm bg-white"
              required
            />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00B67A] text-sm bg-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#0B2545] hover:bg-[#1a3a5c] text-white rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function ServiceAreasSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              eyebrow="Service Areas"
              title="We Cover Nairobi & Surroundings"
              subtitle="HomeGlow operates across Nairobi's major residential and business districts. Not sure if we cover your area? Contact us!"
              center={false}
            />
            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map((area) => (
                <span key={area} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0B2545]/5 text-[#0B2545] text-sm rounded-full border border-[#0B2545]/10">
                  <MapPin className="w-3 h-3 text-[#00B67A]" />
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <Link to="/contact" className="flex items-center gap-2 px-5 py-2.5 bg-[#0B2545] text-white rounded-lg text-sm font-medium hover:bg-[#1a3a5c] transition-colors">
                <Phone className="w-4 h-4" />
                Check My Area
              </Link>
              <Link to="/booking" className="flex items-center gap-2 px-5 py-2.5 border-2 border-[#0B2545] text-[#0B2545] rounded-lg text-sm font-medium hover:bg-[#0B2545] hover:text-white transition-all">
                Book a Service
              </Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden h-80 bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743613!2d36.681320846757795!3d-1.3028617916937484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Nairobi Service Areas"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="py-16 bg-[#F4B942]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl text-[#0B2545] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
          Ready for a Cleaner Home?
        </h2>
        <p className="text-[#0B2545]/70 mb-8 text-lg">
          Book today and get your first deep clean at 10% off. Limited slots available this week.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/booking"
            className="px-8 py-4 bg-[#0B2545] hover:bg-[#1a3a5c] text-white rounded-xl font-semibold transition-all shadow-lg hover:-translate-y-0.5"
          >
            Book a Service Now
          </Link>
          <a
            href="https://wa.me/254796578077"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-[#0B2545] rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg hover:-translate-y-0.5"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <BeforeAfterSection />
      <StatsSection />
      <TestimonialsSection />
      <ServiceAreasSection />
      <NewsletterSection />
      <CTABanner />
    </>
  );
}
