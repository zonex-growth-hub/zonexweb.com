import { motion } from 'framer-motion';
import { Mail, Globe, AtSign } from 'lucide-react';
import { soundManager } from '../utils/sound';

export const FooterSocials: React.FC = () => {
  const socials = [
    {
      name: 'Instagram',
      icon: (props: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      url: 'https://www.instagram.com/zonexgrowth_agency.in',
      hoverGlow: 'hover:text-[#E4405F] hover:border-[#E4405F]/50 hover:shadow-[0_0_15px_rgba(228,64,95,0.4)]',
    },
    {
      name: 'WhatsApp',
      icon: (props: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </svg>
      ),
      url: 'https://wa.me/917019371818',
      hoverGlow: 'hover:text-[#25D366] hover:border-[#25D366]/50 hover:shadow-[0_0_15px_rgba(37,211,102,0.4)]',
    },
    {
      name: 'Primary Email',
      icon: (props: { className?: string }) => <Mail className={props.className} />,
      url: 'mailto:zonexacademy1@zonex-academy.com',
      hoverGlow: 'hover:text-[#00D2FF] hover:border-[#00D2FF]/50 hover:shadow-[0_0_15px_rgba(0,210,255,0.4)]',
    },
    {
      name: 'Secondary Email',
      icon: (props: { className?: string }) => <AtSign className={props.className} />,
      url: 'mailto:zonexacdemy@gmail.com',
      hoverGlow: 'hover:text-[#FFB800] hover:border-[#FFB800]/50 hover:shadow-[0_0_15px_rgba(255,184,0,0.4)]',
    },
    {
      name: 'Website',
      icon: (props: { className?: string }) => <Globe className={props.className} />,
      url: 'https://zonexgrowth-agency.in',
      hoverGlow: 'hover:text-[#00D2FF] hover:border-[#00D2FF]/50 hover:shadow-[0_0_15px_rgba(0,210,255,0.4)]',
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full max-w-md mx-auto pt-2 pb-2 px-4 flex flex-col items-center gap-3 z-10 select-none gpu-accelerated"
    >
      {/* Social & Contact Circular Glass Buttons Row */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
        {socials.map((social, idx) => {
          const Icon = social.icon;
          return (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundManager.playHoverSound()}
              onClick={() => soundManager.playClickSound()}
              title={social.name}
              className={`w-10 h-10 rounded-full glass-card border border-white/15 flex items-center justify-center text-slate-300 transition-all duration-300 ${social.hoverGlow} hover:scale-110`}
            >
              <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </a>
          );
        })}
      </div>

      {/* Footer Copyright Text */}
      <div className="text-center pt-1">
        <p className="font-orbitron text-[10px] sm:text-[11px] font-medium tracking-[0.15em] text-slate-400 uppercase">
          © 2026 ZONEX ECOSYSTEM <span className="text-[#FFB800]">•</span> ALL RIGHTS RESERVED
        </p>
      </div>
    </motion.footer>
  );
};
