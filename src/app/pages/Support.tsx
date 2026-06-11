import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { HelpCircle, Ticket, MessageCircle, Search, CheckCircle, ChevronRight, Send, ArrowRight } from "lucide-react";

const FAQS = [
  { q: "How do I book a service?", a: "You can book through our website booking form, call us directly, or send a WhatsApp message. We'll confirm your appointment within 2 hours." },
  { q: "What areas do you cover?", a: "We currently serve all major Nairobi areas including Westlands, Kilimani, Karen, South B, South C, Lavington, Kileleshwa, Ruaka, Ruiru, Syokimau, and Kitengela." },
  { q: "How should I prepare for a cleaning?", a: "Please ensure our team has access to the property, move fragile/valuable items out of the way, and let us know any specific areas of concern before the appointment." },
  { q: "Do you bring your own equipment?", a: "Yes. Our team arrives fully equipped with professional cleaning machines, eco-friendly solutions, and all necessary supplies." },
  { q: "What if I'm not satisfied with the service?", a: "We offer a 100% satisfaction guarantee. Contact us within 24 hours and we'll re-clean any missed areas at no extra charge." },
  { q: "Do I need to be home during the cleaning?", a: "You don't need to be present, but we do require access to the property and request you're available by phone." },
  { q: "How long does cleaning take?", a: "This depends on the service and property size. A general 2-bedroom clean typically takes 3–4 hours. We'll give you an estimated time when you book." },
  { q: "Are your cleaning products safe for children and pets?", a: "Yes. We use eco-friendly, biodegradable, non-toxic cleaning products that are safe for the whole family including pets." },
  { q: "Do you offer recurring cleaning services?", a: "Yes! We offer weekly, bi-weekly, and monthly recurring packages at discounted rates. Contact us for a customized recurring plan." },
];

