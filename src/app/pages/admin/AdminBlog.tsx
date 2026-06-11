import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Edit, Trash2, Eye, EyeOff, X, Save, Search } from "lucide-react";
import { BLOG_POSTS } from "../../data/mockData";

export function AdminBlog() {
  const [posts, setPosts] = useState(BLOG_POSTS.map((p) => ({ ...p, published: true })));
  const [search, setSearch] = useState("");
  const [showEditor, setShowEditor] = useState(false);
  const [editPost, setEditPost] = useState<typeof posts[0] | null>(null);
  const [newPost, setNewPost] = useState({ title: "", category: "Cleaning Tips", excerpt: "" });

  const filtered = posts.filter((p) => !search || p.title.toLowerCase().includes(search.toLowerCase()));

  const togglePublish = (id: number) => setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, published: !p.published } : p)));
  const remove = (id: number) => setPosts((prev) => prev.filter((p) => p.id !== id));

  const saveNew = () => {
    if (!newPost.title) return;
    setPosts((prev) => [{
      id: Date.now(),
      slug: newPost.title.toLowerCase().replace(/\s+/g, "-"),
      title: newPost.title,
      excerpt: newPost.excerpt,
      content: "Draft content...",
      category: newPost.category,
      author: "HomeGlow Team",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=500&fit=crop&auto=format",
      publishedAt: new Date().toISOString().split("T")[0],
      readTime: "2 min read",
      tags: [],
      published: false,
    }, ...prev]);
    setShowEditor(false);
    setNewPost({ title: "", category: "Cleaning Tips", excerpt: "" });
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-[#0B2545]" style={{ fontFamily: "var(--font-display)" }}>Blog Management</h2>
          <p className="text-gray-400 text-sm">{posts.length} posts · {posts.filter((p) => p.published).length} published</p>
        </div>
        <button onClick={() => setShowEditor(true)} className="flex items-center gap-2 px-4 py-2 bg-[#0B2545] text-white rounded-lg text-sm font-medium hover:bg-[#1a3a5c] transition-all">
          <Plus className="w-4 h-4" /> New Post
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input type="text" placeholder="Search posts..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B67A] bg-white" />
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#f0f4f8] text-xs text-gray-500 uppercase tracking-wider border-b border-gray-200">
              <th className="text-left px-5 py-3">Post</th>
              <th className="text-left px-5 py-3">Category</th>
              <th className="text-left px-5 py-3">Date</th>
              <th className="text-left px-5 py-3">Status</th>
              <th className="text-left px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((post, i) => (
              <motion.tr key={post.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }} className="border-b border-gray-50 hover:bg-[#f0f4f8]/50 transition-colors">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <img src={post.image} alt={post.title} className="w-12 h-9 rounded-lg object-cover bg-gray-200 shrink-0" />
                    <div>
                      <p className="font-medium text-[#0B2545] leading-tight">{post.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{post.readTime}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3"><span className="px-2 py-0.5 bg-[#0B2545]/8 text-[#0B2545] text-xs rounded-md">{post.category}</span></td>
                <td className="px-5 py-3 text-gray-400 text-xs">{post.publishedAt}</td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${post.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                    {post.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <div className="flex gap-1.5">
                    <button onClick={() => togglePublish(post.id)} className={`p-1.5 rounded-lg transition-colors ${post.published ? "text-[#00B67A] hover:bg-green-50" : "text-gray-400 hover:bg-gray-100"}`}>
                      {post.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-[#0B2545] hover:bg-gray-100 rounded-lg"><Edit className="w-4 h-4" /></button>
                    <button onClick={() => remove(post.id)} className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {showEditor && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="bg-white rounded-2xl p-6 w-full max-w-lg">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold text-[#0B2545]" style={{ fontFamily: "var(--font-display)" }}>New Blog Post</h3>
                <button onClick={() => setShowEditor(false)}><X className="w-5 h-5 text-gray-400" /></button>
              </div>
              <div className="space-y-3">
                <input type="text" placeholder="Post title *" value={newPost.title} onChange={(e) => setNewPost((n) => ({ ...n, title: e.target.value }))} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]" />
                <select value={newPost.category} onChange={(e) => setNewPost((n) => ({ ...n, category: e.target.value }))} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]">
                  {["Cleaning Tips", "Home Maintenance", "Airbnb Management", "Pest Control", "Health & Hygiene"].map((c) => <option key={c}>{c}</option>)}
                </select>
                <textarea placeholder="Short excerpt..." value={newPost.excerpt} onChange={(e) => setNewPost((n) => ({ ...n, excerpt: e.target.value }))} rows={3} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A] resize-none" />
              </div>
              <div className="flex gap-3 mt-5">
                <button onClick={() => setShowEditor(false)} className="flex-1 py-2.5 border border-gray-200 text-gray-600 rounded-lg text-sm">Cancel</button>
                <button onClick={saveNew} className="flex-1 py-2.5 bg-[#0B2545] text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#1a3a5c] transition-all">
                  <Save className="w-4 h-4" /> Save Draft
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
