import { Canvas3DBackground } from './components/Canvas3DBackground';
import { HeaderLogo3D } from './components/HeaderLogo3D';
import { PortalCardAgency } from './components/PortalCardAgency';
import { PortalCardAcademy } from './components/PortalCardAcademy';
import { FooterSocials } from './components/FooterSocials';
import { SoundToggleBtn } from './components/SoundToggleBtn';

export function App() {
  return (
    <div className="relative min-h-screen h-[100dvh] w-full bg-[#03050a] text-slate-100 flex flex-col items-center justify-between overflow-y-auto sm:overflow-hidden select-none gpu-accelerated">
      {/* 1. SEAMLESS EDGE-TO-EDGE VIDEO BACKGROUND & VIGNETTE OVERLAY */}
      <Canvas3DBackground />

      {/* Sci-Fi Sound FX Floating Toggle Button */}
      <SoundToggleBtn />

      {/* 2. PERFECT RESPONSIVE CONTAINER (Max-width: 420px, Centered, Single Viewport Fit) */}
      <main className="relative z-10 w-full max-w-[420px] mx-auto px-4 flex flex-col items-center justify-between h-full py-4 sm:py-6 my-auto">
        
        {/* Top Center Logo & Title: ZONEX */}
        <HeaderLogo3D />

        {/* Center Bento Portals Section */}
        <div className="w-full space-y-3 sm:space-y-4 my-auto py-2">
          {/* Card 1: ZONEX GROWTH AGENCY (Electric Cyan Glow) */}
          <PortalCardAgency />

          {/* Card 2: ZONEX ACADEMY (Radiant Gold Glow) */}
          <PortalCardAcademy />
        </div>

        {/* Footer Connections & Copyright */}
        <FooterSocials />

      </main>
    </div>
  );
}

export default App;
