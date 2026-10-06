'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    // Simulation d'envoi — on branchera Resend demain
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');

    // Reset après 5 secondes
    setTimeout(() => {
      setStatus('idle');
      (e.target as HTMLFormElement).reset();
    }, 5000);
  }

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

        {/* ============ GRID : INFOS + FORMULAIRE ============ */}
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

          {/* COLONNE DROITE : FORMULAIRE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Halo lumineux derrière le form */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl pointer-events-none" />

            <form
              onSubmit={handleSubmit}
              className="relative bg-white rounded-2xl border border-neutral-200 p-6 lg:p-8 shadow-lg"
            >
              {/* Nom */}
              <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={status === 'sending'}
                  placeholder="Marie Dupont"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all disabled:opacity-50"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Votre email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={status === 'sending'}
                  placeholder="marie.dupont@entreprise.com"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  disabled={status === 'sending'}
                  placeholder="Bonjour Don, nous recherchons un alternant Full Stack..."
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none disabled:opacity-50"
                />
              </div>

              {/* Bouton envoyer */}
              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 text-white rounded-xl font-medium shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed transition-shadow"
              >
                {status === 'idle' && (
                  <>
                    <Send className="w-4 h-4" />
                    Envoyer le message
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Message envoyé !
                  </>
                )}
                {status === 'error' && (
                  <>
                    <AlertCircle className="w-4 h-4" />
                    Erreur, réessayez
                  </>
                )}
              </motion.button>

              {/* Note en bas */}
              <p className="text-xs text-neutral-500 text-center mt-4">
                Je m&apos;engage à ne jamais partager vos informations.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}