'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Mail, ArrowRight, Download, FileText, BookOpen, Building2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Don Belly Star Ndanga';

  // Effet machine à écrire sur le nom
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullName.length) {
        setDisplayedName(fullName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 90);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F5F2EB] text-neutral-900">
      {/* ============ FOND ANIMÉ ============ */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #2563eb 1px, transparent 1px),
                            linear-gradient(to bottom, #2563eb 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-400/40 blur-[80px] pointer-events-none"
        style={{ top: '-100px', left: '-100px' }}
        animate={{
          x: [0, 200, 100, 0],
          y: [0, 100, 300, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-purple-400/40 blur-[80px] pointer-events-none"
        style={{ top: '50%', right: '-100px' }}
        animate={{
          x: [0, -150, -250, 0],
          y: [0, -200, 100, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full bg-orange-300/40 blur-[80px] pointer-events-none"
        style={{ bottom: '-100px', left: '30%' }}
        animate={{
          x: [0, -200, 300, 0],
          y: [0, -150, -100, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ============ CONTENU ============ */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          
          {/* ============ COLONNE GAUCHE ============ */}
          <div>
            {/* 1. EN RECHERCHE D'ALTERNANCE — grand */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-600/40 bg-green-500/10 text-green-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                </span>
                Disponible maintenant
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-blue-600 leading-tight">
                En recherche d&apos;alternance
              </h2>
            </motion.div>

            {/* 2. NOM — effet machine à écrire */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-neutral-900 min-h-[1.2em]"
            >
              {displayedName}
              <span className="inline-block w-[3px] h-[0.9em] bg-neutral-900 ml-1 animate-pulse align-middle" />
            </motion.h1>

            {/* 3. DEVELOPPEUR FULL STACK + CAMPUS YNOV */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
              className="mb-4"
            >
              <div className="text-xl md:text-2xl font-semibold text-neutral-800">
                Développeur Full Stack
              </div>
              <div className="flex flex-wrap items-center gap-x-1 gap-y-1 font-semibold text-sm md:text-base text-neutral-900 mt-2">
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  Mastère 1 Expert en Developpement Full Stack
                </span>
                <span className="text-neutral-400">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  Campus Ynov Toulouse
                </span>
              </div>
            </motion.div>

            {/* 4. 3 MOTS SÉPARÉS PAR DES POINTS */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm md:text-base text-neutral-900 font-medium mb-6"
            >
              <span>Conception</span>
              <span className="text-blue-600">•</span>
              <span>Automatisation</span>
              <span className="text-blue-600">•</span>
              <span>Déploiement continu</span>
            </motion.div>

            {/* 5. DESCRIPTION BRÈVE — manuscrite */}
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&display=swap" rel="stylesheet" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.1 }}
              className="text-2xl md:text-3xl text-neutral-900 max-w-xl mb-8 leading-snug"
              style={{ fontFamily: '"Caveat", cursive' }}
            >
             " <span className="text-neutral-900 font-bold">Comprendre</span> le besoin,{' '}
              <span className="text-neutral-900 font-bold">concevoir</span> la solution,{' '}
              <span className="text-neutral-900 font-bold">livrer</span> une application métier pensée pour ses utilisateurs."
            </motion.p>

            {/* 6. BOUTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.4 }}
              className="flex flex-wrap gap-3"
            >
              {/* Voir mon CV (redirige vers section Contact ou CV) */}
              <motion.a
                href="#about"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                <FileText className="w-4 h-4" />
                Voir mon CV
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="/cv.pdf"
                download="CV-Don-Belly-Star-Ndanga.pdf"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 hover:border-neutral-500 bg-white/70 backdrop-blur rounded-xl font-medium transition-colors text-neutral-900"
              >
                <Download className="w-4 h-4" />
                Télécharger le CV
              </motion.a>

              {/* Me contacter */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 hover:border-neutral-500 bg-white/70 backdrop-blur rounded-xl font-medium transition-colors text-neutral-900"
              >
                <Mail className="w-4 h-4" />
                Me contacter
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/Belly2001"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-12 h-12 border border-neutral-300 hover:border-neutral-500 bg-white/70 backdrop-blur rounded-xl transition-colors text-neutral-900"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com/in/don-belly-star-ndanga"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-12 h-12 border border-neutral-300 hover:border-neutral-500 bg-white/70 backdrop-blur rounded-xl transition-colors text-neutral-900"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* ============ COLONNE DROITE : PHOTO ============ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative w-80 h-80 xl:w-96 xl:h-96"
            >
              {/* Halo coloré derrière (ce que tu as déjà) */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-orange-300 opacity-40 blur-2xl animate-blob-shape" />

              {/* Ring Pulse #1 — anneau bleu qui s'étend ET change de forme */}
              <div
                className="absolute inset-0 border-4 border-blue-500"
                style={{
                  animation: 'blob-shape 8s ease-in-out infinite, ring-pulse 2.5s ease-out infinite',
                }}
              />

              {/* Ring Pulse #2 — décalé dans le temps */}
              <div
                className="absolute inset-0 border-4 border-blue-500"
                style={{
                  animation: 'blob-shape 8s ease-in-out infinite, ring-pulse 2.5s ease-out infinite',
                  animationDelay: '0s, 1.25s',
                }}
              />

              {/* Photo avec forme organique animée */}
              <div className="relative w-full h-full overflow-hidden bg-neutral-200 animate-blob-shape border-4 border-white shadow-2xl">
                <Image
                  src="/Profile.png"
                  alt="Don Belly Star Ndanga"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}