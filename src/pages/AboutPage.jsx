import { Target, Eye, Heart, Users, Award, Globe, Sparkles, ArrowRight, Calendar, TrendingUp, Users2, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { stats, team } from "../data/siteData";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that impact your bottom line.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Open communication and complete visibility into every stage of development.",
  },
  {
    icon: Heart,
    title: "Quality First",
    description: "We never compromise on code quality, security, or user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Your input matters. We work alongside you, not just for you.",
  },
];

const milestones = [
  { year: "2020", event: "Founded with a vision to transform education through technology", icon: Award },
  { year: "2021", event: "Launched our first SaaS product serving 5+ schools", icon: Globe },
  { year: "2022", event: "Expanded to enterprise clients and system design services", icon: TrendingUp },
  { year: "2023", event: "Delivered 10+ successful projects across industries", icon: Users2 },
  { year: "2024", event: "Growing team of founders passionate about innovation", icon: Sparkles },
];

export default function AboutPage() {
  return (
    <main className="pt-24 pb-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />

      {/* Hero Section */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Sparkles size={16} className="text-accent" />
              <span className="text-accent font-mono text-sm">About Us</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mt-4">
              Building <span className="gradient-text">Digital Excellence</span>
            </h1>
            <p className="text-secondary mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              We're a team of passionate developers and designers crafting software solutions that make a difference.
            </p>
          </motion.div>

          {/* Stats Banner */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-card/60 backdrop-blur-sm border border-theme rounded-2xl p-6 text-center hover:border-accent/30 transition-colors group">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-secondary text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop"
                  alt="Team collaboration"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-card border border-theme rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Clock size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">5+ Years</div>
                    <div className="text-sm text-secondary">of Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-mono text-sm">Our Story</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
                From Vision to <span className="gradient-text">Reality</span>
              </h2>
              <p className="text-secondary mb-4 leading-relaxed">
                SochauX was born from a simple belief: great software can transform how businesses operate and serve their customers. We started by solving real problems in education technology, and that focus on practical impact still drives everything we do.
              </p>
              <p className="text-secondary mb-8 leading-relaxed">
                Today, we partner with startups and enterprises alike, bringing the same rigor and dedication to every project—whether it's a school management system or a complex trading platform.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 text-accent font-medium group">
                Learn more about us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-card/30" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-mono text-sm">What We Believe</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
              Our <span className="gradient-text">Values</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-card/60 backdrop-blur-sm border border-theme rounded-2xl p-8 hover:border-accent/30 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="text-accent" size={28} />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors">{value.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-28 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-mono text-sm">Journey</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
              Our <span className="gradient-text">Milestones</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/30 to-transparent" />
            
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center gap-8 mb-12 last:mb-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} pl-16 md:pl-0`}>
                    <div className="bg-card/60 backdrop-blur-sm border border-theme rounded-2xl p-6 hover:border-accent/30 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon size={18} className="text-accent" />
                        <span className="font-mono text-accent font-bold">{m.year}</span>
                      </div>
                      <p className="text-secondary">{m.event}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 bg-card z-10" />
                  
                  {/* Empty space for opposite side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-card/30" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-mono text-sm">The Team</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
              Meet Our <span className="gradient-text">Founders</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative bg-card/60 backdrop-blur-sm border border-theme rounded-3xl p-8 hover:border-accent/30 transition-all hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                <div className="relative z-10 text-center">
                  <div className="relative inline-block mb-6">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=c8a165&color=fff&size=200&font-size=0.4`}
                      alt={member.name}
                      className="w-28 h-28 rounded-full border-4 border-accent/20 group-hover:border-accent/40 transition-colors"
                    />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                      <Award size={16} className="text-white" />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-1 group-hover:text-accent transition-colors">{member.name}</h3>
                  <p className="text-accent text-sm mb-4 font-medium">{member.role}</p>
                  <p className="text-secondary text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-card to-card/50 border border-theme rounded-3xl p-12 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h2 className="font-heading text-4xl font-bold mb-4">
                Want to <span className="gradient-text">Work Together?</span>
              </h2>
              <p className="text-secondary text-lg mb-8">
                We're always looking for talented people and exciting projects.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-2xl hover:bg-accent/90 transition-all hover:scale-105"
              >
                Get in Touch
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}