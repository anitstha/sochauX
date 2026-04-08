import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
    >
      <div className="floating-shape w-96 h-96 bg-accent/20 top-20 -left-48" />
      <div
        className="floating-shape w-64 h-64 bg-accent/10 bottom-20 right-10"
        style={{ animationDelay: "-4s" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="fade-in">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-mono text-accent border border-accent/30 rounded-full">
            IT Solutions Studio
          </span>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 fade-in stagger-1">
          Building the Future,
          <br />
          <span className="gradient-text">One System at a Time</span>
        </h1>

        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 fade-in stagger-2">
          SochauX transforms ideas into powerful, user-friendly digital
          products. System design, web development, SaaS platforms, and school
          management — all under one roof.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in stagger-3">
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            Get Started
            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 px-8 py-4 border border-accent/50 text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors"
          >
            View Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-current rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
