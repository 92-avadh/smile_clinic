"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Play, Sparkles, Quote, Check, Filter } from "lucide-react";

interface Review {
  name: string;
  role: string;
  treatment: string;
  category: string; // 'veneers', 'implants', 'braces', 'whitening'
  rating: number;
  content: string;
  image: string;
  time: string;
}

const patientReviews: Review[] = [
  {
    name: "Eleanor Vance",
    role: "Lifestyle Blogger",
    treatment: "Cosmetic Veneers",
    category: "veneers",
    rating: 5,
    content: "SmileCraft completely transformed not just my smile, but my self-confidence. The attention to detail and luxury clinic environment felt more like a premium spa than a dental office. The porcelain veneers look incredibly natural and catch the light beautifully!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    time: "2 weeks ago"
  },
  {
    name: "Dr. Marcus Thorne",
    role: "Research Scientist",
    treatment: "Dental Implants",
    category: "implants",
    rating: 5,
    content: "As a scientist, I appreciate the absolute cutting-edge technology SmileCraft uses. The guided implant placement was completely pain-free and highly accurate. The healing process was remarkably fast. True experts in implantology.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    time: "1 month ago"
  },
  {
    name: "Sophia Chen",
    role: "Creative Director",
    treatment: "Invisalign Aligners",
    category: "braces",
    rating: 5,
    content: "My clear aligner treatment here was seamless. The 3D imaging allowed me to see my future smile before even starting. The team was always accommodating, and I finished my treatment ahead of schedule. Highly recommend for aligners!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    time: "3 months ago"
  },
  {
    name: "Julian Sterling",
    role: "Executive VP",
    treatment: "Laser Whitening & Hygiene",
    category: "whitening",
    rating: 5,
    content: "Phenomenal service. Standard dental cleanings are usually uncomfortable, but here it was virtually painless using their advanced airflow hygiene system. The laser whitening took away years of coffee stains instantly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    time: "1 week ago"
  },
  {
    name: "Clarissa Montgomery",
    role: "Real Estate Broker",
    treatment: "Smile Makeover & Crowns",
    category: "veneers",
    rating: 5,
    content: "I had multiple old metal-backed crowns replaced with metal-free zirconium crowns and matching veneers. The clinical design matches my natural facial symmetry perfectly. The treatment changed how I approach my clients daily.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    time: "2 months ago"
  },
  {
    name: "David Miller",
    role: "Software Engineer",
    treatment: "Implants & Wisdom Removal",
    category: "implants",
    rating: 5,
    content: "Excellent surgery wing. I had two dental implants placed and a impacted wisdom tooth extracted simultaneously. The Wand local anesthetic meant I felt no needle pain at all. Zero post-op swelling. Incredibly skilled specialists.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    time: "4 months ago"
  }
];

const videoTestimonials = [
  {
    name: "Vanessa Hughes",
    treatment: "Full Veneers Smile Makeover",
    duration: "2:45 mins",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "Arthur Pendelton",
    treatment: "Full Arch Implant Restoration",
    duration: "3:12 mins",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop"
  }
];

const categories = [
  { id: "all", label: "All Stories" },
  { id: "veneers", label: "Veneers & Makeovers" },
  { id: "implants", label: "Implants & Surgery" },
  { id: "braces", label: "Invisalign & Braces" },
  { id: "whitening", label: "Whitening & Hygiene" }
];

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredReviews = patientReviews.filter(
    (rev) => activeCategory === "all" || rev.category === activeCategory
  );

  return (
    <div className="w-full bg-background overflow-hidden">
      
      {/* Page Header Banner */}
      <section className="relative bg-gradient-brand-subtle py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
            Patient Feedback
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-slate leading-tight">
            Smile Transformation Stories
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Read from over 5,000 satisfied patients who have redefined their relationship with dental care.
          </p>
        </div>
      </section>

      {/* Video Testimonials Showcase */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">
              Patient Diary Videos
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-slate">
              Watch The Smile Journeys
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videoTestimonials.map((video, idx) => (
              <div
                key={idx}
                className="group relative aspect-[16/10] rounded-[32px] overflow-hidden shadow-premium-lg border border-slate-100/60 bg-slate-100 cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={video.thumbnail}
                  alt={video.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Central Play Trigger Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 text-brand-blue flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-brand group-hover:text-white">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Text overlay */}
                <div className="absolute bottom-6 left-6 text-left text-white">
                  <span className="inline-block bg-brand-teal/85 text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full mb-2">
                    {video.treatment}
                  </span>
                  <h4 className="text-base font-bold font-serif">{video.name}</h4>
                  <p className="text-[10px] text-slate-300 mt-0.5">Video Duration: {video.duration}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Review list and filtering */}
      <section className="py-16 md:py-24 bg-gradient-brand-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16 pb-4 border-b border-slate-200/60">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-brand-teal" /> Filter Reviews:
            </span>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === c.id
                    ? "bg-brand-slate text-white shadow-sm"
                    : "bg-white/80 border border-slate-100 text-slate-500 hover:bg-white hover:text-slate-800"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Reviews masonry style columns */}
          <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredReviews.map((rev) => (
                <motion.div
                  key={rev.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid bg-white/70 backdrop-blur-md border border-slate-100/80 p-6 rounded-3xl shadow-sm hover:shadow-md hover-lift transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4 text-left">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-0.5 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">{rev.time}</span>
                    </div>

                    <div className="relative">
                      <Quote className="w-8 h-8 text-brand-teal/5 absolute -top-4 -left-2 rotate-180" />
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed relative z-10 italic">
                        &ldquo;{rev.content}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3 mt-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={rev.image}
                      alt={rev.name}
                      className="w-10 h-10 rounded-full object-cover border border-white shadow-sm"
                    />
                    <div className="text-left">
                      <h4 className="text-xs font-bold text-brand-slate font-serif">{rev.name}</h4>
                      <p className="text-[9px] text-slate-400">{rev.role}</p>
                    </div>
                    
                    <div className="ml-auto bg-brand-blue/5 text-brand-blue text-[9px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full">
                      {rev.treatment}
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
