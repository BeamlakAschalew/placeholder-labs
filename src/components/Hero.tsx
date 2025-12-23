import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, TrendingUp, Users, Globe, Activity, ShieldCheck } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Counter Animation
  const [revenue, setRevenue] = useState(0);
  useEffect(() => {
    const controls = animate(0, 124500, {
      duration: 2,
      onUpdate: value => setRevenue(Math.floor(value)),
      ease: "circOut"
    });
    return controls.stop;
  }, []);

  return (
    <section 
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-navy-950 selection:bg-neon selection:text-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Giant Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none select-none overflow-hidden flex justify-center z-0">
        <span className="text-[20vw] font-bold leading-none tracking-tighter whitespace-nowrap text-white opacity-[0.02]">
          FUTURE
        </span>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] bg-neon/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div 
          className="lg:col-span-7 flex flex-col gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
            Building <br />
            <span className="font-cursive text-neon text-6xl sm:text-7xl lg:text-8xl relative inline-block transform -rotate-2 text-glow">
              Futures
            </span>{" "}
            <br />
            in Tech
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
            We engineer digital experiences that defy expectations. Placeholder Labs bridges the gap between complex backend architecture and stunning frontend design.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#contact"
              className="px-8 py-4 bg-neon text-navy-950 font-bold rounded-full hover:bg-white transition-all duration-300 hover:scale-105 flex items-center gap-2 box-glow"
            >
              Get Started <ArrowRight size={18} />
            </a>
            <button
              className="px-8 py-4 bg-transparent border border-slate-700 text-white font-medium rounded-full hover:border-neon hover:text-neon transition-all duration-300 flex items-center gap-2 group"
            >
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                <Play size={10} className="fill-current" />
              </div>
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Visual Content - Interactive 3D Dashboard */}
        <motion.div 
          className="lg:col-span-5 relative h-[600px] w-full flex items-center justify-center perspective-1000"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Main Analytics Dashboard - Mouse Parallax */}
          <motion.div 
            className="relative w-full max-w-md bg-navy-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden z-10"
            style={{ 
              rotateX, 
              rotateY,
              transformStyle: 'preserve-3d' 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Glass Shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-20" />

            {/* Header */}
            <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-navy-950/50">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-neon/20 rounded-lg">
                  <Activity size={16} className="text-neon" />
                </div>
                <span className="font-bold text-sm text-white">Growth Overview</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              </div>
            </div>
            
            {/* Main Content */}
            <div className="p-6">
              <div className="flex justify-between items-end mb-6">
                 <div>
                   <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Monthly Revenue</p>
                   <h3 className="text-3xl font-bold text-white font-mono">
                     ${revenue.toLocaleString()}
                   </h3>
                 </div>
                 <motion.div 
                   initial={{ scale: 0.8, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   transition={{ delay: 1, type: "spring" }}
                   className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold flex items-center gap-1"
                 >
                    <TrendingUp size={12} />
                    +24.5%
                 </motion.div>
              </div>

              {/* Animated Chart Area */}
              <div className="h-32 w-full relative">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M0,50 L0,35 Q10,40 20,25 T40,20 T60,30 T80,10 L100,5 L100,50 Z"
                    fill="url(#chartGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.path
                    d="M0,35 Q10,40 20,25 T40,20 T60,30 T80,10 L100,5"
                    fill="none"
                    stroke="#00F0FF"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  {/* Data Points */}
                  {[25, 20, 30, 10, 5].map((y, i) => (
                     <motion.circle 
                        key={i}
                        cx={20 * (i + 1)} cy={y} r="2" fill="#0A0E14" stroke="#00F0FF" strokeWidth="1.5"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 + (i * 0.2) }}
                     />
                  ))}
                </svg>
              </div>

              {/* Bottom Metrics */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/5">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase mb-1">Active Users</p>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full bg-slate-700 border border-navy-900 flex items-center justify-center text-[8px] text-white overflow-hidden">
                          <img src={`https://picsum.photos/50/50?random=${i+30}`} alt="User" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-white">4.2k+</span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase mb-1">Server Uptime</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-bold text-white">99.99%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Elements (Ecosystem Nodes) - Parallax Multipliers */}
          
          {/* Global Reach Card */}
          <motion.div 
            className="absolute -right-4 top-20 p-4 bg-navy-800/90 backdrop-blur-md border border-cyan-400/30 rounded-xl shadow-xl z-20 w-40"
            style={{ 
              x: useTransform(mouseX, [-0.5, 0.5], [-20, 20]), 
              y: useTransform(mouseY, [-0.5, 0.5], [-20, 20]),
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-1.5 bg-cyan-400/20 rounded-lg text-cyan-400">
                <Globe size={14} />
              </div>
              <span className="text-xs font-bold text-slate-200">Global</span>
            </div>
            <div className="h-1.5 w-full bg-navy-950 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-cyan-400"
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1.5, delay: 1 }}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[10px] text-slate-500">Regions</span>
              <span className="text-[10px] text-cyan-400">12 Active</span>
            </div>
          </motion.div>

          {/* Security/Trust Card */}
          <motion.div 
            className="absolute -left-8 bottom-32 p-3 bg-navy-800/90 backdrop-blur-md border border-neon/30 rounded-xl shadow-xl flex items-center gap-3 z-20"
            style={{ 
              x: useTransform(mouseX, [-0.5, 0.5], [30, -30]), 
              y: useTransform(mouseY, [-0.5, 0.5], [20, -20]),
            }}
          >
            <div className="p-2 bg-neon/10 rounded-full text-neon border border-neon/20">
              <ShieldCheck size={20} />
            </div>
            <div className="text-xs">
              <div className="text-white font-bold">Secure System</div>
              <div className="text-neon">Verified</div>
            </div>
          </motion.div>

          {/* Users Card */}
          <motion.div 
            className="absolute right-8 -bottom-4 p-3 bg-navy-800/90 backdrop-blur-md border border-purple-500/30 rounded-xl shadow-xl flex items-center gap-3 z-0"
            style={{ 
              x: useTransform(mouseX, [-0.5, 0.5], [-10, 10]), 
              y: useTransform(mouseY, [-0.5, 0.5], [-10, 10]),
            }}
          >
            <div className="flex -space-x-3">
               <div className="w-8 h-8 rounded-full border-2 border-navy-800 bg-slate-700 overflow-hidden">
                 <img src="https://picsum.photos/50/50?random=40" className="w-full h-full object-cover" />
               </div>
               <div className="w-8 h-8 rounded-full border-2 border-navy-800 bg-slate-700 overflow-hidden">
                 <img src="https://picsum.photos/50/50?random=41" className="w-full h-full object-cover" />
               </div>
            </div>
            <div>
              <div className="text-xs font-bold text-white">New Clients</div>
              <div className="text-[10px] text-slate-400">Just joined</div>
            </div>
          </motion.div>

          {/* Connecting Lines (SVG) */}
          <svg className="absolute inset-0 pointer-events-none w-full h-full -z-10 opacity-30">
            <line x1="50%" y1="50%" x2="85%" y2="25%" stroke="#40C4FF" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="15%" y2="65%" stroke="#00F0FF" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="#a855f7" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-neon to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;