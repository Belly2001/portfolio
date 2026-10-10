'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';

const FORMATION = [
  {
    period: '2026 — 2028',
    title: 'Mastère Expert Full Stack',
    place: 'Campus Ynov Toulouse',
    bullets: [
      'Titre RNCP niveau 7 (Bac+5) sur 2 ans (M1 + M2)',
      'Full Stack avancé : React, Next.js, APIs REST / GraphQL, microservices',
      'Architecture logicielle (Clean Architecture, Domain-Driven Design)',
      'DevOps & cloud natif : Docker, Kubernetes, CI/CD, GitOps',
      'Qualité & sécurité : TDD, tests E2E, OWASP, DevSecOps',
      'Intégration de l\'IA générative : LLM, RAG, prompt engineering',
    ],
    current: true,
  },
  {
    period: '2025 — 2026',
    title: 'Licence 3 MIASHS - Parcours Informatique',
    place: 'Université Toulouse - Jean Jaurès',
    bullets: [],
    current: false,
  },
];

const EXPERIENCES = [
  {
    period: '04/2026 — 06/2026',
    title: 'Développeur Frontend · Stage',
    place: 'Totem Numérique · Toulouse',
    bullets: [
      'Développement du produit MonitorCostSupplier (outil de suivi des coûts fournisseurs)',
      'Dashboard analytique interactif : graphiques dynamiques, filtres temporels, vues comparatives',
      'Formulaire multi-fournisseurs avec validation côté client et API REST sécurisées par JWT',
      'Filtre temporel partagé via React Context pour synchroniser l\'affichage sur l\'ensemble du dashboard',
      'Travail en binôme avec le développeur backend en méthode Agile (sprints, dailies, reviews)',
    ],
    icon: Briefcase,
    accent: 'blue',
  },
  {
    period: '03 / 2022 → Actuel',
    title: 'Employé Polyvalent',
    place: 'Flunch · Labège',
    bullets: [
      'Gestion du stress et de la pression dans un environnement à forte affluence',
      'Polyvalence sur plusieurs postes',
      'Gestion simultanée de tâches multiples et respect des procédures qualité',
    ],
    icon: Briefcase,
    accent: 'orange',
  },
  {
    period: '2016 — 2021',
    title: 'Bénévole',
    place: "Communauté Sant'Egidio",
    description: '5 ans d\'engagement associatif au service des personnes en précarité.',
    icon: Heart,
    accent: 'rose',
  },
];

export default function Parcours() {
  return (
    <section id="parcours" className="relative py-24 lg:py-32 bg-[#F5F2EB] text-neutral-900 overflow-hidden">
      {/* ============ FOND ANIMÉ ============ */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #2563eb 1px, transparent 1px),
                            linear-gradient(to bottom, #2563eb 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Blob bleu */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-400/40 blur-[90px] pointer-events-none"
        style={{ top: '10%', left: '-100px' }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, 60, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Blob violet */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full bg-purple-300/40 blur-[90px] pointer-events-none"
        style={{ bottom: '10%', right: '-100px' }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.6, 0.4],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* ============ TITRE ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Mon parcours
            </span>
            <div className="w-10 h-[2px] bg-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Expériences & <span className="text-blue-600">Formation</span>
          </h2>
        </motion.div>

        {/* ============ GRID 2 COLONNES ============ */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* ============ COLONNE GAUCHE : EXPÉRIENCES ============ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {/* En-tête de colonne */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
                Expériences
              </h3>
            </div>

            {/* Items */}
            <div className="space-y-5">
              {EXPERIENCES.map((item, index) => {
                const Icon = item.icon;
                const accentColors = {
                  blue: 'from-blue-500 to-cyan-500',
                  orange: 'from-orange-500 to-amber-500',
                  rose: 'from-rose-500 to-pink-500',
                };
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="relative p-5 bg-white/80 backdrop-blur rounded-2xl border border-neutral-200 hover:border-blue-300 hover:shadow-xl transition-all"
                  >
                    {/* Icône */}
                    <div className="flex items-start gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${accentColors[item.accent as keyof typeof accentColors]} flex items-center justify-center shadow flex-shrink-0`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        {/* Période */}
                        <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                          {item.period}
                        </div>
                        {/* Titre */}
                        <h4 className="text-lg font-bold text-neutral-900 leading-tight">
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    {/* Lieu */}
                    <div className="text-sm text-neutral-600 mb-3 ml-11">
                      {item.place}
                    </div>

                  {/* Description — puces ou texte */}
                  {item.bullets ? (
                    <ul className="text-sm text-neutral-700 leading-relaxed ml-11 space-y-1.5">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-0.5 flex-shrink-0">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-neutral-700 leading-relaxed ml-11">
                      {item.description}
                    </p>
                  )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ============ COLONNE DROITE : FORMATION ============ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {/* En-tête de colonne */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
                Formation
              </h3>
            </div>

            {/* Items */}
            <div className="space-y-5">
              {FORMATION.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="relative p-5 bg-white/80 backdrop-blur rounded-2xl border border-neutral-200 hover:border-blue-300 hover:shadow-xl transition-all"
                >
                  {/* Badge "En cours" */}
                  {item.current && (
                    <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-700 text-xs font-semibold">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                      </span>
                      En cours
                    </div>
                  )}

                  {/* Période */}
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
                    {item.period}
                  </div>

                  {/* Titre */}
                  <h4 className="text-lg font-bold text-neutral-900 mb-1">
                    {item.title}
                  </h4>

                  {/* Lieu */}
                  <div className="text-sm text-neutral-600 mb-3">
                    {item.place}
                  </div>

                {/* Description — puces ou texte */}
                {item.bullets ? (
                  <ul className="text-sm text-neutral-700 leading-relaxed space-y-1.5">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5 flex-shrink-0">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {item.description}
                  </p>
                )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}