import { Link } from "react-router";
import { motion } from "motion/react";
import React from "react";
import { TrendingUp, TrendingDown, Calendar, Users, DollarSign, Star, Ticket, ArrowRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { ADMIN_STATS, BOOKINGS } from "../../data/mockData";

const REVENUE_DATA = [
  { month: "Jan", revenue: 85000, bookings: 18 },
  { month: "Feb", revenue: 92000, bookings: 21 },
  { month: "Mar", revenue: 108000, bookings: 26 },
  { month: "Apr", revenue: 115000, bookings: 28 },
  { month: "May", revenue: 142000, bookings: 34 },
  { month: "Jun", revenue: 138000, bookings: 32 },
];

const SERVICE_BREAKDOWN = [
  { name: "Sofa Cleaning", value: 28, color: "#0B2545" },
  { name: "Carpet Cleaning", value: 22, color: "#00B67A" },
  { name: "Deep Cleaning", value: 18, color: "#F4B942" },
  { name: "Airbnb", value: 15, color: "#1a4a7a" },
  { name: "Others", value: 17, color: "#6b7a8d" },
];

function StatCard({ label, value, sub, icon: Icon, trend, color }: { label: string; value: string | number; sub?: string; icon: React.ComponentType<{ className?: string }>; trend?: "up" | "down"; color?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center`} style={{ background: (color ?? "#0B2545") + "18" }}>
          <Icon className="w-5 h-5" style={{ color: color ?? "#0B2545" }} />
        </div>
        {trend && (
          <span className={`flex items-center gap-0.5 text-xs font-medium ${trend === "up" ? "text-[#00B67A]" : "text-red-500"}`}>
            {trend === "up" ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
            {trend === "up" ? "+12%" : "-3%"}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-[#0B2545]" style={{ fontFamily: "var(--font-display)" }}>{value}</p>
      <p className="text-gray-500 text-sm mt-0.5">{label}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </motion.div>
  );
}

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Bookings" value={ADMIN_STATS.totalBookings} icon={Calendar} trend="up" color="#0B2545" />
        <StatCard label="This Month Revenue" value={`KSh ${ADMIN_STATS.thisMonthRevenue.toLocaleString()}`} icon={DollarSign} trend="up" color="#00B67A" />
        <StatCard label="Total Customers" value={ADMIN_STATS.totalCustomers.toLocaleString()} icon={Users} trend="up" color="#F4B942" />
        <StatCard label="Avg Rating" value={ADMIN_STATS.avgRating} sub="From 200+ reviews" icon={Star} color="#F4B942" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Pending Bookings" value={ADMIN_STATS.pendingBookings} icon={Calendar} color="#F4B942" />
        <StatCard label="Confirmed Bookings" value={ADMIN_STATS.confirmedBookings} icon={Calendar} color="#0B2545" />
        <StatCard label="Newsletter Subs" value={ADMIN_STATS.totalSubscribers} icon={Users} color="#00B67A" />
        <StatCard label="Open Tickets" value={ADMIN_STATS.openTickets} icon={Ticket} color="#d4183d" />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue chart */}
        <div className="lg:col-span-2 bg-white rounded-xl p-5 border border-gray-100">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-[#0B2545] font-semibold" style={{ fontFamily: "var(--font-display)" }}>Revenue Overview</h3>
            <span className="text-xs text-gray-400">Last 6 months</span>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={REVENUE_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${v / 1000}k`} />
              <Tooltip formatter={(v: number) => [`KSh ${v.toLocaleString()}`, "Revenue"]} />
              <Line type="monotone" dataKey="revenue" stroke="#0B2545" strokeWidth={2.5} dot={{ fill: "#0B2545", r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Service breakdown */}
        <div className="bg-white rounded-xl p-5 border border-gray-100">
          <h3 className="text-[#0B2545] font-semibold mb-5" style={{ fontFamily: "var(--font-display)" }}>Service Breakdown</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={SERVICE_BREAKDOWN} cx="50%" cy="50%" outerRadius={70} dataKey="value" labelLine={false}>
                {SERVICE_BREAKDOWN.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip formatter={(v) => [`${v}%`, ""]} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 mt-3">
            {SERVICE_BREAKDOWN.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
                  <span className="text-gray-600">{item.name}</span>
                </div>
                <span className="font-medium text-[#0B2545]">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h3 className="text-[#0B2545] font-semibold" style={{ fontFamily: "var(--font-display)" }}>Recent Bookings</h3>
          <Link to="/admin/bookings" className="text-[#00B67A] text-sm flex items-center gap-1 hover:gap-2 transition-all">
            View all <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#f0f4f8] text-xs text-gray-500 uppercase tracking-wider">
                <th className="text-left px-5 py-3">ID</th>
                <th className="text-left px-5 py-3">Customer</th>
                <th className="text-left px-5 py-3">Service</th>
                <th className="text-left px-5 py-3">Date</th>
                <th className="text-left px-5 py-3">Amount</th>
                <th className="text-left px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {BOOKINGS.map((b, i) => (
                <tr key={b.id} className={`border-b border-gray-50 hover:bg-[#f0f4f8]/50 transition-colors ${i % 2 === 0 ? "" : "bg-gray-50/30"}`}>
                  <td className="px-5 py-3 text-gray-400 font-mono text-xs">{b.id}</td>
                  <td className="px-5 py-3">
                    <p className="font-medium text-[#0B2545]">{b.customer}</p>
                    <p className="text-xs text-gray-400">{b.location}</p>
                  </td>
                  <td className="px-5 py-3 text-gray-600">{b.service}</td>
                  <td className="px-5 py-3 text-gray-500">{b.date}</td>
                  <td className="px-5 py-3 font-medium text-[#0B2545]">KSh {b.amount.toLocaleString()}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      b.status === "confirmed" ? "bg-blue-100 text-blue-700" :
                      b.status === "completed" ? "bg-green-100 text-green-700" :
                      b.status === "pending" ? "bg-yellow-100 text-yellow-700" :
                      "bg-red-100 text-red-700"
                    }`}>
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
