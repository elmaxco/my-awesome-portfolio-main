import { Github, Linkedin, Mail } from "lucide-react";
import { profileLinks } from "@/lib/profileLinks";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="w-full mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              Designed & Built by Max Jacobsson
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              © {new Date().getFullYear()} Max Jacobsson. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={profileLinks.email}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href={profileLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={profileLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
