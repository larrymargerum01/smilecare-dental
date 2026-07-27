"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Sliders } from "lucide-react";
import Image from "next/image";
import { galleryItems, GalleryItem } from "../../data/dentalData";
import { BeforeAfterSlider } from "../ui/BeforeAfterSlider";
import Card from "../ui/Card";

export const BeforeAfterGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block">
            Smile Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary tracking-tight">
            Real Transformations, Proven Results
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            Browse through actual case studies of patients who restored their smiles and improved their dental health at our clinic. Click any transformation to open the interactive slider.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setActiveItem(item)}
              className="cursor-pointer"
            >
              <Card
                variant="glass"
                hoverEffect="lift"
                className="group p-4 bg-white border border-slate-100/50 rounded-3xl hover:border-blue-500/20"
              >
                {/* Visual Image Showcase */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={item.afterUrl}
                    alt={item.title}
                    fill
                    sizes="(max-w-7xl) 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Absolute Before Mini Badge */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full backdrop-blur-xs tracking-wider z-10">
                    After
                  </div>

                  {/* Overlay instructions */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-slate-800 text-xs font-bold px-4 py-2.5 rounded-full shadow-lg flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-transform duration-300">
                      <Sliders size={14} className="text-primary animate-pulse" />
                      Slide Before/After
                    </span>
                  </div>
                </div>

                <div className="space-y-1 px-1">
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-secondary">
                    {item.title}
                  </h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Before/After Slider */}
      <AnimatePresence>
        {activeItem && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            />

            {/* Lightbox Slider Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="fixed inset-x-4 max-w-4xl md:mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl z-50 top-1/2 -translate-y-1/2 border border-slate-100"
            >
              {/* Top Header */}
              <div className="p-5 md:p-6 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest block">
                    {activeItem.category} Case Study
                  </span>
                  <h3 className="text-lg md:text-xl font-display font-bold text-secondary leading-snug">
                    {activeItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveItem(null)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-600 p-2 rounded-full cursor-pointer transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Slider body */}
              <div className="p-6 md:p-8 bg-slate-50 flex justify-center items-center">
                <div className="w-full max-w-2xl">
                  <BeforeAfterSlider
                    beforeImage={activeItem.beforeUrl}
                    afterImage={activeItem.afterUrl}
                    beforeLabel="Before Treatment"
                    afterLabel="After Treatment"
                    aspectRatio="aspect-[4/3]"
                  />
                </div>
              </div>

              {/* Bottom Details explanation */}
              <div className="p-5 md:p-6 bg-white border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs md:text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Sparkles size={16} className="text-primary shrink-0" />
                  <span>Clinical outcome achieved under supervision of our chief orthodontist.</span>
                </div>
                <span className="font-semibold text-slate-400 uppercase tracking-widest text-[10px] sm:text-right shrink-0">
                  © SmileCare Dental Clinic
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BeforeAfterGallery;
