"use client";

import React, { useState } from "react";
import { faqsList } from "../../data/dentalData";
import Accordion from "../ui/Accordion";

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Insurance & Payments", "Treatments", "Orthodontics", "General Health"];

  const filteredFaqs = activeCategory === "All"
    ? faqsList
    : faqsList.filter((faq) => faq.category === activeCategory);

  const accordionItems = filteredFaqs.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <section id="faq" className="py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            Can't find the answers you're looking for? Reach out directly to our support desk via our contact portal below.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                activeCategory === category
                  ? "bg-primary border-primary text-white shadow-md shadow-blue-500/10"
                  : "bg-white border-slate-100 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="min-h-[300px]">
          <Accordion items={accordionItems} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
