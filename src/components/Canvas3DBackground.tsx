import { useRef, useEffect } from 'react';

export const Canvas3DBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start muted for browser autoplay compliance
    video.muted = true;
    video.play().catch(() => {
      // Playback fallback
    });

    // Unmute & play with sound on first user gesture
    const handleFirstUserInteraction = () => {
      if (video) {
        video.muted = false;
        video.play().catch(() => {
          video.muted = true;
          video.play();
        });
      }
    };

    window.addEventListener('click', handleFirstUserInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstUserInteraction, { once: true });
    window.addEventListener('pointerdown', handleFirstUserInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
      window.removeEventListener('pointerdown', handleFirstUserInteraction);
    };
  }, []);

  return (
    <>
      {/* 1. SEAMLESS EDGE-TO-EDGE VIDEO BACKGROUND (public/assets/zonex-video.mp4) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        className="fixed inset-0 w-full h-full object-cover -z-20 pointer-events-none"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -2,
          pointerEvents: 'none',
        }}
      >
        <source src="/assets/zonex-video.mp4" type="video/mp4" />
        <source src="./assets/zonex-video.mp4" type="video/mp4" />
      </video>

      {/* 2. CINEMATIC DARK VIGNETTE OVERLAY (-z-10 / z-index: -1) */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'radial-gradient(circle at center, rgba(3, 5, 10, 0.45) 0%, rgba(2, 4, 8, 0.85) 100%)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
    </>
  );
};
