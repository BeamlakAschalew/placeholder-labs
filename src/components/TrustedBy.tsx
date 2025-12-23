import React from 'react';

// Simple geometric SVG logos
const Logos = [
  { name: "Vertex", path: "M12 2L2 22h20L12 2z" }, // Triangle
  { name: "Nebula", path: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6z" }, // Donut
  { name: "Horizon", path: "M2 12h20M2 8h20M2 16h20" }, // Lines
  { name: "Pinnacle", path: "M12 2l-5 9h10l-5-9zm-7 13l-3 7h6l-3-7zm14 0l-3 7h6l-3-7z" }, // Mountains
  { name: "Apex", path: "M12 2L2 12h5v10h10V12h5L12 2z" }, // Arrow Up
  { name: "Zenith", path: "M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5z" }, // Star
  { name: "Quantum", path: "M4 4h16v16H4z M8 8h8v8H8z" }, // Square in square
  { name: "Cipher", path: "M2 12a10 10 0 0 1 10-10v20a10 10 0 0 1-10-10z" }, // Semi circle
];

interface LogoItemProps {
  logo: typeof Logos[0];
  idx: number;
}

const LogoItem: React.FC<LogoItemProps> = ({ logo, idx }) => (
  <div 
    className="flex items-center gap-3 group/logo cursor-default opacity-40 hover:opacity-100 transition-opacity duration-300"
  >
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="w-8 h-8 text-white group-hover/logo:text-neon group-hover/logo:drop-shadow-[0_0_8px_rgba(221,255,0,0.8)] transition-all"
    >
      <path d={logo.path} />
    </svg>
    <span className="text-xl font-bold font-mono text-white uppercase tracking-tighter hidden md:block">
      {logo.name}
    </span>
  </div>
);

const TrustedBy: React.FC = () => {
  return (
    <section className="py-16 bg-navy-950 overflow-hidden border-y border-white/5 relative z-20">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h3 className="text-sm font-mono font-bold text-slate-500 uppercase tracking-widest">
          Trusted By
        </h3>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-navy-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-navy-950 to-transparent z-10" />

        {/* Infinite Scroll Wrapper 1 */}
        <div className="animate-marquee whitespace-nowrap flex items-center gap-20 py-4 min-w-full shrink-0 pr-20">
          {[...Logos, ...Logos].map((logo, idx) => (
            <LogoItem key={`1-${idx}`} logo={logo} idx={idx} />
          ))}
        </div>
        
        {/* Infinite Scroll Wrapper 2 (Duplicate) */}
        <div className="animate-marquee whitespace-nowrap flex items-center gap-20 py-4 min-w-full shrink-0 pr-20">
          {[...Logos, ...Logos].map((logo, idx) => (
            <LogoItem key={`2-${idx}`} logo={logo} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;