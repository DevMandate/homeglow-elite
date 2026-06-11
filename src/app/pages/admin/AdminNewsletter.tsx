import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Send, Users, TrendingUp, Trash2, Search, Plus } from "lucide-react";
import { NEWSLETTER_SUBSCRIBERS } from "../../data/mockData";

export function AdminNewsletter() {
  const [subscribers, setSubscribers] = useState(NEWSLETTER_SUBSCRIBERS);
  const [search, setSearch] = useState("");
  const [campaignSubject, setCampaignSubject] = useState("");
  const [campaignBody, setCampaignBody] = useState("");
  const [sent, setSent] = useState(false);
  const [activeTab, setActiveTab] = useState<"subscribers" | "compose">("subscribers");

  const filtered = subscribers.filter((s) =>
    !search || s.name.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase())
  );

  const remove = (id: number) => setSubscribers((prev) => prev.filter((s) => s.id !== id));

  return (
    <div className="space-y-5">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
          <p className="text-2xl font-bold text-[#0B2545]" style={{ fontFamily: "var(--font-display)" }}>{subscribers.length}</p>
          <p className="text-gray-400 text-sm">Total Subscribers</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
          <p className="text-2xl font-bold text-[#00B67A]" style={{ fontFamily: "var(--font-display)" }}>{subscribers.filter((s) => s.status === "active").length}</p>
          <p className="text-gray-400 text-sm">Active</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
          <p className="text-2xl font-bold text-gray-400" style={{ fontFamily: "var(--font-display)" }}>{subscribers.filter((s) => s.status === "unsubscribed").length}</p>
          <p className="text-gray-400 text-sm">Unsubscribed</p>
        </div>
      </div>

      <div className="flex gap-2">
        {[{ id: "subscribers" as const, label: "Subscribers" }, { id: "compose" as const, label: "Send Campaign" }].map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id ? "bg-[#0B2545] text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "subscribers" && (
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Search subscribers..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B67A] bg-white" />
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#f0f4f8] text-xs text-gray-500 uppercase tracking-wider border-b border-gray-200">
                  <th className="text-left px-5 py-3">Name</th>
                  <th className="text-left px-5 py-3">Email</th>
                  <th className="text-left px-5 py-3">Subscribed</th>
                  <th className="text-left px-5 py-3">Status</th>
                  <th className="text-left px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s, i) => (
                  <tr key={s.id} className="border-b border-gray-50 hover:bg-[#f0f4f8]/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-[#0B2545]">{s.name}</td>
                    <td className="px-5 py-3 text-gray-500">{s.email}</td>
                    <td className="px-5 py-3 text-gray-400 text-xs">{s.subscribedAt}</td>
                    <td className="px-5 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${s.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <button onClick={() => remove(s.id)} className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "compose" && (
        <div className="bg-white rounded-xl border border-gray-100 p-6 max-w-2xl">
          <h3 className="text-lg font-semibold text-[#0B2545] mb-5" style={{ fontFamily: "var(--font-display)" }}>Compose Newsletter</h3>
          {sent ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
              <div className="w-12 h-12 bg-[#00B67A]/15 rounded-full flex items-center justify-center mx-auto mb-3">
                <Send className="w-6 h-6 text-[#00B67A]" />
              </div>
              <h4 className="text-[#0B2545] font-semibold mb-1">Campaign Sent!</h4>
              <p className="text-gray-500 text-sm">Your newsletter has been sent to {subscribers.filter((s) => s.status === "active").length} active subscribers.</p>
              <button onClick={() => setSent(false)} className="mt-4 px-4 py-2 bg-[#0B2545] text-white rounded-lg text-sm">Compose Another</button>
            </motion.div>
          ) : (
            <div className="space-y-4">
              <div className="p-3 bg-[#0B2545]/5 rounded-lg flex items-center gap-2 text-sm text-[#0B2545]">
                <Users className="w-4 h-4" />
                Sending to <strong>{subscribers.filter((s) => s.status === "active").length}</strong> active subscribers
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0B2545] mb-1.5">Subject Line *</label>
                <input type="text" value={campaignSubject} onChange={(e) => setCampaignSubject(e.target.value)} placeholder="e.g. June Cleaning Tips + Exclusive Discount" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0B2545] mb-1.5">Message *</label>
                <textarea value={campaignBody} onChange={(e) => setCampaignBody(e.target.value)} rows={8} placeholder="Write your newsletter content here..." className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00B67A] resize-none" />
              </div>
              <button
                onClick={() => { if (campaignSubject && campaignBody) setSent(true); }}
                className="flex items-center gap-2 px-6 py-3 bg-[#0B2545] text-white rounded-lg text-sm font-medium hover:bg-[#1a3a5c] transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" /> Send Campaign
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
