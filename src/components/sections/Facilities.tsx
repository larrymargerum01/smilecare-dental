"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Cpu, Camera, PhoneCall, Car, Accessibility, Check } from "lucide-react";
import { facilitiesList } from "../../data/dentalData";
import Card from "../ui/Card";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Sparkles,
  Cpu,
  Camera,
  PhoneCall,
  Car,
  Accessibility
};

export const Facilities: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="facilities" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block">
            Our Infrastructure
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary tracking-tight">
            Advanced Clinical Facilities
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            We invest in state-of-the-art diagnostic imaging and patient convenience technologies to guarantee clinical safety, accuracy, and comfort.
          </p>
        </div>

        {/* Facilities deck */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {facilitiesList.map((facility) => {
            const IconComponent = iconMap[facility.iconName] || Sparkles;

            return (
              <motion.div key={facility.id} variants={cardVariants}>
                <Card
                  variant="default"
                  hoverEffect="glow"
                  className="bg-slate-50 border border-slate-100 hover:border-blue-500/20 p-6 md:p-8 rounded-3xl flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 text-primary flex items-center justify-center shrink-0 shadow-sm transition-colors group-hover:bg-primary group-hover:text-white">
                    <IconComponent size={22} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base md:text-lg font-bold text-secondary">
                      {facility.title}
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;
