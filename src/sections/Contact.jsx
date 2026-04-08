import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-32 bg-bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-accent font-mono text-sm">Get In Touch</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6">
              Let's Build <span className="gradient-text">Something Great</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-10">
              Ready to transform your idea into reality? We'd love to hear from
              you. Drop us a message and let's start a conversation.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm text-text-secondary">Email</div>
                  <div className="font-medium">sochau@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm text-text-secondary">Location</div>
                  <div className="font-medium">Kathmandu, Nepal</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm text-text-secondary">Phone</div>
                  <div className="font-medium">+977 9803057499</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-bg-card border border-border-subtle rounded-2xl p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <ArrowRight size={32} className="text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2">
                  Message Sent!
                </h3>
                <p className="text-text-secondary">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-bg-dark border rounded-lg text-text-primary placeholder-text-secondary/50 ${errors.name ? "border-red-500" : "border-border-subtle"}`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-bg-dark border rounded-lg text-text-primary placeholder-text-secondary/50 ${errors.email ? "border-red-500" : "border-border-subtle"}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg-dark border border-border-subtle rounded-lg text-text-primary placeholder-text-secondary/50"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 bg-bg-dark border rounded-lg text-text-primary placeholder-text-secondary/50 resize-none ${errors.message ? "border-red-500" : "border-border-subtle"}`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-bg-dark font-semibold rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
