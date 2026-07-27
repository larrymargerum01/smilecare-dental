"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, PhoneCall, ShieldCheck, Award, Smile } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-dot-pattern overflow-hidden">
      {/* Background blobs for premium depth */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full filter blur-3xl pointer-events-none translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Hero Content Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-8 text-left relative z-10"
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <Smile size={14} /> Welcome to Premium Dental Care
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-secondary leading-[1.1] tracking-tight"
            >
              Crafting Healthy, <br />
              <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Beautiful Smiles
              </span> <br />
              That Last A Lifetime.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed max-w-xl"
            >
              Experience world-class, state-of-the-art dentistry tailored to your comfort.
              Our board-certified experts combine artistic precision with cutting-edge medical technology.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                icon={Calendar}
                onClick={() => {
                  const bookingSection = document.getElementById("booking");
                  bookingSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={PhoneCall}
                onClick={() => {
                  window.location.href = "tel:+15553456789";
                }}
              >
                Emergency Call
              </Button>
            </motion.div>

            {/* Trust highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100"
            >
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold font-display text-secondary">
                  15k+
                </span>
                <span className="text-xs md:text-sm text-slate-500 font-medium">
                  Happy Patients
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold font-display text-secondary">
                  99.8%
                </span>
                <span className="text-xs md:text-sm text-slate-500 font-medium">
                  Success Rate
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold font-display text-secondary">
                  15+
                </span>
                <span className="text-xs md:text-sm text-slate-500 font-medium">
                  Years of Care
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual Right */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Dynamic floating cards */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute top-10 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100/50 animate-float"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <ShieldCheck size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium leading-none">Safety Rating</span>
                <span className="text-sm font-bold text-slate-800 mt-1">100% Certified Clinic</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="absolute bottom-16 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100/50"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                <Award size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium leading-none">Best Dentist Award</span>
                <span className="text-sm font-bold text-slate-800 mt-1">Dental Quality 2025</span>
              </div>
            </motion.div>

            {/* Overlapping premium images */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full aspect-square max-w-md"
            >
              {/* Gold Ring ornament */}
              <div className="absolute inset-0 rounded-full border-[10px] border-slate-100 scale-[1.03] -z-10" />

              {/* Patient Image */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                  alt="Smiling Patient Care"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlaying smaller Dentist image */}
              <div className="absolute -bottom-6 -left-6 w-44 h-44 rounded-full overflow-hidden border-8 border-white shadow-2xl hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400"
                  alt="Professional Dentist Dr. Marcus Chen"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
