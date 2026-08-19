"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall, Calendar } from "lucide-react";
import Button from "../ui/Button";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Specialists", href: "#dentists" },
    { name: "Smile Gallery", href: "#gallery" },
    { name: "Facilities", href: "#facilities" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/90 shadow-md backdrop-blur-md border-b border-slate-100"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              D
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl tracking-tight text-secondary leading-tight">
              </span>
              <span className="text-[10px] text-primary font-bold tracking-widest uppercase -mt-0.5">
                Dental Clinic
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-semibold text-slate-600 hover:text-primary transition-colors py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Nav CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+15553456789"
              className="flex items-center text-sm font-bold text-slate-700 hover:text-primary transition-colors gap-1.5"
            >
              <PhoneCall size={16} className="text-primary" />
              <span>(555) 345-6789</span>
            </a>
            <Button
              variant="primary"
              size="sm"
              icon={Calendar}
              onClick={() => {
                const bookingSection = document.getElementById("booking");
                bookingSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-800 focus:outline-none cursor-pointer p-1 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden"
            />

            {/* Sidebar menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl z-50 lg:hidden px-8 py-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <a href="#" className="flex items-center space-x-2">
                    <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white font-extrabold text-lg">
                      D
                    </div>
                    <span className="font-bold text-lg text-secondary tracking-tight">
                      Dental Clinic
                    </span>
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-slate-500 hover:text-slate-800 p-1 bg-slate-100 rounded-full cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-bold text-slate-700 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                <a
                  href="tel:+15553456789"
                  className="flex items-center justify-center text-base font-bold text-slate-700 hover:text-primary transition-colors py-3 border border-slate-200 rounded-full gap-2"
                >
                  <PhoneCall size={18} className="text-primary" />
                  <span>Call Emergency</span>
                </a>
                <Button
                  variant="primary"
                  size="md"
                  icon={Calendar}
                  onClick={() => {
                    setIsOpen(false);
                    const bookingSection = document.getElementById("booking");
                    bookingSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full"
                >
                  Book Appointment
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
