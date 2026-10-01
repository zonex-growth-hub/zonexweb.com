import { useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Zap, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/sound';

export const PortalCardAgency: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Smooth 3D Cursor Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 350, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 350, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    soundManager.playHoverSound();
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    soundManager.playAgencySound();

    const rect = cardRef.current?.getBoundingClientRect();
    const originX = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5;
    const originY = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.5;

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { x: originX, y: originY },
      colors: ['#00D2FF', '#38BDF8', '#FFFFFF'],
      ticks: 150,
      gravity: 0.9,
      scalar: 1.0,
    });

    setTimeout(() => {
      window.open('https://zonexgrowth-agency.in', '_blank', 'noopener,noreferrer');
    }, 200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-full mx-auto select-none gpu-accelerated"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative group rounded-2xl p-4 sm:p-5 glass-bento-cyan cursor-pointer transition-all duration-300 overflow-hidden"
      >
        {/* Subtle Outer Neon Cyan Glow */}
        <div className="absolute -inset-0.5 rounded-2xl bg-[#00D2FF] opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 pointer-events-none" />

        {/* Bento Content Layout */}
        <div style={{ transform: 'translateZ(20px)' }} className="relative z-10 flex items-center justify-between gap-3">
          
          {/* Left Side: Icon & Titles */}
          <div className="flex items-center gap-3 sm:gap-4 text-left min-w-0">
            {/* Glowing Icon Badge */}
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-xl bg-[#00D2FF]/30 blur-sm group-hover:blur-md transition-all" />
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#040C1A] border border-[#00D2FF]/40 flex items-center justify-center text-[#00D2FF] shadow-[0_0_15px_rgba(0,210,255,0.3)] group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-[#00D2FF]/20 text-[#00D2FF]" />
              </div>
            </div>

            {/* Texts */}
            <div className="min-w-0 flex flex-col">
              <div className="flex items-center gap-2">
                <h2 className="font-orbitron font-extrabold text-base sm:text-lg text-white group-hover:text-[#00D2FF] transition-colors truncate tracking-wide">
                  ZONEX GROWTH AGENCY
                </h2>
              </div>
              <p className="font-jakarta text-slate-300 text-xs sm:text-sm font-normal truncate mt-0.5">
                Scale & Dominate Your Market
              </p>
            </div>
          </div>

          {/* Right Side: Interactive Action Button */}
          <div className="shrink-0">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 group-hover:border-[#00D2FF]/70 group-hover:bg-[#00D2FF]/20 text-[#00D2FF] font-orbitron font-bold text-xs tracking-wider transition-all shadow-[0_0_10px_rgba(0,210,255,0.15)] group-hover:shadow-[0_0_20px_rgba(0,210,255,0.4)]">
              <span>Launch Agency</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};
