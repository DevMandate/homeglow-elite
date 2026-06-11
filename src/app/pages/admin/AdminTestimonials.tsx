import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Trash2, Eye, EyeOff, Plus, X, Check } from "lucide-react";
import { TESTIMONIALS } from "../../data/mockData";

export function AdminTestimonials() {
  const [items, setItems] = useState(TESTIMONIALS.map((t) => ({ ...t, visible: true })));
  const [showAdd, setShowAdd] = useState(false);
  const [newItem, setNewItem] = useState({ name: "", location: "", service: "", rating: 5, review: "" });

  const toggle = (id: number) => setItems((prev) => prev.map((t) => (t.id === id ? { ...t, visible: !t.visible } : t)));
  const remove = (id: number) => setItems((prev) => prev.filter((t) => t.id !== id));

  const addTestimonial = () => {
    if (!newItem.name || !newItem.review) return;
    setItems((prev) => [
      { ...newItem, id: Date.now(), avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format`, date: new Date().toISOString().split("T")[0], visible: true },
      ...prev,
    ]);
    setShowAdd(false);
    setNewItem({ name: "", location: "", service: "", rating: 5, review: "" });
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#0B2545]" style={{ fontFamily: "var(--font-display)" }}>Testimonials Management</h2>
          <p className="text-gray-400 text-sm">{items.length} testimonials · {items.filter((t) => t.visible).length} visible</p>
        </div>
        <button onClick={() => setShowAdd(true)} className="flex items-center gap-2 px-4 py-2 bg-[#0B2545] text-white rounded-lg text-sm font-medium hover:bg-[#1a3a5c] transition-all">
          <Plus className="w-4 h-4" /> Add Testimonial
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {items.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`bg-white rounded-xl p-5 border border-gray-100 ${!t.visible ? "opacity-50" : ""}`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover bg-gray-200" />
                <div>
                  <p className="font-semibold text-[#0B2545] text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location} · {t.service}</p>
                </div>
              </div>
              <div className="flex gap-1">
                <button onClick={() => toggle(t.id)} className={`p-1.5 rounded-lg transition-colors ${t.visible ? "text-[#00B67A] hover:bg-green-50" : "text-gray-400 hover:bg-gray-100"}`}>
                  {t.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
                <button onClick={() => remove(t.id)} className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-0.5 mb-2">
              {[...Array(5)].map((_, j) => <Star key={j} className={`w-3.5 h-3.5 ${j < t.rating ? "fill-[#F4B942] text-[#F4B942]" : "text-gray-200"}`} />)}
            </div>
            <p className="text-gray-500 text-sm leading-relaxed italic line-clamp-3">"{t.review}"</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-gray-400">{t.date}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${t.visible ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                {t.visible ? "Visible" : "Hidden"}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showAdd && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="bg-white rounded-2xl p-6 w-full max-w-md">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold text-[#0B2545]" style={{ fontFamily: "var(--font-display)" }}>Add Testimonial</h3>
                <button onClick={() => setShowAdd(false)}><X className="w-5 h-5 text-gray-400" /></button>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="Customer name *" value={newItem.name} onChange={(e) => setNewItem((n) => ({ ...n, name: e.target.value }))} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]" />
                  <input type="text" placeholder="Location" value={newItem.location} onChange={(e) => setNewItem((n) => ({ ...n, location: e.target.value }))} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]" />
                </div>
                <input type="text" placeholder="Service" value={newItem.service} onChange={(e) => setNewItem((n) => ({ ...n, service: e.target.value }))} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]" />
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((r) => (
                      <button key={r} onClick={() => setNewItem((n) => ({ ...n, rating: r }))}>
                        <Star className={`w-5 h-5 ${r <= newItem.rating ? "fill-[#F4B942] text-[#F4B942]" : "text-gray-200"}`} />
                      </button>
                    ))}
                  </div>
                </div>
                <textarea placeholder="Review text *" value={newItem.review} onChange={(e) => setNewItem((n) => ({ ...n, review: e.target.value }))} rows={3} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A] resize-none" />
              </div>
              <div className="flex gap-3 mt-5">
                <button onClick={() => setShowAdd(false)} className="flex-1 py-2.5 border border-gray-200 text-gray-600 rounded-lg text-sm">Cancel</button>
                <button onClick={addTestimonial} className="flex-1 py-2.5 bg-[#0B2545] text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" /> Add Testimonial
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
