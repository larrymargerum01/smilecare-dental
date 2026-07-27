"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

interface ToastProps {
  show: boolean;
  message: string;
  type?: "success" | "error";
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  show,
  message,
  type = "success",
  onClose,
  duration = 5000,
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-2xl border border-slate-800 max-w-sm"
        >
          {type === "success" ? (
            <CheckCircle2 className="text-emerald-400 shrink-0" size={24} />
          ) : (
            <AlertCircle className="text-rose-400 shrink-0" size={24} />
          )}

          <div className="flex-1">
            <p className="text-sm font-medium leading-relaxed">{message}</p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
