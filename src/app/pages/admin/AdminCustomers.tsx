import { useState } from "react";
import { motion } from "motion/react";
import { Search, Eye, Mail, Phone, Calendar, Users } from "lucide-react";

const CUSTOMERS = [
  { id: 1, name: "Sarah Wanjiku", email: "sarah@example.com", phone: "+254796578077", location: "Kilimani", bookings: 4, lastBooking: "2024-05-25", totalSpent: 28500, status: "active" },
  { id: 2, name: "James Mwangi", email: "james@example.com", phone: "+254 722 456 789", location: "Westlands", bookings: 2, lastBooking: "2024-05-24", totalSpent: 9000, status: "active" },
  { id: 3, name: "Grace Akinyi", email: "grace@example.com", phone: "+254 733 567 890", location: "Karen", bookings: 7, lastBooking: "2024-05-23", totalSpent: 42000, status: "vip" },
  { id: 4, name: "Peter Kamau", email: "peter@example.com", phone: "+254 744 678 901", location: "Lavington", bookings: 3, lastBooking: "2024-05-22", totalSpent: 14500, status: "active" },
  { id: 5, name: "Nancy Otieno", email: "nancy@example.com", phone: "+254 755 789 012", location: "South B", bookings: 1, lastBooking: "2024-05-21", totalSpent: 15000, status: "active" },
  { id: 6, name: "David Odhiambo", email: "david@example.com", phone: "+254 766 890 123", location: "Ruiru", bookings: 5, lastBooking: "2024-05-20", totalSpent: 31000, status: "vip" },
];

const statusStyle: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  vip: "bg-[#F4B942]/20 text-[#0B2545]",
  inactive: "bg-gray-100 text-gray-500",
};

export function AdminCustomers() {
  const [search, setSearch] = useState("");
  const filtered = CUSTOMERS.filter((c) => !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-[#0B2545]" style={{ fontFamily: "var(--font-display)" }}>Customer Management</h2>
          <p className="text-gray-400 text-sm">{CUSTOMERS.length} customers · {CUSTOMERS.filter((c) => c.status === "vip").length} VIP</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
          <p className="text-2xl font-bold text-[#0B2545]" style={{ fontFamily: "var(--font-display)" }}>1,043</p>
          <p className="text-gray-400 text-sm">Total Customers</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
          <p className="text-2xl font-bold text-[#F4B942]" style={{ fontFamily: "var(--font-display)" }}>47</p>
          <p className="text-gray-400 text-sm">New This Month</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
          <p className="text-2xl font-bold text-[#00B67A]" style={{ fontFamily: "var(--font-display)" }}>64%</p>
          <p className="text-gray-400 text-sm">Return Rate</p>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input type="text" placeholder="Search customers..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B67A] bg-white" />
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#f0f4f8] text-xs text-gray-500 uppercase tracking-wider border-b border-gray-200">
                <th className="text-left px-5 py-3">Customer</th>
                <th className="text-left px-5 py-3">Contact</th>
                <th className="text-left px-5 py-3">Location</th>
                <th className="text-left px-5 py-3">Bookings</th>
                <th className="text-left px-5 py-3">Total Spent</th>
                <th className="text-left px-5 py-3">Status</th>
                <th className="text-left px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => (
                <motion.tr key={c.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }} className="border-b border-gray-50 hover:bg-[#f0f4f8]/50 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0B2545] flex items-center justify-center text-white text-xs font-semibold shrink-0">
                        {c.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-[#0B2545]">{c.name}</p>
                        <p className="text-xs text-gray-400">Last: {c.lastBooking}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <p className="text-gray-600 text-xs flex items-center gap-1"><Mail className="w-3 h-3" />{c.email}</p>
                    <p className="text-gray-400 text-xs flex items-center gap-1 mt-0.5"><Phone className="w-3 h-3" />{c.phone}</p>
                  </td>
                  <td className="px-5 py-3 text-gray-500">{c.location}</td>
                  <td className="px-5 py-3 font-medium text-[#0B2545] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gray-300" />{c.bookings}
                  </td>
                  <td className="px-5 py-3 font-semibold text-[#0B2545]">KSh {c.totalSpent.toLocaleString()}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${statusStyle[c.status]}`}>{c.status}</span>
                  </td>
                  <td className="px-5 py-3">
                    <button className="p-1.5 text-gray-400 hover:text-[#0B2545] hover:bg-gray-100 rounded-lg"><Eye className="w-4 h-4" /></button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
