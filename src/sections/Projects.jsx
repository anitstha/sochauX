import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../components/icons/SocialIcons";
import { projects } from "../data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm">Our Work</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            Showcasing solutions we've built that drive real results for our
            clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-card border border-theme rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              <div className="h-56 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
                
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
                  <button className="p-2 rounded-lg bg-bg-dark/80 backdrop-blur-sm hover:bg-accent/20 transition-colors">
                    <GithubIcon size={16} className="text-white" />
                  </button>
                  <button className="p-2 rounded-lg bg-bg-dark/80 backdrop-blur-sm hover:bg-accent/20 transition-colors">
                    <ExternalLink size={16} className="text-white" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-mono text-white/90 uppercase tracking-wider bg-bg-dark/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent rounded-full border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
