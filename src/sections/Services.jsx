import { Layers, Globe, Cloud, School } from "lucide-react";
import { services } from "../data/siteData";

const iconMap = { Layers, Globe, Cloud, School };

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm">What We Do</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            From concept to deployment, we deliver comprehensive digital
            solutions that drive growth and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className={`glow-card rounded-2xl p-8 fade-in stagger-${index + 1}`}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  {IconComponent && <IconComponent size={28} className="text-accent" />}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
