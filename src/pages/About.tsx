import PageLayout from "@/components/PageLayout";

const skills = [
  { name: "JavaScript", level: 5 },
  { name: "TypeScript", level: 5 },
  { name: "React", level: 5 },
  { name: "Node.js", level: 4 },
  { name: "Python", level: 4 },
  { name: "Cloud", level: 4 },
];

const About = () => {
  return (
    <PageLayout title="About Me">
      <div className="max-w-2xl mx-auto">
        {/* Character card */}
        <div className="art-frame bg-card p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Avatar */}
            <div className="pixel-border bg-secondary p-4 mx-auto md:mx-0">
              <span className="text-6xl block">🧑‍💻</span>
            </div>

            {/* Stats */}
            <div className="flex-1 w-full">
              <h2 className="font-pixel text-xs text-primary mb-2">ALEKHYA</h2>
              <p className="font-pixel text-[8px] text-muted-foreground mb-4">
                LV. 99 DEVELOPER
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-pixel text-[8px] text-foreground w-12">HP</span>
                  <div className="flex-1 h-3 bg-muted pixel-border-sm">
                    <div className="h-full bg-secondary" style={{ width: "100%" }} />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-pixel text-[8px] text-foreground w-12">MP</span>
                  <div className="flex-1 h-3 bg-muted pixel-border-sm">
                    <div className="h-full bg-primary" style={{ width: "85%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="art-frame bg-card p-6 mb-8">
          <h3 className="font-pixel text-[10px] text-primary mb-4">★ BIO ★</h3>
          <div className="font-serif text-foreground leading-relaxed space-y-4">
            <p>
              I'm a passionate developer focused on building products that combine 
              beautiful design with robust functionality. With years of experience 
              in full-stack development, I bring ideas to life through clean, efficient code.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, writing 
              about software development, or contributing to open-source projects.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="art-frame bg-card p-6">
          <h3 className="font-pixel text-[10px] text-primary mb-4">★ SKILLS ★</h3>
          <div className="space-y-3">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-3">
                <span className="font-pixel text-[8px] text-foreground w-24">
                  {skill.name}
                </span>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${i < skill.level ? "text-primary" : "text-muted"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
