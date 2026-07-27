"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className="border border-slate-100 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-slate-200"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="flex justify-between items-center w-full px-6 py-5 text-left font-semibold text-slate-800 transition-colors hover:bg-slate-50 cursor-pointer"
            >
              <span className="text-base md:text-lg">{item.title}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-slate-400 bg-slate-100 p-1.5 rounded-full"
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-6 pb-5 text-slate-600 text-sm md:text-base border-t border-slate-50 pt-3 leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
