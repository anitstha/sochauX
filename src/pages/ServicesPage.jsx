import { Code2, Globe, Cloud, School, Monitor, Database, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "System Design",
    description: "Architecting scalable, resilient systems tailored to your business needs. From microservices to monoliths, we design for growth.",
    features: ["Microservices Architecture", "API Design", "Database Schema", "Performance Optimization", "Cloud Infrastructure"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Building performant, accessible web applications with modern frameworks. React, Next.js, and beyond — interfaces that convert.",
    features: ["React / Next.js", "Responsive Design", "SEO Optimization", "Performance Tuning", "Progressive Web Apps"],
  },
  {
    icon: Cloud,
    title: "SaaS Platforms",
    description: "Launch your software-as-a-service product with confidence. Subscription infrastructure, dashboards, and multi-tenant architectures.",
    features: ["Multi-tenant Architecture", "Subscription Billing", "Admin Dashboards", "Analytics & Reporting", "White-label Solutions"],
  },
  {
    icon: School,
    title: "School Management",
    description: "Comprehensive digital ecosystems for educational institutions. Admissions, attendance, grading, and parent portals unified.",
    features: ["Student Management", "Attendance Tracking", "Grade Management", "Parent Portal", "Fee Management"],
  },
  {
    icon: Monitor,
    title: "Custom Software",
    description: "Tailored software solutions built to solve your unique business challenges. Enterprise-grade quality with startup agility.",
    features: ["Business Analysis", "Custom Dashboards", "Workflow Automation", "Third-party Integrations", "Legacy Modernization"],
  },
  {
    icon: Database,
    title: "Data Solutions",
    description: "Transform raw data into actionable insights. Data pipelines, analytics infrastructure, and visualization dashboards.",
    features: ["Data Pipelines", "Business Intelligence", "Real-time Analytics", "Data Warehousing", "Machine Learning"],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-32">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm">Services</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-4">
              What We <span className="gradient-text">Build</span>
            </h1>
            <p className="text-secondary mt-4 max-w-2xl mx-auto">
              From concept to deployment, we deliver end-to-end solutions that drive business growth and operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-card border border-theme rounded-2xl p-8 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={28} />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-secondary mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-secondary">
                        <CheckCircle size={16} className="text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card border-y border-theme">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-mono text-sm">Process</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">
                How We <span className="gradient-text">Work</span>
              </h2>
              <p className="text-secondary mt-4">
                A transparent, collaborative approach that keeps you involved at every stage.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { step: "01", title: "Discovery", desc: "Deep dive into your requirements, goals, and constraints" },
                { step: "02", title: "Design", desc: "Architecture planning and UI/UX design prototypes" },
                { step: "03", title: "Develop", desc: "Agile development with regular updates and feedback" },
                { step: "04", title: "Deploy", desc: "Launch, monitor, and provide ongoing support" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-accent font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold">{item.title}</h4>
                    <p className="text-secondary text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Ready to Start Your <span className="gradient-text">Project?</span>
          </h2>
          <p className="text-secondary mt-4 max-w-xl mx-auto">
            Let's discuss your needs and find the perfect solution for your business.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-accent text-white font-medium rounded-xl hover:bg-accent/90 transition-colors"
          >
            Get in Touch <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
