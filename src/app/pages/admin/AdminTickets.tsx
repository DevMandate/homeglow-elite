import { useState } from "react";
import { motion } from "motion/react";
import { Search, MessageCircle, Eye, ChevronDown, Clock, AlertCircle } from "lucide-react";
import { SUPPORT_TICKETS } from "../../data/mockData";

export function AdminTickets() {
  const [tickets, setTickets] = useState(SUPPORT_TICKETS);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = tickets.filter((t) => {
    const matchSearch = !search || t.subject.toLowerCase().includes(search.toLowerCase()) || t.customer.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || t.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const updateStatus = (id: string, status: string) => {
    setTickets((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  const priorityColor: Record<string, string> = {
    high: "bg-red-100 text-red-700",
    medium: "bg-yellow-100 text-yellow-700",
    low: "bg-green-100 text-green-700",
  };

  const statusColor: Record<string, string> = {
    open: "bg-blue-100 text-blue-700",
    "in-progress": "bg-yellow-100 text-yellow-700",
    resolved: "bg-green-100 text-green-700",
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-[#0B2545]" style={{ fontFamily: "var(--font-display)" }}>Support Tickets</h2>
          <p className="text-gray-400 text-sm">{tickets.filter((t) => t.status === "open").length} open tickets</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 bg-white p-3 rounded-xl border border-gray-100">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Search tickets..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B67A]" />
        </div>
        {["all", "open", "in-progress", "resolved"].map((s) => (
          <button key={s} onClick={() => setStatusFilter(s)} className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${statusFilter === s ? "bg-[#0B2545] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{s}</button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((ticket, i) => (
          <motion.div
            key={ticket.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-gray-400">{ticket.id}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${priorityColor[ticket.priority] ?? "bg-gray-100 text-gray-500"}`}>
                    {ticket.priority} priority
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColor[ticket.status] ?? "bg-gray-100 text-gray-500"}`}>
                    {ticket.status}
                  </span>
                </div>
                <h4 className="text-[#0B2545] font-medium">{ticket.subject}</h4>
                <p className="text-gray-400 text-sm mt-1 truncate">{ticket.message}</p>
                <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-400">
                  <span>{ticket.customer}</span>
                  <span>{ticket.email}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{ticket.createdAt}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className="relative group">
                  <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 text-gray-600 rounded-lg text-xs hover:bg-gray-50">
                    Update <ChevronDown className="w-3 h-3" />
                  </button>
                  <div className="absolute right-0 top-full mt-1 w-32 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-10 hidden group-hover:block">
                    {["open", "in-progress", "resolved"].map((s) => (
                      <button key={s} onClick={() => updateStatus(ticket.id, s)} className="block w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-[#f0f4f8] capitalize">{s}</button>
                    ))}
                  </div>
                </div>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-[#0B2545] text-white rounded-lg text-xs hover:bg-[#1a3a5c] transition-all">
                  <MessageCircle className="w-3.5 h-3.5" /> Reply
                </button>
              </div>
            </div>
          </motion.div>
        ))}
        {filtered.length === 0 && <p className="text-center text-gray-400 py-8">No tickets found.</p>}
      </div>
    </div>
  );
}
