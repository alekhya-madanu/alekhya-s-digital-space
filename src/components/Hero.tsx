import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
          Developer & Creator
        </p>
        
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
          <span className="text-foreground">Alekhya</span>
          <span className="text-gradient italic"> Dev</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
          Building elegant solutions through code. Passionate about creating 
          meaningful digital experiences that make a difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
          <a
            href="#about"
            className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            Learn More
          </a>
          <a
            href="#blog"
            className="px-8 py-4 border border-border text-foreground font-medium rounded-md hover:bg-secondary transition-all duration-300"
          >
            Read Blog
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
