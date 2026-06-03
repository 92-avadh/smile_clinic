"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Award, ShieldCheck, HeartHandshake, Eye, Bookmark, Compass, Heart } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const milestones: TimelineItem[] = [
  { year: "2015", title: "SmileCraft Foundation", description: "Dr. Evelyn Croft founded the clinic in Beverly Hills with a single chair and a mission to offer anxiety-free cosmetic dental restorations." },
  { year: "2018", title: "Adding Digital Scanners", description: "First clinic in the region to adopt completely plaster-less intraoral scanning, dropping patient crown prep wait times by 80%." },
  { year: "2020", title: "Advanced Surgery Wing", description: "Expanded our facilities to include Dr. Raymond Vance and a dedicated dental implant surgical theater with laminar flow sterilization." },
  { year: "2023", title: "AACD Fellowship & Award", description: "Awarded clinical excellence recognition by the American Academy of Cosmetic Dentistry. Added our private restorative lounge." },
  { year: "2025", title: "SmileCraft Today", description: "Operating 6 modern chairs, hosting 15 elite specialists, and maintaining a 99.4% client satisfaction rating across 5,000+ smiles." }
];

const values = [
  { icon: Compass, title: "Compassion First", desc: "We prioritize patient emotional comfort, using pain-minimizing tech and offering gentle clinical empathy." },
  { icon: Sparkles, title: "Digital Precision", desc: "No guess-work. We construct 3D digital smile designs and utilize CAD/CAM restorations for accuracy." },
  { icon: Heart, title: "Absolute Safety", desc: "Hospital-level Class-B steam sterilization chambers and daily microbiological spore logs." },
  { icon: HeartHandshake, title: "Pricing Trust", desc: "No surprise bills. We give clear, itemized price sheets and handle insurance claims from beginning to end." }
];

export default function AboutPage() {
  return (
    <div className="w-full bg-background overflow-hidden">
      
      {/* Page Header Banner */}
      <section className="relative bg-gradient-brand-subtle py-16 text-center">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
            About Our Brand
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-slate leading-tight">
            Redefining Dental Care
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Discover the history, technology, and clinical philosophy that makes SmileCraft Beverly Hills&apos; premier dental team.
          </p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[360px] lg:max-w-none aspect-[4/5] rounded-[40px] overflow-hidden shadow-premium-lg border-4 border-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop"
                  alt="Dr. Evelyn Croft - Founder of SmileCraft"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-panel rounded-2xl p-4 border border-white/60 shadow-md max-w-[210px] hidden sm:block">
                <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest block mb-0.5">Clinic Founder</span>
                <p className="text-sm font-bold text-brand-slate">Dr. Evelyn Croft, DDS</p>
                <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                  &ldquo;A smile should represent confidence, not anxiety. We built SmileCraft to change dentistry forever.&rdquo;
                </p>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
                Our Genesis
              </span>
              <h2 className="text-3xl font-bold font-serif text-brand-slate leading-tight">
                The Vision Behind SmileCraft Dental Care
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Founded in 2015 by Dr. Evelyn Croft, SmileCraft was established to solve a critical issue in modern healthcare: dental anxiety. Dr. Croft realized that while clinical techniques were advancing, the patient experience remained cold, intimidating, and stressful.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                By investing in relaxing design, custom sensory elements (such as aromatherapy and soft acoustical ceilings), and pain-eliminating medical technologies, we created a model where clients feel cared for from the moment they step into our reception lounge.
              </p>
              
              {/* Mission / Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-3">
                    <Bookmark className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif font-bold text-brand-slate text-sm mb-1.5">Our Mission</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    To deliver accurate, pain-free dental treatments in an environment that inspires safety, comfort, and clinical trust.
                  </p>
                </div>
                
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-3">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif font-bold text-brand-slate text-sm mb-1.5">Our Vision</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    To be the leading global model for patient-friendly premium dentistry, proving health and wellness can feel luxurious.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-24 bg-gradient-brand-subtle text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
              Our Pillars
            </span>
            <h2 className="text-3xl font-bold font-serif text-brand-slate">
              Core Principles of Our Practice
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
              Every dentist and care coordinator at SmileCraft operates according to four uncompromising standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {values.map((v, i) => {
              const ValueIcon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white/80 backdrop-blur-sm border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md hover-lift transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-5">
                    <ValueIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-serif text-brand-slate mb-2">
                    {v.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Milestones Timeline Section */}
      <section className="py-20 md:py-24 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
              Timeline
            </span>
            <h2 className="text-3xl font-bold font-serif text-brand-slate">
              SmileCraft Milestones
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
              A decade of clinical evolution, technology investments, and certified recognition.
            </p>
          </div>

          {/* Timeline UI */}
          <div className="relative border-l-2 border-slate-100 text-left pl-8 ml-4 md:ml-32 space-y-12">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Year Badge */}
                <div className="absolute -left-[54px] md:-left-[178px] top-0 flex items-center gap-3">
                  <span className="hidden md:inline-block w-24 text-right text-sm font-extrabold text-brand-teal font-serif">
                    {m.year}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-gradient-brand text-white font-extrabold text-xs flex items-center justify-center border-4 border-white shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 max-w-2xl shadow-sm">
                  <span className="inline-block md:hidden text-xs font-extrabold text-brand-teal mb-1">
                    {m.year}
                  </span>
                  <h3 className="text-lg font-bold font-serif text-brand-slate mb-2">
                    {m.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Certifications and Accreditations Banner */}
      <section className="py-16 bg-brand-slate text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">
            Accreditations & Certificates
          </span>
          <h2 className="text-2xl font-bold font-serif text-slate-100">
            Registered and Certified Clinical Operations
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center opacity-85">
            <div className="flex flex-col items-center gap-2 max-w-[160px]">
              <ShieldCheck className="w-8 h-8 text-brand-teal" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">ADA Registered</span>
              <p className="text-[9px] text-slate-500">American Dental Association member</p>
            </div>
            <div className="flex flex-col items-center gap-2 max-w-[160px]">
              <Award className="w-8 h-8 text-brand-teal" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">AACD Fellow</span>
              <p className="text-[9px] text-slate-500">American Academy of Cosmetic Dentistry</p>
            </div>
            <div className="flex flex-col items-center gap-2 max-w-[160px]">
              <ShieldCheck className="w-8 h-8 text-brand-teal" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">HIPAA Compliant</span>
              <p className="text-[9px] text-slate-500">Encrypted health database standards</p>
            </div>
            <div className="flex flex-col items-center gap-2 max-w-[160px]">
              <Award className="w-8 h-8 text-brand-teal" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">CDC Standards</span>
              <p className="text-[9px] text-slate-500">Hospital-grade sterilization center</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
