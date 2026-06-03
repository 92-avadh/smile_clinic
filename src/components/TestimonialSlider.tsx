"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  treatment: string;
  rating: number;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Eleanor Vance",
    role: "Lifestyle Blogger",
    treatment: "Cosmetic Smile Makeover",
    rating: 5,
    content: "SmileCraft completely transformed not just my smile, but my self-confidence. The attention to detail and luxury clinic environment felt more like a premium spa than a dental office. The porcelain veneers look incredibly natural!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Dr. Marcus Thorne",
    role: "Research Scientist",
    treatment: "Dental Implants",
    rating: 5,
    content: "As a scientist, I appreciate the absolute cutting-edge technology SmileCraft uses. The guided implant placement was completely pain-free and highly accurate. The healing process was remarkably fast. True experts.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Sophia Chen",
    role: "Creative Director",
    treatment: "Invisalign Aligners",
    rating: 5,
    content: "My clear aligner treatment here was seamless. The 3D imaging allowed me to see my future smile before even starting. The team was always accommodating, and I finished my treatment ahead of schedule. Highly recommend!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Julian Sterling",
    role: "Executive VP",
    treatment: "Laser Whitening & Hygiene",
    rating: 5,
    content: "Phenomenal service. Standard dental cleanings are usually uncomfortable, but here it was virtually painless using their advanced airflow hygiene system. The laser whitening took away years of coffee stains instantly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideNext = useCallback(() => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const slidePrev = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      slideNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [slideNext]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const activeTestimonial = testimonials[index];

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 md:px-8">
      {/* Quote Icon Background decoration */}
      <div className="absolute top-0 left-0 -translate-y-8 -translate-x-4 md:-translate-x-8 text-brand-teal/5 pointer-events-none">
        <Quote className="w-32 h-32 fill-current rotate-180" />
      </div>

      <div className="relative overflow-hidden min-h-[340px] md:min-h-[260px] flex items-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeTestimonial.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center bg-white/60 backdrop-blur-md border border-slate-100 rounded-3xl p-6 md:p-8 shadow-premium"
          >
            {/* Patient Portrait */}
            <div className="flex flex-col items-center text-center md:border-r border-slate-100 md:pr-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeTestimonial.image}
                alt={activeTestimonial.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-md mb-3"
              />
              <h4 className="text-base font-bold text-brand-slate font-serif">{activeTestimonial.name}</h4>
              <p className="text-xs text-slate-400">{activeTestimonial.role}</p>
              <div className="inline-block mt-3 bg-brand-blue/5 text-brand-blue text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full">
                {activeTestimonial.treatment}
              </div>
            </div>

            {/* Patient Review Content */}
            <div className="md:col-span-2 space-y-4 text-left">
              <div className="flex gap-0.5">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed italic">
                &ldquo;{activeTestimonial.content}&rdquo;
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === i ? "bg-brand-teal w-6" : "bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-2.5">
          <button
            onClick={slidePrev}
            className="w-10 h-10 rounded-full border border-slate-100 bg-white/80 flex items-center justify-center text-slate-600 hover:border-brand-teal/40 hover:text-brand-blue shadow-sm hover:scale-105 active:scale-95 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={slideNext}
            className="w-10 h-10 rounded-full border border-slate-100 bg-white/80 flex items-center justify-center text-slate-600 hover:border-brand-teal/40 hover:text-brand-blue shadow-sm hover:scale-105 active:scale-95 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
