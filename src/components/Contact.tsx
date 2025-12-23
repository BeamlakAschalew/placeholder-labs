import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-32 bg-navy-950 overflow-hidden">
      {/* Giant Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none select-none overflow-hidden flex justify-center z-0">
        <span className="text-[20vw] font-bold leading-none tracking-tighter whitespace-nowrap text-white opacity-[0.02]">
          CONNECT
        </span>
      </div>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon/5 rounded-full blur-[100px] animate-float" />
         <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[80px] animate-float" style={{animationDelay: '1s'}} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <span className="text-neon font-mono text-sm tracking-wider uppercase mb-4 block">Get in touch</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Let's build something <span className="font-cursive text-neon text-5xl md:text-7xl relative inline-block transform -rotate-2">extraordinary</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-md">
              Ready to transform your digital presence? We are currently accepting new partnerships for Q3 2025.
            </p>
            
            <div className="space-y-6">
              <a href="tel:+15551234567" className="flex items-center gap-6 text-slate-300 group hover:text-white transition-colors p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon group-hover:scale-110 transition-transform border border-white/5 group-hover:border-neon/50">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Call Us</p>
                  <span className="text-xl font-medium">+1 (555) 123-4567</span>
                </div>
              </a>
              
              <a href="mailto:hello@placeholderlabs.com" className="flex items-center gap-6 text-slate-300 group hover:text-white transition-colors p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all">
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon group-hover:scale-110 transition-transform border border-white/5 group-hover:border-neon/50">
                  <Mail size={20} />
                </div>
                 <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Email Us</p>
                  <span className="text-xl font-medium">hello@placeholderlabs.com</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-neon/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-50" />
            <div className="relative bg-navy-900/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-xs uppercase font-bold text-slate-500 mb-2 group-focus-within:text-neon transition-colors ml-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-navy-950/50 border border-slate-700/50 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon/50 transition-all" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs uppercase font-bold text-slate-500 mb-2 group-focus-within:text-neon transition-colors ml-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-navy-950/50 border border-slate-700/50 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon/50 transition-all" 
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-xs uppercase font-bold text-slate-500 mb-2 group-focus-within:text-neon transition-colors ml-1">Company</label>
                  <input 
                    type="text" 
                    className="w-full bg-navy-950/50 border border-slate-700/50 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon/50 transition-all" 
                    placeholder="Your Company Ltd."
                  />
                </div>
                <div className="group">
                  <label className="block text-xs uppercase font-bold text-slate-500 mb-2 group-focus-within:text-neon transition-colors ml-1">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-navy-950/50 border border-slate-700/50 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon/50 transition-all resize-none" 
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-neon text-navy-950 font-bold py-4 rounded-xl hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(221,255,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-[1.02] flex items-center justify-center gap-2 group"
                >
                  Send Message <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;