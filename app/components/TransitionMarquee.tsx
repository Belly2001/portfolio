'use client';

const WORDS = [
  'Mon parcours',
  'Mes expériences',
  'Ma formation',
  'Mes projets',
  'Mes compétences',
  "Ce qui m'anime",
];

export default function TransitionMarquee() {
  const doubled = [...WORDS, ...WORDS];

  return (
    <section className="relative py-6 bg-blue-600 text-white overflow-hidden">
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {doubled.map((word, index) => (
            <div
              key={`${word}-${index}`}
              className="flex items-center gap-12 flex-shrink-0"
            >
              <span className="text-xl md:text-2xl font-bold tracking-tight">
                {word}
              </span>
              <span className="text-white/50 text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}