import PageLayout from "@/components/PageLayout";
import { Download } from "lucide-react";

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

const Resume = () => {
  return (
    <PageLayout title="Resume">
      <div className="max-w-2xl mx-auto">
        {/* Download button */}
        <div className="text-center mb-8">
          <button className="pixel-btn bg-primary text-primary-foreground inline-flex items-center gap-2">
            <Download size={14} />
            <span>Download PDF</span>
          </button>
        </div>

        {/* Experience */}
        <div className="art-frame bg-card p-6 mb-8">
          <h3 className="font-pixel text-[10px] text-primary mb-6">★ EXPERIENCE ★</h3>
          <div className="space-y-6">
            {experience.map((item, index) => (
              <div key={index} className="relative pl-6 border-l-4 border-secondary">
                <div className="absolute left-[-10px] top-0 w-4 h-4 bg-primary pixel-border-sm" />
                <p className="font-pixel text-[8px] text-muted-foreground mb-1">
                  {item.period}
                </p>
                <h4 className="font-pixel text-[10px] text-foreground mb-1">
                  {item.role}
                </h4>
                <p className="font-serif text-primary italic mb-2">{item.company}</p>
                <p className="font-serif text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="art-frame bg-card p-6">
          <h3 className="font-pixel text-[10px] text-primary mb-6">★ EDUCATION ★</h3>
          <div className="space-y-6">
            {education.map((item, index) => (
              <div key={index} className="relative pl-6 border-l-4 border-accent">
                <div className="absolute left-[-10px] top-0 w-4 h-4 bg-accent pixel-border-sm" />
                <p className="font-pixel text-[8px] text-muted-foreground mb-1">
                  {item.period}
                </p>
                <h4 className="font-pixel text-[10px] text-foreground mb-1">
                  {item.degree}
                </h4>
                <p className="font-serif text-primary italic">{item.school}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="text-center mt-8">
          <p className="font-pixel text-[8px] text-muted-foreground">
            🏆 ACHIEVEMENT UNLOCKED: CAREER MODE 🏆
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Resume;
