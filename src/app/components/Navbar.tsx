import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Sofa & Bed Cleaning", href: "/services/sofa-cleaning" },
      { label: "Mattress Cleaning", href: "/services/mattress-cleaning" },
      { label: "Carpet Cleaning", href: "/services/carpet-cleaning" },
      { label: "General House Cleaning", href: "/services/general-house-cleaning" },
      { label: "Deep Home Cleaning", href: "/services/deep-cleaning" },
      { label: "Post-Construction", href: "/services/post-construction-cleaning" },
      { label: "Fumigation & Pest Control", href: "/services/fumigation-pest-control" },
      { label: "Airbnb Cleaning", href: "/services/airbnb-cleaning" },
      { label: "Shoe Cleaning", href: "/services/shoe-cleaning" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navBg = scrolled || !isHome ? "bg-[#0B2545] shadow-lg" : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-[#00B67A] flex items-center justify-center">
              <span className="text-white text-sm font-bold" style={{ fontFamily: "var(--font-display)" }}>HG</span>
            </div>
            <span className="text-white text-xl" style={{ fontFamily: "var(--font-display)" }}>
              HomeGlow <span className="text-[#F4B942]">Elite </span> <span className="text-[#00B67A]">Services</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded text-sm text-white/85 hover:text-white hover:bg-white/10 transition-all ${
                    location.pathname === link.href || location.pathname.startsWith(link.href + "/")
                      ? "text-[#F4B942] font-medium"
                      : ""
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3" />}
                </Link>
                {link.children && activeDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0B2545]/5 hover:text-[#0B2545] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+254796578077"
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              +254796578077
            </a>
            <Link
              to="/booking"
              className="px-4 py-2 bg-[#00B67A] hover:bg-[#009d6a] text-white text-sm rounded-lg transition-colors font-medium"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B2545] border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.href}
                    className="block py-2.5 px-3 text-white/85 hover:text-white hover:bg-white/10 rounded-lg transition-all text-sm"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 border-l border-white/10 pl-3 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block py-2 text-white/60 hover:text-white text-xs transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/booking"
                className="block w-full mt-3 py-2.5 px-4 bg-[#00B67A] text-white text-center rounded-lg text-sm font-medium"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
