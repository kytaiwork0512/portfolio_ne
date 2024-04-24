import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import EyeTracker from '@/components/EyeTracker';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import SectionDivider from '@/components/SectionDivider';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <div className="fixed bottom-5 left-5 ">
        <EyeTracker />
      </div>
    </main>
  );
}
