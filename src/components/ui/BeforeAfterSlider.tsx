"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  aspectRatio = "aspect-[4/3] md:aspect-[16/10]",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-3xl shadow-lg border border-slate-100 ${aspectRatio} select-none group cursor-ew-resize`}
      onMouseDown={(e) => {
        e.preventDefault();
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={() => {
        setIsDragging(true);
      }}
    >
      {/* After Image (Right Side / Background) */}
      <Image
        src={afterImage}
        alt="After Treatment"
        fill
        sizes="(max-w-7xl) 100vw"
        priority
        className="object-cover pointer-events-none"
      />
      <div className="absolute right-4 bottom-4 bg-slate-900/70 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-xs pointer-events-none tracking-wide z-10">
        {afterLabel}
      </div>

      {/* Before Image (Left Side / Foreground with Clip Path) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt="Before Treatment"
          fill
          sizes="(max-w-7xl) 100vw"
          priority
          className="object-cover pointer-events-none"
        />
        <div className="absolute left-4 bottom-4 bg-primary/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-xs pointer-events-none tracking-wide z-10">
          {beforeLabel}
        </div>
      </div>

      {/* Sliding Bar Divider */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Sliding Button Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-xl border border-slate-200/50 flex items-center justify-center pointer-events-none hover:scale-110 active:scale-95 transition-transform duration-200">
          <div className="flex space-x-1 justify-center items-center">
            {/* Left arrow */}
            <svg
              className="w-3 h-3 text-slate-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {/* Right arrow */}
            <svg
              className="w-3 h-3 text-slate-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Help instruction overlay that fades on hover */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500">
        <span className="bg-white/90 text-slate-800 text-xs font-semibold px-4 py-2 rounded-full shadow-md backdrop-blur-xs tracking-wider opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          DRAG SLIDER
        </span>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
