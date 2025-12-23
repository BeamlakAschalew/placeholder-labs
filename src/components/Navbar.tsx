import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-navy-950/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group relative z-10">
          <div className="w-8 h-8 rounded-md border border-neon bg-neon/10 flex items-center justify-center group-hover:box-glow transition-all duration-300 overflow-hidden">
             <div className="w-3 h-3 bg-neon rounded-sm group-hover:rotate-45 transition-transform duration-300"></div>
          </div>
          <span className="font-bold text-xl tracking-tight text-white group-hover:animate-pulse">
            <span className="inline-block group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform duration-100">Placeholder</span>
            <span className="text-neon inline-block group-hover:-translate-x-[1px] group-hover:translate-y-[1px] transition-transform duration-100">Labs</span>
          </span>
        </a>

        {/* Desktop Links - Relaxed Layout */}
        <div className="hidden md:flex items-center gap-8 relative z-10">
          <div className="flex items-center gap-8 mr-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="relative z-10">{link.name}</span>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-neon shadow-[0_0_8px_#00F0FF]"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '100%' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="px-6 py-2.5 bg-neon text-navy-950 text-sm font-bold rounded-full hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center gap-2 group overflow-hidden relative"
          >
            <span className="relative z-10 flex items-center gap-2">Book a Demo <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1s_infinite]" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-200 hover:text-neon transition-colors relative z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[1px] bg-white/10 w-full">
        <motion.div 
          className="h-full bg-neon box-glow"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-navy-950/95 backdrop-blur-xl border-b border-white/10 md:hidden p-6 flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-200 hover:text-neon pl-4 border-l-2 border-transparent hover:border-neon transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 w-full py-3 bg-neon text-navy-950 text-center font-bold rounded-md hover:bg-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;