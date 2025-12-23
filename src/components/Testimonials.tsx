import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "Placeholder Labs transformed our legacy backend into a modern, scalable cloud architecture. The speed improvement is undeniable.",
    name: "Elena Rodriguez",
    title: "CTO at FinEdge",
    image: "https://picsum.photos/100/100?random=20"
  },
  {
    text: "Their attention to frontend detail is unmatched. We've seen a 200% increase in user engagement since the redesign.",
    name: "James Carter",
    title: "Product Lead at Aura",
    image: "https://picsum.photos/100/100?random=21"
  },
  {
    text: "Professional, timely, and incredibly skilled. They didn't just write code; they solved complex business problems.",
    name: "Sophia Liu",
    title: "Founder of DataFlow",
    image: "https://picsum.photos/100/100?random=22"
  }
];

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [active]);

  const handleNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-navy-950 relative overflow-hidden">
      {/* Giant Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none select-none overflow-hidden flex justify-center z-0">
        <span className="text-[20vw] font-bold leading-none tracking-tighter whitespace-nowrap text-white opacity-[0.02]">
          STORIES
        </span>
      </div>

       <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="relative bg-navy-900/30 backdrop-blur-xl border border-white/5 p-8 md:p-16 rounded-[2rem] shadow-2xl overflow-hidden">
          {/* Decorative background sheen */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-neon/10 rounded-full blur-[80px]" />
            
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 text-neon opacity-80">
              <Quote size={48} className="fill-current" />
            </div>

            <div className="relative w-full min-h-[250px] flex items-center justify-center">
              <AnimatePresence mode='wait' custom={direction}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute w-full max-w-3xl"
                >
                  <p className="text-xl md:text-3xl font-light text-slate-200 leading-relaxed mb-10">
                    "{testimonials[active].text}"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-neon rounded-full blur opacity-50" />
                      <img 
                        src={testimonials[active].image} 
                        alt={testimonials[active].name} 
                        className="relative w-14 h-14 rounded-full border-2 border-navy-900 object-cover" 
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-white text-lg">{testimonials[active].name}</h4>
                      <p className="text-sm text-neon font-mono uppercase tracking-wide">{testimonials[active].title}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-12">
              <button onClick={handlePrev} className="p-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-neon text-slate-400 hover:text-neon transition-all">
                <ChevronLeft size={20} />
              </button>
               <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      active === i ? 'w-8 bg-neon' : 'w-2 bg-slate-700'
                    }`}
                  />
                ))}
              </div>
              <button onClick={handleNext} className="p-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-neon text-slate-400 hover:text-neon transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;