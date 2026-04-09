import { GithubIcon, LinkedinIcon, TwitterIcon } from "../components/icons/SocialIcons";
import { team } from "../data/siteData";

export default function Team() {
  return (
    <section id="team" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm">The Minds</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            Meet Our <span className="gradient-text">Founders</span>
          </h2>
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            Three visionaries united by a passion for technology and a
            commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`group relative bg-card border border-theme rounded-2xl p-8 text-center overflow-hidden fade-in stagger-${index + 1}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-heading text-3xl font-bold text-accent">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-xl font-bold mb-1">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-secondary text-sm leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex justify-center gap-3 mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-bg/50 hover:bg-accent/20 transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon
                        size={18}
                        className="text-secondary hover:text-accent"
                      />
                    </a>
                  )}
                  <button
                    className="p-2 rounded-lg bg-bg/50 hover:bg-accent/20 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon
                      size={18}
                      className="text-secondary hover:text-accent"
                    />
                  </button>
                  <button
                    className="p-2 rounded-lg bg-bg/50 hover:bg-accent/20 transition-colors"
                    aria-label="Twitter"
                  >
                    <TwitterIcon
                      size={18}
                      className="text-secondary hover:text-accent"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
