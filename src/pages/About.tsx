/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TEAM_MEMBERS, VALUES } from '../data/projects';
import { Award, Compass, Star, Feather, CheckCircle } from 'lucide-react';

export default function About() {
  const recognitionPress = [
    { outlet: 'Indonesian Architecture Forum', award: 'Winner — Outstanding Cultural Integration 2024' },
    { outlet: 'Nusantara Sustainable Awards', award: 'Gold Medal — Thermodynamic Façade Engineering 2023' },
    { outlet: 'Surabaya Municipal Review', award: 'Civic Spaces Siting Distinction award 2023' },
    { outlet: 'Design Digest Southeast Asia', award: 'Top 10 Architectural Consultancies to Watch 2025' }
  ];

  return (
    <div id="about-page" className="bg-brand-black text-brand-warm relative select-none">
      
      {/* 1. HERO COVER (Full width with overlay tagline) */}
      <section id="about-hero" className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=90"
            alt="PT. VASTUKARYA Architectural Studio Workspace"
            className="w-full h-full object-cover opacity-45 scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 flex flex-col justify-end h-full pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <span className="text-xs tracking-[0.25em] uppercase text-brand-gold font-sans font-semibold mb-4 block">
              Profile &amp; Ideology
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-brand-white leading-tight tracking-tight">
              Building the Future, One Icon at a Time
            </h1>
          </motion.div>
        </div>
      </section>


      {/* 2. ABOUT BODY (Split layout with local wisdom core line) */}
      <section id="about-story" className="py-24 md:py-32 select-text">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left large studio graphic (5 columns) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="aspect-[4/5] bg-neutral-900 border border-white/5 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern architectural modeling process by VASTUKARYA"
                  className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Right detailed bio (7 columns) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-brand-white leading-tight mb-8">
                PT. Vastukarya Konstruksi Nusantara
              </h2>
              
              <div className="space-y-6 text-[#BBBBBB] text-sm md:text-base font-sans leading-relaxed">
                <p>
                  Established in Surabaya, Indonesia, VASTUKARYA was born out of a desire to reconcile traditional tropical wisdom with contemporary computing architecture. As Indonesia experiences record urbanization, we see an historic opportunity to construct monuments that speak to our ancestors' knowledge of ventilation, sun-shading, and materials, while achieving structural wonders of modern times.
                </p>
                
                {/* Highlighted Core Ethos Block */}
                <div className="p-6 bg-[#0E0E0E] border-l-2 border-brand-gold my-8">
                  <p className="font-serif text-brand-white text-md italic leading-relaxed">
                    "VASTUKARYA combines modern technology with local wisdom, supporting cross-cultural collaboration to create relevant and adaptive architectural works."
                  </p>
                </div>

                <p>
                  Our workshop in West Surabaya engages a highly collaborative setting combining registered architects (IAI), interior planners, spatial simulations analysts, and local craftsmen. We believe that true technical luxury is found in custom solutions: raw hand-laid materials aged in natural climates, passive corridors replacing heavy mechanisation, and layouts responding to light.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      
      {/* 3. CORE VALUES SECTION */}
      <section id="about-values" className="py-24 bg-[#090909] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-2xl mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-brand-gold font-sans font-semibold mb-3 block">
              Core Principles
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-white leading-normal">
              How We Appreciate Space
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-brand-black border border-white/5 p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="block font-mono text-xs text-brand-gold font-bold mb-6">
                    {val.number}
                  </span>
                  <h3 className="font-serif text-lg text-brand-white mb-4">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#888888] font-sans leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* 4. TEAM DIRECTORY */}
      <section id="about-team" className="py-24 md:py-32 bg-brand-black border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-2xl mb-20">
            <span className="text-xs tracking-[0.25em] uppercase text-brand-gold font-sans font-semibold mb-3 block">
              Leadership
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-white">
              The Designers
            </h2>
            <p className="text-[#888888] text-xs font-sans tracking-wide mt-2">
              Our interdisciplinary studio brings together strategic directors and technological specialists under one unified Nusantara vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="group border border-white/5 bg-[#070707] flex flex-col h-full"
              >
                {/* Perfect square profile photo */}
                <div className="aspect-square bg-neutral-900 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-102"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Details layout */}
                <div className="p-6 flex flex-col justify-between grow">
                  <div>
                    <h3 className="font-serif text-xl text-brand-white font-medium group-hover:text-brand-gold transition-colors mb-1.5">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs text-brand-gold tracking-widest uppercase mb-4">
                      {member.role}
                    </p>
                    <p className="text-xs text-[#888888] font-sans leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* 5. AWARDS & RECOGNITION PRESS STRIP */}
      <section id="awards-recognition" className="py-20 md:py-24 bg-[#050505] border-t border-white/5 select-text">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="border-b border-white/5 pb-10 mb-12 flex items-baseline justify-between select-none">
            <h3 className="font-sans text-xs tracking-[0.25em] uppercase text-brand-gold font-semibold">
              Distinctions &amp; Press
            </h3>
            <span className="font-mono text-xs text-neutral-600">Surabaya — Global Registry</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recognitionPress.map((item, id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: id * 0.08 }}
                className="border-l border-brand-gold/40 pl-6 py-2"
              >
                <div className="flex items-center space-x-2 text-brand-gold mb-2">
                  <Award className="w-4 h-4" />
                  <span className="font-serif text-xs italic text-brand-white">{item.outlet}</span>
                </div>
                <p className="text-xs text-[#888888] font-sans leading-relaxed">
                  {item.award}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
