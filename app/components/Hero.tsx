'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const ROLES = ['Full Stack', 'Front-End', 'Back-End'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F5F2EB] text-neutral-900">
      {/* ============ FOND ANIMÉ ============ */}
      {/* Grille très discrète */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
            backgroundImage: `linear-gradient(to right, #2563eb 1px, transparent 1px),
                            linear-gradient(to bottom, #2563eb 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
        }}
      />

      {/* Dégradé bleu qui respire (adapté fond clair) */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-300/40 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Dégradé orange qui respire (chaleur, contraste fond crème) */}
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-orange-300/40 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* ============ CONTENU ============ */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          
          {/* ============ COLONNE GAUCHE : TEXTE ============ */}
          <div>
            {/* Badge Disponible */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-600/30 bg-green-500/10 text-green-700 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              Disponible pour une alternance
            </motion.div>

            {/* Nom */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3 text-neutral-900"
            >
              Don Belly Star Ndanga
            </motion.h1>

            {/* Titre avec rôle qui change */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-neutral-700 mb-2"
            >
              Développeur{' '}
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-blue-600 inline-block"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </motion.div>

            {/* Localisation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-neutral-600 mb-8"
            >
              basé à Toulouse.
            </motion.div>

            {/* Paragraphe */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-neutral-600 max-w-xl mb-10 leading-relaxed"
            >
              Je conçois des applications web modernes avec{' '}
              <span className="text-neutral-900 font-semibold">React</span>,{' '}
              <span className="text-neutral-900 font-semibold">Next.js</span> et{' '}
              <span className="text-neutral-900 font-semibold">Django</span>.
            </motion.p>

            {/* Boutons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                <Mail className="w-4 h-4" />
                Me contacter
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 hover:border-neutral-500 bg-white/50 rounded-xl font-medium transition-colors text-neutral-900"
              >
                Voir mes projets
              </motion.a>

              <motion.a
                href="https://github.com/Belly2001"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-12 h-12 border border-neutral-300 hover:border-neutral-500 bg-white/50 rounded-xl transition-colors text-neutral-900"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/don-belly-star-ndanga"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-12 h-12 border border-neutral-300 hover:border-neutral-500 bg-white/50 rounded-xl transition-colors text-neutral-900"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* ============ COLONNE DROITE : PHOTO CARRÉE ============ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Halo lumineux animé */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/50 to-orange-400/50 blur-2xl"
            />

            {/* Container de la photo CARRÉE */}
            <motion.div
              whileHover={{ scale: 1.03, rotate: -1 }}
              transition={{ duration: 0.3 }}
              className="relative w-80 h-80 xl:w-96 xl:h-96"
            >
              {/* Bordure gradient animée (carrée arrondie) */}
              <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 animate-spin-slow">
                <div className="w-full h-full rounded-3xl bg-[#F5F2EB]" />
              </div>

              {/* Photo */}
              <div className="absolute inset-[6px] rounded-3xl overflow-hidden bg-neutral-200">
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