import AnimatedBackground from './components/layout/AnimatedBackground';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import AboutMe from './components/sections/AboutMe';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
