import { useState } from "react";
import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import { Clock, ArrowRight, Search, Tag, ChevronRight } from "lucide-react";
import { BLOG_POSTS } from "../data/mockData";
import { SectionHeader } from "../components/SectionHeader";

const CATEGORIES = ["All", "Cleaning Tips", "Home Maintenance", "Airbnb Management", "Pest Control", "Health & Hygiene"];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = BLOG_POSTS.filter((post) => {
    const matchCat = activeCategory === "All" || post.category === activeCategory;
    const matchSearch = !search || post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-20">
      <section className="bg-[#0B2545] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#00B67A] text-sm font-semibold uppercase tracking-wider">HomeGlow Blog</span>
          <h1 className="text-4xl md:text-5xl text-white mt-3 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            Cleaning Tips & Home Care Advice
          </h1>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-3 rounded-xl bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat ? "bg-[#0B2545] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Tag className="w-3 h-3" />
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">No posts found matching your search.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#0B2545] text-white text-xs rounded-md font-medium">
                        {post.category}
                      </span>
                    </div>
                  </Link>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <span>{post.publishedAt}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-[#0B2545] mb-2 leading-snug hover:text-[#00B67A] transition-colors" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-[#00B67A] text-sm font-medium hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="pt-32 text-center py-20">
        <h2 className="text-2xl text-[#0B2545]" style={{ fontFamily: "var(--font-display)" }}>Post not found</h2>
        <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-[#00B67A]">
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-[#f0f4f8] py-3 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-[#0B2545]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/blog" className="hover:text-[#0B2545]">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#0B2545] truncate">{post.title}</span>
        </div>
      </div>

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-[#0B2545] text-white text-xs rounded-md font-medium mb-4">{post.category}</span>
            <h1 className="text-3xl md:text-4xl text-[#0B2545] mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>By {post.author}</span>
              <span>{post.publishedAt}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
            </div>
          </div>

          {/* Featured image */}
          <div className="rounded-2xl overflow-hidden mb-10 h-72 bg-gray-200">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
            {post.content.split("\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return <h2 key={i} className="text-xl text-[#0B2545] mt-8 mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{paragraph.slice(3)}</h2>;
              }
              if (paragraph.startsWith("### ")) {
                return <h3 key={i} className="text-lg text-[#0B2545] mt-6 mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{paragraph.slice(4)}</h3>;
              }
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return <p key={i} className="font-semibold text-[#0B2545] mt-3">{paragraph.slice(2, -2)}</p>;
              }
              if (paragraph.startsWith("- ")) {
                return <li key={i} className="ml-4 text-sm">{paragraph.slice(2)}</li>;
              }
              if (!paragraph.trim()) return <br key={i} />;
              return <p key={i} className="mb-4 text-sm leading-relaxed">{paragraph}</p>;
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-200">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-[#f0f4f8] text-[#0B2545] text-xs rounded-full border border-gray-200">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-xl text-[#0B2545] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/blog/${p.slug}`} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-36 overflow-hidden bg-gray-200">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <p className="text-[#0B2545] text-sm font-medium leading-snug mb-1 group-hover:text-[#00B67A] transition-colors" style={{ fontFamily: "var(--font-display)" }}>{p.title}</p>
                  <p className="text-gray-400 text-xs">{p.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
