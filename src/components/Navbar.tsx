/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' }, // Add services tab/link to map services listing
    { name: 'Contact', path: '/contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        when: 'afterChildren',
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  // Is current page home? Let's check to style differently on home top if needed
  const isHome = location.pathname === '/';

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-black/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg'
            : isHome
            ? 'bg-transparent py-6'
            : 'bg-brand-black/40 backdrop-blur-sm py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo wordmark */}
          <Link
            id="nav-logo"
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-brand-white hover:text-brand-gold transition-colors"
          >
            VASTUKARYA
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-sans tracking-widest uppercase transition-all duration-300 relative py-1 hover:text-brand-gold ${
                    isActive ? 'text-brand-gold font-medium' : 'text-brand-warm/80'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              id="nav-cta"
              to="/contact"
              className="inline-flex items-center px-6 py-2.5 border border-brand-gold/40 text-brand-gold hover:text-brand-black hover:bg-brand-gold/90 text-xs tracking-widest uppercase font-sans transition-all duration-400 rounded-none group"
            >
              Start a Project
              <ArrowUpRight className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-brand-white hover:text-brand-gold transition-colors p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 h-screen w-screen bg-brand-black z-40 flex flex-col justify-center px-8 md:px-16"
          >
            <div className="flex flex-col space-y-8 my-auto">
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={linkVariants}>
                  <Link
                    to={link.path}
                    className="font-serif text-4xl tracking-wider text-brand-warm hover:text-brand-gold block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={linkVariants} className="pt-8 border-t border-white/10">
                <p className="text-xs tracking-widest text-brand-gold uppercase mb-2">Inquiries</p>
                <a href="mailto:vastukarya.konstruksi@gmail.com" className="text-xl text-brand-warm hover:underline font-light">
                  vastukarya.konstruksi@gmail.com
                </a>
              </motion.div>
            </div>

            {/* Mobile Overlay Footer */}
            <div className="py-8 flex justify-between items-center border-t border-white/5 text-[10px] tracking-widest text-[#888888] uppercase">
              <span>Surabaya, Indonesia</span>
              <span>@vastukarya.id</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
