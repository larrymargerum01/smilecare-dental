"use client";

import React, { useState } from "react";
import { Send, PhoneCall, Mail, MapPin, ArrowUp } from "lucide-react";
import { contactDetails, dentalServices } from "../../data/dentalData";
import Button from "../ui/Button";
import Toast from "../ui/Toast";

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/\S+@\S+\.\S+/.test(newsletterEmail)) return;

    setLoading(true);

    // Simulate subscription
    setTimeout(() => {
      setLoading(false);
      setShowToast(true);
      setNewsletterEmail("");
    }, 1200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-slate-400 pt-20 pb-10 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          {/* Logo & Intro Column (4 spans) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-blue-500/20">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-tight leading-tight">
                  SmileCare
                </span>
                <span className="text-[10px] text-primary font-bold tracking-widest uppercase -mt-0.5">
                  Dental Clinic
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
              State-of-the-art restorative and aesthetic dental care serving Springfield. Experience personalized treatments powered by cutting-edge medical technologies.
            </p>

            {/* Social media links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column (2 spans) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-xs md:text-sm font-medium">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#dentists" className="hover:text-primary transition-colors">
                  Specialists
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">
                  Smile Gallery
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-primary transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column (2 spans) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Treatments</h4>
            <ul className="space-y-3 text-xs md:text-sm font-medium">
              {dentalServices.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-primary transition-colors block truncate"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column (4 spans) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Newsletter</h4>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Subscribe to get oral health advice, diagnostic tips, and checkup reminders directly in your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your Email"
                  className="flex-1 bg-slate-800 border border-slate-700/50 rounded-xl px-4 py-3 text-xs font-semibold text-white focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary hover:bg-blue-700 text-white p-3 rounded-xl transition-all flex items-center justify-center shrink-0 cursor-pointer"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom (Copyright and back to top) */}
        <div className="pt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left text-xs md:text-sm font-semibold">
            <p>&copy; {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.</p>
            <p className="text-slate-600 mt-1 font-normal">
              State License: Springfield Medical Registry #DENT-98124-IL
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-4 py-2.5 rounded-full border border-slate-700 transition-all cursor-pointer"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>

      {/* Subscription Success Toast */}
      <Toast
        show={showToast}
        message="Thank you! You have successfully subscribed to the SmileCare Dental Clinic newsletter."
        onClose={() => setShowToast(false)}
        type="success"
      />
    </footer>
  );
};

export default Footer;
