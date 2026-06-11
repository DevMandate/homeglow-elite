import { useState } from "react";
import { motion } from "motion/react";
import { Search, Filter, Plus, Eye, Edit, Trash2, Phone, Mail, Calendar, ChevronDown } from "lucide-react";
import { BOOKINGS } from "../../data/mockData";

export function AdminBookings() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [bookings, setBookings] = useState(BOOKINGS);

  const filtered = bookings.filter((b) => {
    const matchSearch = !search || b.customer.toLowerCase().includes(search.toLowerCase()) || b.service.toLowerCase().includes(search.toLowerCase()) || b.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || b.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const updateStatus = (id: string, status: string) => {
    setBookings((bs) => bs.map((b) => (b.id === id ? { ...b, status } : b)));
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#0B2545]" style={{ fontFamily: "var(--font-display)" }}>Booking Management</h2>
          <p className="text-gray-400 text-sm">{filtered.length} total bookings</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#0B2545] text-white rounded-lg text-sm font-medium hover:bg-[#1a3a5c] transition-all">
          <Plus className="w-4 h-4" /> New Booking
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 bg-white p-3 rounded-xl border border-gray-100">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search bookings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B67A]"
          />
        </div>
        <div className="flex gap-2">
          {["all", "pending", "confirmed", "completed", "cancelled"].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${statusFilter === s ? "bg-[#0B2545] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#f0f4f8] text-xs text-gray-500 uppercase tracking-wider border-b border-gray-200">
                <th className="text-left px-5 py-3">Booking</th>
                <th className="text-left px-5 py-3">Customer</th>
                <th className="text-left px-5 py-3">Service</th>
                <th className="text-left px-5 py-3">Date & Time</th>
                <th className="text-left px-5 py-3">Amount</th>
                <th className="text-left px-5 py-3">Status</th>
                <th className="text-left px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b, i) => (
                <motion.tr
                  key={b.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="border-b border-gray-50 hover:bg-[#f0f4f8]/50 transition-colors"
                >
                  <td className="px-5 py-3">
                    <span className="font-mono text-xs text-[#0B2545] font-semibold">{b.id}</span>
                  </td>
                  <td className="px-5 py-3">
                    <p className="font-medium text-[#0B2545]">{b.customer}</p>
                    <p className="text-xs text-gray-400 flex items-center gap-1"><Phone className="w-3 h-3" />{b.phone}</p>
                  </td>
                  <td className="px-5 py-3">
                    <p className="text-gray-700">{b.service}</p>
                    <p className="text-xs text-gray-400 flex items-center gap-1"><Calendar className="w-3 h-3" />{b.location}</p>
                  </td>
                  <td className="px-5 py-3">
                    <p className="text-gray-700">{b.date}</p>
                    <p className="text-xs text-gray-400">{b.time}</p>
                  </td>
                  <td className="px-5 py-3 font-semibold text-[#0B2545]">KSh {b.amount.toLocaleString()}</td>
                  <td className="px-5 py-3">
                    <div className="relative group">
                      <button className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                        b.status === "confirmed" ? "bg-blue-100 text-blue-700" :
                        b.status === "completed" ? "bg-green-100 text-green-700" :
                        b.status === "pending" ? "bg-yellow-100 text-yellow-700" :
                        "bg-red-100 text-red-700"
                      }`}>
                        {b.status} <ChevronDown className="w-3 h-3" />
                      </button>
                      <div className="absolute top-full left-0 mt-1 w-32 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-10 hidden group-hover:block">
                        {["pending", "confirmed", "completed", "cancelled"].map((s) => (
                          <button key={s} onClick={() => updateStatus(b.id, s)} className="block w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-[#f0f4f8] capitalize">
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex gap-1.5">
                      <button className="p-1.5 text-gray-400 hover:text-[#0B2545] hover:bg-gray-100 rounded-lg transition-colors"><Eye className="w-4 h-4" /></button>
                      <button className="p-1.5 text-gray-400 hover:text-[#0B2545] hover:bg-gray-100 rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                      <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && <p className="text-center text-gray-400 py-8">No bookings found.</p>}
        </div>
      </div>
    </div>
  );
}
