import { useState } from "react";
import { useSearchParams, Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, ChevronRight, Calendar, Clock, MapPin, User, ArrowLeft, ArrowRight } from "lucide-react";
import { SERVICES, SERVICE_AREAS } from "../data/mockData";

const TIME_SLOTS = ["07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

const PROPERTY_TYPES = ["Apartment", "House / Bungalow", "Villa / Townhouse", "Airbnb Unit", "Office / Commercial", "Other"];

interface BookingData {
  service: string;
  propertyType: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  notes: string;
}

export function Booking() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get("service") || "";

  const [step, setStep] = useState(1);
  const [data, setData] = useState<BookingData>({
    service: initialService,
    propertyType: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    location: "",
    notes: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const update = (field: keyof BookingData, value: string) =>
    setData((d) => ({ ...d, [field]: value }));

  const selectedService = SERVICES.find((s) => s.id === data.service);

  const STEPS = [
    { num: 1, label: "Service" },
    { num: 2, label: "Property" },
    { num: 3, label: "Date & Time" },
    { num: 4, label: "Your Details" },
    { num: 5, label: "Review" },
  ];

  const canProceed = () => {
    if (step === 1) return !!data.service;
    if (step === 2) return !!data.propertyType;
    if (step === 3) return !!data.date && !!data.time;
    if (step === 4) return !!data.name && !!data.phone && !!data.email && !!data.location;
    return true;
  };

  const handleConfirm = () => {
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="pt-20 min-h-screen bg-[#f0f4f8] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-10 max-w-lg w-full text-center shadow-xl"
        >
          <div className="w-16 h-16 bg-[#00B67A]/15 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-8 h-8 text-[#00B67A]" />
          </div>
          <h2 className="text-2xl text-[#0B2545] mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            Booking Confirmed! 🎉
          </h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Thank you, <strong>{data.name}</strong>! Your booking for <strong>{selectedService?.name}</strong> has been received. We'll send a confirmation to <strong>{data.email}</strong> and SMS to <strong>{data.phone}</strong>.
          </p>
          <div className="bg-[#f0f4f8] rounded-xl p-4 text-left mb-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Service:</span>
              <span className="font-medium text-[#0B2545]">{selectedService?.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Date:</span>
              <span className="font-medium text-[#0B2545]">{data.date}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Time:</span>
              <span className="font-medium text-[#0B2545]">{data.time}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Location:</span>
              <span className="font-medium text-[#0B2545]">{data.location}</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Link to="/" className="flex-1 py-3 border-2 border-[#0B2545] text-[#0B2545] rounded-xl text-sm font-medium hover:bg-[#0B2545] hover:text-white transition-all text-center">
              Back to Home
            </Link>
            <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer" className="flex-1 py-3 bg-[#25D366] text-white rounded-xl text-sm font-medium text-center">
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-[#f0f4f8]">
      <div className="bg-[#0B2545] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl text-white" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            Book a Cleaning Service
          </h1>
          <p className="text-white/60 mt-2">Complete the steps below to schedule your professional clean.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-10">
          {STEPS.map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className={`flex flex-col items-center ${step === s.num ? "opacity-100" : step > s.num ? "opacity-100" : "opacity-40"}`}>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                  step > s.num ? "bg-[#00B67A] text-white" : step === s.num ? "bg-[#0B2545] text-white ring-4 ring-[#0B2545]/20" : "bg-gray-200 text-gray-500"
                }`}>
                  {step > s.num ? <CheckCircle className="w-5 h-5" /> : s.num}
                </div>
                <span className="text-xs mt-1.5 text-gray-500 hidden sm:block">{s.label}</span>
              </div>
              {i < STEPS.length - 1 && <div className={`w-12 sm:w-20 h-0.5 mx-1 transition-all ${step > s.num ? "bg-[#00B67A]" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <AnimatePresence mode="wait">
            {/* Step 1: Select Service */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-xl text-[#0B2545] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                  Step 1: Select a Service
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => update("service", service.id)}
                      className={`text-left p-4 rounded-xl border-2 transition-all ${
                        data.service === service.id
                          ? "border-[#0B2545] bg-[#0B2545]/5"
                          : "border-gray-200 hover:border-[#0B2545]/40"
                      }`}
                    >
                      <p className="text-[#0B2545] font-medium text-sm">{service.name}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{service.price}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Property Type */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-xl text-[#0B2545] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                  Step 2: Property Type
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {PROPERTY_TYPES.map((type) => (
                    <button
                      key={type}
                      onClick={() => update("propertyType", type)}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                        data.propertyType === type ? "border-[#0B2545] bg-[#0B2545]/5" : "border-gray-200 hover:border-[#0B2545]/40"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${data.propertyType === type ? "border-[#0B2545]" : "border-gray-300"}`}>
                        {data.propertyType === type && <div className="w-2.5 h-2.5 rounded-full bg-[#0B2545]" />}
                      </div>
                      <span className="text-sm text-[#0B2545] font-medium">{type}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Date & Time */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-xl text-[#0B2545] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                  Step 3: Choose Date & Time
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#0B2545] mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Preferred Date
                    </label>
                    <input
                      type="date"
                      value={data.date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => update("date", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00B67A] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0B2545] mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Preferred Time Slot
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => update("time", slot)}
                          className={`py-2.5 text-xs rounded-lg border-2 transition-all font-medium ${
                            data.time === slot ? "border-[#0B2545] bg-[#0B2545] text-white" : "border-gray-200 text-gray-600 hover:border-[#0B2545]/40"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Customer Info */}
            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-xl text-[#0B2545] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                  Step 4: Your Information
                </h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0B2545] mb-1.5">Full Name *</label>
                      <input type="text" value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="John Kamau" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00B67A] text-sm" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0B2545] mb-1.5">Phone Number *</label>
                      <input type="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+254796578077" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00B67A] text-sm" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0B2545] mb-1.5">Email Address *</label>
                    <input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="john@example.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00B67A] text-sm" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0B2545] mb-1.5 flex items-center gap-2"><MapPin className="w-4 h-4" />Location / Area *</label>
                    <select value={data.location} onChange={(e) => update("location", e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00B67A] text-sm">
                      <option value="">Select your area</option>
                      {SERVICE_AREAS.map((area) => <option key={area} value={area}>{area}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0B2545] mb-1.5">Additional Notes (Optional)</label>
                    <textarea
                      value={data.notes}
                      onChange={(e) => update("notes", e.target.value)}
                      placeholder="Describe the scope of work, any special requirements, access instructions..."
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00B67A] text-sm resize-none"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Summary */}
            {step === 5 && (
              <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-xl text-[#0B2545] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                  Step 5: Booking Summary
                </h2>
                <div className="bg-[#f0f4f8] rounded-xl p-5 space-y-3 mb-6">
                  {[
                    { icon: CheckCircle, label: "Service", value: selectedService?.name },
                    { icon: User, label: "Property Type", value: data.propertyType },
                    { icon: Calendar, label: "Date", value: data.date },
                    { icon: Clock, label: "Time", value: data.time },
                    { icon: User, label: "Name", value: data.name },
                    { icon: MapPin, label: "Location", value: data.location },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center gap-2">
                        <row.icon className="w-4 h-4 text-[#00B67A]" /> {row.label}
                      </span>
                      <span className="font-medium text-[#0B2545]">{row.value}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Estimated Price</span>
                    <span className="font-semibold text-[#0B2545]">{selectedService?.price}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mb-4">
                  By confirming, you agree to our Terms of Service. A confirmation email and SMS will be sent immediately. Final pricing confirmed after on-site assessment.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
            {step > 1 ? (
              <button onClick={() => setStep(step - 1)} className="flex items-center gap-2 px-5 py-2.5 text-gray-500 hover:text-[#0B2545] transition-colors text-sm">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            ) : <div />}
            {step < 5 ? (
              <button
                onClick={() => canProceed() && setStep(step + 1)}
                disabled={!canProceed()}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  canProceed() ? "bg-[#0B2545] hover:bg-[#1a3a5c] text-white" : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleConfirm}
                className="flex items-center gap-2 px-8 py-2.5 bg-[#00B67A] hover:bg-[#009d6a] text-white rounded-xl text-sm font-semibold transition-all"
              >
                Confirm Booking <CheckCircle className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
