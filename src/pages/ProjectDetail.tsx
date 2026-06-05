/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Tag, User, Layers } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { useEffect } from 'react';

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find target project
  const project = PROJECTS.find((p) => p.slug === slug);

  // If slug is not found immediately, we can render a beautiful minimalist 404 state
  if (!project) {
    return (
      <div id="project-not-found" className="min-h-screen bg-brand-black flex flex-col justify-center items-center px-6 text-center text-brand-warm select-none">
        <h2 className="font-serif text-3xl md:text-5xl text-brand-white mb-6">
          Case Study Unreported
        </h2>
        <p className="text-neutral-500 font-sans max-w-md mb-8 leading-relaxed">
          The requested architectural ledger reference is unavailable or undergoing digital restructuring.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center space-x-3 px-6 py-2.5 bg-brand-gold text-brand-black text-xs font-sans tracking-widest uppercase font-bold transition-all hover:bg-brand-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return To Portfolio</span>
        </Link>
      </div>
    );
  }

  // Get up to 2 other projects for "More Work" (excluding contemporary slug)
  const remainingProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div id="project-detail-layout" className="bg-brand-black text-brand-warm relative select-none">
      
      {/* 1. HERO BANNER (100vh) - Pure visuals, no overlay text */}
      <section id="project-hero" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.65 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            src={project.heroImage}
            alt={`${project.title} Architectural Hero Exterior`}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Edge shadow gradient at bottom to ease transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
        </div>

        {/* Back navigation action floating overlay */}
        <div className="absolute top-28 left-6 md:left-12 z-20">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 text-xs text-brand-gold hover:text-brand-white uppercase tracking-widest font-mono bg-brand-black/60 backdrop-blur-md px-4 py-2 border border-brand-gold/20"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Works</span>
          </Link>
        </div>
        
        {/* Subtle scroll cue */}
        <div className="absolute bottom-8 right-6 md:right-12 z-10 font-mono text-[10px] tracking-widest uppercase text-brand-gold flex items-center space-x-3 bg-brand-black/20 px-4 py-2 backdrop-blur-[2px]">
          <span>Territory details below</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-6 bg-brand-gold"
          />
        </div>
      </section>


      {/* 2. CHRONOLOGY INFO BAR (Horizontal Specs Block) */}
      <section id="project-info-bar" className="bg-[#0D0D0D] border-b border-white/5 relative z-10 select-text">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center text-left">
            
            {/* Title / Project */}
            <div>
              <p className="text-[10px] tracking-widest uppercase text-brand-gold font-sans font-medium mb-1">
                Project
              </p>
              <h1 className="font-serif text-lg md:text-xl text-brand-white font-medium">
                {project.title}
              </h1>
            </div>

            {/* Client */}
            <div>
              <p className="text-[10px] tracking-widest uppercase text-brand-gold font-sans font-medium mb-1">
                Client
              </p>
              <p className="text-xs text-[#BBBBBB] leading-normal font-sans font-medium">
                {project.client}
              </p>
            </div>

            {/* Location */}
            <div>
              <p className="text-[10px] tracking-widest uppercase text-brand-gold font-sans font-medium mb-1">
                Location
              </p>
              <p className="text-xs text-[#BBBBBB] leading-normal font-sans flex items-center gap-1.5 font-medium">
                <MapPin className="w-3 h-3 text-brand-gold" />
                {project.location}
              </p>
            </div>

            {/* Chronological Year */}
            <div>
              <p className="text-[10px] tracking-widest uppercase text-brand-gold font-sans font-medium mb-1">
                Timeline
              </p>
              <p className="text-xs text-[#BBBBBB] leading-normal font-sans flex items-center gap-1.5 font-medium">
                <Calendar className="w-3 h-3 text-brand-gold" />
                Year {project.year}
              </p>
            </div>

            {/* Category */}
            <div>
              <p className="text-[10px] tracking-widest uppercase text-brand-gold font-sans font-medium mb-1">
                Category
              </p>
              <span className="inline-block border border-brand-gold/30 bg-brand-gold/5 px-2.5 py-0.5 text-[9px] tracking-widest uppercase text-brand-gold font-mono font-bold">
                {project.category}
              </span>
            </div>

          </div>
        </div>
      </section>


      {/* 3. NARRATIVE ARTICLE (Editorial typography & quotes) */}
      <section id="project-story" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 relative z-10 select-text">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Left Column: Big Pull Quote (Full 5 cols) */}
          {project.quote && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 border-l-2 border-brand-gold pl-6 md:pl-8 py-2 relative"
            >
              <span className="font-serif text-brand-gold text-7xl absolute -top-8 -left-4 opacity-15 pointer-events-none">
                “
              </span>
              <p className="font-serif text-brand-white text-2xl md:text-3xl italic leading-relaxed tracking-wide mb-6">
                {project.quote}
              </p>
              <p className="font-sans text-[10px] tracking-widest uppercase text-brand-gold font-semibold">
                VASTUKARYA EXECUTIVE CRITIQUE
              </p>
            </motion.div>
          )}

          {/* Right Column: Detailed Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className={`font-sans text-[#BBBBBB] leading-relaxed text-base space-y-6 lg:col-span-12 ${project.quote ? 'lg:col-span-7' : 'lg:col-span-12'}`}
          >
            <div className="border-b border-white/5 pb-6 mb-6">
              <h3 className="font-serif text-2xl text-brand-white mb-2">Conception &amp; Scope</h3>
              <p className="text-sm italic text-[#888888]">{project.description}</p>
            </div>
            
            {project.details.map((paragraph, index) => (
              <p key={index} className="text-neutral-300">
                {paragraph}
              </p>
            ))}

            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/5 mt-8 text-xs select-none">
              <div>
                <p className="text-brand-gold tracking-widest uppercase mb-2 font-semibold">Structural Sizing</p>
                <p className="text-brand-white font-mono font-medium">{project.size}</p>
              </div>
              <div>
                <p className="text-brand-gold tracking-widest uppercase mb-2 font-semibold font-semibold">Provided Services</p>
                <ul className="space-y-1 text-neutral-400 font-medium list-disc list-inside">
                  {project.services.map((srv) => (
                    <li key={srv}>{srv}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* 4. VISUAL IMAGE GALLERY - ALTERNATING LAYOUT */}
      <section id="project-visuals-gallery" className="py-12 bg-[#050505] space-y-12 md:space-y-16">
        
        {/* Full Bleed Cinematique 1st Image */}
        {project.gallery[0] && (
          <div className="w-full h-[65vh] md:h-[80vh] overflow-hidden relative">
            <motion.img
              initial={{ scale: 1.05, opacity: 0.8 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              src={project.gallery[0]}
              alt={`${project.title} Cinematic Framing`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Visual description strip corner */}
            <div className="absolute bottom-6 left-6 bg-brand-black/80 backdrop-blur-md px-4 py-2 border border-white/5 text-[10px] tracking-widest uppercase text-brand-gold">
              Isometric Capture — Phase 1 Complete
            </div>
          </div>
        )}

        {/* 2-Column Side-by-Side Splits */}
        {project.gallery.length > 1 && (
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.slice(1, 3).map((img, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                key={index}
                className="aspect-[4/3] overflow-hidden bg-neutral-900 border border-white/5"
              >
                <img
                  src={img}
                  alt={`${project.title} Detail Layout ${index + 2}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        )}

      </section>


      {/* 5. RELATED CASE STUDIES (More Work Footer) */}
      <section id="related-projects" className="py-24 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="mb-16 flex justify-between items-baseline select-none">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-white">
              More Work
            </h2>
            <Link
              to="/projects"
              className="text-[#888888] hover:text-brand-gold text-xs tracking-widest uppercase font-mono transition-colors"
            >
              See catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {remainingProjects.map((p) => (
              <motion.div
                key={p.slug}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group border border-white/5 bg-[#070707] flex flex-col justify-between"
              >
                <Link to={`/projects/${p.slug}`} className="flex flex-col h-full">
                  <div className="aspect-[16/9] overflow-hidden bg-neutral-900 relative">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-4 left-4 bg-brand-black/9 bg-brand-black/80 backdrop-blur-md border border-brand-gold/20 text-brand-gold font-mono text-[9px] tracking-widest uppercase px-3 py-1">
                      {p.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-serif text-xl text-brand-white group-hover:text-brand-gold transition-colors">
                        {p.title}
                      </h3>
                      <span className="font-mono text-xs text-brand-gold">{p.year}</span>
                    </div>
                    <p className="text-xs text-neutral-400 font-sans tracking-wide">
                      {p.location}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
