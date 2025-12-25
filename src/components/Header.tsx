import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "home" },
    { href: "#projects", label: "projects" },
    { href: "#skills", label: "skills" },
    { href: "#about", label: "about-me" },
    { href: "#contacts", label: "contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 text-foreground font-semibold">
          <span className="text-primary">E</span>lias
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <span className="text-primary">#</span>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-background border-b border-border">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors text-lg"
              >
                <span className="text-primary">#</span>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
