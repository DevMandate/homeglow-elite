import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from "recharts";

const MONTHLY = [
  { month: "Jan", revenue: 85000, bookings: 18, customers: 14 },
  { month: "Feb", revenue: 92000, bookings: 21, customers: 17 },
  { month: "Mar", revenue: 108000, bookings: 26, customers: 22 },
  { month: "Apr", revenue: 115000, bookings: 28, customers: 24 },
  { month: "May", revenue: 142000, bookings: 34, customers: 29 },
  { month: "Jun", revenue: 138000, bookings: 32, customers: 27 },
];

const TOP_SERVICES = [
  { service: "Deep Cleaning", revenue: 185000, count: 23 },
  { service: "Carpet Cleaning", revenue: 142000, count: 31 },
  { service: "Sofa Cleaning", revenue: 128000, count: 42 },
  { service: "Airbnb Cleaning", revenue: 115000, count: 38 },
  { service: "Post-Construction", revenue: 90000, count: 6 },
  { service: "Mattress Cleaning", revenue: 78000, count: 35 },
];

const TOP_AREAS = [
  { area: "Kilimani", bookings: 34 },
  { area: "Westlands", bookings: 28 },
  { area: "Karen", bookings: 22 },
  { area: "Lavington", bookings: 19 },
  { area: "South B", bookings: 15 },
  { area: "Parklands", bookings: 12 },
];

export function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-[#0B2545]" style={{ fontFamily: "var(--font-display)" }}>Analytics Overview</h2>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Revenue", value: "KSh 1.28M", sub: "All time", color: "#0B2545" },
          { label: "Total Bookings", value: "156", sub: "All time", color: "#00B67A" },
          { label: "Avg Order Value", value: "KSh 8,237", sub: "Per booking", color: "#F4B942" },
          { label: "Return Rate", value: "64%", sub: "Repeat customers", color: "#0B2545" },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-2xl font-bold mb-0.5" style={{ color: kpi.color, fontFamily: "var(--font-display)" }}>{kpi.value}</p>
            <p className="text-sm text-[#0B2545] font-medium">{kpi.label}</p>
            <p className="text-xs text-gray-400 mt-0.5">{kpi.sub}</p>
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-xl p-5 border border-gray-100">
        <h3 className="text-[#0B2545] font-semibold mb-5" style={{ fontFamily: "var(--font-display)" }}>Monthly Revenue & Bookings</h3>
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={MONTHLY}>
            <defs>
              <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0B2545" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#0B2545" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${v / 1000}k`} />
            <Tooltip formatter={(v: number, name: string) => [name === "revenue" ? `KSh ${v.toLocaleString()}` : v, name === "revenue" ? "Revenue" : "Bookings"]} />
            <Area type="monotone" dataKey="revenue" stroke="#0B2545" strokeWidth={2} fill="url(#revenueGrad)" />
            <Bar dataKey="bookings" fill="#00B67A" radius={[2, 2, 0, 0]} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Services */}
        <div className="bg-white rounded-xl p-5 border border-gray-100">
          <h3 className="text-[#0B2545] font-semibold mb-4" style={{ fontFamily: "var(--font-display)" }}>Revenue by Service</h3>
          <div className="space-y-3">
            {TOP_SERVICES.map((s) => (
              <div key={s.service}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-700">{s.service}</span>
                  <span className="font-medium text-[#0B2545]">KSh {s.revenue.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div
                    className="h-1.5 rounded-full bg-gradient-to-r from-[#0B2545] to-[#00B67A]"
                    style={{ width: `${(s.revenue / 185000) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Areas */}
        <div className="bg-white rounded-xl p-5 border border-gray-100">
          <h3 className="text-[#0B2545] font-semibold mb-4" style={{ fontFamily: "var(--font-display)" }}>Bookings by Area</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={TOP_AREAS} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10 }} />
              <YAxis dataKey="area" type="category" tick={{ fontSize: 10 }} width={70} />
              <Tooltip />
              <Bar dataKey="bookings" fill="#00B67A" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
