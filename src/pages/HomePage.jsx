import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import About from "../sections/About";
import Testimonials from "../sections/Testimonials";
import Team from "../sections/Team";
import Contact from "../sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <Team />
      <Contact />
    </main>
  );
}
