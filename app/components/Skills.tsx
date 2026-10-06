'use client';

import { motion } from 'framer-motion';
import { Palette, Server, Database, Wrench } from 'lucide-react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiDjango,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiVercel,
  SiPostman,
  SiRender,
  SiBootstrap,
  SiSupabase,
  SiAngular,
  SiFirebase,
  SiMariadb,
  SiMysql,
  SiChartdotjs,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

type Skill = {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
};
type Category = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string;
  skills: Skill[];
};

const CATEGORIES: Category[] = [
  {
    title: 'Frontend',
    icon: Palette,
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Angular', icon: SiAngular, color: '#DD0031' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'Chart.js', icon: SiChartdotjs, color: '#FF6384' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    gradient: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Django', icon: SiDjango, color: '#092E20' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
      { name: 'Java', icon: FaJava, color: '#007396' },
    ],
  },
  {
    title: 'Bases de données',
    icon: Database,
    gradient: 'from-emerald-500 to-green-500',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'MariaDB', icon: SiMariadb, color: '#003545' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
    ],
  },
  {
    title: 'Outils & DevOps',
    icon: Wrench,
    gradient: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'GitLab', icon: SiGitlab, color: '#FC6D26' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Vercel', icon: SiVercel, color: '#000000' },
      { name: 'Render', icon: SiRender, color: '#46E3B7' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-[#F5F2EB] text-neutral-900 overflow-hidden">
      {/* Grille de fond discrète */}
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
              Compétences
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Ma boîte à outils
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Les technologies que j'utilise au quotidien pour construire des applications web modernes.
          </p>
        </motion.div>

        {/* ============ GRILLE DES CATÉGORIES ============ */}
        <div className="grid md:grid-cols-2 gap-6">
          {CATEGORIES.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="group relative bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm hover:shadow-xl transition-shadow"
              >
                {/* En-tête catégorie */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}>
                    <CategoryIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    {category.title}
                  </h3>
                </div>

                {/* Grille des skills */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        whileHover={{ y: -4, scale: 1.05 }}
                        className="group/skill relative flex flex-col items-center gap-2 p-3 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-neutral-300 hover:bg-white transition-colors cursor-default"
                      >
                        <SkillIcon
                          className="w-7 h-7 transition-transform group-hover/skill:scale-110"
                          style={{ color: skill.color }}
                        />
                        <span className="text-xs font-medium text-neutral-700 text-center leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ============ LIGNE "MÉTHODOLOGIES" EN BAS ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 p-6 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl text-white"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              Méthodologies
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Agile / Scrum',
              'Sprints & Dailies',
              'Code Reviews',
              'API REST',
              'JWT',
              'Programmation Objet',
              'Intégration continue',
              'TDD',
            ].map((method) => (
              <span
                key={method}
                className="px-3 py-1.5 text-sm bg-white/10 backdrop-blur border border-white/20 rounded-lg hover:bg-white/15 transition-colors"
              >
                {method}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}