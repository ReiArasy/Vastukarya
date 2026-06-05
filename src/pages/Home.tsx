/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ArrowRight, ArrowDown, Shield, Trees, Compass, FileText, Layout } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export default function Home() {
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const heroSubtextRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // Set up GSAP Intro Reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Avoid animation if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        gsap.set('.reveal-element', { opacity: 1, y: 0 });
        return;
      }

      // Initial states
      gsap.set('.reveal-word', { display: 'inline-block', y: 60, opacity: 0 });
      gsap.set(heroSubtextRef.current, { opacity: 0, y: 20 });
      gsap.set(scrollIndicatorRef.current, { opacity: 0, y: -20 });

      // Build animation sequence
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to('.reveal-word', {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1.2,
      })
      .to(heroSubtextRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.6')
      .to(scrollIndicatorRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.4');
    });

    return () => ctx.revert();
  }, []);

  // Standard Scroll Reveals with GSAP ScrollTrigger or Framer Motion
  // Since we have Framer Motion globally, we can use clean motion/react viewport triggers for scroll reveals!
  // It is extremely robust, matches the spec ("Framer Motion scroll reveals on all sections" + "GSAP hero animation on home")

  // Take top 3 projects for the home grid
  const homeFeaturedProjects = PROJECTS.slice(0, 3);

  // Split headline "Designing the Future, Rooted in Culture" into words for the GSAP reveal
  const headline = "Designing the Future, Rooted in Culture";
  const words = headline.split(' ');

  const servicesTeaser = [
    {
      number: '01',
      title: 'Architecture Design',
      desc: 'Spatially progressive, passive tropical concepts and site planning.',
      icon: Layout,
    },
    {
      number: '02',
      title: 'Interior Design',
      desc: 'Sophisticated custom millwork, sensory styling, and raw organic elements.',
      icon: Compass,
    },
    {
      number: '03',
      title: 'Hospitality Masterplanning',
      desc: 'Atmospheric resorts and pavilions designed on breathtaking regional cliffs.',
      icon: Trees,
    },
    {
      number: '04',
      title: 'Urban Consulting',
      desc: 'Civic masterplanning centered around walking porosity and history.',
      icon: FileText,
    }
  ];

  return (
    <div id="home-page" className="bg-brand-black text-brand-warm relative select-none">
      
      {/* 1. HERO SECTION (100vh) */}
      <section id="hero-section" className="relative h-screen w-full flex items-center justify-center overflow-hidden z-10">
        
        {/* Background Full-bleed Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=90"
            alt="PT. VASTUKARYA Principal Architectural Work"
            className="w-full h-full object-cover opacity-60 scale-105"
            style={{ filter: 'brightness(0.7) contrast(1.1)' }}
            referrerPolicy="no-referrer"
          />
          {/* Subtle bottom-to-top dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 flex flex-col justify-end h-full pb-20 md:pb-28">
          <div className="max-w-4xl">
            {/* Headline with hidden overflow masks for split slide-up */}
            <h1 
              ref={heroTextRef}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-white leading-[1.1] tracking-tight mb-6"
            >
              {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-3 py-1">
                  <span className="reveal-word inline-block">
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            {/* Subtext */}
            <div 
              ref={heroSubtextRef}
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-t border-brand-gold/20 pt-6 mt-2 max-w-2xl text-brand-warm/90"
            >
              <p className="text-xs tracking-[0.2em] uppercase font-sans font-semibold text-brand-gold">
                Architecture &amp; Design Consultancy
              </p>
              <span className="hidden sm:inline text-brand-gold/30">|</span>
              <p className="text-xs tracking-widest uppercase font-mono text-[#BBBBBB]">
                Surabaya, Indonesia — Global Ambition
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator cue */}
        <div 
          ref={scrollIndicatorRef}
          className="absolute bottom-8 right-8 md:right-12 z-15 flex flex-col items-center space-y-4"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-brand-gold font-sans font-medium [writing-mode:vertical-lr]">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="text-brand-gold"
          >
            <ArrowDown className="w-4.5 h-4.5" />
          </motion.div>
        </div>
      </section>


      {/* 2. PROJECT PREVIEW SECTION (Asymmetric Grid) */}
      <section id="selected-works" className="py-24 md:py-32 bg-brand-black relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section Title */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/5 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-brand-white mb-4">
                Selected Works
              </h2>
              <p className="text-[#888888] text-sm font-sans tracking-wide max-w-md">
                Interdisciplinary architectures that celebrate regional wisdom, geometry, and sustainable passive performance.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-6 md:mt-0"
            >
              <Link
                to="/projects"
                className="inline-flex items-center space-x-2 text-brand-gold hover:text-brand-white tracking-widest text-xs uppercase font-sans transition-all duration-300 group"
              >
                <span>See All Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Asymmetric 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {homeFeaturedProjects.map((project, index) => {
              // Asymmetric styling: index 1 (the second item) should be offset downward keying a beautiful editorial feel
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className={`${!isEven ? 'md:mt-24' : ''} group`}
                >
                  <Link to={`/projects/${project.slug}`} className="block">
                    {/* Hover scalable card image wrapper */}
                    <div className="overflow-hidden aspect-[4/3] bg-neutral-900 border border-white/5 relative mb-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                      {/* Top gold category pill inside image container */}
                      <span className="absolute top-4 left-4 bg-brand-black/80 backdrop-blur-md px-3 py-1 text-[10px] tracking-widest uppercase text-brand-gold border border-brand-gold/20 font-sans font-semibold">
                        {project.category}
                      </span>
                    </div>

                    {/* Metadata descriptors */}
                    <div className="flex justify-between items-baseline">
                      <div>
                        <h3 className="font-serif text-2xl text-brand-white group-hover:text-brand-gold transition-colors mb-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-[#888888] font-mono tracking-widest uppercase">
                          {project.location}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-brand-gold">
                        {project.year}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 3. ABOUT TEASER SECTION (Split Layout) */}
      <section id="about-teaser" className="py-24 md:py-32 bg-[#0C0C0C] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            
            {/* Left: Beautiful Editorial Conceptual Image (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="col-span-1 md:col-span-5 relative"
            >
              <div className="aspect-[3/4] bg-neutral-900 border border-white/5 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503387762458-7e52f42855f9?auto=format&fit=crop&w=1200&q=80"
                  alt="Architectural prints and blueprints VASTUKARYA office Surabaya"
                  className="w-full h-full object-cover opacity-80 filter brightness-90 saturate-50 hover:saturate-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Overlay architectural blueprint floating card */}
              <div className="absolute -bottom-6 -right-6 md:-right-8 bg-brand-black border border-brand-gold/30 p-6 max-w-xs hidden sm:block">
                <p className="font-serif text-brand-white italic text-lg leading-relaxed mb-4">
                  "Nusantara wisdom meets international precise engineering."
                </p>
                <p className="font-sans text-[10px] tracking-widest uppercase text-brand-gold">
                  VASTUKARYA ETHOS — Surabaya
                </p>
              </div>
            </motion.div>

            {/* Right: Editorial Narrative Content (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="col-span-1 md:col-span-7 flex flex-col justify-center"
            >
              <span className="text-xs tracking-[0.25em] uppercase text-brand-gold font-sans font-semibold mb-4 block">
                ABOUT VASTUKARYA
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-white leading-tight mb-8">
                Where Architecture Meets Purpose
              </h2>
              
              <div className="space-y-6 text-[#BBBBBB] font-sans text-base leading-relaxed max-w-xl">
                <p>
                  PT. Vastukarya Konstruksi Nusantara (VASTUKARYA) is a premier architectural and interior consulting firm based in the vibrant maritime city of Surabaya. Rooted in Nusantara's historic sustainable vernacular values, we carry global ambitions.
                </p>
                <p>
                  We focus on high-fidelity designs that perform. We create spaces that breathe, utilizing traditional wind-scoop patterns (passive cooling) alongside precise parametric aluminum envelopes. From private luxury island sanctuaries in Bali to multi-story transit malls in central Jakarta, we believe structure should inspire prior to any words.
                </p>
              </div>

              <div className="mt-10 select-none">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-3 text-brand-gold hover:text-brand-white text-xs tracking-widest uppercase font-mono border-b border-brand-gold pb-1.5 transition-all duration-300 group"
                >
                  <span>Explore Our History</span>
                  <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 4. SERVICES STRIP (Responsive 4-Column Grid Layout) */}
      <section id="services-strip" className="py-24 bg-brand-black border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="mb-16">
            <span className="text-xs tracking-[0.25em] uppercase text-brand-gold font-sans font-semibold mb-3 block">
              Core Expertise
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-white">
              Professional Disciplines
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesTeaser.map((serv, idx) => (
              <motion.div
                key={serv.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#0D0D0D] border border-white/5 p-8 relative flex flex-col justify-between aspect-square hover:border-brand-gold/40 transition-colors duration-400 group"
              >
                <div>
                  <div className="flex justify-between items-baseline mb-6">
                    <span className="font-mono text-xs text-brand-gold font-bold">
                      {serv.number}
                    </span>
                    <serv.icon className="w-5 h-5 text-brand-gold/40 group-hover:text-brand-gold transition-colors duration-300" />
                  </div>
                  
                  <h3 className="font-serif text-xl text-brand-white group-hover:text-brand-gold transition-colors duration-300 mb-4">
                    {serv.title}
                  </h3>
                  
                  <p className="text-xs text-[#888888] font-sans leading-relaxed">
                    {serv.desc}
                  </p>
                </div>

                <div className="pt-4 select-none">
                  <Link 
                    to="/services" 
                    className="text-[10px] tracking-widest text-[#666666] group-hover:text-brand-gold uppercase font-mono flex items-center gap-1 transition-colors duration-300"
                  >
                    Details <ArrowRight className="w-3 h-3 text-brand-gold transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* 5. SELECTED PROJECT HIGHLIGHT (Full Width) */}
      <section id="fullwidth-highlight" className="relative py-28 md:py-36 bg-brand-black overflow-hidden select-none">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=90"
            alt="Hotel Himana Bali Cliffside Pavilion"
            className="w-full h-full object-cover opacity-35 scale-100 group-hover:scale-105 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.25em] uppercase text-brand-gold font-sans font-semibold mb-4 block">
              FEATURED HOTEL ICON — BALI
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-brand-white leading-tight mb-4">
              Hotel Himana Bali
            </h2>
            <p className="text-xs font-mono text-[#888888] tracking-widest uppercase mb-6 flex gap-4">
              <span>Uluwatu, Bali</span>
              <span>•</span>
              <span className="text-brand-gold">Year 2024</span>
            </p>
            
            <p className="text-[#BBBBBB] text-sm md:text-base leading-relaxed mb-8 font-sans">
              "An extraordinary dialogue between raw concrete cantilevered volumes and Uluwatu's ancient limestone cliffs, allowing the ocean breeze to dictate the layout's fluid path." A premier private clifftop resort highlighting custom Nusantara craftsmanship and advanced passive thermodynamics.
            </p>

            <div>
              <Link
                to="/projects/hotel-himana-bali"
                className="inline-flex items-center space-x-3 px-8 py-3.5 bg-brand-gold hover:bg-brand-white text-brand-black text-xs font-sans font-bold tracking-widest uppercase transition-all duration-400 rounded-none cursor-pointer"
              >
                <span>View Full Case Study</span>
                <ArrowRight className="w-4 h-4 text-brand-black" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
