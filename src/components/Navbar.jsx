import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-500",
        isScrolled 
          ? "py-3 bg-background/90 backdrop-blur-xl shadow-lg border-b border-primary/10" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo with creative design */}
        <a
          className="text-xl font-bold flex items-center group"
          href="#hero"
        >
          <div className="relative">
            <span className="text-glow text-foreground transition-all duration-300 group-hover:text-primary">
              NextCode Gen
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </div>
          <span className="text-primary opacity-0 animate-fade-in-delay-1 ml-2 font-light">
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation with creative hover effects */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="relative text-foreground/80 hover:text-primary transition-all duration-300 group"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button with creative design */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={cn(
            "md:hidden p-3 rounded-full transition-all duration-300 relative overflow-hidden",
            "hover:bg-primary/10 hover:scale-110 active:scale-95",
            isMenuOpen ? "bg-primary/20" : "bg-background/50 backdrop-blur-sm"
          )}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <div className="relative w-6 h-6">
            <span className={cn(
              "absolute left-0 w-6 h-0.5 bg-foreground transition-all duration-300",
              isMenuOpen ? "rotate-45 top-3" : "top-2"
            )}></span>
            <span className={cn(
              "absolute left-0 w-6 h-0.5 bg-foreground transition-all duration-300 top-3",
              isMenuOpen ? "opacity-0" : "opacity-100"
            )}></span>
            <span className={cn(
              "absolute left-0 w-6 h-0.5 bg-foreground transition-all duration-300",
              isMenuOpen ? "-rotate-45 top-3" : "top-4"
            )}></span>
          </div>
        </button>

        {/* Mobile Menu with creative backdrop */}
        <div
          className={cn(
            "fixed inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center",
            "transition-all duration-500 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-2xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="relative text-foreground/80 hover:text-primary transition-all duration-300 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
