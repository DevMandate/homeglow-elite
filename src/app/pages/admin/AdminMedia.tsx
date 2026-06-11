import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Upload, Trash2, Star, Search, Grid, List, X, Image as ImageIcon, Plus } from "lucide-react";
import { GALLERY_ITEMS } from "../../data/mockData";

const CATEGORIES = ["All", "Sofa Cleaning", "Carpet Cleaning", "Mattress Cleaning", "Deep Cleaning", "Airbnb Cleaning", "Post Construction", "Fumigation", "Shoe Cleaning"];

export function AdminMedia() {
  const [items, setItems] = useState(GALLERY_ITEMS);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [showUpload, setShowUpload] = useState(false);
  const [newItem, setNewItem] = useState({ title: "", category: "Sofa Cleaning" });
  const fileRef = useRef<HTMLInputElement>(null);

  const filtered = items.filter((item) => {
    const matchCat = category === "All" || item.category === category;
    const matchSearch = !search || item.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const deleteItem = (id: number) => setItems((prev) => prev.filter((i) => i.id !== id));

  const handleUpload = () => {
    if (!newItem.title) return;
    const placeholder = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop&auto=format";
    setItems((prev) => [
      { id: Date.now(), type: "image", category: newItem.category, title: newItem.title, url: placeholder, thumb: placeholder },
      ...prev,
    ]);
    setShowUpload(false);
    setNewItem({ title: "", category: "Sofa Cleaning" });
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#0B2545]" style={{ fontFamily: "var(--font-display)" }}>Media Management</h2>
          <p className="text-gray-400 text-sm">{filtered.length} items</p>
        </div>
        <button
          onClick={() => setShowUpload(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#0B2545] text-white rounded-lg text-sm font-medium hover:bg-[#1a3a5c] transition-all"
        >
          <Upload className="w-4 h-4" /> Upload Media
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-3 bg-white p-3 rounded-xl border border-gray-100 items-center">
        <div className="relative flex-1 min-w-40">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Search media..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B67A]" />
        </div>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B67A]">
          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
        <div className="flex gap-1 border border-gray-200 rounded-lg overflow-hidden">
          <button onClick={() => setView("grid")} className={`p-2 ${view === "grid" ? "bg-[#0B2545] text-white" : "text-gray-400 hover:bg-gray-100"}`}><Grid className="w-4 h-4" /></button>
          <button onClick={() => setView("list")} className={`p-2 ${view === "list" ? "bg-[#0B2545] text-white" : "text-gray-400 hover:bg-gray-100"}`}><List className="w-4 h-4" /></button>
        </div>
      </div>

      {/* Grid/List */}
      {view === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              className="group relative rounded-xl overflow-hidden bg-gray-200 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <img src={item.thumb} alt={item.title} className="w-full h-36 object-cover" />
              <div className="absolute inset-0 bg-[#0B2545]/0 group-hover:bg-[#0B2545]/70 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <button className="p-2 bg-white rounded-lg hover:bg-yellow-100" title="Feature"><Star className="w-4 h-4 text-[#F4B942]" /></button>
                <button onClick={() => deleteItem(item.id)} className="p-2 bg-white rounded-lg hover:bg-red-50" title="Delete"><Trash2 className="w-4 h-4 text-red-500" /></button>
              </div>
              <div className="p-3">
                <p className="text-[#0B2545] text-xs font-medium truncate">{item.title}</p>
                <p className="text-gray-400 text-xs">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#f0f4f8] text-xs text-gray-500 uppercase tracking-wider border-b border-gray-200">
                <th className="text-left px-5 py-3">Preview</th>
                <th className="text-left px-5 py-3">Title</th>
                <th className="text-left px-5 py-3">Category</th>
                <th className="text-left px-5 py-3">Type</th>
                <th className="text-left px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="border-b border-gray-50 hover:bg-[#f0f4f8]/50 transition-colors">
                  <td className="px-5 py-3"><img src={item.thumb} alt={item.title} className="w-16 h-12 object-cover rounded-lg bg-gray-200" /></td>
                  <td className="px-5 py-3 font-medium text-[#0B2545]">{item.title}</td>
                  <td className="px-5 py-3 text-gray-500">{item.category}</td>
                  <td className="px-5 py-3"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full capitalize">{item.type}</span></td>
                  <td className="px-5 py-3">
                    <div className="flex gap-1.5">
                      <button className="p-1.5 text-gray-400 hover:text-[#F4B942] hover:bg-yellow-50 rounded-lg"><Star className="w-4 h-4" /></button>
                      <button onClick={() => deleteItem(item.id)} className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Upload Modal */}
      <AnimatePresence>
        {showUpload && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="bg-white rounded-2xl p-6 w-full max-w-md">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold text-[#0B2545]" style={{ fontFamily: "var(--font-display)" }}>Upload Media</h3>
                <button onClick={() => setShowUpload(false)} className="p-1.5 text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
              </div>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center mb-4 cursor-pointer hover:border-[#00B67A] transition-colors" onClick={() => fileRef.current?.click()}>
                <ImageIcon className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Click to select image or video</p>
                <p className="text-xs text-gray-300 mt-1">JPG, PNG, WEBP, MP4, MOV, WEBM</p>
                <input ref={fileRef} type="file" accept="image/*,video/*" className="hidden" />
              </div>
              <div className="space-y-3 mb-5">
                <input type="text" placeholder="Media title" value={newItem.title} onChange={(e) => setNewItem((n) => ({ ...n, title: e.target.value }))} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]" />
                <select value={newItem.category} onChange={(e) => setNewItem((n) => ({ ...n, category: e.target.value }))} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]">
                  {CATEGORIES.filter((c) => c !== "All").map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowUpload(false)} className="flex-1 py-2.5 border border-gray-200 text-gray-600 rounded-lg text-sm hover:bg-gray-50 transition-colors">Cancel</button>
                <button onClick={handleUpload} className="flex-1 py-2.5 bg-[#0B2545] text-white rounded-lg text-sm font-medium hover:bg-[#1a3a5c] transition-all flex items-center justify-center gap-2">
                  <Upload className="w-4 h-4" /> Upload
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