export function Support() {
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [ticketForm, setTicketForm] = useState({ name: "", email: "", subject: "", priority: "medium", message: "" });
  const [trackId, setTrackId] = useState("");
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"faq" | "ticket" | "track">("faq");

  const filteredFaqs = FAQS.filter(
    (faq) => !search || faq.q.toLowerCase().includes(search.toLowerCase()) || faq.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0B2545] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#00B67A] text-sm font-semibold uppercase tracking-wider">Support Center</span>
          <h1 className="text-4xl md:text-5xl text-white mt-3 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            How Can We Help You?
          </h1>
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search our help center..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-3.5 rounded-xl bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-10 bg-[#f0f4f8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-4">
            {[
              { id: "faq" as const, icon: HelpCircle, label: "FAQ", desc: "Common questions answered" },
              { id: "ticket" as const, icon: Ticket, label: "Submit Ticket", desc: "Report an issue" },
              { id: "track" as const, icon: MessageCircle, label: "Track Ticket", desc: "Check ticket status" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-4 rounded-xl text-center transition-all ${activeTab === item.id ? "bg-[#0B2545] text-white shadow-lg" : "bg-white text-gray-600 hover:shadow-md border border-gray-100"}`}
              >
                <item.icon className={`w-6 h-6 mx-auto mb-2 ${activeTab === item.id ? "text-[#00B67A]" : "text-gray-400"}`} />
                <p className={`text-sm font-semibold ${activeTab === item.id ? "text-white" : "text-[#0B2545]"}`}>{item.label}</p>
                <p className={`text-xs mt-0.5 hidden sm:block ${activeTab === item.id ? "text-white/60" : "text-gray-400"}`}>{item.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* FAQ Tab */}
          {activeTab === "faq" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-2xl text-[#0B2545] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Frequently Asked Questions</h2>
              <div className="space-y-2">
                {filteredFaqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-[#0B2545] font-medium text-sm pr-4">{faq.q}</span>
                      <ChevronRight className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${openFaq === i ? "rotate-90" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="px-5 pb-4 text-gray-500 text-sm leading-relaxed bg-[#f0f4f8]"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </div>
                ))}
                {filteredFaqs.length === 0 && (
                  <p className="text-center text-gray-400 py-8">No results found. Try a different search term.</p>
                )}
              </div>

              <div className="mt-8 p-5 bg-[#0B2545]/5 rounded-xl border border-[#0B2545]/10 text-center">
                <p className="text-[#0B2545] font-medium mb-2">Still have questions?</p>
                <p className="text-gray-500 text-sm mb-4">Our team is available to help. Reach out via any of these channels:</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg text-sm font-medium">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                  <Link to="/contact" className="flex items-center gap-2 px-4 py-2 bg-[#0B2545] text-white rounded-lg text-sm font-medium">
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Submit Ticket Tab */}
          {activeTab === "ticket" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-2xl text-[#0B2545] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Submit a Support Ticket</h2>
              {ticketSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center p-10 bg-[#00B67A]/10 rounded-2xl border border-[#00B67A]/20">
                  <CheckCircle className="w-12 h-12 text-[#00B67A] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#0B2545] mb-2" style={{ fontFamily: "var(--font-display)" }}>Ticket Submitted!</h3>
                  <p className="text-gray-500 text-sm mb-3">Your ticket ID is: <strong className="text-[#0B2545]">TKT-{Math.floor(Math.random() * 1000).toString().padStart(3, "0")}</strong></p>
                  <p className="text-gray-500 text-sm">We'll respond within 24 hours. Check your email for updates.</p>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setTicketSubmitted(true); }} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0B2545] mb-1.5">Full Name *</label>
                      <input type="text" required value={ticketForm.name} onChange={(e) => setTicketForm(f => ({ ...f, name: e.target.value }))} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0B2545] mb-1.5">Email *</label>
                      <input type="email" required value={ticketForm.email} onChange={(e) => setTicketForm(f => ({ ...f, email: e.target.value }))} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0B2545] mb-1.5">Subject *</label>
                    <input type="text" required value={ticketForm.subject} onChange={(e) => setTicketForm(f => ({ ...f, subject: e.target.value }))} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0B2545] mb-1.5">Priority</label>
                    <select value={ticketForm.priority} onChange={(e) => setTicketForm(f => ({ ...f, priority: e.target.value }))} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]">
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0B2545] mb-1.5">Message *</label>
                    <textarea required rows={4} value={ticketForm.message} onChange={(e) => setTicketForm(f => ({ ...f, message: e.target.value }))} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A] resize-none" placeholder="Describe your issue in detail..." />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#0B2545] text-white rounded-xl font-semibold hover:bg-[#1a3a5c] transition-all">
                    <Send className="w-4 h-4" /> Submit Ticket
                  </button>
                </form>
              )}
            </motion.div>
          )}

          {/* Track Ticket Tab */}
          {activeTab === "track" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-2xl text-[#0B2545] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Track Your Ticket</h2>
              <div className="flex gap-3 mb-8">
                <input
                  type="text"
                  placeholder="Enter ticket ID (e.g. TKT-001)"
                  value={trackId}
                  onChange={(e) => setTrackId(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]"
                />
                <button className="px-5 py-3 bg-[#0B2545] text-white rounded-xl text-sm font-medium hover:bg-[#1a3a5c] transition-all">
                  Search
                </button>
              </div>
              {trackId && (
                <div className="bg-[#f0f4f8] rounded-xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-[#0B2545] font-semibold">{trackId}</p>
                      <p className="text-gray-500 text-xs">Booking reschedule request</p>
                    </div>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">Open</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { status: "Ticket Created", time: "May 20, 2024 – 10:32 AM", done: true },
                      { status: "Assigned to Agent", time: "May 20, 2024 – 11:00 AM", done: true },
                      { status: "Under Review", time: "May 20, 2024 – 2:15 PM", done: true },
                      { status: "Response Pending", time: "Expected within 4 hours", done: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${item.done ? "bg-[#00B67A]" : "bg-gray-200"}`}>
                          {item.done && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                        </div>
                        <div>
                          <p className={`text-sm font-medium ${item.done ? "text-[#0B2545]" : "text-gray-400"}`}>{item.status}</p>
                          <p className="text-xs text-gray-400">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
