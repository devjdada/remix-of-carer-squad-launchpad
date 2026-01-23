import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programmes", path: "/programmes" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Mission & Vision", path: "/mission" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" },
    { name: "Admission Status", path: "/admission-status" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-gradient hover-glow transition-all duration-300 group-hover:scale-105 inline-block">
                CARER'S SQUAD
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.slice(0, -2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-secondary transition-colors rounded-lg hover:bg-muted"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/admission-status">
              <Button variant="outline" size="sm" className="ml-2">
                Check Status
              </Button>
            </Link>
            <Link to="/registration">
              <Button size="sm" className="ml-2 bg-accent text-accent-foreground hover:bg-accent/90 hover-glow">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-2 space-y-2">
              <Link to="/registration" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
