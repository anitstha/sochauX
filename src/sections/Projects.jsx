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
              <div className="h-48 bg-gradient-to-br from-bg to-bg-secondary relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-2xl bg-bg/50 backdrop-blur-sm flex items-center justify-center border border-theme">
                    <span className="font-heading text-4xl font-bold text-accent">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-lg bg-bg/80 backdrop-blur-sm hover:bg-accent/20 transition-colors">
                    <GithubIcon size={16} className="text-secondary hover:text-accent" />
                  </button>
                  <button className="p-2 rounded-lg bg-bg/80 backdrop-blur-sm hover:bg-accent/20 transition-colors">
                    <ExternalLink size={16} className="text-secondary hover:text-accent" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-mono text-accent/80 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-heading text-xl font-bold mt-2 mb-3">
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
