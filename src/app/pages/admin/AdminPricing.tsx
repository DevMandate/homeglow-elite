import { useState } from "react";
import { motion } from "motion/react";
import { Edit, Save, X, Plus, Trash2, DollarSign } from "lucide-react";
import { PRICING } from "../../data/mockData";

export function AdminPricing() {
  const [prices, setPrices] = useState(PRICING);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValues, setEditValues] = useState<{ price: number; status: string }>({ price: 0, status: "available" });

  const startEdit = (item: typeof PRICING[0]) => {
    setEditingId(item.id);
    setEditValues({ price: item.price, status: item.status });
  };

  const saveEdit = (id: number) => {
    setPrices((prev) => prev.map((p) => (p.id === id ? { ...p, ...editValues } : p)));
    setEditingId(null);
  };

  const remove = (id: number) => setPrices((prev) => prev.filter((p) => p.id !== id));

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#0B2545]" style={{ fontFamily: "var(--font-display)" }}>Pricing Management</h2>
          <p className="text-gray-400 text-sm">Edit service prices here — changes reflect immediately on the public pricing page.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#0B2545] text-white rounded-lg text-sm font-medium hover:bg-[#1a3a5c] transition-all">
          <Plus className="w-4 h-4" /> Add Price Item
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#f0f4f8] text-xs text-gray-500 uppercase tracking-wider border-b border-gray-200">
              <th className="text-left px-5 py-3">Service</th>
              <th className="text-left px-5 py-3">Description</th>
              <th className="text-left px-5 py-3">Price (KSh)</th>
              <th className="text-left px-5 py-3">Unit</th>
              <th className="text-left px-5 py-3">Status</th>
              <th className="text-left px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, i) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.02 }}
                className="border-b border-gray-50 hover:bg-[#f0f4f8]/50 transition-colors"
              >
                <td className="px-5 py-3 font-medium text-[#0B2545]">{item.service}</td>
                <td className="px-5 py-3 text-gray-400 text-xs">{item.description}</td>
                <td className="px-5 py-3">
                  {editingId === item.id ? (
                    <input
                      type="number"
                      value={editValues.price}
                      onChange={(e) => setEditValues((v) => ({ ...v, price: Number(e.target.value) }))}
                      className="w-24 px-2 py-1 border border-[#00B67A] rounded-lg text-sm focus:outline-none"
                    />
                  ) : (
                    <span className="font-semibold text-[#0B2545] flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-gray-300" />
                      {item.price > 0 ? item.price.toLocaleString() : "—"}
                    </span>
                  )}
                </td>
                <td className="px-5 py-3 text-gray-500 text-xs">{item.unit}</td>
                <td className="px-5 py-3">
                  {editingId === item.id ? (
                    <select value={editValues.status} onChange={(e) => setEditValues((v) => ({ ...v, status: e.target.value }))} className="px-2 py-1 border border-[#00B67A] rounded-lg text-xs focus:outline-none">
                      <option value="available">Available</option>
                      <option value="quote">Quote Required</option>
                      <option value="unavailable">Unavailable</option>
                    </select>
                  ) : (
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${item.status === "available" ? "bg-green-100 text-green-700" : item.status === "quote" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-500"}`}>
                      {item.status}
                    </span>
                  )}
                </td>
                <td className="px-5 py-3">
                  <div className="flex gap-1.5">
                    {editingId === item.id ? (
                      <>
                        <button onClick={() => saveEdit(item.id)} className="p-1.5 text-[#00B67A] hover:bg-green-50 rounded-lg"><Save className="w-4 h-4" /></button>
                        <button onClick={() => setEditingId(null)} className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-lg"><X className="w-4 h-4" /></button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => startEdit(item)} className="p-1.5 text-gray-400 hover:text-[#0B2545] hover:bg-gray-100 rounded-lg"><Edit className="w-4 h-4" /></button>
                        <button onClick={() => remove(item.id)} className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                      </>
                    )}
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
