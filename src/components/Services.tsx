import React from 'react';
import { Code, Cloud, Globe, Smartphone, Database, Cpu, ArrowRight } from 'lucide-react';
import SectionDivider from './ui/SectionDivider';
import { motion, Variants } from 'framer-motion';

const services = [
  {
    title: "Custom Applications",
    icon: <Code className="w-6 h-6" />,
    desc: "Bespoke software tailored to your specific business logic and scale.",
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    desc: "Scalable infrastructure design, CI/CD pipelines, and AWS/Azure management.",
  },
  {
    title: "API Integration",
    icon: <Globe className="w-6 h-6" />,
    desc: "Seamless connections between your services and third-party platforms.",
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    desc: "Native and cross-platform mobile experiences using React Native.",
  },
  {
    title: "Data Engineering",
    icon: <Database className="w-6 h-6" />,
    desc: "High-performance pipelines to process, store, and analyze your data.",
  },
  {
    title: "AI Solutions",
    icon: <Cpu className="w-6 h-6" />,
    desc: "Integrating LLMs and machine learning models into everyday workflows.",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-32 bg-navy-950 text-slate-100 overflow-hidden">
      <SectionDivider position="top" fill="#0A0E14" />
      
      {/* Giant Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none select-none overflow-hidden flex justify-center">
        <span className="text-[20vw] font-bold leading-none tracking-tighter whitespace-nowrap text-white opacity-[0.02]">
          CAPABILITIES
        </span>
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-neon text-sm font-mono tracking-widest uppercase mb-2 block">Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-cyan-400">Excellence</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We deliver end-to-end technical solutions designed for growth, performance, and reliability.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              variants={item}
              key={index}
              className="group relative p-8 rounded-3xl bg-navy-900/40 border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)]"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 border border-transparent group-hover:border-neon/30 rounded-3xl transition-colors duration-500" />
              
              {/* Inner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-navy-800 rounded-2xl border border-white/10 flex items-center justify-center mb-8 text-slate-300 group-hover:text-navy-950 group-hover:bg-neon group-hover:scale-110 transition-all duration-500 shadow-lg">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 font-sans text-slate-100 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-slate-300 transition-colors">
                  {service.desc}
                </p>

                <div className="flex items-center text-neon text-sm font-bold uppercase tracking-wide opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;