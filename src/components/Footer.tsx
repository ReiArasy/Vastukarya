/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Mail, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="global-footer" className="bg-[#050505] border-t border-white/5 pt-20 pb-12 text-brand-warm relative overflow-hidden">
      {/* Decorative architectural grid background overlay */}
      <div className="absolute inset-0 geo-grid-dot opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16">
          
          {/* Left Column: Brand Logo + Tagline */}
          <div className="col-span-1 md:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="font-serif text-3xl tracking-[0.25em] text-brand-white block mb-4 hover:text-brand-gold transition-colors">
                VASTUKARYA
              </Link>
              <p className="text-[#888888] font-sans text-sm max-w-sm leading-relaxed mb-6">
                Designing the Future, Rooted in Culture. PT. Vastukarya Konstruksi Nusantara crafts innovative, sustainable, and culturally rooted architectural landmarks.
              </p>
            </div>
            
            {/* Surabaya Headquarters Tag */}
            <div className="flex items-center space-x-2 text-xs text-[#888888] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span>Surabaya HQ — Global Ambition</span>
            </div>
          </div>

          {/* Center Column: Navigation Links */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-sans text-xs tracking-widest text-brand-gold uppercase mb-6 font-semibold">
              Explore
            </h4>
            <ul className="space-y-4 font-sans text-sm">
              <li>
                <Link to="/projects" className="text-[#BBBBBB] hover:text-brand-white hover:translate-x-1 inline-block transition-all duration-300">
                  Selected Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#BBBBBB] hover:text-brand-white hover:translate-x-1 inline-block transition-all duration-300">
                  Agency Profile
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#BBBBBB] hover:text-brand-white hover:translate-x-1 inline-block transition-all duration-300">
                  Expertise &amp; Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#BBBBBB] hover:text-brand-white hover:translate-x-1 inline-block transition-all duration-300">
                  Connect / Start Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact Info + Socials */}
          <div className="col-span-1 md:col-span-4 select-text">
            <h4 className="font-sans text-xs tracking-widest text-brand-gold uppercase mb-6 font-semibold">
              Get in Touch
            </h4>
            <div className="space-y-4 font-sans text-sm text-[#BBBBBB]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4.5 h-4.5 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  Darmo Boulevard, Wonokromo,<br />
                  Surabaya, East Java, Indonesia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4.5 h-4.5 text-brand-gold" />
                <a href="mailto:vastukarya.konstruksi@gmail.com" className="hover:text-brand-white hover:underline transition-all">
                  vastukarya.konstruksi@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 pt-2">
                <Instagram className="w-4.5 h-4.5 text-brand-gold" />
                <a 
                  href="https://instagram.com/vastukarya.id" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-white flex items-center gap-1 transition-all"
                >
                  @vastukarya.id
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#666666] font-mono gap-4">
          <div className="text-center md:text-left">
            © {currentYear} PT. Vastukarya Konstruksi Nusantara. Surabaya, Indonesia. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-brand-gold cursor-default transition-colors">Surabaya</span>
            <span className="hover:text-brand-gold cursor-default transition-colors">Bali</span>
            <span className="hover:text-brand-gold cursor-default transition-colors">Jakarta</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
