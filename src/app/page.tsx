"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles, ShieldCheck, Award, Star, Clock, Phone, ArrowRight,
  HeartHandshake, ChevronDown, CheckCircle2, ChevronRight, HelpCircle,
  Calendar, Check, UserCheck, Stethoscope
} from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TestimonialSlider from "@/components/TestimonialSlider";
import ClinicStats from "@/components/ClinicStats";

// Services Data
const services = [
  {
    title: "Teeth Whitening",
    icon: Sparkles,
    description: "Advanced laser whitening systems that restore your smile's natural brilliance up to 8 shades lighter in just one visit.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=400&auto=format&fit=crop",
    href: "/services#whitening"
  },
  {
    title: "Dental Implants",
    icon: ShieldCheck,
    description: "State-of-the-art titanium implants designed to look, feel, and function exactly like your natural teeth.",
    image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=400&auto=format&fit=crop",
    href: "/services#implants"
  },
  {
    title: "Braces & Aligners",
    icon: Award,
    description: "Clear Invisalign® aligners and modern aesthetic orthodontics tailored for comfortable, discrete teeth straightening.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&auto=format&fit=crop",
    href: "/services#braces"
  },
  {
    title: "Root Canal",
    icon: HeartHandshake,
    description: "Gentle micro-endodontic therapy using automated electronic rotary technology for comfortable, tooth-saving care.",
    image: "https://images.unsplash.com/photo-1593054941141-55d8d2f5f12f?q=80&w=400&auto=format&fit=crop",
    href: "/services#root-canal"
  },
  {
    title: "Cosmetic Dentistry",
    icon: Star,
    description: "Bespoke smile styling featuring premium porcelain veneers, composite bonding, and comprehensive cosmetic gum contouring.",
    image: "https://images.unsplash.com/photo-1513412893-c40e5c53d890?q=80&w=400&auto=format&fit=crop",
    href: "/services#cosmetic"
  },
  {
    title: "Pediatric Dentistry",
    icon: Clock,
    description: "Gentle, fun, and educational dental care specifically designed to establish lifelong positive habits for young patients.",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&auto=format&fit=crop",
    href: "/services#pediatric"
  },
  {
    title: "Smile Makeover",
    icon: Sparkles,
    description: "A complete aesthetic facial and dental rejuvenation plan utilizing multiple advanced restorative therapies.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop",
    href: "/services#makeover"
  },
  {
    title: "Tooth Extraction",
    icon: ShieldCheck,
    description: "Atraumatic extraction techniques with focus on bone preservation, paired with painless, micro-dosed localized anesthesia.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=400&auto=format&fit=crop",
    href: "/services#extraction"
  }
];

// Why Choose Us Data
const features = [
  { title: "Advanced Technology", desc: "3D CBCT imaging, painless dental lasers, and intraoral scanners for digital precision." },
  { title: "Pain-Free Treatment", desc: "Computer-controlled local anesthesia (The Wand) and mild sedation for anxiety-free visits." },
  { title: "Sterilized Equipment", desc: "Exceeding FDA and CDC standards with a dedicated, hospital-grade class-B sterilization center." },
  { title: "Experienced Doctors", desc: "Our board-certified dentists are active members of the AACD and hold international fellowships." },
  { title: "Personalized Care", desc: "Bespoke treatment workflows structured around your comfort, timeline, and aesthetic desires." },
  { title: "Affordable Pricing", desc: "Transparent, itemized pricing structures with direct billing options for major insurances." }
];

// Timeline Data
const timelineSteps = [
  { step: "01", title: "Comprehensive Consultation", desc: "Discuss your goals in our private consultation suite. We complete 3D digital scans and high-resolution oral photography." },
  { step: "02", title: "Advanced Diagnosis", desc: "Analyze scans using dental AI software to identify structural, functional, and aesthetic concerns with clinical accuracy." },
  { step: "03", title: "Bespoke Treatment Plan", desc: "Co-design your treatment. You'll review a digital simulation of your smile makeover and receive a transparent pricing summary." },
  { step: "04", title: "Elite Treatment Procedure", desc: "Experience gentle care under luxury comfort amenities. We apply pain-minimizing tools and operate in a relaxing environment." },
  { step: "05", title: "Aftercare & Follow-Up", desc: "We provide personalized recovery kits, track your alignment progress digitally, and schedule regular wellness check-ins." }
];

