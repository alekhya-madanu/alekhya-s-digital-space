import { Link } from "react-router-dom";
import GalleryFloor from "@/components/GalleryFloor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Wall texture */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C8B7C' fill-opacity='0.2'%3E%3Cpath d='M0 0h20v20H0zM20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <main className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        {/* Bio Card */}
        <div className="max-w-2xl mx-auto">
          <div className="pixel-border bg-card p-8 md:p-12 animate-fade-up">
            {/* Name */}
            <h1 className="font-pixel text-lg md:text-xl text-primary mb-2">
              ALEKHYA
            </h1>
            <p className="font-pixel text-[8px] md:text-[10px] text-muted-foreground mb-8">
              DEVELOPER • CREATOR • NERD
            </p>

            {/* Bio */}
            <div className="space-y-4 text-foreground/90 font-serif text-lg leading-relaxed mb-10">
              <p>
                Hey there! I'm a developer who loves building things on the web. 
                When I'm not coding, you'll find me exploring new technologies, 
                playing retro games, or getting lost in a good book.
              </p>
              <p>
                I believe in creating experiences that are both beautiful and functional. 
                This little corner of the internet is where I share my thoughts, 
                projects, and journey through tech.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/blog"
                className="pixel-btn bg-terracotta text-cream hover:bg-terracotta/90"
              >
                📜 Read my Blog
              </Link>
              <Link
                to="/resume"
                className="pixel-btn bg-sage text-cream hover:bg-sage/90"
              >
                ✨ View Resume
              </Link>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center mt-12 gap-4">
            <span className="text-2xl">🌿</span>
            <span className="text-2xl">✨</span>
            <span className="text-2xl">🪴</span>
          </div>
        </div>
      </main>

      <GalleryFloor />
    </div>
  );
};

export default Index;
