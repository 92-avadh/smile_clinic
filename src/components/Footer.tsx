"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Phone, Mail, MapPin, Clock, ArrowRight, Instagram, Facebook, Linkedin, Youtube, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000); // reset state after 5 seconds
    }
  };

  return (
    <footer className="bg-brand-slate text-slate-300 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-slate-800/60">
          {/* Brand Info */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shadow-md shadow-brand-blue/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-serif">
                  SmileCraft
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-brand-teal font-bold -mt-1">
                  Dental Care
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Experience dental excellence redefined. We combine state-of-the-art dental technology with a calming, luxurious environment for ultimate oral care.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all text-slate-400"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all text-slate-400"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all text-slate-400"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all text-slate-400"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold font-serif text-base mb-6 relative w-fit">
              Explore
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-teal" />
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link href="/" className="hover:text-white hover:pl-1 transition-all">Home</Link></li>
              <li><Link href="/about" className="hover:text-white hover:pl-1 transition-all">About Us & Team</Link></li>
              <li><Link href="/services" className="hover:text-white hover:pl-1 transition-all">Treatments & Services</Link></li>
              <li><Link href="/doctors" className="hover:text-white hover:pl-1 transition-all">Meet Our Specialists</Link></li>
              <li><Link href="/gallery" className="hover:text-white hover:pl-1 transition-all">Our Facilities</Link></li>
              <li><Link href="/testimonials" className="hover:text-white hover:pl-1 transition-all">Smile Transformations</Link></li>
              <li><Link href="/contact" className="hover:text-white hover:pl-1 transition-all">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold font-serif text-base mb-6 relative w-fit">
              Contact & Hours
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-teal" />
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <span>120 Luxury Plaza, Suite 400, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-teal shrink-0" />
                <a href="tel:+18005557645" className="hover:text-white transition">+1 (800) 555-7645</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-teal shrink-0" />
                <a href="mailto:concierge@smilecraftdental.com" className="hover:text-white transition">concierge@smilecraftdental.com</a>
              </li>
              <li className="flex items-start gap-3 pt-1 border-t border-slate-800/40">
                <Clock className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Mon - Sat: 8:00 AM - 7:00 PM</p>
                  <p className="text-slate-400 text-xs mt-0.5">Closed on Sundays</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter / Emergency */}
          <div>
            <h4 className="text-white font-semibold font-serif text-base mb-6 relative w-fit">
              Join Our Newsletter
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-teal" />
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Subscribe to receive oral health tips, exclusive dental care updates, and wellness offers.
            </p>
            <form onSubmit={handleSubscribe} className="relative mb-6">
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800 text-white rounded-full py-2.5 pl-4 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue border border-slate-700/50 transition-all placeholder:text-slate-500"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="absolute right-1 top-1 bottom-1 w-9 h-9 rounded-full bg-gradient-brand flex items-center justify-center text-white hover:scale-105 active:scale-95 transition disabled:bg-brand-teal"
              >
                {subscribed ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
            
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-brand-teal font-semibold -mt-4 mb-4"
              >
                Subscribed successfully! Thank you.
              </motion.p>
            )}

            {/* Critical Emergency Banner */}
            <div className="bg-slate-800/60 rounded-2xl p-4 border border-brand-teal/20 text-center">
              <h5 className="text-white text-xs font-bold uppercase tracking-wider text-brand-teal mb-1 flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                24/7 Dental Emergency
              </h5>
              <a href="tel:+18005557645" className="text-sm font-bold text-white hover:text-brand-blue transition block">
                +1 (800) 555-SMILE
              </a>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} SmileCraft Dental Care. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Sitemap</a>
            <a href="#" className="hover:text-white transition">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
