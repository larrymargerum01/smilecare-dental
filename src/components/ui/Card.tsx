"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  variant?: "default" | "glass" | "bordered" | "flat";
  hoverEffect?: "lift" | "glow" | "none";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className = "",
      variant = "default",
      hoverEffect = "lift",
      ...props
    },
    ref
  ) => {
    const baseStyles = "rounded-3xl p-6 md:p-8 transition-all duration-500 overflow-hidden";

    const variants = {
      default: "bg-slate-50/50 border border-slate-100/80 shadow-sm",
      glass: "glass-card shadow-md shadow-slate-100/10",
      bordered: "border-2 border-slate-100 bg-white",
      flat: "bg-slate-100/50",
    };

    const hovers = {
      lift: "hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-500/20",
      glow: "hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:border-primary/30",
      none: "",
    };

    return (
      <motion.div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${hovers[hoverEffect]} ${className}`}
        whileHover={hoverEffect !== "none" ? { scale: 1.01 } : undefined}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
export default Card;
