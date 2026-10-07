'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string;           // chemin vers screenshot
  gradient: string;         // dégradé fallback
  github?: string;
  liveUrl?: string;
  category: string;
};

const PROJECTS: Project[] = [
  {
    title: 'MonitorCostSupplier',
    description: 'Outil interne de suivi des coûts fournisseurs. Dashboard analytique interactif avec filtres temporels et vues comparatives.',
    tech: ['Next.js', 'React', 'Recharts', 'API REST', 'JWT'],
    gradient: 'from-blue-500 to-cyan-500',
    category: 'Stage · Totem Numérique',
    // github et liveUrl : privé Totem, à adapter
  },
  {
    title: 'League of Stones',
    description: "Jeu de cartes multijoueur en ligne inspiré de Hearthstone. Matchmaking, deck personnalisé de 20 cartes et combat tour par tour.",
    tech: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Docker', 'JWT'],
    gradient: 'from-fuchsia-500 to-pink-500',
    category: 'Projet académique',
    github: 'https://github.com/Belly2001/league-of-stones',
  },
  {
    title: 'Carbon Footprint',
    description: "Calculateur d'empreinte carbone hebdomadaire pour étudiants, avec visualisations et conseils personnalisés.",
    tech: ['Next.js', 'React', 'Chart.js', 'API Impact CO2'],
    gradient: 'from-green-500 to-emerald-500',
    github: 'https://github.com/Belly2001/carbon-footprint',
    liveUrl: 'https://carbon-footprint-gules.vercel.app',
    category: 'Projet perso',
  },
  {
    title: 'Schedule App',
    description: "Application full-stack d'automatisation des emplois du temps des enseignants, avec export PDF.",
    tech: ['React', 'Django', 'PostgreSQL'],
    gradient: 'from-violet-500 to-purple-500',
    github: 'https://github.com/ProjetMiashs/AppEmploiDuTemps',
    liveUrl: 'https://app-emploi-du-temps.vercel.app',
    category: 'Projet académique',
  },
  {
    title: 'WeatherCheck',
    description: 'Application météo en temps réel avec prévisions sur 5 jours, température, vent et humidité.',
    tech: ['Next.js', 'React', 'OpenWeatherMap API'],
    gradient: 'from-sky-500 to-blue-500',
    github: 'https://github.com/Belly2001/WeatherCheck',
    liveUrl: 'https://weather-check-mu.vercel.app',
    category: 'Projet perso',
  },
  {
    title: 'Dungeon Battle',
    description: "Jeu en C++ (à compléter avec ta description).",
    tech: ['C++'],
    gradient: 'from-rose-500 to-red-500',
    category: 'Projet académique',
  },
  {
    title: 'Declaration',
    description: 'Application Java (à compléter avec ta description).',
    tech: ['Java', 'POO'],
    gradient: 'from-amber-500 to-orange-500',
    category: 'Projet académique',
  },
  {
    title: 'DreamPark',
    description: 'Application Python (à compléter avec ta description).',
    tech: ['Python'],
    gradient: 'from-indigo-500 to-blue-600',
    category: 'Projet académique',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-[#F5F2EB] text-neutral-900 overflow-hidden">
      {/* Grille de fond discrète */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #2563eb 1px, transparent 1px),
                            linear-gradient(to bottom, #2563eb 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Blob bleu qui respire */}
      <motion.div
        className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[100px] pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
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
              Projets
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Ce que j'ai construit
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Une sélection de projets web, académiques et personnels. Du front-end au back-end, en passant par la programmation système.
          </p>
        </motion.div>

        {/* ============ GRILLE DE PROJETS ============ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              {/* IMAGE OU DÉGRADÉ */}
              <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold tracking-tight opacity-20 group-hover:opacity-40 transition-opacity">
                      {project.title}
                    </span>
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Badge catégorie */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-xs font-medium bg-white/90 backdrop-blur text-neutral-700 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* CONTENU */}
              <div className="p-5">
                {/* Titre + flèche */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-neutral-900 leading-tight">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-0.5" />
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 rounded-md border border-blue-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Liens */}
                <div className="flex items-center gap-3 pt-3 border-t border-neutral-100">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                      aria-label="Code source GitHub"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
                      aria-label="Voir le projet en ligne"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Démo</span>
                    </a>
                  )}
                  {!project.github && !project.liveUrl && (
                    <span className="text-xs text-neutral-400 italic">
                      Projet privé
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}