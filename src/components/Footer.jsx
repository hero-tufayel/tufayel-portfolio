import { ArrowUp, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <div className="flex items-center gap-4">
      <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Abdul Aziz Tufayel. All rights reserved.
        </p>
        <a
          href="https://github.com/hero-tufayel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/80 hover:text-primary transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/abdul-aziz-tufayel-394776375/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/80 hover:text-primary transition-colors"
        >
          <Linkedin size={20} />
        </a>
      </div>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
}
