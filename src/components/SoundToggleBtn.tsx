import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundManager } from '../utils/sound';

export const SoundToggleBtn: React.FC = () => {
  // Starts UNMUTED by default on desktop & mobile!
  const [muted, setMuted] = useState<boolean>(false);

  useEffect(() => {
    // Attempt unmuted setup immediately
    soundManager.setMuted(false);

    const unlockAudioAndVideo = () => {
      // Unmute video
      const bgVideo = document.querySelector('video') as HTMLVideoElement | null;
      if (bgVideo) {
        bgVideo.muted = false;
        bgVideo.play().catch(() => {
          // If browser restricts unmuted video, keep video playing and wait for button tap
        });
      }
      setMuted(false);
      soundManager.setMuted(false);
    };

    // Automatically unlock on first user gesture (touch, click, tap)
    const handleGesture = () => {
      unlockAudioAndVideo();
    };

    window.addEventListener('touchstart', handleGesture, { once: true });
    window.addEventListener('click', handleGesture, { once: true });
    window.addEventListener('pointerdown', handleGesture, { once: true });

    return () => {
      window.removeEventListener('touchstart', handleGesture);
      window.removeEventListener('click', handleGesture);
      window.removeEventListener('pointerdown', handleGesture);
    };
  }, []);

  const handleToggle = () => {
    const nextMutedState = !muted;
    setMuted(nextMutedState);
    soundManager.setMuted(nextMutedState);

    // Toggle background video sound synchronously
    const bgVideo = document.querySelector('video') as HTMLVideoElement | null;
    if (bgVideo) {
      bgVideo.muted = nextMutedState;
      if (!nextMutedState) {
        bgVideo.play().catch(() => {
          // Fallback
        });
      }
    }
  };

  return (
    <button
      onClick={handleToggle}
      title={muted ? 'Unmute Audio & Video' : 'Mute Audio & Video'}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3.5 py-2 rounded-full glass-card border border-white/20 text-slate-200 hover:text-white hover:border-[#00D2FF]/60 hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] transition-all duration-300 group cursor-pointer select-none gpu-accelerated"
    >
      <div className="relative flex items-center justify-center">
        {muted ? (
          <VolumeX className="w-4 h-4 text-slate-400 group-hover:text-red-400 transition-colors" />
        ) : (
          <div className="flex items-center gap-1.5">
            <Volume2 className="w-4 h-4 text-[#00D2FF] animate-pulse" />
            <span className="flex gap-0.5 h-3 items-end">
              <span className="w-0.5 h-full bg-[#00D2FF] animate-pulse" style={{ animationDelay: '0ms' }}></span>
              <span className="w-0.5 h-2/3 bg-[#FFB800] animate-pulse" style={{ animationDelay: '150ms' }}></span>
              <span className="w-0.5 h-full bg-[#00D2FF] animate-pulse" style={{ animationDelay: '300ms' }}></span>
            </span>
          </div>
        )}
      </div>

      <span className="font-space font-bold text-[10px] tracking-widest uppercase">
        {muted ? (
          <span className="text-slate-400 group-hover:text-slate-200">MUTED</span>
        ) : (
          <span className="text-[#00D2FF] font-extrabold drop-shadow-[0_0_8px_rgba(0,210,255,0.5)]">AUDIO ON</span>
        )}
      </span>
    </button>
  );
};
