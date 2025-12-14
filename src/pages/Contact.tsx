import PageLayout from "@/components/PageLayout";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#", username: "@alekhya" },
  { icon: Linkedin, label: "LinkedIn", href: "#", username: "alekhya" },
  { icon: Twitter, label: "Twitter", href: "#", username: "@alekhya" },
  { icon: Mail, label: "Email", href: "mailto:hello@alekhya.dev", username: "hello@alekhya.dev" },
];

const Contact = () => {
  return (
    <PageLayout title="Contact">
      <div className="max-w-md mx-auto">
        {/* Message box */}
        <div className="art-frame bg-card p-6 mb-8">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💌</span>
            <div className="font-serif text-foreground leading-relaxed">
              <p className="mb-2">Hey there, traveler!</p>
              <p>
                Thanks for stopping by my little corner of the internet. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="space-y-4">
          {socialLinks.map(({ icon: Icon, label, href, username }) => (
            <a
              key={label}
              href={href}
              className="art-frame bg-card p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform group"
            >
              <div className="pixel-border-sm bg-secondary p-3">
                <Icon size={20} className="text-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-pixel text-[10px] text-foreground group-hover:text-primary transition-colors">
                  {label}
                </p>
                <p className="font-serif text-sm text-muted-foreground">
                  {username}
                </p>
              </div>
              <span className="font-pixel text-[8px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </a>
          ))}
        </div>

        {/* Easter egg */}
        <div className="text-center mt-12">
          <p className="font-pixel text-[8px] text-muted-foreground animate-blink">
            ♪ YOU'VE GOT MAIL ♪
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
