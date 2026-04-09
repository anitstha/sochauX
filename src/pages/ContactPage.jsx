import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../components/icons/SocialIcons";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We offer web development, system design, SaaS platform development, and school management solutions.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on scope. A simple website takes 4-6 weeks, while complex SaaS platforms may take 3-6 months.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes, we offer maintenance and support packages to ensure your product continues to perform optimally.",
  },
  {
    q: "What industries do you work with?",
    a: "We primarily focus on education technology, but have experience across fintech, e-commerce, and enterprise software.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="pt-24 pb-32">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm">Contact</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-secondary mt-4 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can help bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-theme focus:border-accent outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-theme focus:border-accent outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-theme focus:border-accent outline-none transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-theme focus:border-accent outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-xl hover:bg-accent/90 transition-colors"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-card border border-theme rounded-2xl p-8">
                <h3 className="font-heading font-bold text-lg mb-6">Contact Info</h3>
                <div className="space-y-4">
                  <a href="mailto:hello@sochaux.com" className="flex items-center gap-4 text-secondary hover:text-accent transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <span>hello@sochaux.com</span>
                  </a>
                  <a href="tel:+9779800000000" className="flex items-center gap-4 text-secondary hover:text-accent transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Phone size={18} className="text-accent" />
                    </div>
                    <span>+977 980-000-0000</span>
                  </a>
                  <div className="flex items-center gap-4 text-secondary">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MapPin size={18} className="text-accent" />
                    </div>
                    <span>Kathmandu, Nepal</span>
                  </div>
                  <div className="flex items-center gap-4 text-secondary">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Clock size={18} className="text-accent" />
                    </div>
                    <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-theme rounded-2xl p-8">
                <h3 className="font-heading font-bold text-lg mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                    <GithubIcon size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                    <LinkedinIcon size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                    <TwitterIcon size={18} />
                  </a>
                </div>
              </div>

              <div className="bg-card border border-theme rounded-2xl p-8">
                <h3 className="font-heading font-bold text-lg mb-4">FAQ</h3>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <details key={i} className="group">
                      <summary className="cursor-pointer font-medium">{faq.q}</summary>
                      <p className="text-secondary text-sm mt-2">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
