'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Presentation() {
  return (
    <section id="presentation" className="relative py-24 lg:py-32 bg-[#F5F2EB] text-neutral-900 overflow-hidden">
      {/* ============ FOND ANIMÉ ============ */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(45deg, #2563eb 1px, transparent 1px),
                            linear-gradient(-45deg, #2563eb 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-sky-300/40 blur-[90px] pointer-events-none"
        style={{ top: '5%', right: '-150px' }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, -40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full bg-orange-200/50 blur-[90px] pointer-events-none"
        style={{ bottom: '10%', left: '-100px' }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.6, 0.4],
          y: [0, -30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* ============ GRID : PHOTO (plus large) | TEXTE ============ */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-center">
          
          {/* ============ COLONNE GAUCHE : PHOTO WORKSPACE GRANDE ============ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Halo coloré derrière */}
            <motion.div
              className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-400/40 via-sky-400/30 to-orange-300/40 blur-3xl pointer-events-none"
              animate={{
                scale: [1, 1.03, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Photo workspace */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-2 ring-white"
            >
              <Image
                src="/Presentation.png"
                alt="Don dans son environnement de développement Full Stack"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Badge "Disponible" flottant en bas */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute -bottom-5 left-6 bg-white rounded-2xl px-5 py-3 shadow-xl border border-neutral-200 flex items-center gap-3"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <div>
                <div className="text-sm font-bold text-neutral-900 leading-tight">
                  Disponible
                </div>
                <div className="text-xs text-neutral-500 leading-tight">
                  Pour une alternance
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ============ COLONNE DROITE : TEXTE ============ */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-[2px] bg-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                À propos de moi
              </span>
            </motion.div>

            {/* Titre engagé */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6"
            >
              Développeur full stack animé par l&apos;envie de{' '}
              <span className="text-blue-600">construire des produits qui ont du sens</span>.
            </motion.h2>

            {/* Paragraphe 1 - Mon besoin */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-neutral-700 leading-relaxed mb-5"
            >
              Fort d'une expérience <span className="text-neutral-900 font-semibold">full stack</span> : des projets menés de la conception au déploiement, mon besoin aujourd&apos;hui est de <span className="text-blue-600 font-semibold">continuer à apprendre auprès de professionnels</span> et de me confronter à des problématiques métier réelles.
            </motion.p>

            {/* Paragraphe 2 - Mon parcours */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-lg text-neutral-700 leading-relaxed mb-5"
            >
              Après ma <span className="text-neutral-900 font-semibold">Licence MIASHS</span> parcours Informatique, j&apos;ai intégré le Mastère Expert en Développement Full Stack au <span className="text-neutral-900 font-semibold">Campus Ynov Toulouse</span> pour approfondir encore plus mes bases.
            </motion.p>

            {/* Paragraphe 3 - Ma passion */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base md:text-lg text-neutral-700 leading-relaxed"
            >
              <span className="text-blue-600 font-bold">Ce qui me passionne</span> : donner vie aux <span className="text-neutral-900 font-semibold">applications métier</span> qui répondent vraiment aux besoins de leurs utilisateurs.
            </motion.p>


          </div>
        </div>
      </div>
    </section>
  );
}