import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0B2545] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#00B67A] text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl text-white mt-3 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            We'd Love to Hear from You
          </h1>
          <p className="text-white/60 text-lg">Have questions, need a quote, or want to schedule a service? We're here to help.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl text-[#0B2545] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Send Us a Message</h2>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#00B67A]/10 border border-[#00B67A]/30 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-[#00B67A] mx-auto mb-3" />
                  <h3 className="text-[#0B2545] font-semibold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>Message Sent!</h3>
                  <p className="text-gray-500 text-sm">We've received your message and will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0B2545] mb-1.5">Full Name *</label>
                      <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="John Kamau" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0B2545] mb-1.5">Phone Number *</label>
                      <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+254796578077" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0B2545] mb-1.5">Email Address *</label>
                    <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="john@example.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0B2545] mb-1.5">Subject *</label>
                    <select value={form.subject} onChange={(e) => update("subject", e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]" required>
                      <option value="">Select a subject</option>
                      <option>Booking Inquiry</option>
                      <option>Get a Quote</option>
                      <option>Service Question</option>
                      <option>Complaint / Feedback</option>
                      <option>Partnership Inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0B2545] mb-1.5">Message *</label>
                    <textarea value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us how we can help..." rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A] resize-none" required />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#0B2545] hover:bg-[#1a3a5c] text-white rounded-xl font-semibold transition-all">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl text-[#0B2545] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Contact Information</h2>
                <div className="space-y-4">
                  {[
                    { icon: Phone, label: "Phone", value: "+254796578077", href: "tel:+254712345678" },
                    { icon: MessageCircle, label: "WhatsApp", value: "+254796578077", href: "https://wa.me/254712345678" },
                    { icon: Mail, label: "Email", value: "serviceshomeglow@gmail.com", href: "mailto:serviceshomeglow@gmail.com" },
                    { icon: MapPin, label: "Address", value: "Juja, Kiambu, Kenya", href: "#" },
                  ].map((item) => (
                    <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-start gap-4 p-4 bg-[#f0f4f8] rounded-xl hover:bg-gray-100 transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-[#0B2545]/8 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-[#0B2545]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                        <p className="text-[#0B2545] font-medium text-sm group-hover:text-[#00B67A] transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-[#0B2545] rounded-2xl text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-[#00B67A]" />
                  <h4 className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>Business Hours</h4>
                </div>
                {[
                  ["Monday – Friday", "7:00 AM – 7:00 PM"],
                  ["Saturday", "7:00 AM – 6:00 PM"],
                  ["Sunday", "9:00 AM – 5:00 PM"],
                ].map(([day, hours]) => (
                  <div key={day} className="flex justify-between text-sm py-1.5 border-b border-white/10 last:border-0">
                    <span className="text-white/60">{day}</span>
                    <span className="text-white">{hours}</span>
                  </div>
                ))}
              </div>

              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden h-56 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.280892432484!2d36.79694!3d-1.26808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0x2b9cc7bef48ccc45!2sJuja%2C%20Kiambu!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="HomeGlow Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
