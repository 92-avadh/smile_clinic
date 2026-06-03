"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, Calendar, Clock, User, Check, ChevronRight, ChevronLeft,
  Activity, ShieldAlert, Heart, CalendarCheck2
} from "lucide-react";
import confetti from "canvas-confetti";

// Mock Data for booking dropdowns
const treatments = [
  "Laser Teeth Whitening",
  "Dental Implants",
  "Invisalign® Clear Aligners",
  "Cosmetic Veneers",
  "Root Canal Therapy",
  "Emergency Dental Care",
  "Standard Hygiene & Cleaning",
  "Pediatric Dental Checkup"
];

const doctors = [
  "Dr. Evelyn Croft (Cosmetic)",
  "Dr. Raymond Vance (Implantology)",
  "Dr. Clara Harrison (Orthodontics)",
  "Dr. Marcus Thorne (Endodontics)"
];

const timeSlots = [
  "08:30 AM", "09:30 AM", "10:30 AM", "11:30 AM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

// Helper to generate next 7 days for booking (excluding Sundays)
function getBookingDates() {
  const dates = [];
  const today = new Date();
  
  for (let i = 1; i <= 10; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    // 0 is Sunday
    if (nextDate.getDay() !== 0) {
      dates.push(nextDate);
    }
  }
  return dates;
}

function AppointmentFormContent() {
  const searchParams = useSearchParams();
  const selectedDoctorParam = searchParams.get("doctor") || "";

  // Step Wizard state
  const [step, setStep] = useState(1);
  const dates = getBookingDates();

  // Form Fields State
  const [treatment, setTreatment] = useState(treatments[0]);
  const [doctor, setDoctor] = useState("");
  const [isEmergency, setIsEmergency] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [appointmentId, setAppointmentId] = useState("");
  
  // Patient details
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  // Set default doctor from query param if available
  useEffect(() => {
    if (selectedDoctorParam) {
      const matchedDoc = doctors.find((doc) =>
        doc.toLowerCase().includes(selectedDoctorParam.toLowerCase())
      );
      if (matchedDoc) {
        setTimeout(() => setDoctor(matchedDoc), 0);
      }
    } else {
      setTimeout(() => setDoctor(doctors[0]), 0);
    }
  }, [selectedDoctorParam]);

  // Handlers
  const handleNext = () => {
    if (step === 1 && !doctor) return;
    if (step === 2 && (!selectedDate || !selectedTime)) return;
    setStep((s) => s + 1);
  };

  const handlePrev = () => {
    setStep((s) => s - 1);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim() && email.trim() && phone.trim()) {
      setAppointmentId(`SC-${Math.floor(Math.random() * 90000) + 10000}`);
      setStep(4);
      // Fire confetti celebration!
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const formattedDateString = selectedDate
    ? selectedDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
    : "";

  return (
    <div className="w-full bg-background overflow-hidden min-h-[85vh] py-12 md:py-20 flex items-center justify-center">
      <div className="max-w-3xl w-full px-4 sm:px-6">
        
        {/* Progress Tracker Steps (Only show if not success page) */}
        {step < 4 && (
          <div className="flex justify-between items-center mb-10 max-w-md mx-auto relative px-4">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 -z-10" />
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-brand-teal -translate-y-1/2 -z-10 transition-all duration-300"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            />
            
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${
                  step >= num
                    ? "bg-brand-slate border-brand-teal text-white shadow-md shadow-brand-teal/10"
                    : "bg-white border-slate-200 text-slate-400"
                }`}
              >
                {step > num ? <Check className="w-5 h-5" /> : num}
              </div>
            ))}
          </div>
        )}

        {/* Wizard Card Body */}
        <div className="bg-white border border-slate-100 rounded-[32px] shadow-premium p-6 md:p-10 text-left">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Treatments & Doctor */}
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
                    Step 1 of 3
                  </span>
                  <h2 className="text-2xl font-bold font-serif text-brand-slate">
                    Select Specialist & Service
                  </h2>
                </div>

                <div className="space-y-5">
                  {/* Emergency Checkbox */}
                  <div className={`p-4 rounded-2xl border transition-all ${
                    isEmergency
                      ? "bg-red-50/50 border-red-200 text-red-800"
                      : "bg-slate-50/60 border-slate-100 text-slate-600 hover:border-slate-200"
                  }`}>
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={isEmergency}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          setIsEmergency(checked);
                          if (checked) {
                            setTreatment("Emergency Dental Care");
                          }
                        }}
                        className="mt-1 w-4.5 h-4.5 rounded border-slate-300 text-red-600 focus:ring-red-500"
                      />
                      <div>
                        <span className="text-sm font-bold flex items-center gap-1.5">
                          <ShieldAlert className="w-4.5 h-4.5 text-red-500" />
                          This is an urgent dental emergency
                        </span>
                        <span className="block text-[11px] text-slate-500 mt-0.5">
                          Check this if you have acute tooth pain, continuous bleeding, or facial swelling. Same-day care prioritizes emergency flags.
                        </span>
                      </div>
                    </label>
                  </div>

                  {/* Treatment Selector */}
                  <div>
                    <label htmlFor="appointment-treatment" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Select Treatment Area
                    </label>
                    <select
                      id="appointment-treatment"
                      disabled={isEmergency}
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:border-brand-teal transition-all focus:bg-white"
                    >
                      {treatments.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Doctor Selector */}
                  <div>
                    <label htmlFor="appointment-doctor" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Select Specialist Dentist
                    </label>
                    <select
                      id="appointment-doctor"
                      value={doctor}
                      onChange={(e) => setDoctor(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:border-brand-teal transition-all focus:bg-white"
                    >
                      {doctors.map((doc) => (
                        <option key={doc} value={doc}>{doc}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 bg-gradient-brand text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-1.5"
                  >
                    <span>Choose Date & Time</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Date & Time Select */}
            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
                    Step 2 of 3
                  </span>
                  <h2 className="text-2xl font-bold font-serif text-brand-slate">
                    Choose Date & Available Time
                  </h2>
                </div>

                {/* Calendar Dates Grid */}
                <div className="space-y-4">
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Available Dates (Next 10 Days)
                    </span>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                      {dates.map((date) => {
                        const isSelected = selectedDate?.toDateString() === date.toDateString();
                        return (
                          <button
                            key={date.toISOString()}
                            onClick={() => setSelectedDate(date)}
                            className={`p-3 rounded-xl border text-center transition-all duration-200 flex flex-col items-center justify-center cursor-pointer ${
                              isSelected
                                ? "bg-brand-slate border-brand-teal text-white shadow-sm"
                                : "bg-slate-50/70 border-slate-100/60 text-slate-600 hover:border-brand-teal/40 hover:bg-slate-50"
                            }`}
                          >
                            <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">
                              {date.toLocaleDateString("en-US", { weekday: "short" })}
                            </span>
                            <span className="text-base font-extrabold mt-0.5">
                              {date.getDate()}
                            </span>
                            <span className="text-[9px] uppercase tracking-wider opacity-60 mt-0.5">
                              {date.toLocaleDateString("en-US", { month: "short" })}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slots Grid */}
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Available Sessions
                    </span>
                    {selectedDate ? (
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {timeSlots.map((time) => {
                          const isSelected = selectedTime === time;
                          return (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`p-2.5 rounded-lg border text-center text-xs font-bold transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-brand-teal border-brand-teal text-white shadow-sm"
                                  : "bg-slate-50/70 border-slate-100/60 text-slate-600 hover:border-brand-teal/30 hover:bg-slate-50"
                              }`}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="bg-slate-50 rounded-xl p-6 text-center text-xs text-slate-400 font-medium">
                        Please select an available date above to view time sessions.
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                  <button
                    onClick={handlePrev}
                    className="px-4 py-2 border border-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-slate-50 transition flex items-center gap-1.5"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!selectedDate || !selectedTime}
                    className="px-6 py-3 bg-gradient-brand text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-1.5 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <span>Patient Info</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Patient Form Details */}
            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
                    Step 3 of 3
                  </span>
                  <h2 className="text-2xl font-bold font-serif text-brand-slate">
                    Confirm Reservation Details
                  </h2>
                </div>

                {/* Reservation Summary */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-bold">Treatment</span>
                    <span className="font-bold text-slate-700">{treatment}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-bold">Dentist</span>
                    <span className="font-bold text-slate-700">{doctor}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-bold">Session Slot</span>
                    <span className="font-bold text-brand-teal">{formattedDateString} &bull; {selectedTime}</span>
                  </div>
                </div>

                <form onSubmit={handleFinalSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-first" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        First Name
                      </label>
                      <input
                        id="booking-first"
                        type="text"
                        required
                        placeholder="e.g., Charlotte"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="booking-last" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Last Name
                      </label>
                      <input
                        id="booking-last"
                        type="text"
                        required
                        placeholder="e.g., Sterling"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="booking-email"
                        type="email"
                        required
                        placeholder="e.g., name@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="booking-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="booking-phone"
                        type="tel"
                        required
                        placeholder="e.g., (555) 019-2834"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="booking-notes" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Notes or Special Requests (Optional)
                    </label>
                    <textarea
                      id="booking-notes"
                      rows={3}
                      placeholder="e.g., Dental anxiety, need wheelchair access, or specific questions..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:bg-white transition"
                    />
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-4 py-2 border border-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-slate-50 transition flex items-center gap-1.5"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-gradient-brand text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition flex items-center gap-1.5"
                    >
                      <span>Finalize Booking</span>
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 4: Success Confirmation */}
            {step === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-6"
              >
                <div className="w-20 h-20 bg-brand-teal rounded-full flex items-center justify-center mx-auto text-white shadow-xl animate-float">
                  <CalendarCheck2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
                    Booking Confirmed
                  </span>
                  <h2 className="text-3xl font-bold font-serif text-brand-slate">
                    Your Visit is Secured!
                  </h2>
                  <p className="text-slate-500 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, {firstName}. Your appointment request has been recorded in our clinical scheduler. A calendar confirmation has been sent to your email.
                  </p>
                </div>

                {/* Reservation Voucher */}
                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 max-w-md mx-auto text-left space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Appointment ID</span>
                    <span className="text-xs font-bold text-brand-slate font-mono">{appointmentId}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-bold">Patient</span>
                      <span className="font-bold text-slate-700">{firstName} {lastName}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-bold">Treatment</span>
                      <span className="font-bold text-slate-700">{treatment}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-bold">Specialist</span>
                      <span className="font-bold text-slate-700">{doctor}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-bold">Session Slot</span>
                      <span className="font-bold text-brand-teal">{formattedDateString} at {selectedTime}</span>
                    </div>
                  </div>

                  {isEmergency && (
                    <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-[10px] text-red-800 font-medium">
                      Note: Flaggd as Dental Emergency. Our medical desk will contact your phone immediately for pre-op review.
                    </div>
                  )}
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      setAppointmentId("");
                      setStep(1);
                    }}
                    className="px-6 py-3 border border-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-slate-50 transition"
                  >
                    Schedule Another Session
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

export default function AppointmentPage() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-10 h-10 border-4 border-brand-teal border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Loading Booking Suite...</p>
        </div>
      </div>
    }>
      <AppointmentFormContent />
    </Suspense>
  );
}
