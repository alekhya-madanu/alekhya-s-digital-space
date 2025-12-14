const GalleryHeader = () => {
  return (
    <header className="text-center py-8 md:py-12 relative z-10">
      <div className="pixel-border bg-card inline-block px-6 md:px-12 py-4 md:py-6">
        <h1 className="font-pixel text-sm md:text-xl text-primary uppercase tracking-wider">
          Alekhya's Gallery
        </h1>
        <p className="font-serif text-base md:text-lg text-muted-foreground mt-2 italic">
          A collection of digital curiosities
        </p>
      </div>

      {/* Decorative pixel corners */}
      <div className="absolute top-4 left-4 w-4 h-4 border-l-4 border-t-4 border-primary hidden md:block" />
      <div className="absolute top-4 right-4 w-4 h-4 border-r-4 border-t-4 border-primary hidden md:block" />
    </header>
  );
};

export default GalleryHeader;
