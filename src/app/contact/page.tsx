"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Check, Sparkles, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setFormSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setFormSubmitted(false), 6000);
    }
  };

  return (
    <div className="w-full bg-background overflow-hidden">
      
      {/* Page Header Banner */}
      <section className="relative bg-gradient-brand-subtle py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-slate leading-tight">
            Connect With SmileCraft
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Reach out to schedule a consultation, ask dental queries, or speak with our billing coordinators.
          </p>
        </div>
      </section>

      {/* Grid for forms & information cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Cards */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 space-y-6 shadow-sm">
                
                {/* Hours Card */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-serif text-brand-slate uppercase tracking-wider">Clinic Timing</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Monday &ndash; Saturday: 8:00 AM &ndash; 7:00 PM <br />
                      Sunday: Closed (Available for acute emergency phone consults)
                    </p>
                  </div>
                </div>

                {/* Direct Dialing Card */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-200/60">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-serif text-brand-slate uppercase tracking-wider">Direct Lines</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Front Desk: <a href="tel:+18005557645" className="hover:text-brand-blue font-semibold text-slate-700">+1 (800) 555-7645</a> <br />
                      Emergency Dispatcher: <a href="tel:+18005557645" className="hover:text-brand-blue font-bold text-red-500">+1 (800) 555-SMILE</a>
                    </p>
                  </div>
                </div>

                {/* Address Card */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-200/60">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-serif text-brand-slate uppercase tracking-wider">Clinic Address</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      120 Luxury Plaza, Suite 400 <br />
                      Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>

                {/* Email Support Card */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-200/60">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-serif text-brand-slate uppercase tracking-wider">General Enquiries</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Main Desk: <a href="mailto:concierge@smilecraftdental.com" className="hover:text-brand-blue text-slate-700">concierge@smilecraftdental.com</a> <br />
                      Specialist Queries: <a href="mailto:clinical@smilecraftdental.com" className="hover:text-brand-blue text-slate-700">clinical@smilecraftdental.com</a>
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Box */}
              <div className="bg-brand-slate rounded-3xl p-6 text-white text-center border border-slate-800 shadow-premium-lg">
                <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">WhatsApp Concierge</span>
                <h4 className="text-sm font-bold mt-1">Prefer instant messaging?</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Chat directly with our care coordinators on WhatsApp for booking rescheduling or general FAQs.
                </p>
                <a
                  href="https://wa.me/18005557645"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-full mt-4 hover:bg-emerald-600 transition shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact form */}
            <div className="lg:col-span-7 bg-white border border-slate-100 p-6 md:p-8 rounded-[32px] shadow-premium text-left">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 space-y-4"
                >
                  <div className="w-14 h-14 bg-brand-teal rounded-full flex items-center justify-center mx-auto text-white shadow-lg">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-brand-slate">Message Transmitted!</h3>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you. We have recorded your submission, and a coordinator will contact you by phone or email within 2 business hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                    <span>Send Secure Message</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g., Charlotte Sterling"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:bg-white transition placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="e.g., charlotte@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:bg-white transition placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Your Query or Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Please write details about your dental symptoms or cosmetic goals..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:bg-white transition placeholder:text-slate-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-gradient-brand text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Styled custom Google Map mock container */}
      <section className="bg-slate-50 border-t border-slate-100 relative">
        <div className="w-full h-[400px] relative flex items-center justify-center bg-slate-200">
          {/* Real styled map iframe (safe and highly functional!) */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.5957017684074!2d-118.40326442436034!3d34.0722306731481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04b3cf4aff%3A0xc345388c3a9d20c2!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale saturate-50 contrast-85 opacity-80 hover:opacity-100 transition-opacity"
            title="SmileCraft Dental Clinic Beverly Hills Location Map"
          />
        </div>
      </section>

    </div>
  );
}
