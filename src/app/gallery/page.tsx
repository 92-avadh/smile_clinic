"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, Sparkles, Filter, Camera } from "lucide-react";
import GalleryLightbox from "@/components/GalleryLightbox";

interface GalleryImage {
  src: string;
  alt: string;
  category: string; // 'interiors', 'technology', 'smiles'
}

const images: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop",
    alt: "SmileCraft Designer Reception Lounge",
    category: "interiors"
  },
  {
    src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop",
    alt: "Clinical Sterilization Station",
    category: "technology"
  },
  {
    src: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=800&auto=format&fit=crop",
    alt: "3D Digital Bite Scanner",
    category: "technology"
  },
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    alt: "Happy Client Post Veneers Appointment",
    category: "smiles"
  },
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    alt: "Our Clinical Consultation Suite",
    category: "interiors"
  },
  {
    src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop",
    alt: "Bright Confident Smile Restoration",
    category: "smiles"
  },
  {
    src: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop",
    alt: "Dental Care Consultation Setup",
    category: "interiors"
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    alt: "Invisalign Visual Modeling Station",
    category: "technology"
  }
];

const categories = [
  { id: "all", label: "View All Photos" },
  { id: "interiors", label: "Clinic Interiors" },
  { id: "technology", label: "Advanced Technology" },
  { id: "smiles", label: "Patient Smiles" }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = images.filter(
    (img) => activeCategory === "all" || img.category === activeCategory
  );

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : (prev !== null ? prev - 1 : 0)));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : (prev !== null ? prev + 1 : 0)));
  };

  return (
    <div className="w-full bg-background overflow-hidden">
      
      {/* Page Header Banner */}
      <section className="relative bg-gradient-brand-subtle py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
            Clinic Tour
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-slate leading-tight">
            Our Facility Photo Gallery
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Take a look inside our high-end surgery suites, welcoming waiting lounges, and digital labs.
          </p>
        </div>
      </section>

      {/* Grid and interactive tabs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16 pb-4 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-brand-teal" /> Category:
            </span>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCategory(c.id);
                  setLightboxIndex(null);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === c.id
                    ? "bg-brand-slate text-white shadow-sm"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Masonry Responsive Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, index) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-premium border border-slate-100/60 bg-slate-50 cursor-pointer hover:shadow-premium-lg transition"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Glassmorphism Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-slate/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white ml-auto">
                      <ZoomIn className="w-5 h-5" />
                    </div>

                    <div className="text-left text-white">
                      <span className="text-[9px] uppercase tracking-widest font-extrabold text-brand-teal block">
                        {img.category}
                      </span>
                      <h4 className="text-sm font-semibold mt-1 font-serif leading-snug">
                        {img.alt}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Lightbox Rendering */}
      <GalleryLightbox
        images={filteredImages}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

    </div>
  );
}
