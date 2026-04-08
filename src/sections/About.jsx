import { Code2, Users, Award, Clock } from "lucide-react";
import { team, stats } from "../data/siteData";

const iconMap = { Code2, Users, Award, Clock };

export default function About() {
  return (
    <section id="about" className="py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-mono text-sm">About Us</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6">
              Where Innovation <br />
              Meets Execution
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              Founded by a trio of tech enthusiasts, SochauX emerged from a
              shared vision: to create digital products that don't just work,
              but work beautifully. We believe technology should simplify, not
              complicate.
            </p>
            <p className="text-secondary leading-relaxed mb-8">
              Our multidisciplinary team brings together expertise in system
              architecture, full-stack development, and product design. We don't
              just build what you ask for — we build what your users actually
              need.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {team.map((member, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-accent/20 border-2 border-bg flex items-center justify-center text-xs font-bold text-accent"
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                ))}
              </div>
              <span className="text-sm text-secondary">
                Meet the founders
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon];
              return (
                <div
                  key={stat.label}
                  className={`bg-card rounded-2xl p-8 text-center fade-in stagger-${index + 1}`}
                >
                  {IconComponent && <IconComponent size={32} className="text-accent mx-auto mb-4" />}
                  <div className="font-heading text-4xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
