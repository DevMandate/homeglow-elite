import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import { PRICING } from "../data/mockData";
import { SectionHeader } from "../components/SectionHeader";

export function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Upholstery", "Carpet", "House Cleaning", "Deep Cleaning", "Post-Construction", "Fumigation", "Airbnb", "Shoes"];

  const getCategoryForItem = (service: string) => {
    if (service.includes("Sofa") || service.includes("Mattress")) return "Upholstery";
    if (service.includes("Carpet")) return "Carpet";
    if (service.includes("General House")) return "House Cleaning";
    if (service.includes("Deep Cleaning")) return "Deep Cleaning";
    if (service.includes("Post-Construction")) return "Post-Construction";
    if (service.includes("Fumigation")) return "Fumigation";
    if (service.includes("Airbnb")) return "Airbnb";
    if (service.includes("Shoe")) return "Shoes";
    return "Other";
  };

  const filtered = selectedCategory === "All" ? PRICING : PRICING.filter((p) => getCategoryForItem(p.service) === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0B2545] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#00B67A] text-sm font-semibold uppercase tracking-wider">Transparent Pricing</span>
          <h1 className="text-4xl md:text-5xl text-white mt-3 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            Simple, Honest Pricing
          </h1>
          <p className="text-white/60 text-lg">
            No hidden fees, no surprises. All our rates are published and negotiable for recurring bookings.
          </p>
        </div>
      </section>

      {/* Price table */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat ? "bg-[#0B2545] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 gap-0 bg-[#0B2545] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3">
              <div className="col-span-5">Service</div>
              <div className="col-span-3">Description</div>
              <div className="col-span-2 text-right">Price</div>
              <div className="col-span-1 text-center">Unit</div>
              <div className="col-span-1 text-center">Book</div>
            </div>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03 }}
                className={`grid grid-cols-12 gap-0 px-6 py-4 items-center ${i % 2 === 0 ? "bg-white" : "bg-[#f0f4f8]"} border-b border-gray-100 hover:bg-[#0B2545]/5 transition-colors group`}
              >
                <div className="col-span-5 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00B67A] shrink-0" />
                  <span className="text-sm font-medium text-[#0B2545]">{item.service}</span>
                </div>
                <div className="col-span-3">
                  <span className="text-xs text-gray-500">{item.description}</span>
                </div>
                <div className="col-span-2 text-right">
                  {item.status === "quote" ? (
                    <span className="text-sm font-semibold text-[#F4B942]">Custom Quote</span>
                  ) : (
                    <span className="text-sm font-semibold text-[#0B2545]">KSh {item.price.toLocaleString()}</span>
                  )}
                </div>
                <div className="col-span-1 text-center">
                  <span className="text-xs text-gray-400">{item.unit}</span>
                </div>
                <div className="col-span-1 text-center">
                  {item.status === "quote" ? (
                    <Link to="/contact" className="inline-block px-2 py-1 bg-[#F4B942] text-[#0B2545] text-xs rounded-lg font-medium whitespace-nowrap">
                      Get Quote
                    </Link>
                  ) : (
                    <Link to={`/booking?service=${item.service.toLowerCase().replace(/ /g, "-")}`} className="inline-block px-2 py-1 bg-[#00B67A] text-white text-xs rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Book
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-xs mt-4">
            * Prices shown are starting rates and may vary based on size, location, and condition. Final price confirmed after assessment.
          </p>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#0B2545]/8 mx-auto mb-4 flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-[#0B2545]" />
              </div>
              <h4 className="text-[#0B2545] font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>Instant Booking</h4>
              <p className="text-gray-500 text-sm mb-4">Book online and get a confirmation within minutes.</p>
              <Link to="/booking" className="block w-full py-2.5 bg-[#0B2545] text-white rounded-lg text-sm font-medium">Book Now</Link>
            </div>
            <div className="bg-[#0B2545] rounded-2xl p-6 text-center text-white hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-white/15 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>WhatsApp Inquiry</h4>
              <p className="text-white/60 text-sm mb-4">Chat with our team directly for fast pricing.</p>
              <a href="https://wa.me/254796578077" target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 bg-[#25D366] text-white rounded-lg text-sm font-medium">WhatsApp Us</a>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#F4B942]/15 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#F4B942]" />
              </div>
              <h4 className="text-[#0B2545] font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>Custom Quote</h4>
              <p className="text-gray-500 text-sm mb-4">Large or complex jobs? Get a tailored quote.</p>
              <Link to="/contact" className="block w-full py-2.5 border-2 border-[#0B2545] text-[#0B2545] rounded-lg text-sm font-medium hover:bg-[#0B2545] hover:text-white transition-all">Request Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
