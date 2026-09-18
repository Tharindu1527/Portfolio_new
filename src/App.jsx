import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070a]">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
