import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Building Scalable SaaS Architecture: Lessons Learned",
    excerpt: "After building multiple SaaS products, here are the key architectural decisions that made the biggest impact on scalability and maintainability.",
    category: "Architecture",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop",
  },
  {
    title: "Why We Chose React for Enterprise Applications",
    excerpt: "A deep dive into why React remains our go-to choice for building complex enterprise applications, and the patterns that make it work.",
    category: "Development",
    date: "February 28, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop",
  },
  {
    title: "Transforming Education: Our Journey with School Management Systems",
    excerpt: "How we helped schools digitize their operations and the unexpected challenges we encountered along the way.",
    category: "Case Study",
    date: "January 10, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=300&fit=crop",
  },
  {
    title: "The Future of EdTech: Trends to Watch in 2024",
    excerpt: "From AI-powered learning to gamification, exploring the technologies shaping the future of education technology.",
    category: "Industry",
    date: "December 5, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop",
  },
  {
    title: "Multi-Tenant Architecture: A Practical Guide",
    excerpt: "Everything you need to know about building multi-tenant systems—from database design to data isolation strategies.",
    category: "Development",
    date: "November 18, 2023",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop",
  },
  {
    title: "From Monolith to Microservices: A Migration Story",
    excerpt: "How we helped a growing startup break down their monolithic application into manageable microservices without breaking production.",
    category: "Architecture",
    date: "October 22, 2023",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-24 pb-32">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm">Blog</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-4">
              Insights & <span className="gradient-text">Updates</span>
            </h1>
            <p className="text-secondary mt-4 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights from our team on software development, architecture, and the tech industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group bg-card border border-theme rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-xs font-medium bg-accent text-white px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-secondary mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-secondary text-sm mb-4">{post.excerpt}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 border border-theme hover:border-accent text-secondary hover:text-accent font-medium rounded-xl transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card border-y border-theme">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-accent/20 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-secondary max-w-xl mx-auto mb-6">
              Get the latest insights, tutorials, and updates delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-primary border border-theme focus:border-accent outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-white font-medium rounded-xl hover:bg-accent/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
