import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { href: isHomePage ? "#home" : "/", label: "home", isRoute: !isHomePage },
    { href: isHomePage ? "#projects" : "/#projects", label: "projects", isRoute: false },
    { href: isHomePage ? "#skills" : "/#skills", label: "skills", isRoute: false },
    { href: isHomePage ? "#about" : "/#about", label: "about-me", isRoute: false },
    { href: isHomePage ? "#contacts" : "/#contacts", label: "contacts", isRoute: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 text-foreground font-semibold">
          <span className="text-primary"><img src="assets\meta\logo.png" alt="" style={{width:"35px"}} /></span>Giri
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <span className="text-primary">#</span>
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <span className="text-primary">#</span>
                {link.label}
              </a>
            )
          )}
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
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-lg"
                >
                  <span className="text-primary">#</span>
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-lg"
                >
                  <span className="text-primary">#</span>
                  {link.label}
                </a>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
