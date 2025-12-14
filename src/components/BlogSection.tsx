import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Exploring best practices for structuring large-scale React projects with modern tooling.",
    date: "Dec 2024",
    readTime: "8 min read",
    tag: "React",
  },
  {
    title: "The Future of Web Development",
    excerpt: "A deep dive into emerging technologies and trends shaping the web development landscape.",
    date: "Nov 2024",
    readTime: "6 min read",
    tag: "Web Dev",
  },
  {
    title: "Mastering TypeScript Patterns",
    excerpt: "Advanced TypeScript patterns and techniques for building type-safe applications.",
    date: "Oct 2024",
    readTime: "10 min read",
    tag: "TypeScript",
  },
  {
    title: "Cloud Architecture Best Practices",
    excerpt: "Designing resilient and scalable cloud infrastructure for modern applications.",
    date: "Sep 2024",
    readTime: "12 min read",
    tag: "Cloud",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Blog
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Latest <span className="italic text-gradient">thoughts</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {post.tag}
                </span>
                <span className="text-xs text-muted-foreground">
                  {post.date} · {post.readTime}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300 flex items-start justify-between gap-4">
                {post.title}
                <ArrowUpRight className="w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 border border-border text-foreground font-medium rounded-md hover:bg-secondary transition-all duration-300">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
