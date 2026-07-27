"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Sun, Shield, Grid, Activity, Heart, Smile, Scissors, Clock, DollarSign, CheckCircle } from "lucide-react";
import Image from "next/image";
import { dentalServices, ServiceItem } from "../../data/dentalData";
import Card from "../ui/Card";
import Button from "../ui/Button";

// Map icon string names to Lucide icons
const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Sparkles,
  Sun,
  Shield,
  Grid,
  Activity,
  Heart,
  Smile,
  Scissors
};

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-50 rounded-full filter blur-3xl pointer-events-none translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary tracking-tight">
            Specialized Care Built Around Your Needs
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            We provide a complete range of dental treatments. From routine dental hygiene to complex computer-guided surgeries, our clinic maintains the highest care standards.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {dentalServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Smile;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="h-full flex"
              >
                <Card
                  variant="glass"
                  hoverEffect="lift"
                  className="flex flex-col justify-between w-full h-full border border-slate-100 bg-white shadow-sm hover:border-blue-500/20"
                >
                  <div className="space-y-5">
                    {/* Image Header with Card Aspect Ratio */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-3">
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        sizes="(max-w-7xl) 25vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 text-primary p-2 rounded-xl shadow-md backdrop-blur-xs">
                        <IconComponent size={20} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-secondary leading-snug tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-50 mt-5">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-primary hover:text-blue-700 text-sm font-bold inline-flex items-center gap-1 cursor-pointer group"
                    >
                      Learn More
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Premium Detailed Service Modal/Drawer */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            />

            {/* Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed inset-x-4 bottom-4 md:inset-auto md:w-full md:max-w-2xl bg-white rounded-3xl shadow-2xl z-50 overflow-hidden border border-slate-100 max-h-[85vh] flex flex-col"
            >
              {/* Header Image banner */}
              <div className="relative w-full h-56 md:h-64 shrink-0">
                <Image
                  src={selectedService.imageUrl}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-slate-900/60 hover:bg-slate-900 text-white p-2 rounded-full backdrop-blur-xs cursor-pointer transition-colors"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/80 text-[10px] font-bold uppercase tracking-wider mb-2">
                    Premium Treatment
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold leading-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Scrollable details content */}
              <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                    Treatment Overview
                  </h4>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {selectedService.longDescription}
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                    Key Patient Benefits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.benefits.map((benefit, index) => (
                      <div key={index} className="flex gap-2 items-start text-slate-700">
                        <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                        <span className="text-sm leading-normal">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing / Duration details */}
                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center text-primary shrink-0">
                      <Clock size={16} />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Duration
                      </span>
                      <span className="text-xs md:text-sm font-bold text-slate-700">
                        {selectedService.duration}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center text-primary shrink-0">
                      <DollarSign size={16} />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Estimated Cost
                      </span>
                      <span className="text-xs md:text-sm font-bold text-slate-700">
                        {selectedService.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3 shrink-0">
                <Button variant="outline" size="sm" onClick={() => setSelectedService(null)}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setSelectedService(null);
                    const bookingSection = document.getElementById("booking");
                    bookingSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Book Treatment
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
