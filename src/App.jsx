import About from "./components/About";
import Contact from "./components/Contact";
import Exp from "./components/Exp";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="container relative z-10 mx-auto px-8"
      
      >

        <NavBar />
        <Hero />
        <About />
        <Technologies />
        <Exp />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}