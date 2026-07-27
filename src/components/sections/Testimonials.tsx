"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { testimonialsList } from "../../data/dentalData";

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const activeReview = testimonialsList[activeIndex];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative quotes background graphic */}
      <div className="absolute top-10 left-12 text-slate-100/60 pointer-events-none hidden md:block">
        <Quote size={200} className="transform rotate-180" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block">
            Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary tracking-tight">
            Loved by Our Patients
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            Read stories of recovery, cosmetic enhancements, and general family checkups from our verified clinical database.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative min-h-[350px] md:min-h-[280px]"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start"
            >
              {/* Profile Image & Rating Left */}
              <div className="flex flex-col items-center shrink-0">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-md border-4 border-white mb-4">
                  <Image
                    src={activeReview.photoUrl}
                    alt={activeReview.name}
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>
                <div className="flex text-amber-400 gap-0.5 mb-1">
                  {Array.from({ length: activeReview.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                  Verified Patient
                </span>
              </div>

              {/* Message Details Right */}
              <div className="flex-1 flex flex-col justify-between text-center md:text-left h-full">
                <blockquote className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed italic mb-6">
                  "{activeReview.text}"
                </blockquote>
                <div>
                  <cite className="not-italic font-bold text-secondary text-base block">
                    {activeReview.name}
                  </cite>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider block mt-0.5">
                    {activeReview.role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-20">
            <button
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 bg-white border border-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:text-primary shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-20">
            <button
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 bg-white border border-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:text-primary shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2.5 mt-8">
          {testimonialsList.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoplay(false);
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === activeIndex ? "w-6 bg-primary" : "w-2 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
