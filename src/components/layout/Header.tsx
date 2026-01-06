import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Bird } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Applications', path: '/applications' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container-industrial flex items-center justify-between py-2 px-4 text-sm">
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@aei-afps.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@aei-afps.com</span>
            </a>
          </div>
          <div className="text-center md:text-right w-full md:w-auto">
            <span className="text-primary font-semibold">DGMS Approved</span>
            <span className="mx-2 text-muted-foreground">|</span>
            <span>20+ Years of Excellence</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-secondary via-industrial-dark to-secondary border-b border-border/50 shadow-lg">
        <div className="container-industrial flex items-center justify-between py-3 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            {/* Phoenix Logo */}
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-primary via-phoenix-ember to-phoenix-glow rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-phoenix transition-all duration-300 group-hover:scale-105">
                <Bird className="h-8 w-8 text-white transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 w-14 h-14 bg-gradient-to-br from-primary to-phoenix-glow rounded-lg blur-md opacity-40 group-hover:opacity-60 transition-opacity -z-10" />
            </div>
            <div className="hidden sm:block">
              <p className="font-heading text-xl font-bold text-white leading-tight tracking-wide group-hover:text-primary transition-colors">
                Associated Engg. Industries
              </p>
              <p className="text-xs text-primary uppercase tracking-[0.2em] font-medium">
                AFPS Division
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative font-medium text-sm uppercase tracking-wide px-4 py-2 rounded-md transition-all duration-300",
                  location.pathname === link.path
                    ? "text-primary bg-white/10"
                    : "text-white/90 hover:text-primary hover:bg-white/5"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-phoenix-glow rounded-full" />
                )}
              </Link>
            ))}
            <Button variant="hero" size="default" asChild className="ml-4 shadow-phoenix">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-secondary/95 backdrop-blur-sm border-t border-white/10 animate-fade-in">
            <div className="container-industrial py-4 px-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "font-medium text-base py-3 px-4 uppercase tracking-wide transition-all rounded-md",
                    location.pathname === link.path
                      ? "text-primary bg-white/10"
                      : "text-white/90 hover:text-primary hover:bg-white/5"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="hero" size="lg" asChild className="mt-4 shadow-phoenix">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
