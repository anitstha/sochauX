import { Target, Eye, Heart, Users, Award, Globe, ArrowRight } from "lucide-react";
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
  { year: "2020", event: "Founded with a vision to transform education through technology" },
  { year: "2021", event: "Launched our first SaaS product serving 5+ schools" },
  { year: "2022", event: "Expanded to enterprise clients and system design services" },
  { year: "2023", event: "Delivered 10+ successful projects across industries" },
  { year: "2024", event: "Growing team of founders passionate about innovation" },
];

export default function AboutPage() {
  return (
    <main className="pt-24 pb-32">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm">About Us</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-4">
              Building <span className="gradient-text">Digital Excellence</span>
            </h1>
            <p className="text-secondary mt-4 max-w-2xl mx-auto">
              We're a team of passionate developers and designers crafting software solutions that make a difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-secondary mb-4">
                SochauX was born from a simple belief: great software can transform how businesses operate and serve their customers. We started by solving real problems in education technology, and that focus on practical impact still drives everything we do.
              </p>
              <p className="text-secondary mb-6">
                Today, we partner with startups and enterprises alike, bringing the same rigor and dedication to every project—whether it's a school management system or a complex trading platform.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-card border border-theme rounded-xl p-4">
                    <span className="text-3xl font-bold text-accent">{stat.value}</span>
                    <p className="text-secondary text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card border-y border-theme">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-accent font-mono text-sm">What We Believe</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">
              Our <span className="gradient-text">Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="text-center p-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-accent" size={28} />
                  </div>
                  <h3 className="font-heading font-bold mb-2">{value.title}</h3>
                  <p className="text-secondary text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-accent font-mono text-sm">Journey</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">
              Our <span className="gradient-text">Milestones</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                <div className="w-20 flex-shrink-0 text-right">
                  <span className="font-mono text-accent font-bold">{m.year}</span>
                </div>
                <div className="relative pl-8 border-l-2 border-theme">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-primary" />
                  <p className="text-secondary">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card border-y border-theme">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-accent font-mono text-sm">The Team</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">
              Meet Our <span className="gradient-text">Founders</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="bg-card border border-theme rounded-2xl p-8 text-center">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=c8a165&color=fff&size=200&font-size=0.4`}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-accent/20"
                />
                <h3 className="font-heading font-bold text-lg">{member.name}</h3>
                <p className="text-accent text-sm mb-3">{member.role}</p>
                <p className="text-secondary text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Want to <span className="gradient-text">Work Together?</span>
          </h2>
          <p className="text-secondary mt-4 max-w-xl mx-auto">
            We're always looking for talented people and exciting projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-theme hover:border-accent text-secondary hover:text-accent font-medium rounded-xl transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
