'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Phone, Send, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#F5F2EB] text-neutral-900 overflow-hidden">
      {/* Grille de fond */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #2563eb 1px, transparent 1px),
                            linear-gradient(to bottom, #2563eb 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Grand blob bleu centré qui pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/15 blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Petit blob orange en haut à droite */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-orange-400/20 blur-[80px] pointer-events-none"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* ============ TITRE ============ */}
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
              Contact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Construisons quelque chose ensemble.
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Une opportunité d&apos;alternance, une question, ou juste envie d&apos;échanger ? Je réponds sous 24h.
          </p>
        </motion.div>

        {/* ============ GRID : INFOS + CONTACT RAPIDE ============ */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* COLONNE GAUCHE : INFOS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Email */}
            <a
              href="mailto:ndangadonbellystar@gmail.com"
              className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-neutral-200 hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                  Email
                </div>
                <div className="text-base font-medium text-neutral-900 break-all">
                  ndangadonbellystar@gmail.com
                </div>
              </div>
            </a>

            {/* Téléphone */}
            <a
              href="tel:+33780860866"
              className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-neutral-200 hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                  Téléphone
                </div>
                <div className="text-base font-medium text-neutral-900">
                  +33 7 80 86 08 66
                </div>
              </div>
            </a>

            {/* Localisation */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-neutral-200">
              <div className="w-11 h-11 rounded-xl bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                  Localisation
                </div>
                <div className="text-base font-medium text-neutral-900">
                  Toulouse — Mobilité France
                </div>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-neutral-200">
              <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                  Disponibilité
                </div>
                <div className="text-base font-medium text-neutral-900">
                  Alternance · 1 semaine école / 2 semaines entreprise
                </div>
              </div>
            </div>

            {/* Réseaux */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Belly2001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white border border-neutral-200 rounded-xl hover:border-neutral-500 hover:scale-105 transition-all"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5 text-neutral-900" />
              </a>
              <a
                href="https://linkedin.com/in/don-belly-star-ndanga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white border border-neutral-200 rounded-xl hover:border-blue-500 hover:scale-105 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 text-blue-600" />
              </a>
            </div>
          </motion.div>

          {/* COLONNE DROITE : APPEL À L'ACTION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Halo lumineux derrière */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative bg-white rounded-2xl border border-neutral-200 p-6 lg:p-8 shadow-lg">
              {/* Badge en haut */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                  Disponible pour échanger
                </span>
              </div>

              {/* Message d'invitation */}
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3 leading-tight">
                Parlons de votre projet 👋
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed mb-8">
                Que vous soyez recruteur, chef de projet ou simplement curieux de mon parcours,
                je suis à votre écoute. Le moyen le plus rapide pour me joindre :
              </p>

              {/* Bouton principal : Email */}
              <motion.a
                href="mailto:ndangadonbellystar@gmail.com?subject=Opportunit%C3%A9%20d%27alternance%20-%20D%C3%A9veloppeur%20Full%20Stack&body=Bonjour%20Don%2C%0A%0A"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow mb-3"
              >
                <Send className="w-4 h-4" />
                M&apos;envoyer un email
              </motion.a>

              {/* Bouton secondaire : Téléphone */}
              <motion.a
                href="tel:+33780860866"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-neutral-200 hover:border-blue-500 text-neutral-900 rounded-xl font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                M&apos;appeler
              </motion.a>

              {/* Petit encart "formulaire à venir" */}
              <div className="mt-8 pt-6 border-t border-neutral-100">
                <p className="text-xs text-neutral-500 text-center leading-relaxed">
                  💡 Un formulaire de contact sera bientôt disponible.
                  <br />
                  En attendant, je réponds à chaque email sous 24h ⏱️
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}