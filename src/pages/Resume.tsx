import React from "react";
import PageLayout from "@/components/PageLayout";
import { Download } from "lucide-react";

const experience = [
  {
    role: "Associate - Search Engineering Team, ML Division",
    company: "Goldman Sachs | Hyderabad",
    period: "Jan 2024 – Present",
    points: [
      "🤖 Worked on GenAI platform providing search services on internal and public domain financial data in a conversational setting",
      "⚙️ Built resiliency and configurability into the platform across all services",
      "🔧 Built a custom gRPC ratelimit service that fits into an EnvoyProxy service mesh with throttling based on customizable user configs",
      "🚀 Implemented service discovery based blue green deployment technique with automated service discovery plane and dynamic routing through Envoy, reducing downtime and optimizing release processes",
      "📊 Streamlined logging infrastructure using BigQuery and Fluentd, significantly improving platform observability",
    ],
  },
  {
    role: "Analyst - Search Engineering Team, ML Division",
    company: "Goldman Sachs | Hyderabad",
    period: "July 2021 – Jan 2024",
    points: [
      "🔍 Worked on GS's internal search engine making multiple formats of structured and unstructured data searchable",
      "⚡ Pioneered team's first Spark pipeline for trade processing, slashing processing time by nearly 50% and doubling data throughput",
      "🎯 Devised MapReduce job for precise result pages via document clustering, cleaning up broken links worth almost 1 million links",
      "💪 Strengthened voice pipeline with Flink data streams and Kafka integration, increasing success rate by 15%",
      "⚙️ Engineered real-time data pipeline with multi-threaded Java programs, seamlessly integrating multiple data sources",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Honeywell | Bengaluru",
    period: "May 2020 – July 2020",
    points: [
      "🧠 Project based on NLP and Information Retrieval techniques",
      "📈 Tested topic modeling and cluster analysis to group a database of JIRA error reports using various word embeddings",
      "💡 Built a predictive model to suggest viable solutions for given errors",
      "🛠️ Worked with ML frameworks such as Pandas, Numpy, Scikit-learn, NLTK and Keras",
    ],
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering Science",
    school: "Indian Institute of Technology (IIT), Hyderabad",
    period: "Aug 2017 - Apr 2021",
    courses: [
      "📚 Data Structures | Algorithms | DBMS | Computer Networks",
      "🔒 Wireless Networks & Security | OS | Algorithmic Techniques for Massive Data",
      "🖼️ Intro to Image Processing | Representation Learning | Data Mining",
      "🤖 Foundations of Machine Learning | Fraud Analytics",
    ],
  },
];

const projects = [
  {
    title: "Continual Learning for Network Data",
    guide: "Dr. Bheemarjuna Reddy",
    points: [
      "🎓 Final year research project implementing different Continual Learning algorithms on network flow data",
      "👁️ Tuned algorithms focused on Computer Vision to fit network data use case",
      "⭐ Notable algorithm implemented was Class-Balancing Reservoir Sampling",
    ],
  },
  {
    title: "ML Based Network Traffic Classifier",
    points: [
      "🧠 Built a Deep Neural Network to classify network traffic based on flow statistics from Wireshark",
      "📡 Used to prioritize bandwidth allocation and improve application performance",
      "🎮 Explored Reinforcement Learning strategies using Markov Decision Process as a mathematical framework",
    ],
  },
];

const skills = {
  languages: "Java | Python | C++ | C | Shell | Javascript",
  techStack: "MapReduce | Spark | Flink | Kafka | Spring Boot | Hbase | Hive | Presto | HDFS | React.js | Vue.js",
};

const Resume = () => {
  return (
    <PageLayout title="Resume">
      <div className="max-w-2xl mx-auto">
        {/* Download button */}
        <div className="text-center mb-8">
          <a 
            href="/AlekhyaMadanu_Resume.pdf" 
            download="AlekhyaMadanu_Resume.pdf"
            className="pixel-btn bg-primary text-primary-foreground inline-flex items-center gap-2"
          >
            <Download size={14} />
            <span>Download PDF</span>
          </a>
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
                <p className="font-serif text-primary italic mb-3">{item.company}</p>
                <ul className="space-y-2">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="font-serif text-muted-foreground text-sm flex items-start gap-2">
                      <span className="mt-0.5">{point.split(' ')[0]}</span>
                      <span>{point.split(' ').slice(1).join(' ')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="art-frame bg-card p-6 mb-8">
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
                <p className="font-serif text-primary italic mb-3">{item.school}</p>
                {item.courses && (
                  <div className="mt-2">
                    <p className="font-pixel text-[8px] text-muted-foreground mb-2">📖 Courses:</p>
                    <ul className="space-y-1.5">
                      {item.courses.map((course, courseIndex) => (
                        <li key={courseIndex} className="font-serif text-muted-foreground text-sm flex items-start gap-2">
                          <span className="mt-0.5">{course.split(' ')[0]}</span>
                          <span>{course.split(' ').slice(1).join(' ')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="art-frame bg-card p-6 mb-8">
          <h3 className="font-pixel text-[10px] text-primary mb-6">★ PROJECTS ★</h3>
          <div className="space-y-6">
            {projects.map((item, index) => (
              <div key={index} className="relative pl-6 border-l-4 border-secondary">
                <div className="absolute left-[-10px] top-0 w-4 h-4 bg-secondary pixel-border-sm" />
                <h4 className="font-pixel text-[10px] text-foreground mb-1">
                  {item.title}
                </h4>
                {item.guide && (
                  <p className="font-pixel text-[8px] text-muted-foreground mb-3">
                    Guide: {item.guide}
                  </p>
                )}
                <ul className="space-y-2">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="font-serif text-muted-foreground text-sm flex items-start gap-2">
                      <span className="mt-0.5">{point.split(' ')[0]}</span>
                      <span>{point.split(' ').slice(1).join(' ')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="art-frame bg-card p-6 mb-8">
          <h3 className="font-pixel text-[10px] text-primary mb-6">★ SKILLS ★</h3>
          <div className="space-y-4">
            <div>
              <p className="font-pixel text-[8px] text-muted-foreground mb-3">💻 Languages:</p>
              <p className="font-serif text-sm text-foreground">{skills.languages}</p>
            </div>
            <div>
              <p className="font-pixel text-[8px] text-muted-foreground mb-3">🛠️ Tech Stack:</p>
              <p className="font-serif text-sm text-foreground">{skills.techStack}</p>
            </div>
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
