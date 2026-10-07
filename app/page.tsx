import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import SkillsMarquee from './components/SkillsMarquee';
import Skills from './components/Skills';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="bg-[#F5F2EB]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <SkillsMarquee />
      <Skills />
    </main>
  );
}