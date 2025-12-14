import { useState, useEffect } from "react";

const PixelCharacter = () => {
  const [position, setPosition] = useState(50);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isWalking, setIsWalking] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setDirection("left");
        setIsWalking(true);
        setPosition((p) => Math.max(5, p - 5));
      } else if (e.key === "ArrowRight") {
        setDirection("right");
        setIsWalking(true);
        setPosition((p) => Math.min(95, p + 5));
      }
    };

    const handleKeyUp = () => {
      setIsWalking(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div
      className="fixed bottom-24 z-20 transition-all duration-100"
      style={{ left: `${position}%`, transform: "translateX(-50%)" }}
    >
      <div className={`text-4xl ${isWalking ? "animate-bounce-pixel" : ""} ${direction === "left" ? "scale-x-[-1]" : ""}`}>
        🧑‍💻
      </div>
      <p className="font-pixel text-[8px] text-center text-muted-foreground mt-1 hidden md:block">
        ← → to move
      </p>
    </div>
  );
};

export default PixelCharacter;
