import PageLayout from "@/components/PageLayout";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable React Apps",
    date: "Dec 2024",
    excerpt: "Exploring best practices for structuring large-scale React projects with modern tooling and patterns.",
    tag: "React",
  },
  {
    title: "The Future of Web Development",
    date: "Nov 2024",
    excerpt: "A deep dive into emerging technologies and trends shaping the landscape of web development.",
    tag: "Web Dev",
  },
  {
    title: "Mastering TypeScript Patterns",
    date: "Oct 2024",
    excerpt: "Advanced TypeScript patterns and techniques for building type-safe applications that scale.",
    tag: "TypeScript",
  },
  {
    title: "Cloud Architecture Essentials",
    date: "Sep 2024",
    excerpt: "Designing resilient and scalable cloud infrastructure for modern applications.",
    tag: "Cloud",
  },
];

const Blog = () => {
  return (
    <PageLayout title="The Blog">
      <div className="max-w-2xl mx-auto space-y-6">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="art-frame bg-card p-6 cursor-pointer group hover:-translate-y-1 transition-transform"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-pixel text-[8px] bg-primary text-primary-foreground px-2 py-1">
                {post.tag}
              </span>
              <span className="font-pixel text-[8px] text-muted-foreground">
                {post.date}
              </span>
            </div>

            <h2 className="font-pixel text-[10px] md:text-xs text-foreground mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h2>

            <p className="font-serif text-muted-foreground leading-relaxed mb-4">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-2 text-primary font-pixel text-[8px]">
              <span>READ MORE</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        ))}

        <div className="text-center pt-8">
          <p className="font-pixel text-[8px] text-muted-foreground">
            ★ MORE POSTS COMING SOON ★
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
