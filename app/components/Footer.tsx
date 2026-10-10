'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-neutral-900 text-neutral-300 py-12 overflow-hidden">
      {/* Étoiles qui scintillent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 11.1) % 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + (i % 4),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      {/* Léger halo bleu */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Nom + tagline */}
          <div className="text-center md:text-left">
            <div className="text-lg font-bold text-white mb-1">
              Don Belly Star Ndanga<span className="text-blue-500">.</span>
            </div>
            <div className="text-sm text-neutral-400">
              Développeur Full Stack · Toulouse
            </div>
          </div>

          {/* Liens sociaux */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:ndangadonbellystar@gmail.com"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Email
            </a>
            <span className="text-neutral-700">·</span>
            <a
              href="https://github.com/Belly2001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/don-belly-star-ndanga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Ligne de séparation + copyright */}
        <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-neutral-500">
          <div>© {currentYear} Don Ndanga. Tous droits réservés.</div>
        </div>
      </div>
    </footer>
  );
}