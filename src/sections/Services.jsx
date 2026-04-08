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
                className="group relative bg-card rounded-2xl p-8 overflow-hidden fade-in stagger-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-[1px] rounded-2xl border border-transparent group-hover:border-accent/20 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/10 group-hover:border-accent/30 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/10">
                    {IconComponent && <IconComponent size={28} className="text-accent group-hover:scale-110 transition-transform duration-300" />}
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <div className="w-8 h-0.5 bg-gradient-to-r from-accent/50 to-transparent mb-4 group-hover:w-12 transition-all duration-300" />
                  
                  <p className="text-secondary text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
