import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Parcours from './components/Parcours';
import Projects from './components/Projects';
import SkillsMarquee from './components/SkillsMarquee';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F5F2EB]">
        <Hero />
        <Presentation />
        <Parcours />
        <Projects />
        <SkillsMarquee />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}