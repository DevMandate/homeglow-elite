import { Outlet, Link, useLocation } from "react-router";
import { useState } from "react";
import {
  LayoutDashboard, Calendar, Users, Settings, FileText,
  Image, Star, Mail, Ticket, BarChart2, Shield,
  Menu, X, LogOut, Bell, ChevronRight, Wrench, DollarSign,
} from "lucide-react";

const ADMIN_NAV = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Bookings", href: "/admin/bookings", icon: Calendar },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Services", href: "/admin/services", icon: Wrench },
  { label: "Pricing", href: "/admin/pricing", icon: DollarSign },
  { label: "Blog", href: "/admin/blog", icon: FileText },
  { label: "Media", href: "/admin/media", icon: Image },
  { label: "Testimonials", href: "/admin/testimonials", icon: Star },
  { label: "Newsletter", href: "/admin/newsletter", icon: Mail },
  { label: "Support Tickets", href: "/admin/tickets", icon: Ticket },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart2 },
  { label: "User Roles", href: "/admin/users", icon: Shield },
];

export function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-[#f0f4f8] overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-[#0B2545] flex flex-col transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#00B67A] flex items-center justify-center">
              <span className="text-white text-xs font-bold">HG</span>
            </div>
            <span className="text-white text-base font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              HomeGlow
            </span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white/60 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {ADMIN_NAV.map(({ label, href, icon: Icon }) => {
            const active = location.pathname === href || (href !== "/admin" && location.pathname.startsWith(href));
            return (
              <Link
                key={href}
                to={href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                  active
                    ? "bg-[#00B67A] text-white"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {label}
                {active && <ChevronRight className="w-3 h-3 ml-auto" />}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="px-3 py-4 border-t border-white/10">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Back to Site
          </Link>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-1.5 text-gray-500 hover:text-gray-700"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <p className="text-xs text-gray-400">Admin Panel</p>
              <h1 className="text-base font-semibold text-[#0B2545]">
                {ADMIN_NAV.find((n) => location.pathname === n.href || (n.href !== "/admin" && location.pathname.startsWith(n.href)))?.label ?? "Dashboard"}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-500 hover:text-gray-700">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0B2545] flex items-center justify-center text-white text-xs font-semibold">
                AD
              </div>
              <span className="hidden sm:block text-sm font-medium text-gray-700">Admin</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
