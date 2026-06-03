"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeftRight } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  before: string;
  after: string;
}

const cases: CaseStudy[] = [
  {
    id: "whitening",
    title: "Laser Teeth Whitening",
    description: "Remove decades of deep staining and discoloration in a single, comfortable 60-minute session.",
    // Standard beautiful smiles
    before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop", // Slightly dimmed/warmer tint
    after: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop", // Bright clean smile
  },
  {
    id: "aligners",
    title: "Invisalign® Clear Aligners",
    description: "Discrete orthodontic therapy resolving teeth overcrowding and spacing issues without metal brackets.",
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop", 
    after: "https://images.unsplash.com/photo-1593054941141-55d8d2f5f12f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "veneers",
    title: "Porcelain Smile Makeover",
    description: "Premium handcrafted porcelain veneers to address chipped, uneven, or disproportionately sized teeth.",
    before: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1513412893-c40e5c53d890?q=80&w=800&auto=format&fit=crop",
  },
];

export default function BeforeAfterSlider() {
  const [activeCase, setActiveCase] = useState<CaseStudy>(cases[0]);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {cases.map((c) => (
          <button
            key={c.id}
            onClick={() => {
              setActiveCase(c);
              setSliderPosition(50);
            }}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeCase.id === c.id
                ? "bg-gradient-brand text-white shadow-md shadow-brand-blue/20"
                : "bg-white border border-slate-100 text-slate-600 hover:border-brand-teal/40 hover:text-brand-blue"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
        {/* Case Info */}
        <div className="lg:col-span-2 space-y-5 text-left">
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>Smile Transformation Showcase</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-brand-slate leading-tight">
            {activeCase.title}
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            {activeCase.description}
          </p>
          <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">Treatment Time</span>
              <span className="text-sm font-semibold text-slate-800">
                {activeCase.id === "whitening" ? "1 Session (60 mins)" : activeCase.id === "aligners" ? "6 - 12 Months" : "2 Sessions"}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">Comfort Level</span>
              <span className="text-sm font-semibold text-slate-800">100% Pain-Free</span>
            </div>
          </div>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="lg:col-span-3">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-premium-lg border border-white/60 select-none">
            {/* Before Image (Background) */}
            <div className="absolute inset-0 bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeCase.before}
                alt={`${activeCase.title} Before`}
                className="w-full h-full object-cover filter saturate-[0.85] contrast-[0.95]"
                draggable="false"
              />
              <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                Before
              </span>
            </div>

            {/* After Image (Foreground, Clipped) */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeCase.after}
                alt={`${activeCase.title} After`}
                className="w-full h-full object-cover"
                draggable="false"
              />
              <span className="absolute bottom-4 right-4 bg-brand-teal/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                After
              </span>
            </div>

            {/* Drag Handle Indicator line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-brand-teal text-brand-blue">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
            </div>

            {/* Transparent Input Slider Overlay */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>
          <p className="text-center text-xs text-slate-400 mt-4 italic">
            Drag the divider to view before and after results
          </p>
        </div>
      </div>
    </div>
  );
}
