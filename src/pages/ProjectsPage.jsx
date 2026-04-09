import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../components/icons/SocialIcons";
import { projects } from "../data/projectsData";

const categories = ["All", "School Management", "SaaS Platform", "System Design"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="pt-24 pb-32">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm">Portfolio</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-4">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-secondary mt-4 max-w-2xl mx-auto">
              Showcasing our best projects that demonstrate our expertise in building scalable, user-centric solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-white"
                    : "bg-card border border-theme text-secondary hover:border-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-card border border-theme rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-medium text-accent bg-primary/80 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-secondary text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors"
                    >
                      <GithubIcon size={16} className="text-secondary" /> Source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card border-y border-theme">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Have a Project in <span className="gradient-text">Mind?</span>
          </h2>
          <p className="text-secondary mt-4 max-w-xl mx-auto">
            We're always excited to work on new challenges. Let's build something great together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-accent text-white font-medium rounded-xl hover:bg-accent/90 transition-colors"
          >
            Start a Project <ExternalLink size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
