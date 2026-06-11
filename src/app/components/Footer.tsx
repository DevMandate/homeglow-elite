import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B2545] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#00B67A] flex items-center justify-center">
                <span className="text-white text-sm font-bold" style={{ fontFamily: "var(--font-display)" }}>HG</span>
              </div>
              <span className="text-xl" style={{ fontFamily: "var(--font-display)" }}>
                HomeGlow <span className="text-[#F4B942]">Elite </span> <span className="text-[#00B67A]">Services</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Professional cleaning services you can trust. Bringing freshness, comfort, and hygiene to homes and businesses across Nairobi.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#00B67A] flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                { label: "Sofa & Bed Cleaning", href: "/services/sofa-cleaning" },
                { label: "Mattress Cleaning", href: "/services/mattress-cleaning" },
                { label: "Carpet Cleaning", href: "/services/carpet-cleaning" },
                { label: "Deep Home Cleaning", href: "/services/deep-cleaning" },
                { label: "Post-Construction", href: "/services/post-construction-cleaning" },
                { label: "Airbnb Cleaning", href: "/services/airbnb-cleaning" },
                { label: "Fumigation & Pest Control", href: "/services/fumigation-pest-control" },
                { label: "Shoe Cleaning", href: "/services/shoe-cleaning" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Pricing", href: "/pricing" },
                { label: "Gallery", href: "/gallery" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Blog", href: "/blog" },
                { label: "Book a Service", href: "/booking" },
                { label: "Contact Us", href: "/contact" },
                { label: "Support Center", href: "/support" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 text-[#00B67A] shrink-0" />
                <span>Juja, Kiambu, Kenya</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="w-4 h-4 text-[#00B67A] shrink-0" />
                <a href="tel:+254796578077" className="hover:text-white transition-colors">+254796578077</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="w-4 h-4 text-[#00B67A] shrink-0" />
                <a href="mailto:serviceshomeglow@gmail.com" className="hover:text-white transition-colors">serviceshomeglow@gmail.com</a>
              </li>
            </ul>
            <div className="mt-5 p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Business Hours</p>
              <p className="text-sm text-white/80">Mon–Sat: 7:00 AM – 7:00 PM</p>
              <p className="text-sm text-white/80">Sunday: 9:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} HomeGlow Services. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
