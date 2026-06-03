"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, Calendar, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show WhatsApp popup helper after 4 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Desktop WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block group">
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 15 }}
              className="absolute bottom-16 right-0 w-72 bg-white rounded-2xl shadow-premium-lg border border-slate-100 p-4 mb-2 z-50 text-left"
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 mt-0.5 animate-pulse-slow">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">SmileCraft Concierge</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Hello! Welcome to SmileCraft. How can we help you craft your perfect smile today?
                  </p>
                  <a
                    href="https://wa.me/18005557645"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full mt-3 hover:bg-emerald-600 transition-all shadow-sm"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href="https://wa.me/18005557645"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white hover:bg-emerald-600 shadow-premium-lg hover:scale-105 active:scale-95 transition-all duration-300 relative"
          onMouseEnter={() => setShowPopup(true)}
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand-teal rounded-full border-2 border-white animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand-teal rounded-full border-2 border-white" />
          <MessageCircle className="w-7 h-7 fill-current" />
        </a>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 px-4 py-3 flex gap-3 shadow-premium-lg">
        <a
          href="tel:+18005557645"
          className="flex-1 inline-flex items-center justify-center gap-2 border border-brand-teal text-brand-teal text-sm font-bold py-3 rounded-full hover:bg-slate-50 transition active:scale-[0.98]"
        >
          <Phone className="w-4 h-4" />
          Call Emergency
        </a>
        <Link
          href="/appointment"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-brand text-white text-sm font-bold py-3 rounded-full shadow-md hover:shadow-lg transition active:scale-[0.98]"
        >
          <Calendar className="w-4 h-4" />
          Book Appointment
        </Link>
      </div>
    </>
  );
}
