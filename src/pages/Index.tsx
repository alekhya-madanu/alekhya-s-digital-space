import ArtPiece from "@/components/ArtPiece";
import GalleryFloor from "@/components/GalleryFloor";
import GalleryHeader from "@/components/GalleryHeader";
import PixelCharacter from "@/components/PixelCharacter";

const artworks = [
  {
    title: "The Blog",
    description: "Thoughts & musings",
    to: "/blog",
    color: "terracotta" as const,
    icon: "📜",
  },
  {
    title: "About Me",
    description: "Who am I?",
    to: "/about",
    color: "sage" as const,
    icon: "🌿",
  },
  {
    title: "Resume",
    description: "My journey",
    to: "/resume",
    color: "dusty-rose" as const,
    icon: "✨",
  },
  {
    title: "Contact",
    description: "Say hello",
    to: "/contact",
    color: "olive" as const,
    icon: "💌",
  },
];

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

      <GalleryHeader />

      {/* Gallery wall with art pieces */}
      <main className="container mx-auto px-4 md:px-6 pb-32 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {artworks.map((art, index) => (
            <div
              key={art.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s`, opacity: 0, animationFillMode: "forwards" }}
            >
              <ArtPiece {...art} />
            </div>
          ))}
        </div>

        {/* Museum bench */}
        <div className="mt-16 flex justify-center">
          <div className="pixel-border bg-warm-brown w-48 h-6" />
        </div>

        {/* Tip text */}
        <div className="text-center mt-8">
          <p className="font-pixel text-[8px] md:text-[10px] text-muted-foreground animate-blink">
            ▼ CLICK AN ART PIECE TO EXPLORE ▼
          </p>
        </div>
      </main>

      <PixelCharacter />
      <GalleryFloor />

      {/* Decorative plant */}
      <div className="fixed bottom-24 right-8 text-4xl z-10 hidden md:block">
        🪴
      </div>
    </div>
  );
};

export default Index;
