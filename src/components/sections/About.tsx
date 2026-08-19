"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";
import Image from "next/image";

export const About: React.FC = () => {
  const whyChooseUs = [
    {
      title: "Board-Certified Specialists",
      description: "Our team includes highly accredited orthodontists, implantologists, and cosmetic dentists.",
      icon: Sparkles,
    },
    {
      title: "Sterilization & Safety",
      description: "We strictly exceed all CDC and OSHA guidelines with advanced class-B thermal sterilizers.",
      icon: ShieldCheck,
    },
    {
      title: "Patient Comfort First",
      description: "Painless dentistry techniques, digital check-ins, and relaxing custom patient lounges.",
      icon: HeartPulse,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Overlapping interior image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative aspect-square max-w-lg mx-auto w-full"
          >
            {/* Background design accents */}
            <div className="absolute top-10 -right-6 bottom-10 left-6 bg-slate-50 border border-slate-100 rounded-3xl -z-10" />

            <div className="relative w-full h-[90%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                alt="Dental Clinic Modern Treatment Room"
                fill
                className="object-cover"
              />
            </div>

            {/* Float counter badge */}
            <div className="absolute bottom-0 right-4 bg-primary text-white p-6 rounded-3xl shadow-xl max-w-[200px] border border-blue-400/20">
              <span className="block text-3xl font-black font-display tracking-tight leading-none mb-1">
                98%
              </span>
              <span className="block text-xs font-semibold uppercase tracking-wider text-blue-100 leading-normal">
                Patient Satisfaction Score
              </span>
            </div>
          </motion.div>

          {/* Right: Info and Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <span className="text-primary font-bold text-xs uppercase tracking-widest block">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary tracking-tight">
                Setting the Standard for Modern, Premium Oral Healthcare.
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Dental Clinic is a multidisciplinary clinic committed to redefining the dental experience.
                We believe that premium oral care combines precise diagnosis, expert clinical execution,
                and an elegant, stress-free clinical environment.
              </p>
            </div>

            {/* Mission & Vision Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-2">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100/50">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Our Mission
                </span>
                <p className="text-sm font-semibold text-secondary leading-relaxed">
                  To provide state-of-the-art restorative and aesthetic dentistry in a comfortable environment that respects patient health.
                </p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100/50">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Our Vision
                </span>
                <p className="text-sm font-semibold text-secondary leading-relaxed">
                  To remain Springfield's premier oral surgery and smile rejuvenation institute through research, technology, and clinical excellence.
                </p>
              </div>
            </div>

            {/* Why Choose Us Pillars */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-secondary">
                Why Discerning Patients Choose Our Dental Clinic:
              </h3>
              <div className="space-y-4">
                {whyChooseUs.map((pillar) => {
                  const PillarIcon = pillar.icon;
                  return (
                    <div key={pillar.title} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0 border border-blue-100/50">
                        <PillarIcon size={18} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 leading-snug">
                          {pillar.title}
                        </h4>
                        <p className="text-xs md:text-sm text-slate-500 leading-normal mt-0.5">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
