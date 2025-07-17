import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';

export default function Home() {
  return (
    <main className="container max-w-6xl mx-auto px-6 py-12 text-stone-50">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
