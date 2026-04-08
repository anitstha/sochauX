import { useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import Team from "./sections/Team";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
