import { useState } from "react";
import { motion } from "motion/react";
import { Edit, Eye, EyeOff, Star, Plus } from "lucide-react";
import { SERVICES } from "../../data/mockData";

export function AdminServices() {
  const [services, setServices] = useState(SERVICES.map((s) => ({ ...s, active: true })));
  const toggleActive = (id: string) => setServices((prev) => prev.map((s) => (s.id === id ? { ...s, active: !s.active } : s)));
  const toggleFeatured = (id: string) => setServices((prev) => prev.map((s) => (s.id === id ? { ...s, featured: !s.featured } : s)));

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#0B2545]" style={{ fontFamily: "var(--font-display)" }}>Service Management</h2>
          <p className="text-gray-400 text-sm">{services.length} services · {services.filter((s) => s.active).length} active</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#0B2545] text-white rounded-lg text-sm font-medium hover:bg-[#1a3a5c] transition-all">
          <Plus className="w-4 h-4" /> Add Service
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow ${!service.active ? "opacity-60" : ""}`}
          >
            <div className="relative h-36 overflow-hidden bg-gray-200">
              <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/60 to-transparent" />
              <div className="absolute top-2 right-2 flex gap-1">
                <button
                  onClick={() => toggleFeatured(service.id)}
                  className={`p-1.5 rounded-lg text-xs ${service.featured ? "bg-[#F4B942] text-[#0B2545]" : "bg-white/20 text-white"}`}
                  title={service.featured ? "Remove from featured" : "Add to featured"}
                >
                  <Star className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => toggleActive(service.id)}
                  className={`p-1.5 rounded-lg ${service.active ? "bg-[#00B67A] text-white" : "bg-white/20 text-white"}`}
                  title={service.active ? "Deactivate" : "Activate"}
                >
                  {service.active ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                </button>
              </div>
              <div className="absolute bottom-2 left-2">
                <span className="text-xs text-white/70 bg-black/30 px-1.5 py-0.5 rounded">{service.category}</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-1">
                <h4 className="text-[#0B2545] font-semibold text-sm" style={{ fontFamily: "var(--font-display)" }}>{service.name}</h4>
                <span className="text-xs text-[#00B67A] font-medium">{service.price}</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">{service.shortDesc}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${service.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                    {service.active ? "Active" : "Inactive"}
                  </span>
                  {service.featured && <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">Featured</span>}
                </div>
                <button className="p-1.5 text-gray-400 hover:text-[#0B2545] hover:bg-gray-100 rounded-lg transition-colors">
                  <Edit className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
