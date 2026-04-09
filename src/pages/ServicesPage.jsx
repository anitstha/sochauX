import { Code2, Globe, Cloud, School, Monitor, Database, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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

const processSteps = [
  { step: "01", title: "Discovery", desc: "Deep dive into your requirements, goals, and constraints" },
  { step: "02", title: "Design", desc: "Architecture planning and UI/UX design prototypes" },
  { step: "03", title: "Develop", desc: "Agile development with regular updates and feedback" },
  { step: "04", title: "Deploy", desc: "Launch, monitor, and provide ongoing support" },
];

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute top-60 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />

      {/* Hero Section */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Sparkles size={16} className="text-accent" />
              <span className="text-accent font-mono text-sm">Services</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mt-4">
              What We <span className="gradient-text">Build</span>
            </h1>
            <p className="text-secondary mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              From concept to deployment, we deliver end-to-end solutions that drive business growth and operational efficiency.
            </p>
          </div>

          {/* Services Grid - Masonry Style */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isLarge = index % 3 === 0;
              return (
                <motion.div
                  key={index}
                  className="break-inside-avoid"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`group relative bg-card/60 backdrop-blur-sm border border-theme rounded-3xl overflow-hidden transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 ${isLarge ? 'p-10' : 'p-8'}`}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating particles */}
                    <div className="absolute top-4 right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      {/* Icon container */}
                      <div className={`relative mb-6 ${isLarge ? 'w-20 h-20' : 'w-16 h-16'}`}>
                        <div className={`absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        <div className={`relative bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center ${isLarge ? 'w-20 h-20' : 'w-16 h-16'}`}>
                          <Icon className="text-white" size={isLarge ? 36 : 28} />
                        </div>
                      </div>

                      {/* Large number */}
                      <div className="absolute top-4 right-6 font-mono text-7xl font-bold text-accent/5 group-hover:text-accent/10 transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-secondary mb-6 leading-relaxed">{service.description}</p>

                      {/* Feature pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.slice(0, isLarge ? 4 : 3).map((feature, i) => (
                          <span key={i} className="px-3 py-1.5 text-xs rounded-full bg-accent/10 text-accent/80 border border-accent/20 group-hover:bg-accent/20 group-hover:border-accent/30 transition-colors">
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <a href="/contact" className="inline-flex items-center gap-2 text-sm text-secondary group-hover:text-accent transition-colors">
                        <span>Learn more</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-card/30" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="text-accent font-mono text-sm">Process</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
                How We <span className="gradient-text">Work</span>
              </h2>
              <p className="text-secondary mt-6 text-lg leading-relaxed max-w-lg">
                A transparent, collaborative approach that keeps you involved at every stage of your project.
              </p>
              
              {/* Decorative line */}
              <div className="mt-8 w-24 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
            </motion.div>
            
            <div className="relative">
              {/* Timeline line */}
              <motion.div 
                className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/30 to-transparent"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ originY: 0 }}
              />
              
              <div className="space-y-8">
                {processSteps.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="relative flex gap-6 group"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                  >
                    {/* Step number circle */}
                    <div className="relative z-10 w-12 h-12 rounded-2xl bg-card border-2 border-accent/30 flex items-center justify-center group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                      <span className="font-mono text-accent font-bold text-sm">{item.step}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h4 className="font-heading text-xl font-bold group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-secondary mt-1">{item.desc}</p>
                    </div>
                    
                    {/* Hover dot */}
                    <div className="absolute left-6 top-6 w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-gradient-to-br from-card to-card/50 border border-theme rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
            
            <div className="relative z-10">
              <h2 className="font-heading text-4xl md:text-5xl font-bold">
                Ready to Start Your <span className="gradient-text">Project?</span>
              </h2>
              <p className="text-secondary mt-6 text-lg max-w-xl mx-auto">
                Let's discuss your needs and find the perfect solution for your business.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-white font-medium rounded-2xl hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
              >
                Get in Touch
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}