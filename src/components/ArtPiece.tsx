import { useState } from "react";
import { Link } from "react-router-dom";

interface ArtPieceProps {
  title: string;
  description: string;
  to: string;
  color: "terracotta" | "sage" | "dusty-rose" | "olive";
  icon: string;
  position?: "left" | "center" | "right";
}

const colorMap = {
  terracotta: "bg-primary",
  sage: "bg-secondary",
  "dusty-rose": "bg-accent",
  olive: "bg-muted",
};

const ArtPiece = ({ title, description, to, color, icon, position = "center" }: ArtPieceProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Frame */}
      <div className="art-frame p-1 bg-card transition-transform duration-200 hover:-translate-y-2">
        {/* Canvas */}
        <div className={`${colorMap[color]} aspect-[3/4] relative overflow-hidden`}>
          {/* Pixel art content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl md:text-8xl" style={{ imageRendering: "pixelated" }}>
              {icon}
            </span>
          </div>

          {/* Scanlines overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)"
            }}
          />

          {/* Hover overlay */}
          <div className={`absolute inset-0 bg-foreground/80 flex flex-col items-center justify-center p-4 transition-opacity duration-200 ${isHovered ? "opacity-100" : "opacity-0"}`}>
            <p className="font-pixel text-[8px] md:text-[10px] text-background text-center leading-relaxed animate-blink">
              PRESS A TO ENTER
            </p>
          </div>
        </div>
      </div>

      {/* Plaque */}
      <div className="mt-4 pixel-border-sm bg-card p-3 text-center">
        <h3 className="font-pixel text-[10px] md:text-xs text-foreground uppercase tracking-wide">
          {title}
        </h3>
        <p className="font-serif text-sm text-muted-foreground mt-1 italic">
          {description}
        </p>
      </div>

      {/* Shadow on floor */}
      <div className="h-4 bg-foreground/10 mx-4 blur-sm" />
    </Link>
  );
};

export default ArtPiece;
