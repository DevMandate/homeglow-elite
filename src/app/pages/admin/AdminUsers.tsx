import { useState } from "react";
import { motion } from "motion/react";
import { Plus, Edit, Trash2, Shield, User, Eye } from "lucide-react";

const USERS = [
  { id: 1, name: "John Kariuki", email: "john@homeglow.co.ke", role: "super_admin", status: "active", lastLogin: "2024-05-25 09:12" },
  { id: 2, name: "Mary Njoroge", email: "mary@homeglow.co.ke", role: "admin", status: "active", lastLogin: "2024-05-24 14:30" },
  { id: 3, name: "Samuel Ochieng", email: "samuel@homeglow.co.ke", role: "technician", status: "active", lastLogin: "2024-05-23 08:45" },
  { id: 4, name: "Agnes Wambui", email: "agnes@homeglow.co.ke", role: "support", status: "active", lastLogin: "2024-05-22 11:20" },
  { id: 5, name: "Brian Maina", email: "brian@homeglow.co.ke", role: "technician", status: "inactive", lastLogin: "2024-05-10 16:00" },
];

const ROLES = [
  { value: "super_admin", label: "Super Admin", desc: "Full access to all modules", color: "bg-red-100 text-red-700" },
  { value: "admin", label: "Admin", desc: "All modules except user management", color: "bg-blue-100 text-blue-700" },
  { value: "support", label: "Support", desc: "Bookings and tickets only", color: "bg-[#F4B942]/20 text-[#0B2545]" },
  { value: "technician", label: "Technician", desc: "View assigned bookings only", color: "bg-green-100 text-green-700" },
];

const roleStyle: Record<string, string> = {
  super_admin: "bg-red-100 text-red-700",
  admin: "bg-blue-100 text-blue-700",
  support: "bg-yellow-100 text-yellow-700",
  technician: "bg-green-100 text-green-700",
};

export function AdminUsers() {
  const [users, setUsers] = useState(USERS);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#0B2545]" style={{ fontFamily: "var(--font-display)" }}>User Roles & Permissions</h2>
          <p className="text-gray-400 text-sm">{users.length} users · {users.filter((u) => u.status === "active").length} active</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#0B2545] text-white rounded-lg text-sm font-medium hover:bg-[#1a3a5c] transition-all">
          <Plus className="w-4 h-4" /> Add User
        </button>
      </div>

      {/* Roles Overview */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ROLES.map((role) => (
          <div key={role.value} className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-[#0B2545]" />
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${role.color}`}>{role.label}</span>
            </div>
            <p className="text-gray-400 text-xs">{role.desc}</p>
            <p className="text-[#0B2545] font-bold mt-2" style={{ fontFamily: "var(--font-display)" }}>
              {users.filter((u) => u.role === role.value).length}
            </p>
          </div>
        ))}
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#f0f4f8] text-xs text-gray-500 uppercase tracking-wider border-b border-gray-200">
              <th className="text-left px-5 py-3">User</th>
              <th className="text-left px-5 py-3">Role</th>
              <th className="text-left px-5 py-3">Status</th>
              <th className="text-left px-5 py-3">Last Login</th>
              <th className="text-left px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <motion.tr key={u.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.06 }} className="border-b border-gray-50 hover:bg-[#f0f4f8]/50">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0B2545] flex items-center justify-center text-white text-xs font-semibold">
                      {u.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-[#0B2545]">{u.name}</p>
                      <p className="text-xs text-gray-400">{u.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${roleStyle[u.role] ?? "bg-gray-100 text-gray-500"}`}>
                    {ROLES.find((r) => r.value === u.role)?.label ?? u.role}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${u.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>{u.status}</span>
                </td>
                <td className="px-5 py-3 text-gray-400 text-xs">{u.lastLogin}</td>
                <td className="px-5 py-3">
                  <div className="flex gap-1.5">
                    <button className="p-1.5 text-gray-400 hover:text-[#0B2545] hover:bg-gray-100 rounded-lg"><Edit className="w-4 h-4" /></button>
                    <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
