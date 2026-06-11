import { Link } from "react-router";
import { MessageCircle, Calendar } from "lucide-react";
import { motion } from "motion/react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3 items-end">
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/254796578077?text=Hello%20HomeGlow%2C%20I%27d%20like%20to%20inquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white fill-white" />
      </motion.a>

      {/* Book Now */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, type: "spring" }}
        whileHover={{ scale: 1.05 }}
      >
        <Link
          to="/booking"
          className="flex items-center gap-2 px-4 py-3 bg-[#0B2545] hover:bg-[#1a3a5c] text-white rounded-full shadow-lg transition-colors text-sm font-medium"
        >
          <Calendar className="w-4 h-4" />
          Book Now
        </Link>
      </motion.div>
    </div>
  );
}