// Doctors Data
const leadDoctors = [
  {
    name: "Dr. Evelyn Croft",
    role: "Clinical Director & Master Cosmetic Dentist",
    degree: "DDS, Columbia University | Fellow, AACD",
    experience: "14+ Years Experience",
    rating: 4.9,
    reviewsCount: 340,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Dr. Raymond Vance",
    role: "Senior Implantologist & Oral Surgeon",
    degree: "DDS, UCLA School of Dentistry | Board Certified",
    experience: "12+ Years Experience",
    rating: 4.9,
    reviewsCount: 280,
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f0471?q=80&w=300&auto=format&fit=crop",
  }
];

// FAQ Data
const faqs = [
  { q: "What should I expect during my first visit?", a: "Your first visit is a comprehensive, 60-minute diagnostic session. It includes a consultation with one of our lead doctors, high-definition intraoral scans, low-radiation digital X-rays, a gentle periodontal health assessment, and a detailed cleaning tailored to your comfort level." },
  { q: "Are cosmetic dental procedures painful?", a: "Not at all. We utilize advanced numbing technologies like computer-controlled local anesthesia (which eliminates the pinch of traditional syringes) and offer mild sedation options. Our patients describe our cosmetic and restorative processes as highly comfortable." },
  { q: "Does SmileCraft accept health insurance?", a: "Yes, we work with and accept direct billing from major PPO insurances. Our patient care coordinators will file claims on your behalf and break down your dental coverage line-by-line so there are zero surprise fees." },
  { q: "How long does a Smile Makeover take?", a: "Timeline varies depending on your plan. Treatments like laser whitening take one hour, veneers take two brief visits spaced over 10 days, while clear aligners can take between 6 to 12 months. We construct your plan based on your target date." },
  { q: "How often should I schedule check-ups?", a: "For preventative care, we recommend visiting us every 6 months for a hygiene check and professional clean. However, patients undergoing active clear aligner therapy or implant restoration will have customized check-in schedules." }
];

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Consultation Quick Form State
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleQuickFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formName.trim() && formPhone.trim()) {
      setFormSubmitted(true);
      setFormName("");
      setFormPhone("");
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  return (
    <div className="w-full bg-background overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-brand-subtle py-16 lg:py-24">
        {/* Subtle decorative circles */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text & Badges */}
            <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-100/80 px-4 py-1.5 rounded-full shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-brand-teal" />
                <span className="text-xs md:text-sm font-bold text-slate-800 tracking-wide uppercase">
                  Elevated Dental Experience
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-brand-slate leading-[1.1]"
              >
                Crafting Healthy, <br />
                <span className="text-gradient font-semibold">Confident Smiles</span> <br />
                With Precision.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed"
              >
                Welcome to SmileCraft. We combine a luxurious spa-like environment with board-certified dental specialists and cutting-edge digital dentistry to deliver painless, world-class treatments.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/appointment"
                  className="px-8 py-4 bg-gradient-brand text-white font-bold rounded-full shadow-lg shadow-brand-blue/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white border border-slate-100 hover:border-brand-teal/40 text-slate-700 font-bold rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2"
                >
                  <span>Free Consultation</span>
                  <ArrowRight className="w-4 h-4 text-brand-teal" />
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-slate-200/60"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">10+ Years</h4>
                    <p className="text-[10px] text-slate-400 font-medium uppercase">Clinical Care</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-teal/10 flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5 text-brand-teal" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Certified</h4>
                    <p className="text-[10px] text-slate-400 font-medium uppercase">Specialist Doctors</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">5,000+</h4>
                    <p className="text-[10px] text-slate-400 font-medium uppercase">Happy Smiles</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                    <Stethoscope className="w-5 h-5 text-red-500 animate-pulse-slow" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">24/7 Care</h4>
                    <p className="text-[10px] text-slate-400 font-medium uppercase">Emergency Help</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Hero Image & Floating Cards */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mx-auto max-w-[420px] lg:max-w-none aspect-[4/5] rounded-[40px] overflow-hidden shadow-premium-lg border-4 border-white"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop"
                  alt="Healthy smiling patient at SmileCraft"
                  className="w-full h-full object-cover"
                />
                
                {/* Soft gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Floating App Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -right-4 top-1/4 glass-panel rounded-2xl p-4 shadow-premium-lg max-w-[210px] border border-white/60 hidden sm:block animate-float"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Live Status</span>
                </div>
                <h4 className="text-xs font-bold text-slate-800">Available Slots Today</h4>
                <p className="text-[10px] text-slate-400 mt-0.5">3 sessions remaining</p>
                <Link href="/appointment" className="block text-center mt-3 bg-brand-blue text-white text-[10px] font-bold py-2 rounded-lg hover:bg-brand-blue-dark transition">
                  Book Instant Slot
                </Link>
              </motion.div>

              {/* Floating Emergency Timing Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -left-6 bottom-8 glass-panel rounded-2xl p-4 shadow-premium-lg flex items-center gap-3 border border-white/60 max-w-[260px] hidden sm:flex"
              >
                <div className="w-10 h-10 rounded-full bg-brand-teal/15 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-teal" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-slate-800">Mon - Sat: 8am - 7pm</h4>
                  <p className="text-[10px] text-slate-400">Emergency support dial-in:</p>
                  <a href="tel:+18005557645" className="text-xs font-bold text-brand-teal hover:underline">+1 (800) 555-7645</a>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section className="py-20 md:py-28 bg-white text-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
              Dental Excellence & Care
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-slate">
              Custom Treatments Tailored For Your Smile
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              We provide a full spectrum of dental procedures using the world&apos;s finest materials and high-precision digital workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-premium hover:shadow-premium-lg hover-lift flex flex-col h-full text-left"
                >
                  {/* Service Image Cover */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4 text-brand-blue group-hover:bg-gradient-brand group-hover:text-white transition-all duration-300">
                        <ServiceIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold font-serif text-brand-slate mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                    
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-teal group/link transition"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </section>

      {/* 3. About Clinic Section */}
      <section className="py-20 md:py-28 bg-gradient-brand-subtle relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Grid Images */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-md border-2 border-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=400&auto=format&fit=crop"
                    alt="Dentists at work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-square shadow-md border-2 border-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=400&auto=format&fit=crop"
                    alt="Dental scanner technology"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden aspect-square shadow-md border-2 border-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=400&auto=format&fit=crop"
                    alt="Modern waiting room lobby"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-md border-2 border-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=400&auto=format&fit=crop"
                    alt="Clinical sterilization room"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Copy & Counters */}
            <div className="lg:col-span-6 text-left space-y-6 md:space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
                  Bespoke Clinic Experience
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-slate leading-tight">
                  Patient-First Clinical Reassurance
                </h2>
              </div>
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                SmileCraft was founded on a simple mission: to cure the fear of dentistry by crafting an elegant, stress-free clinical experience. We believe that your comfort is just as important as structural dental precision.
              </p>

              <div className="space-y-3.5 text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0" />
                  <span>Hospital-grade Class-B sterilization protocols</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0" />
                  <span>Interactive 3D mockups of your smile before procedure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0" />
                  <span>Luxury amenities: noise-canceling headphones, ceiling monitors</span>
                </div>
              </div>

              {/* Counter Components */}
              <div className="pt-6 border-t border-slate-200">
                <ClinicStats />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
              The SmileCraft Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-slate">
              Why Patients Trust Us With Their Smile
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
              Our clinical model blends award-winning cosmetic talent, painless procedures, and complete financial transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-slate-100 p-6 md:p-8 rounded-3xl text-left shadow-premium hover:shadow-premium-lg hover-lift transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-sm mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold font-serif text-brand-slate mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Treatment Process Section (Timeline) */}
      <section className="py-20 md:py-28 bg-gradient-brand-subtle relative text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
              Your Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-slate">
              A Seamless Treatment Process
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
              We structure our workflow to keep you informed and comfortable at every single checkpoint.
            </p>
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {timelineSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/75 backdrop-blur-sm border border-slate-100/60 p-6 rounded-3xl text-left shadow-premium relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-extrabold font-serif bg-gradient-brand bg-clip-text text-transparent opacity-80">
                      {step.step}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                  </div>
                  <h3 className="text-base font-bold font-serif text-brand-slate mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-[11px] md:text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Doctor Section */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
              Elite Medical Specialists
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-slate">
              Meet Our Board-Certified Dentists
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
              Our clinical leaders are active researchers, trainers, and authors with hundreds of smile restorations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadDoctors.map((doc, i) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white border border-slate-100 rounded-3xl p-6 shadow-premium hover:shadow-premium-lg hover-lift flex flex-col md:flex-row gap-6 text-left"
              >
                {/* Doctor Image */}
                <div className="w-full md:w-44 aspect-square md:h-44 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-xs font-bold text-slate-800">{doc.rating}</span>
                      <span className="text-xs text-slate-400">({doc.reviewsCount} verified reviews)</span>
                    </div>
                    <h3 className="text-lg font-bold font-serif text-brand-slate">{doc.name}</h3>
                    <p className="text-xs font-bold text-brand-teal uppercase tracking-wide">{doc.role}</p>
                    <p className="text-xs text-slate-400">{doc.degree}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                      {doc.experience}
                    </span>
                    <Link
                      href="/doctors"
                      className="text-xs font-bold text-brand-blue hover:text-brand-teal transition flex items-center gap-1"
                    >
                      <span>Full Bio</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Smile Gallery (Before/After) */}
      <section className="py-20 md:py-28 bg-gradient-brand-subtle text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
              Patient Showcase
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-slate">
              Smile Transformations
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
              Real results from actual SmileCraft patients. Drag the interactive comparison bar to inspect our clinical detail.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-[40px] p-6 md:p-12 shadow-premium max-w-5xl mx-auto">
            <BeforeAfterSlider />
          </div>

        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
              Verified Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-slate">
              What Our Patients Say
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
              Read how our personalized, calming clinical care model has helped redefine the dental experience for people of all walks.
            </p>
          </div>

          <TestimonialSlider />

        </div>
      </section>

      {/* 9. Clinic Gallery Section */}
      <section className="py-20 md:py-28 bg-gradient-brand-subtle text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
              Inside SmileCraft
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-slate">
              A Tour of Our State-of-the-Art Clinic
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
              Exquisite reception lounges, relaxing surgery suites, and clinical sterilization stations designed for clinical safety.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-premium hover:scale-[1.02] transition-transform duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=600&auto=format&fit=crop" alt="Reception" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-premium hover:scale-[1.02] transition-transform duration-300 md:translate-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=600&auto=format&fit=crop" alt="Treatment room" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-premium hover:scale-[1.02] transition-transform duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop" alt="Equipment" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-premium hover:scale-[1.02] transition-transform duration-300 md:translate-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop" alt="Smiling staff" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-teal transition">
              <span>View Full Photo & Facility Tour</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 10. Quick Appointment CTA Form Section */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-slate rounded-[40px] text-white p-8 md:p-16 shadow-premium-lg grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
            
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl" />

            <div className="text-left space-y-6 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                Direct Consultations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif leading-tight">
                Ready to Begin Your Rejuvenation?
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Fill in your details, and a dedicated Care Coordinator will contact you within 2 business hours to schedule your comprehensive first diagnostic visit.
              </p>
              
              <div className="pt-6 border-t border-slate-800 space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-teal shrink-0" />
                  <span>Call Booking Office: <a href="tel:+18005557645" className="text-white hover:text-brand-teal transition font-bold">+1 (800) 555-7645</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-brand-teal shrink-0" />
                  <span>Average Callback Wait Time: <b>12 Minutes</b></span>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 text-left">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-14 h-14 bg-brand-teal rounded-full flex items-center justify-center mx-auto text-white shadow-lg">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-serif">Request Submitted!</h3>
                  <p className="text-sm text-slate-300 max-w-xs mx-auto">
                    Thank you. A Care Coordinator has logged your query and will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleQuickFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="hero-name" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      id="hero-name"
                      type="text"
                      required
                      placeholder="e.g., Katherine Miller"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="hero-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="hero-phone"
                      type="tel"
                      required
                      placeholder="e.g., (555) 019-2834"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition placeholder:text-slate-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-brand text-white font-bold rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm mt-6"
                  >
                    <span>Request Callback</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 11. FAQ Section (Accordion) */}
      <section className="py-20 md:py-28 bg-gradient-brand-subtle text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-slate">
              Common Clinical Questions
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
              Here is clear and clinical information regarding pricing, insurance coverage, pain control, and scheduling protocols.
            </p>
          </div>

          <div className="space-y-3.5 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left font-bold font-serif text-brand-slate hover:text-brand-blue transition focus:outline-none"
                  >
                    <span className="text-sm md:text-base">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-brand-teal shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-xs md:text-sm text-slate-500 leading-relaxed border-t border-slate-50"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
