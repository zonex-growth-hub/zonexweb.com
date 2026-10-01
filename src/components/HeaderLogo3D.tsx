import React from 'react';
import { motion } from 'framer-motion';
import { soundManager } from '../utils/sound';
import { ShieldCheck } from 'lucide-react';
import logoImg from '../assets/logo.png';

export const HeaderLogo3D: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center text-center pt-2 sm:pt-4 pb-2 px-4 max-w-md mx-auto z-10 select-none gpu-accelerated"
    >
      {/* Sleek Minimal Status Badge */}
      <div
        onMouseEnter={() => soundManager.playHoverSound()}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-white/10 text-[11px] font-space tracking-wider uppercase text-slate-300 shadow-[0_0_15px_rgba(0,210,255,0.15)] mb-3 cursor-default"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D2FF]"></span>
        </span>
        <span className="text-slate-200 font-semibold tracking-widest text-[10px]">ZONEX CORE</span>
        <span className="text-slate-600">•</span>
        <span className="flex items-center gap-1 text-[#FFB800] text-[10px] font-bold">
          <ShieldCheck className="w-3 h-3 text-[#FFB800]" />
          OFFICIAL GATEWAY
        </span>
      </div>

      {/* Floating 3D Glowing Circular Container with Dual Halo (Gold Left, Cyan Right) */}
      <div
        className="relative group mb-3 cursor-pointer"
        onMouseEnter={() => soundManager.playHoverSound()}
      >
        {/* Dual Neon-Ring Halo (Gold on Left, Cyan on Right) */}
        <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#FFB800] via-[#FFFFFF] to-[#00D2FF] opacity-40 blur-lg group-hover:opacity-75 group-hover:blur-xl transition-all duration-500" />

        {/* Outer Halo Counter-Rotating Rings */}
        <div className="absolute -inset-2 rounded-full p-[2px] bg-gradient-to-r from-[#FFB800] via-transparent to-[#00D2FF] animate-spin-slow opacity-90" />
        <div className="absolute -inset-1 rounded-full p-[1.5px] bg-gradient-to-l from-[#00D2FF] via-transparent to-[#FFB800] animate-spin-reverse-slow opacity-75" />

        {/* Single Outer Glowing Circular Border & Clean Image Wrapper */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden flex items-center justify-center bg-transparent border border-white/20 group-hover:border-white/50 shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300">
          {/* Logo Image with object-cover & scale(1.28) zoom to hide inner blue line */}
          <img
            src={logoImg}
            alt="ZONEX Logo"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/logo.png';
            }}
            className="w-full h-full object-cover object-center scale-[1.28] transition-transform duration-300 group-hover:scale-[1.34]"
          />
        </div>
      </div>

      {/* Brand Title: ZONEX */}
      <h1 className="font-orbitron font-black text-3xl sm:text-5xl tracking-[0.2em] text-chrome-zonex uppercase drop-shadow-[0_4px_20px_rgba(0,210,255,0.35)] my-1">
        ZONEX
      </h1>

      {/* Subtitle */}
      <p className="font-space text-xs sm:text-sm text-slate-300 font-medium tracking-wider flex items-center justify-center gap-1.5">
        <span>CHOOSE YOUR GATEWAY</span>
        <span className="text-[#00D2FF] font-bold">|</span>
        <span className="text-slate-400 font-normal">OFFICIAL ECOSYSTEM</span>
      </p>
    </motion.div>
  );
};
