import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TrustedBy from './components/TrustedBy';
import Work from './components/Work';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    
    // Apply overflow-x-hidden to body to prevent horizontal scrollbars
    // while allowing position: sticky to work correctly within the app
    document.body.classList.add('overflow-x-hidden');
    
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.body.classList.remove('overflow-x-hidden');
    };
  }, []);

  return (
    <div className="relative bg-navy-950 min-h-screen text-slate-100 font-sans selection:bg-neon selection:text-navy-950">
      
      {/* Global Noise Texture */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Mouse Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(64, 196, 255, 0.15), transparent 80%)`
        }}
      />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <TrustedBy />
        <Work />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;