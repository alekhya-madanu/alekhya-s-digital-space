import { Download, Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Leading frontend development and architecting scalable solutions.",
  },
  {
    role: "Full Stack Developer",
    company: "Startup Inc",
    period: "2020 - 2022",
    description: "Built and maintained multiple web applications from scratch.",
  },
  {
    role: "Software Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description: "Developed client-facing applications and internal tools.",
  },
];

const education = [
  {
    degree: "Master's in Computer Science",
    school: "University Name",
    period: "2016 - 2018",
  },
  {
    degree: "Bachelor's in Software Engineering",
    school: "University Name",
    period: "2012 - 2016",
  },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Resume
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8">
            My <span className="italic text-gradient">journey</span>
          </h2>
          
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-primary" size={24} />
              <h3 className="font-serif text-2xl">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="absolute left-[-5px] top-0 w-2 h-2 bg-primary rounded-full" />
                  <p className="text-xs text-muted-foreground mb-1">{item.period}</p>
                  <h4 className="text-foreground font-medium text-lg">{item.role}</h4>
                  <p className="text-primary text-sm mb-2">{item.company}</p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary" size={24} />
              <h3 className="font-serif text-2xl">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="absolute left-[-5px] top-0 w-2 h-2 bg-primary rounded-full" />
                  <p className="text-xs text-muted-foreground mb-1">{item.period}</p>
                  <h4 className="text-foreground font-medium text-lg">{item.degree}</h4>
                  <p className="text-primary text-sm">{item.school}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
