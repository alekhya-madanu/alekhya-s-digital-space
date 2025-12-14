const About = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Cloud Services",
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              About Me
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8">
              Crafting digital<br />
              <span className="italic text-gradient">experiences</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate developer focused on building products that 
                combine beautiful design with robust functionality. With years 
                of experience in full-stack development, I bring ideas to life 
                through clean, efficient code.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                writing about software development, or contributing to open-source 
                projects that make a positive impact.
              </p>
            </div>
          </div>

          <div className="lg:pl-12">
            <p className="text-foreground text-sm tracking-[0.2em] uppercase mb-6">
              Technologies
            </p>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-foreground font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
