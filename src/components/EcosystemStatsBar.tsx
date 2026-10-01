import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Globe, Shield } from 'lucide-react';
import { soundManager } from '../utils/sound';

export const EcosystemStatsBar: React.FC = () => {
  const stats = [
    {
      icon: DollarSign,
      label: 'Revenue Scaled',
      value: '$10M+',
      color: 'text-[#00D2FF]',
    },
    {
      icon: Users,
      label: 'Academy Members',
      value: '5,000+',
      color: 'text-[#FFB800]',
    },
    {
      icon: Globe,
      label: 'Global Reach',
      value: '18+ Countries',
      color: 'text-[#00D2FF]',
    },
    {
      icon: Shield,
      label: 'Satisfaction Rate',
      value: '99.8%',
      color: 'text-[#FFB800]',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full max-w-lg mx-auto my-6 px-4 z-10"
    >
      <div className="glass-panel rounded-2xl p-4 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => soundManager.playHoverSound()}
                className="flex flex-col items-center p-2 rounded-xl hover:bg-white/[0.04] transition-colors cursor-default"
              >
                <div className="flex items-center gap-1 mb-1">
                  <Icon className={`w-3.5 h-3.5 ${stat.color}`} />
                  <span className="font-orbitron text-base sm:text-lg font-black text-white tracking-wide">
                    {stat.value}
                  </span>
                </div>
                <span className="text-[11px] font-jakarta text-slate-400 font-medium">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
