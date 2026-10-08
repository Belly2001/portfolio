'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Projets', href: '#projects' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/70 backdrop-blur-xl border-b border-neutral-200/50 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          {/* LOGO */}
          <a
            href="#"
            className="text-lg font-bold text-neutral-900 tracking-tight hover:text-blue-600 transition-colors"
          >
            Mon PortFolio<span className="text-blue-600"></span>
          </a>

          {/* NAV DESKTOP */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-neutral-700 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA DESKTOP */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors"
          >
            Me contacter
          </a>

          {/* BURGER MOBILE */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/50 border border-neutral-200 text-neutral-900"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-4 right-4 z-40 md:hidden bg-white rounded-2xl border border-neutral-200 shadow-xl p-4"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-neutral-700 hover:bg-neutral-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-base font-medium bg-neutral-900 text-white rounded-lg text-center"
                >
                  Me contacter
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}