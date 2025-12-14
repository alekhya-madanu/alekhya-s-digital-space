import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BlogSection from "@/components/BlogSection";
import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <BlogSection />
        <ResumeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
