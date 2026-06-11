import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, Search } from "lucide-react";
import { GALLERY_ITEMS } from "../data/mockData";
import { SectionHeader } from "../components/SectionHeader";

const CATEGORIES = ["All", "Sofa Cleaning", "Carpet Cleaning", "Mattress Cleaning", "Deep Cleaning", "Airbnb Cleaning", "Post Construction", "Fumigation", "Shoe Cleaning"];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [lightboxItem, setLightboxItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filtered = GALLERY_ITEMS.filter((item) => {
    const matchCat = activeCategory === "All" || item.category === activeCategory;
    const matchSearch = !search || item.title.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0B2545] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#00B67A] text-sm font-semibold uppercase tracking-wider">Our Work</span>
          <h1 className="text-4xl md:text-5xl text-white mt-3 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            See the Transformations
          </h1>
          <p className="text-white/60 text-lg">Browse our portfolio of real cleaning results from real HomeGlow clients.</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeCategory === cat ? "bg-[#0B2545] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search gallery..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B67A] w-52"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                className="break-inside-avoid group relative rounded-xl overflow-hidden bg-gray-200 cursor-pointer"
                onClick={() => setLightboxItem(item)}
              >
                <img
                  src={item.thumb}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0B2545]/0 group-hover:bg-[#0B2545]/60 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-[#0B2545]">
                  <p className="text-white text-xs font-medium">{item.title}</p>
                  <p className="text-white/60 text-xs">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">No results found.</div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxItem(null)}
          >
            <button className="absolute top-4 right-4 text-white/70 hover:text-white p-2">
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="max-w-4xl max-h-[85vh] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightboxItem.url} alt={lightboxItem.title} className="w-full h-full object-contain" />
              <div className="bg-[#0B2545] p-4">
                <p className="text-white font-medium">{lightboxItem.title}</p>
                <p className="text-white/50 text-sm">{lightboxItem.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
