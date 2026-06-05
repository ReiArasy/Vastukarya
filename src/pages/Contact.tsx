/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Instagram, CheckCircle2, Phone, Sparkles, Send, Map } from 'lucide-react';

export default function Contact() {
  // Form coordinates
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Architecture',
    projectBrief: '',
    budgetRange: '$50k - $250k'
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetOptions = [
    '< $50,000',
    '$50,000 - $250,000',
    '$250,000 - $1,000,000',
    '> $1,000,000'
  ];

  const projectTypeOptions = ['Architecture', 'Interior', 'Hospitality', 'Other'];

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full details name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Valid email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address formatting is invalid';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone contact is required';
    }
    if (!formData.projectBrief.trim()) {
      errors.projectBrief = 'A brief description of your design needs is required';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    // Simulate luxury API handshake
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 1200);
  };

  return (
    <div id="contact-page" className="bg-brand-black text-brand-warm min-h-screen pt-24 select-none">
      
      {/* 1. SECTION INTRO HEADER */}
      <section className="pt-20 pb-12 border-b border-white/5 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 geo-grid-dot opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-xs tracking-[0.25em] uppercase text-brand-gold font-sans font-semibold mb-3 block">
              COLLBORATE / INQUIRE
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-brand-white leading-tight">
              Connect With Us
            </h1>
            <p className="text-[#888888] font-sans text-xs tracking-wider mt-2 uppercase">
              Commissioning premium landmarks in Surabaya, Bali, and across borders.
            </p>
          </motion.div>
        </div>
      </section>


      {/* 2. SPLIT INTERFACE PANEL */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: INTERACTIVE BRIEF FORM (7 cols) */}
          <div className="lg:col-span-7 bg-[#090909] border border-white/5 p-8 md:p-10 relative">
            <AnimatePresence mode="wait">
              {!submittedSuccess ? (
                <motion.form
                  key="contactForm"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="font-serif text-xl text-brand-white mb-6 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-gold" />
                    Project Briefing Sheet
                  </h3>

                  {/* Row: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-brand-gold mb-2 font-mono font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Raden Sastro"
                        className="w-full bg-brand-black border border-white/10 px-4 py-3 text-sm text-brand-warm rounded-none focus:outline-none focus:border-brand-gold transition-colors"
                      />
                      {formErrors.fullName && (
                        <p className="text-red-500 text-[10px] tracking-wide mt-1 font-mono">
                          {formErrors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-brand-gold mb-2 font-mono font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@corporate.com"
                        className="w-full bg-brand-black border border-white/10 px-4 py-3 text-sm text-brand-warm rounded-none focus:outline-none focus:border-brand-gold transition-colors"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-[10px] tracking-wide mt-1 font-mono">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row: Phone and Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Contact */}
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-brand-gold mb-2 font-mono font-bold">
                        Phone Contact *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+62 812 3456 7890"
                        className="w-full bg-brand-black border border-white/10 px-4 py-3 text-sm text-brand-warm rounded-none focus:outline-none focus:border-brand-gold transition-colors"
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-[10px] tracking-wide mt-1 font-mono">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>

                    {/* Project Type Dropdown */}
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-brand-gold mb-2 font-mono font-bold">
                        Project Type
                      </label>
                      <div className="relative">
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full bg-brand-black border border-white/10 px-4 py-3 text-sm text-brand-warm rounded-none appearance-none focus:outline-none focus:border-brand-gold transition-colors cursor-pointer"
                        >
                          {projectTypeOptions.map((type) => (
                            <option key={type} value={type} className="bg-[#0D0D0D]">
                              {type} Design
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none font-mono text-brand-gold text-[10px]">
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row: Budget and Brief Text */}
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-brand-gold mb-2 font-mono font-bold">
                      Target Budget Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {budgetOptions.map((option) => (
                        <button
                          type="button"
                          key={option}
                          onClick={() => setFormData({ ...formData, budgetRange: option })}
                          className={`px-3 py-3 text-[10px] tracking-widest uppercase font-mono border transition-all cursor-pointer text-center ${
                            formData.budgetRange === option
                              ? 'bg-brand-gold border-brand-gold text-brand-black font-bold'
                              : 'bg-brand-black border-white/10 text-neutral-400 hover:border-white/25'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Briefing Textbox */}
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-brand-gold mb-2 font-mono font-bold">
                      Project Brief / Spatial Concept *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.projectBrief}
                      onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
                      placeholder="Outline your layout objectives, regional site coordinates, custom millwork, etc..."
                      className="w-full bg-brand-black border border-white/10 px-4 py-3 text-sm text-brand-warm rounded-none focus:outline-none focus:border-brand-gold transition-colors"
                    />
                    {formErrors.projectBrief && (
                      <p className="text-red-500 text-[10px] tracking-wide mt-1 font-mono">
                        {formErrors.projectBrief}
                      </p>
                    )}
                  </div>

                  {/* Submit Action */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center space-x-3 px-8 py-4 bg-brand-gold hover:bg-brand-white text-brand-black text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <span>Validating coordinates...</span>
                      ) : (
                        <>
                          <span>Transmit Inquiry Brief</span>
                          <Send className="w-3.5 h-3.5 text-brand-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </div>

                </motion.form>
              ) : (
                /* Dynamic Success Screen */
                <motion.div
                  key="successMessage"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="py-16 text-center select-none"
                >
                  <motion.div
                    initial={{ scale: 0.2, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-20 h-20 bg-brand-gold/15 border border-brand-gold/40 rounded-full flex items-center justify-center mx-auto mb-8"
                  >
                    <CheckCircle2 className="w-10 h-10 text-brand-gold" />
                  </motion.div>

                  <h3 className="font-serif text-3xl text-brand-white mb-4">
                    Brief Transmitted Successfully
                  </h3>
                  
                  <div className="max-w-md mx-auto space-y-4 text-xs font-sans leading-relaxed text-[#BBBBBB]">
                    <p>
                      Thank you, <strong className="text-brand-gold">{formData.fullName}</strong>. Your architectural consulting dossier has been securely routed to our Surabaya headquarters.
                    </p>
                    <p>
                      Our principal team, audited under the IAI framework, will inspect your planning requirements ({formData.projectType}) and respond with an introductory prospectus within 24 operational hours.
                    </p>
                  </div>

                  <div className="pt-10">
                    <button
                      onClick={() => {
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          projectType: 'Architecture',
                          projectBrief: '',
                          budgetRange: '$50k - $250k'
                        });
                        setSubmittedSuccess(false);
                      }}
                      className="px-6 py-2.5 border border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-brand-black text-xs font-mono tracking-widest uppercase transition-colors rounded-none"
                    >
                      Draft Another Brief
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: ADDRESS, CONTACTS & LUXURY CORE MAP (5 cols) */}
          <div className="lg:col-span-5 space-y-10 select-text">
            
            {/* Address & Direct Connection Points */}
            <div className="bg-[#090909] border border-white/5 p-8 relative">
              <h3 className="font-serif text-xl text-brand-white mb-6 uppercase tracking-wider border-b border-white/5 pb-4">
                VASTUKARYA Surabaya HQ
              </h3>
              
              <ul className="space-y-6 font-sans text-sm text-[#BBBBBB]">
                {/* Location */}
                <li className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-brand-gold font-bold mb-1">Office Address</p>
                    <span className="leading-relaxed">
                      Darmo Boulevard, Wonokromo,<br />
                      Surabaya, East Java, Indonesia
                    </span>
                  </div>
                </li>

                {/* Email Direct */}
                <li className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-brand-gold font-bold mb-1">General Inquiries</p>
                    <a href="mailto:vastukarya.konstruksi@gmail.com" className="hover:text-brand-white hover:underline transition-all">
                      vastukarya.konstruksi@gmail.com
                    </a>
                  </div>
                </li>

                {/* Telephone */}
                <li className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-brand-gold font-bold mb-1">Telephone Line</p>
                    <a href="tel:+62315552345" className="hover:text-brand-white transition-all">
                      +62 (31) 555-2345
                    </a>
                  </div>
                </li>

                {/* Instagram Handle */}
                <li className="flex items-start space-x-4 pt-2 border-t border-white/5">
                  <Instagram className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-brand-gold font-bold mb-1">Social Core</p>
                    <a
                      href="https://instagram.com/vastukarya.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-white flex items-center gap-1 transition-all"
                    >
                      @vastukarya.id
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* LUXURY MINIMALIST GEOGRAPHIC SITE BLOCK (Aesthetic replacement for complex map iframe) */}
            <div className="bg-[#0D0D0D] border border-white/5 p-8 relative overflow-hidden select-none">
              <div className="absolute top-4 right-4 text-brand-gold/20">
                <Map className="w-10 h-10" />
              </div>
              
              <h4 className="font-serif text-brand-white text-md mb-4 flex items-center gap-2">
                Geographic Coordinates
              </h4>
              <p className="text-mono text-[10px] tracking-widest text-[#888888] uppercase mb-4">
                East Java Territory Grid: 7.2575° S, 112.7521° E
              </p>

              {/* Graphic Plot Drawing Representation of Surabaya Hub */}
              <div className="aspect-[16/9] border border-brand-gold/20 bg-brand-black rounded-none relative flex items-center justify-center overflow-hidden">
                {/* Grid line design */}
                <div className="absolute inset-0 geo-grid-dot opacity-20" />
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-gold/15" />
                <div className="absolute left-1/2 top-0 w-[1px] h-full bg-brand-gold/15" />
                
                {/* Concentric targets */}
                <div className="absolute w-24 h-24 border border-brand-gold/10 rounded-full animate-ping [animation-duration:4s]" />
                <div className="absolute w-12 h-12 border border-brand-gold/25 rounded-full" />
                
                {/* Surabaya landmark point marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-3.5 h-3.5 bg-brand-gold border-2 border-brand-black rounded-full shadow-md shadow-brand-gold/50" />
                  <span className="text-[9px] font-mono tracking-widest text-brand-gold bg-[#0D0D0D] px-2 py-0.5 border border-brand-gold/30 mt-2 whitespace-nowrap uppercase font-bold">
                    Surabaya Office
                  </span>
                </div>

                <div className="absolute bottom-2 left-3 text-[8px] font-mono text-[#555555]">
                  SCALE: NUSANTARA STANDARD 1:250000
                </div>
              </div>
              
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
