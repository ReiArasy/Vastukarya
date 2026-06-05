/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Architecture' | 'Interior' | 'Hospitality' | 'Residential'>('All');

  const filterCategories = ['All', 'Architecture', 'Interior', 'Hospitality', 'Residential'] as const;

  // Filter project grid dynamically
  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'All') return true;
    return proj.category === activeFilter;
  });

  return (
    <div id="projects-page" className="bg-brand-white text-brand-black min-h-screen pt-24 select-none">
      
      {/* 1. SIMPLE HERO (Clean White/Off-white Background, Minimal Editorial UI) */}
      <section className="bg-brand-white pt-24 pb-16 border-b border-neutral-100 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-neutral-900 mb-6 font-medium">
              Projects
            </h1>
            <p className="text-brand-gold italic font-serif text-xl md:text-2xl tracking-wide max-w-xl leading-relaxed">
              "Architecture that speaks before words do."
            </p>
          </motion.div>
        </div>
      </section>


      {/* 2. FILTER BAR & DYNAMIC GRID */}
      <section id="projects-grid-section" className="bg-[#FAF9F6] py-16 px-6 md:px-12 min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          
          {/* Animated active state filter bar */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-16 select-none">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="relative px-5 py-2.5 text-xs font-sans font-medium tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer focus:outline-none"
              >
                {/* Active highlight background pill sliding between tabs */}
                {activeFilter === filter && (
                  <motion.span
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-brand-black"
                    style={{ zIndex: 0 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                
                {/* Button Label text */}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    activeFilter === filter ? 'text-brand-white' : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {filter}
                </span>
              </button>
            ))}
          </div>

          {/* Staggered project list with AnimatePresence */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  key={project.slug}
                  className="group bg-brand-white border border-neutral-100 flex flex-col justify-between"
                >
                  <Link to={`/projects/${project.slug}`} className="flex flex-col h-full">
                    {/* Full-bleed Thumbnail view */}
                    <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover filter brightness-[0.9] group-hover:brightness-100 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                      
                      {/* Dark luxury overlay revealing text descriptors on hover */}
                      <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="text-brand-white translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                          <p className="text-[10px] tracking-widest text-brand-gold uppercase font-semibold mb-1">
                            {project.category}
                          </p>
                          <h3 className="font-serif text-2xl font-light">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Standard details footer shown below card */}
                    <div className="p-6 flex flex-col justify-between grow">
                      <div>
                        <div className="flex justify-between items-baseline mb-3">
                          <h3 className="font-serif text-xl text-neutral-800 font-medium group-hover:text-brand-gold transition-colors">
                            {project.title}
                          </h3>
                          <span className="font-mono text-xs text-brand-gold">
                            {project.year}
                          </span>
                        </div>
                        
                        <p className="text-xs text-neutral-500 leading-relaxed font-sans line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      <div className="border-t border-neutral-100 pt-4 mt-6 flex justify-between items-center text-[10px] tracking-widest uppercase font-mono text-[#888888] group-hover:text-neutral-900 transition-colors">
                        <span>{project.location}</span>
                        <div className="flex items-center gap-1 group-hover:text-brand-gold transition-colors">
                          <span>View Detail</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Zero results placeholder */}
          {filteredProjects.length === 0 && (
            <div className="py-20 text-center text-neutral-400 font-sans">
              No works found in this Category. Check back later.
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
