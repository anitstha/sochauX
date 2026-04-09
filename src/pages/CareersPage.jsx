import { MapPin, Clock, Briefcase, ArrowRight, Send } from "lucide-react";

const openings = [
  {
    title: "Senior React Developer",
    department: "Engineering",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    description: "We're looking for an experienced React developer to lead frontend development on our SaaS products.",
    requirements: [
      "5+ years of experience with React",
      "Strong TypeScript skills",
      "Experience with state management (Redux/Zustand)",
      "Understanding of backend integration",
    ],
  },
  {
    title: "Backend Engineer",
    department: "Engineering",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    description: "Join our team to build scalable backend systems for our various client projects.",
    requirements: [
      "3+ years of backend development experience",
      "Proficiency in Node.js or Go",
      "Database design and optimization skills",
      "API design experience",
    ],
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    description: "Create beautiful, user-centric designs that elevate our products and client experiences.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma",
      "Strong portfolio demonstrating web/app design",
      "Understanding of design systems",
    ],
  },
  {
    title: "Technical Project Manager",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    description: "Lead projects from conception to delivery, ensuring quality and timely execution.",
    requirements: [
      "Experience managing technical projects",
      "Strong communication skills",
      "Understanding of software development lifecycle",
      "Problem-solving mindset",
    ],
  },
];

const perks = [
  { icon: Briefcase, title: "Flexible Work", desc: "Remote-first culture with flexible hours" },
  { icon: Clock, title: "Growth", desc: "Learning budget and career development" },
  { icon: MapPin, title: "Modern Tools", desc: "Latest tech stack and equipment provided" },
];

export default function CareersPage() {
  return (
    <main className="pt-24 pb-32">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm">Careers</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-4">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-secondary mt-4 max-w-2xl mx-auto">
              We're building something special. If you're passionate about technology and making an impact, we'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div key={i} className="bg-card border border-theme rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-heading font-bold mb-2">{perk.title}</h3>
                  <p className="text-secondary text-sm">{perk.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card border-y border-theme">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-accent font-mono text-sm">Open Positions</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">
              Current <span className="gradient-text">Openings</span>
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openings.map((job, i) => (
              <div
                key={i}
                className="bg-card border border-theme rounded-2xl p-6 hover:border-accent/50 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-secondary">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} /> {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors">
                    Apply Now
                  </button>
                </div>
                <p className="text-secondary text-sm mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req, j) => (
                    <span key={j} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent">
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-mono text-sm">Don't see a fit?</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">
                Send Us Your <span className="gradient-text">Resume</span>
              </h2>
              <p className="text-secondary mt-4">
                We're always looking for talented people. Send us your info and we'll reach out when there's a match.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-theme focus:border-accent outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-theme focus:border-accent outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Role Interest</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-theme focus:border-accent outline-none transition-colors"
                  placeholder="e.g., Frontend Developer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-theme focus:border-accent outline-none transition-colors resize-none"
                  placeholder="Tell us about yourself..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Resume (PDF)</label>
                <input
                  type="file"
                  accept=".pdf"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-theme focus:border-accent outline-none transition-colors file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-accent/10 file:text-accent file:cursor-pointer"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white font-medium rounded-xl hover:bg-accent/90 transition-colors"
              >
                <Send size={18} /> Send Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
