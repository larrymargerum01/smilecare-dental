"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  animateIcon?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "right",
      animateIcon = true,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden cursor-pointer select-none";

    const variants = {
      primary:
        "bg-primary text-white hover:bg-blue-700 shadow-md shadow-blue-500/10 focus:ring-blue-500",
      secondary:
        "bg-secondary text-white hover:bg-slate-800 shadow-md shadow-slate-900/10 focus:ring-slate-900",
      accent:
        "bg-accent text-secondary hover:bg-sky-300 shadow-md shadow-sky-400/10 focus:ring-sky-400",
      outline:
        "border border-slate-200 bg-transparent text-secondary hover:bg-slate-50 hover:border-slate-300 focus:ring-slate-500",
      ghost:
        "bg-transparent text-secondary hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-500",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {/* Shimmer light overlay */}
        {variant !== "ghost" && (
          <span className="absolute inset-0 w-[30%] h-full bg-white/20 transform skew-x-[-25deg] -left-[40%] group-hover:animate-shine" />
        )}

        {Icon && iconPosition === "left" && (
          <motion.span
            className="mr-2"
            animate={animateIcon ? { x: [0, -2, 0] } : {}}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <Icon size={size === "sm" ? 16 : size === "md" ? 18 : 22} />
          </motion.span>
        )}

        <span className="relative z-10">{children}</span>

        {Icon && iconPosition === "right" && (
          <motion.span
            className="ml-2"
            animate={animateIcon ? { x: [0, 3, 0] } : {}}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <Icon size={size === "sm" ? 16 : size === "md" ? 18 : 22} />
          </motion.span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
