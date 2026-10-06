'use client';

import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss,
  SiChartdotjs,
  SiDjango,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiMariadb,
  SiFirebase,
  SiSqlite,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiVercel,
  SiRender,
  SiSupabase,
  SiPostman,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const SKILLS = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Angular', icon: SiAngular, color: '#DD0031' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'Chart.js', icon: SiChartdotjs, color: '#FF6384' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' },
  { name: 'Django', icon: SiDjango, color: '#092E20' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'MariaDB', icon: SiMariadb, color: '#003545' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#181717' },
  { name: 'GitLab', icon: SiGitlab, color: '#FC6D26' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Render', icon: SiRender, color: '#46E3B7' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
];

export default function SkillsMarquee() {
  // On double la liste pour que le défilement soit fluide (effet infini)
  const doubledSkills = [...SKILLS, ...SKILLS];

  return (
        <section className="relative py-12 bg-white/40 backdrop-blur-xl overflow-hidden border-y border-white/60">
      {/* Gradient fade sur les côtés */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F5F2EB] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F5F2EB] to-transparent z-10 pointer-events-none" />

      {/* Container de défilement */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee gap-10 whitespace-nowrap">
          {doubledSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={`${skill.name}-${index}`}
                className="flex items-center gap-3 flex-shrink-0 group"
              >
                <Icon
                  className="w-8 h-8 transition-transform group-hover:scale-110"
                  style={{ color: skill.color }}
                />
                <span className="text-neutral-800 text-lg font-medium">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}