'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, BookOpen } from 'lucide-react';

const TIMELINE = [
  {
    period: '2026 — 2028',
    title: 'Mastère Expert en Développement Full Stack',
    place: 'Campus Ynov · Toulouse',
    icon: GraduationCap,
    current: true,
  },
  {
    period: '04/2026 — 06/2026',
    title: 'Développeur Frontend · Stage',
    place: 'Totem Numérique · Toulouse',
    icon: Briefcase,
    current: false,
  },
  {
    period: '2025 — 2026',
    title: 'Licence 3 MIASHS (Informatique)',
    place: 'Université Toulouse Jean Jaurès',
    icon: BookOpen,
    current: false,
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#F5F2EB] text-neutral-900 overflow-hidden">
      {/* Grille de fond */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #2563eb 1px, transparent 1px),
                            linear-gradient(to bottom, #2563eb 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Blob 1 - Bleu pastel (haut gauche) */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-blue-300/40 blur-[80px] pointer-events-none"
        style={{ top: '10%', left: '-100px' }}
        animate={{
          x: [0, 100, 0],
          y: [0, 80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 2 - Violet pastel (bas droite) */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-purple-300/40 blur-[80px] pointer-events-none"
        style={{ bottom: '10%', right: '-80px' }}
        animate={{
          x: [0, -100, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* ============ TITRE DE SECTION ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              À propos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Qui suis-je ?
          </h2>
        </motion.div>

        {/* ============ GRID : PARAGRAPHE | TIMELINE ============ */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* COLONNE GAUCHE : PARAGRAPHE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-6">
              Développeur <span className="text-neutral-900 font-semibold">full-stack</span> basé à{' '}
              <span className="text-neutral-900 font-semibold">Toulouse</span>, actuellement en{' '}
              <span className="text-neutral-900 font-semibold">Mastère Expert chez Ynov</span>.
            </p>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-6">
              Je code depuis 2 ans avec une obsession : construire des produits web qui fonctionnent vraiment, du frontend <span className="text-blue-600 font-semibold">React</span> aux API <span className="text-blue-600 font-semibold">Django</span>.
            </p>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
              Après un stage frontend chez <span className="text-neutral-900 font-semibold">Totem Numérique</span>, je recherche une alternance pour appliquer mes convictions dans une équipe produit ambitieuse.
            </p>
          </motion.div>

          {/* COLONNE DROITE : TIMELINE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Titre colonne */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                Mon parcours
              </h3>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-500 via-blue-400 to-transparent" />

              {/* Items */}
              <div className="space-y-10">
                {TIMELINE.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                      className="relative flex gap-5 items-start"
                    >
                      {/* Icône / Puce */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform ${
                          item.current
                            ? 'bg-blue-600 text-white ring-4 ring-blue-100'
                            : 'bg-white text-neutral-700 border border-neutral-200'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        {/* Point lumineux si "current" */}
                        {item.current && (
                          <motion.div
                            className="absolute inset-0 rounded-xl bg-blue-500"
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.3, 0, 0.3],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                          />
                        )}
                      </div>

                      {/* Contenu */}
                      <div className="flex-1 pt-1">
                        <div className="text-sm font-medium text-blue-600 mb-1">
                          {item.period}
                          {item.current && (
                            <span className="ml-2 px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full">
                              En cours
                            </span>
                          )}
                        </div>
                        <div className="text-lg font-semibold text-neutral-900 mb-1">
                          {item.title}
                        </div>
                        <div className="text-sm text-neutral-600">
                          {item.place}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}