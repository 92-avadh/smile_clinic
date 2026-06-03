"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, onClose, onPrev, onNext]);

  if (activeIndex === null) return null;

  const currentImage = images[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-brand-slate/95 backdrop-blur-md z-50 flex flex-col justify-between p-4"
      >
        {/* Top Bar */}
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto py-2">
          <div className="text-white text-left">
            <span className="text-xs uppercase tracking-wider text-brand-teal font-extrabold">
              {currentImage.category}
            </span>
            <h4 className="text-sm font-semibold text-slate-300 mt-0.5">{currentImage.alt}</h4>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-400 font-medium">
              {activeIndex + 1} / {images.length}
            </span>
            <button
              onClick={onClose}
              className="p-2 bg-slate-800/80 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Central Display */}
        <div className="flex-1 flex items-center justify-center relative max-w-7xl mx-auto w-full">
          {/* Previous Button */}
          <button
            onClick={onPrev}
            className="absolute left-2 md:left-4 z-10 p-3 bg-slate-800/60 hover:bg-slate-800 rounded-full text-slate-300 hover:text-white hover:scale-105 active:scale-95 transition"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <motion.div
            key={activeIndex}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-h-[70vh] md:max-h-[80vh] max-w-[90vw] md:max-w-[70vw] rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="object-contain max-h-[70vh] md:max-h-[80vh] w-auto h-auto select-none"
              draggable="false"
            />
          </motion.div>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="absolute right-2 md:right-4 z-10 p-3 bg-slate-800/60 hover:bg-slate-800 rounded-full text-slate-300 hover:text-white hover:scale-105 active:scale-95 transition"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom thumbnail selector / advice */}
        <div className="w-full max-w-4xl mx-auto pb-4 overflow-x-auto scroll-bar-hidden flex gap-2 justify-center py-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => {
                // Trigger transition by changing index
                if (activeIndex !== i) {
                  // Direct navigation
                  onPrev(); // placeholder to trigger transition
                  setTimeout(() => {
                    // Set index
                  }, 50);
                }
              }}
              className={`w-12 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                activeIndex === i ? "border-brand-teal scale-105" : "border-slate-800 hover:border-slate-600 opacity-60"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
