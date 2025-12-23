import React from 'react';
import { Twitter, Linkedin, Github, Send, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 pt-32 pb-10 border-t border-white/10 text-slate-400 text-sm relative overflow-hidden">
      
      {/* Giant Watermark SVG - Fits perfectly without cutoff */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none opacity-[0.03] leading-none overflow-hidden z-0">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1800 350" 
          preserveAspectRatio="xMidYMax slice"
          className="w-full"
        >
          <text 
            x="50%" 
            y="55%" 
            dominantBaseline="middle"
            textAnchor="middle" 
            fill="white" 
            className="font-bold tracking-tighter text-[280px] lg:text-[320px]" 
            style={{ fontFamily: 'Figtree, sans-serif' }}
          >
            PLACEHOLDER
          </text>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 rounded-md bg-neon flex items-center justify-center group-hover:rotate-12 transition-transform">
                <div className="w-3 h-3 bg-navy-950 rounded-sm"></div>
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">
                Placeholder<span className="text-neon">Labs</span>
              </span>
            </a>
            <p className="leading-relaxed max-w-xs">
              Crafting digital experiences that merge art, technology, and performance for the brands of tomorrow.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/5 hover:bg-neon hover:text-navy-950 hover:border-neon transition-all duration-300 group"
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Our Work', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="hover:text-neon transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-neon rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
           <div>
            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'Mobile Apps', 'Cloud Architecture', 'AI Integration', 'UI/UX Design'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-neon transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-neon rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Stay Updated</h4>
            <p className="mb-4 text-xs leading-relaxed">
              Subscribe to our newsletter for the latest tech trends and company updates. No spam, ever.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="email@domain.com" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-neon text-white transition-colors placeholder:text-slate-600"
              />
              <button className="bg-neon text-navy-950 px-4 py-3 rounded-lg hover:bg-white transition-colors font-bold flex items-center justify-center gap-2 group">
                Subscribe <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 Placeholder Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <button 
              onClick={scrollToTop}
              className="ml-4 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-neon hover:text-navy-950 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;