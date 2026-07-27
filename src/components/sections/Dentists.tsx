"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { dentistsList } from "../../data/dentalData";
import Card from "../ui/Card";

export const Dentists: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="dentists" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block">
            Our Specialists
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary tracking-tight">
            Meet Our World-Class Clinicians
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            Our board-certified dentists are leaders in cosmetic restoration, surgical implantology, and orthodontics, committed to painless, patient-centric care.
          </p>
        </div>

        {/* Dentists Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {dentistsList.map((dentist) => (
            <motion.div key={dentist.id} variants={cardVariants}>
              <Card
                variant="bordered"
                hoverEffect="lift"
                className="flex flex-col h-full bg-white border border-slate-100 rounded-3xl p-5 hover:border-blue-500/20"
              >
                {/* Dentist Image container with Hover Overlay */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 group">
                  <Image
                    src={dentist.photoUrl}
                    alt={dentist.name}
                    fill
                    sizes="(max-w-7xl) 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    {/* Social profiles */}
                    <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {dentist.social.twitter && (
                        <a
                          href={dentist.social.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center backdrop-blur-md transition-colors"
                        >
                          <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                      )}
                      {dentist.social.linkedin && (
                        <a
                          href={dentist.social.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center backdrop-blur-md transition-colors"
                        >
                          <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                      {dentist.social.instagram && (
                        <a
                          href={dentist.social.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center backdrop-blur-md transition-colors"
                        >
                          <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Dentist Details */}
                <div className="flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="text-primary font-bold text-xs uppercase tracking-wider block">
                        {dentist.specialization}
                      </span>
                      <h3 className="text-xl font-bold text-secondary">
                        {dentist.name}
                      </h3>
                    </div>

                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal">
                      {dentist.bio}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-slate-50 text-slate-600 text-xs md:text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <GraduationCap size={16} className="text-primary shrink-0" />
                      <span>{dentist.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={16} className="text-primary shrink-0" />
                      <span>{dentist.experience}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Dentists;
