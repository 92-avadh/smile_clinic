"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Mail, Calendar, Sparkles, Filter, ShieldCheck, ChevronRight, CheckCircle } from "lucide-react";

interface Doctor {
  name: string;
  slug: string;
  role: string;
  specialty: string; // 'cosmetic', 'implantology', 'orthodontist', 'surgery'
  degree: string;
  experience: string;
  rating: number;
  reviewsCount: number;
  image: string;
  availability: string;
  highlights: string[];
}

const specialists: Doctor[] = [
  {
    name: "Dr. Evelyn Croft",
    slug: "evelyn-croft",
    role: "Clinical Director & Master Cosmetic Dentist",
    specialty: "cosmetic",
    degree: "DDS, Columbia University School of Dental Medicine | Fellow, AACD",
    experience: "14 Years Experience",
    rating: 4.9,
    reviewsCount: 340,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
    availability: "Mon, Wed, Fri (9:00 AM - 5:00 PM)",
    highlights: ["Handcrafted 1,200+ veneer placements", "AACD Gold Medalist for Smile Design", "Speaker at International Esthetic Forums"]
  },
  {
    name: "Dr. Raymond Vance",
    slug: "raymond-vance",
    role: "Senior Implantologist & Oral Surgeon",
    specialty: "implantology",
    degree: "DDS, UCLA | Board Certified Oral & Maxillofacial Surgeon",
    experience: "12 Years Experience",
    rating: 4.9,
    reviewsCount: 280,
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f0471?q=80&w=400&auto=format&fit=crop",
    availability: "Tue, Thu, Sat (8:00 AM - 4:00 PM)",
    highlights: ["Laser-guided implant specialist", "Fellow of the International Congress of Oral Implantologists (ICOI)", "Certified in complex bone graft restorations"]
  },
  {
    name: "Dr. Clara Harrison",
    slug: "clara-harrison",
    role: "Lead Orthodontist",
    specialty: "orthodontist",
    degree: "DDS, University of Pennsylvania | MS in Orthodontics",
    experience: "9 Years Experience",
    rating: 4.8,
    reviewsCount: 195,
    image: "https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=400&auto=format&fit=crop",
    availability: "Mon, Tue, Thu (10:00 AM - 6:00 PM)",
    highlights: ["Invisalign® Diamond Plus Provider", "Adult and adolescent airway-focused orthodontics specialist", "Member of the American Association of Orthodontists"]
  },
  {
    name: "Dr. Marcus Thorne",
    slug: "marcus-thorne",
    role: "Endodontic & Micro-Restorative Specialist",
    specialty: "surgery",
    degree: "DDS, Harvard School of Dental Medicine | Resident Endodontics",
    experience: "8 Years Experience",
    rating: 4.9,
    reviewsCount: 152,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop",
    availability: "Wed, Fri, Sat (9:00 AM - 5:00 PM)",
    highlights: ["Performs root canals under 3D surgical microscopes", "Specialist in emergency micro-endodontic repairs", "Active clinical researcher in dental tissue engineering"]
  }
];

const filters = [
  { id: "all", label: "All Specialists" },
  { id: "cosmetic", label: "Cosmetic Dentistry" },
  { id: "implantology", label: "Implantology" },
  { id: "orthodontist", label: "Orthodontics" },
  { id: "surgery", label: "Oral Surgery & Endodontics" }
];

export default function DoctorsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredDoctors = specialists.filter(
    (doc) => activeFilter === "all" || doc.specialty === activeFilter
  );

  return (
    <div className="w-full bg-background overflow-hidden">
      
      {/* Page Header Banner */}
      <section className="relative bg-gradient-brand-subtle py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
            The Specialists
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-slate leading-tight">
            Meet Our Elite Medical Team
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Board-certified dentists and surgeons from top dental schools, committed to precision, comfort, and safety.
          </p>
        </div>
      </section>

      {/* Filter and Specialists Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16 pb-4 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-brand-teal" /> Filter Specialists:
            </span>
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === f.id
                    ? "bg-brand-teal text-white shadow-sm"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid list */}
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredDoctors.map((doc, idx) => (
                <motion.div
                  key={doc.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-slate-100/80 rounded-[32px] p-6 shadow-premium hover:shadow-premium-lg hover-lift flex flex-col md:flex-row gap-6 text-left"
                >
                  
                  {/* Photo Column */}
                  <div className="w-full md:w-48 aspect-square md:h-64 rounded-2xl overflow-hidden bg-slate-100 shrink-0 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-brand-slate shadow-sm border border-slate-100 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-brand-teal" /> Verified Specialist
                    </div>
                  </div>

                  {/* Info Column */}
                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-xs font-bold text-slate-800">{doc.rating}</span>
                        <span className="text-xs text-slate-400">({doc.reviewsCount} verified reviews)</span>
                      </div>
                      <h3 className="text-xl font-bold font-serif text-brand-slate">{doc.name}</h3>
                      <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-teal">
                        {doc.role}
                      </span>
                      <p className="text-xs text-slate-400 leading-relaxed border-b border-slate-100 pb-2">
                        {doc.degree}
                      </p>
                      
                      {/* Highlights */}
                      <ul className="space-y-1.5 pt-2">
                        {doc.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-500">
                            <CheckCircle className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4 bg-slate-50/50 p-4 rounded-xl">
                      <div>
                        <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-bold">Hours & Availability</span>
                        <span className="text-[10px] md:text-xs font-semibold text-slate-600 block mt-0.5">
                          {doc.availability}
                        </span>
                      </div>
                      <Link
                        href={`/appointment?doctor=${encodeURIComponent(doc.name)}`}
                        className="px-4 py-2 bg-brand-slate text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm hover:bg-brand-blue transition text-center flex items-center justify-center gap-1 shrink-0"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Clinic Slot</span>
                      </Link>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
