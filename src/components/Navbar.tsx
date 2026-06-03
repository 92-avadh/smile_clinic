"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Doctors", href: "/doctors" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setTimeout(() => setIsOpen(false), 0);
  }, [pathname]);

  return (
    <>
      {/* Top Banner (Luxury Detail) */}
      <div className="bg-brand-slate text-white text-xs py-2 px-4 flex justify-between items-center z-50 relative font-medium">
        <div className="flex items-center gap-4 mx-auto md:mx-0">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" /> Standard of Care: sterilized, certified premium dentistry
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-slate-300">
          <span>Emergency Line: <a href="tel:+18005557645" className="hover:text-white font-bold transition">+1 (800) 555-SMILE</a></span>
          <span>Hours: Mon - Sat 8:00 AM - 7:00 PM</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-premium border-b border-slate-100/80 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shadow-md shadow-brand-blue/20 transition-transform duration-300 group-hover:scale-105">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-brand-slate font-serif">
                  SmileCraft
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-brand-teal font-bold -mt-1">
                  Dental Care
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative text-sm font-medium text-slate-600 hover:text-brand-blue transition py-2"
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-brand rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="tel:+18005557645"
                className="hidden xl:flex items-center gap-2 text-sm font-semibold text-brand-slate hover:text-brand-blue transition px-3 py-2"
              >
                <Phone className="w-4 h-4 text-brand-teal" />
                <span>+1 (800) 555-7645</span>
              </a>
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-brand shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book Appointment</span>
              </Link>
            </div>

            {/* Hamburger Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:text-brand-blue hover:bg-slate-50 focus:outline-none transition"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-b border-slate-100 overflow-hidden shadow-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-base font-semibold transition ${
                        isActive
                          ? "bg-slate-50 text-brand-blue font-bold"
                          : "text-slate-600 hover:bg-slate-50/50 hover:text-brand-blue"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3 px-4">
                  <a
                    href="tel:+18005557645"
                    className="flex items-center gap-2 text-sm font-semibold text-brand-slate hover:text-brand-blue py-2"
                  >
                    <Phone className="w-4 h-4 text-brand-teal" />
                    <span>+1 (800) 555-7645 (Emergency)</span>
                  </a>
                  <Link
                    href="/appointment"
                    className="w-full flex items-center justify-center px-5 py-3 rounded-full text-base font-bold text-white bg-gradient-brand shadow-md"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
