import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../data/testimonialsData";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm">Testimonials</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-theme rounded-3xl p-8 md:p-12">
            <div className="absolute -top-4 left-8">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Quote size={24} className="text-accent" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-2xl object-cover border-2 border-accent/20"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < testimonial.rating
                          ? "text-accent fill-accent"
                          : "text-border"
                      }
                    />
                  ))}
                </div>

                <p className="text-lg md:text-xl leading-relaxed mb-6 text-primary">
                  "{testimonial.content}"
                </p>

                <div>
                  <p className="font-heading font-bold text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-secondary text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-card border border-theme hover:border-accent hover:bg-accent/10 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-secondary hover:text-accent" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === current
                      ? "bg-accent w-8"
                      : "bg-border hover:bg-accent/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-card border border-theme hover:border-accent hover:bg-accent/10 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-secondary hover:text-accent" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
