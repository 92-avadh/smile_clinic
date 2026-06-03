"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, ShieldCheck, Award, Flame, HeartHandshake, Stethoscope, Clock,
  CheckCircle, ChevronRight, Activity, Calendar, HelpCircle, ChevronDown
} from "lucide-react";

interface TreatmentDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  tech: string;
  benefits: string[];
  image: string;
  faqs: { q: string; a: string }[];
}

const treatments: TreatmentDetail[] = [
  {
    id: "whitening",
    title: "Laser Teeth Whitening",
    tagline: "Restore Brilliant Radiance Safely",
    description: "Our clinic utilizes advanced Zoom! Laser Whitening systems. Unlike over-the-counter bleaching strips which can erode tooth enamel and cause severe dentin hypersensitivity, our professional laser treatment is digitally monitored and utilizes custom protective barriers to ensure 100% gum safety while shifting teeth up to 8 shades brighter.",
    duration: "45 - 60 Minutes (Single Session)",
    tech: "Philips Zoom! WhiteSpeed Blue LED light & protective barrier gels",
    benefits: [
      "Immediate results visible in under 1 hour",
      "Custom desensitizing gels included for zero after-treatment pain",
      "Removes deep structural stains from coffee, tea, red wine, and tobacco",
      "Vaporizes superficial tooth discoloration with medical precision"
    ],
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=600&auto=format&fit=crop",
    faqs: [
      { q: "How long do laser whitening results last?", a: "With appropriate oral hygiene and periodic home touch-ups, results last between 12 to 24 months. We recommend avoiding heavily coloring liquids for 48 hours post-treatment." },
      { q: "Will the laser treatment cause tooth sensitivity?", a: "Most patients experience zero sensitivity. We apply a specialized desensitizing sealant immediately following the LED exposure to block open dentin tubules." }
    ]
  },
  {
    id: "implants",
    title: "Dental Implants",
    tagline: "Structural Strength & Natural Aesthetics",
    description: "Replace missing teeth permanently. We utilize high-grade bio-compatible titanium implants that naturally integrate with your jawbone (osseointegration), creating an ultra-strong anchor for custom-milled porcelain crowns. The entire surgical process is digitally planned in 3D to ensure perfect bite alignment.",
    duration: "3 - 6 Months (Including healing phase)",
    tech: "Carestream 3D CBCT Imaging, Guided Surgery Templates",
    benefits: [
      "Restores 100% natural chewing and biting forces",
      "Prevents bone loss and facial structural collapse",
      "Does not require grinding adjacent healthy teeth",
      "Can last a lifetime with standard brushing and flossing"
    ],
    image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=600&auto=format&fit=crop",
    faqs: [
      { q: "Is dental implant surgery painful?", a: "We apply computer-monitored local anesthesia so you feel absolutely nothing during the procedure. Post-operative discomfort is mild and easily managed with standard over-the-counter anti-inflammatories." },
      { q: "Am I a candidate for implants?", a: "Most adults with good systemic health and sufficient jawbone density are excellent candidates. If bone density is low, we can perform minor bone grafting." }
    ]
  },
  {
    id: "braces",
    title: "Invisalign® Clear Aligners",
    tagline: "Discrete & Comfortable Orthodontics",
    description: "Straighten your teeth without metal brackets or wires. Invisalign® utilizes a sequential series of custom-molded, BPA-free clear plastic aligners that apply gentle, controlled forces to shift your teeth into alignment. The aligners are virtually invisible and can be easily removed for meals and cleaning.",
    duration: "6 - 12 Months (Average treatment duration)",
    tech: "iTero Element 5D Intraoral Scanner, ClinCheck 3D mapping",
    benefits: [
      "Completely invisible, maintaining professional appearance",
      "Removable for easy eating, brushing, and flossing",
      "No painful metallic wires or orthodontic cuts on gums",
      "Digital timeline maps out week-by-week teeth shifts"
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop",
    faqs: [
      { q: "How many hours a day must I wear aligners?", a: "For optimal results, aligners should be worn 20 to 22 hours per day, removing them only to eat, drink colored beverages, brush, and floss." },
      { q: "Do clear aligners hurt?", a: "You will feel a sensation of pressure for the first 24-48 hours after switching to a new tray. This is normal and indicates that your teeth are moving safely." }
    ]
  },
  {
    id: "cosmetic",
    title: "Cosmetic Veneers",
    tagline: "The Art of Porcelain Smile Styling",
    description: "Achieve a symmetrical, flawless smile. Our custom-designed porcelain veneers are micro-thin shells of dental porcelain bonded to the front of your teeth. They are individually handcrafted by master ceramists to address chips, gaps, alignment issues, permanent stains, and asymmetrical shapes.",
    duration: "2 Visits (10 Days apart)",
    tech: "Digital Smile Design (DSD), ultra-thin Feldspathic Porcelain",
    benefits: [
      "Custom shade-matching for organic, natural translucency",
      "Highly resistant to coffee, tea, and tobacco staining",
      "Instantly corrects multiple cosmetic flaws at once",
      "Conserves natural tooth structure with minimal prep styling"
    ],
    image: "https://images.unsplash.com/photo-1513412893-c40e5c53d890?q=80&w=600&auto=format&fit=crop",
    faqs: [
      { q: "How much tooth structure is removed for veneers?", a: "We practice micro-prep cosmetic dentistry. Only 0.3mm to 0.5mm of enamel is gently polished, preserving the healthy tooth structure underneath." },
      { q: "How long do porcelain veneers last?", a: "Premium porcelain veneers last between 15 to 20 years with routine hygiene check-ups and standard nightguard protection." }
    ]
  },
  {
    id: "root-canal",
    title: "Root Canal Therapy",
    tagline: "Microscopic Endodontic Care",
    description: "Save an infected or severely damaged tooth. Root canal therapy involves removing the inflamed or necrotic dental pulp, thoroughly sterilizing the internal canal spaces under microscopic magnification, and sealing it with bio-inert root-filling material. A crown is then placed to restore structural integrity.",
    duration: "60 - 90 Minutes (Usually 1 visit)",
    tech: "Zeiss Dental Microscope, Rotary Endodontic Handpieces",
    benefits: [
      "Immediately relieves throbbing toothache and neural pain",
      "Prevents dangerous bacterial spread into the jawbone",
      "Maintains your natural tooth, avoiding extraction",
      "High success rate exceeding 97% under dental microscope"
    ],
    image: "https://images.unsplash.com/photo-1593054941141-55d8d2f5f12f?q=80&w=600&auto=format&fit=crop",
    faqs: [
      { q: "Why do I need a crown after a root canal?", a: "Once the blood supply (pulp) is removed, a tooth becomes dry and brittle over time. A porcelain crown encapsulates and protects it from fracturing under biting force." },
      { q: "Does a root canal hurt?", a: "No. With our micro-dosed anesthesia, the procedure is no more uncomfortable than a standard composite filling." }
    ]
  },
  {
    id: "emergency",
    title: "Emergency Care",
    tagline: "Immediate Relief When You Need It Most",
    description: "Dental emergencies don't wait. We offer guaranteed same-day appointments for acute dental pain, broken crowns, dental abscesses, knocked-out teeth, and facial trauma. Our emergency response team coordinates directly with surgeons to resolve symptoms immediately.",
    duration: "Same-Day Emergency Priority Slot",
    tech: "Digital X-Rays, Intraoral Cameras, nitrous oxide sedation",
    benefits: [
      "Guaranteed same-day relief consultation",
      "24/7 emergency coordinator call line available",
      "Advanced sedation options available for severe anxiety",
      "Temporary crowns and structural fixes made on-site"
    ],
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=600&auto=format&fit=crop",
    faqs: [
      { q: "What should I do if a tooth is knocked out?", a: "Locate the tooth, handle it only by the crown (do not touch the root), rinse it gently with water, and place it in milk or inside your cheek. Contact our emergency line immediately; saving a tooth requires treatment within 60 minutes." },
      { q: "What constitutes a dental emergency?", a: "Severe throbbing pain, facial swelling, continuous gum bleeding, or a fractured tooth that exposes the inner pink nerve tissues." }
    ]
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string>("whitening");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  // Hash navigation support
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const matched = treatments.find((t) => t.id === hash);
      if (matched) {
        setTimeout(() => {
          setActiveTab(matched.id);
        }, 0);
      }
    }
  }, []);

  const activeTreatment = treatments.find((t) => t.id === activeTab) || treatments[0];

  return (
    <div className="w-full bg-background overflow-hidden">
      
      {/* Header section */}
      <section className="relative bg-gradient-brand-subtle py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
            Clinical Treatments
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-slate leading-tight">
            Premium Dental Services
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Explore our state-of-the-art restorative, cosmetic, and surgical treatments, all delivered under luxury care standards.
          </p>
        </div>
      </section>

      {/* Tabs Selector & Treatment Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Vertical/Horizontal Tab Menu */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 pb-4 border-b border-slate-100">
            {treatments.map((t) => {
              const isActive = t.id === activeTab;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setActiveTab(t.id);
                    setFaqOpen(null);
                  }}
                  className={`px-5 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-brand-slate text-white shadow-md"
                      : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                  }`}
                >
                  {t.title}
                </button>
              );
            })}
          </div>

          {/* Tab Content Panels */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTreatment.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left"
            >
              
              {/* Left Column: Image & Details */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-[32px] overflow-hidden aspect-[4/3] shadow-premium-lg border-4 border-slate-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeTreatment.image}
                    alt={activeTreatment.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100/60 space-y-4">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">Average Duration</span>
                    <span className="text-sm font-bold text-brand-slate flex items-center gap-1.5 mt-1">
                      <Clock className="w-4 h-4 text-brand-teal" />
                      {activeTreatment.duration}
                    </span>
                  </div>
                  <div className="pt-3 border-t border-slate-200/60">
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">Technology Utilized</span>
                    <span className="text-sm font-semibold text-slate-700 block mt-1">
                      {activeTreatment.tech}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Copy, Benefits & Accordion FAQs */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
                    {activeTreatment.tagline}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-slate">
                    {activeTreatment.title}
                  </h2>
                </div>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {activeTreatment.description}
                </p>

                {/* Benefits Checklist */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest">
                    Clinical Benefits
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeTreatment.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specialized FAQs */}
                <div className="space-y-3 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest">
                    Treatment FAQs
                  </h4>
                  <div className="space-y-3">
                    {activeTreatment.faqs.map((faq, i) => {
                      const isOpen = faqOpen === i;
                      return (
                        <div key={i} className="border border-slate-100 rounded-xl overflow-hidden shadow-sm">
                          <button
                            onClick={() => setFaqOpen(isOpen ? null : i)}
                            className="w-full flex justify-between items-center px-4 py-3 bg-slate-50/50 hover:bg-slate-50 text-left font-semibold text-slate-800 text-xs md:text-sm"
                          >
                            <span>{faq.q}</span>
                            <ChevronDown className={`w-4 h-4 text-brand-teal transition-transform ${isOpen ? "rotate-180" : ""}`} />
                          </button>
                          {isOpen && (
                            <div className="px-4 py-3 text-xs md:text-sm text-slate-500 leading-relaxed bg-white border-t border-slate-100">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA booking triggers */}
                <div className="pt-6 flex flex-wrap gap-4 items-center">
                  <Link
                    href="/appointment"
                    className="px-6 py-3 bg-gradient-brand text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Treatment Slot</span>
                  </Link>
                  <a
                    href="tel:+18005557645"
                    className="text-xs font-bold text-slate-600 hover:text-brand-blue transition flex items-center gap-1.5"
                  >
                    <span>Emergency Call Hotline</span>
                    <ChevronRight className="w-4 h-4 text-brand-teal" />
                  </a>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

    </div>
  );
}
