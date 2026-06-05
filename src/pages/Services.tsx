/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SERVICES } from '../data/projects';
import { Link } from 'react-router-dom';
import { ArrowRight, Layout, Compass, Trees, Check } from 'lucide-react';

export default function Services() {
  const serviceIcons = [Layout, Compass, Trees];

  return (
    <div id="services-page" className="bg-brand-black text-brand-warm min-h-screen pt-24 select-none">
      
      {/* 1. MINIMAL COVER BANNER */}
      <section className="pt-24 pb-16 border-b border-white/5 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 geo-grid-dot opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs tracking-[0.25em] uppercase text-brand-gold font-sans font-semibold mb-4 block">
              Core Expertise
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-brand-white mb-6 font-medium">
              Services
            </h1>
            <p className="text-[#888888] font-sans text-sm md:text-base tracking-wide max-w-xl leading-relaxed">
              We operate across Scales. We provide structural consulting, bespoke interior carpentry design, and massive mixed-use urban masterplanning — all grounded in Nusantara micro-thermodynamics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES LISTINGS GRID */}
      <section id="services-listings" className="py-20 bg-[#090909] px-6 md:px-12 select-text">
        <div className="max-w-7xl mx-auto space-y-16">
          {SERVICES.map((srv, idx) => {
            const IconComponent = serviceIcons[idx % serviceIcons.length];
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-16 border-b border-white/5 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Structural text column (7 cols) */}
                <div className={`col-span-1 lg:col-span-7 ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="font-mono text-sm text-brand-gold bg-brand-gold/10 px-3 py-1 border border-brand-gold/20 font-bold">
                      {srv.number}
                    </span>
                    <IconComponent className="w-5 h-5 text-brand-gold" />
                  </div>
                  
                  <h2 className="font-serif text-3xl md:text-4xl text-brand-white mb-6">
                    {srv.title}
                  </h2>
                  
                  <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-8">
                    {srv.description}
                  </p>

                  {/* Bulleted feature sheets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {srv.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-2 text-xs text-[#BBBBBB] select-none">
                        <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative image/backdrop container representing architectural depth (5 cols) */}
                <div className={`col-span-1 lg:col-span-5 ${!isEven ? 'lg:order-1' : ''} relative select-none`}>
                  <div className="aspect-[4/3] bg-[#0C0C0C] border border-white/5 flex items-center justify-center p-8 group overflow-hidden">
                    {/* Decorative subtle wireframe grid drawing */}
                    <div className="absolute inset-0 geo-grid-dot opacity-10" />
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="text-center relative z-10 w-full h-full flex flex-col justify-center items-center p-6 border border-brand-gold/10 hover:border-brand-gold/40 transition-colors"
                    >
                      <IconComponent className="w-12 h-12 text-brand-gold/30 mb-4 group-hover:text-brand-gold/80 transition-colors duration-400" />
                      <p className="font-serif text-brand-white text-lg italic tracking-wide group-hover:text-brand-gold transition-colors">
                        PT. VASTUKARYA — Nusantara {srv.title.split(' ')[0]}
                      </p>
                      <p className="font-mono text-[9px] tracking-widest text-[#555555] uppercase mt-2">
                        SURABAYA HQ — GRADE 1 REGISTERED
                      </p>
                    </motion.div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. CALL TO CONVENE ACTION */}
      <section id="services-cta" className="py-24 bg-brand-black text-center relative select-none">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-white mb-6">
            Ready to commission a project?
          </h2>
          <p className="text-[#888888] font-sans text-sm max-w-lg mx-auto mb-10 leading-relaxed">
            Connect with our Surabaya studio today to request structural compliance reviews, landscape masterplanning, or custom design brochures.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-brand-gold text-brand-black text-xs font-sans tracking-widest uppercase font-bold transition-all hover:bg-brand-white focus:ring-1 focus:ring-brand-gold"
          >
            <span>Initiate Inquiry Brief</span>
            <ArrowRight className="w-4 h-4 text-brand-black" />
          </Link>
        </div>
      </section>

    </div>
  );
}
