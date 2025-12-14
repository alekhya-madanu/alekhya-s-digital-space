import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import GalleryFloor from "./GalleryFloor";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Wall texture */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C8B7C' fill-opacity='0.2'%3E%3Cpath d='M0 0h20v20H0zM20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <header className="relative z-10 py-6 px-4 md:px-6">
        <div className="container mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 pixel-btn bg-card text-foreground hover:bg-muted"
          >
            <ArrowLeft size={14} />
            <span>Back</span>
          </Link>
        </div>
      </header>

      {/* Title plaque */}
      <div className="text-center mb-8 relative z-10">
        <div className="pixel-border bg-card inline-block px-8 py-4">
          <h1 className="font-pixel text-xs md:text-sm text-primary uppercase tracking-wider">
            {title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-4 md:px-6 pb-32 relative z-10">
        {children}
      </main>

      <GalleryFloor />
    </div>
  );
};

export default PageLayout;
