import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Download } from 'lucide-react';
import { Button } from '../../components/ui/button';
import logo from '/tiff_logo_optimized.webp';
import { cn } from '../../lib/utils';
import { CONTACT_PHONE, CONTACT_EMAIL } from '../../config/contact';

const navLinks = [
  { name: 'Home',         path: '/' },
  { name: 'About Us',     path: '/about' },
  { name: 'Products',     path: '/products' },
  { name: 'Advancements', path: '/advancements' },
  { name: 'Projects',     path: '/projects' },
  { name: 'Applications', path: '/applications' },
  { name: 'Contact',      path: '/contact' },
];

export function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ── Top Bar ──────────────────────────────────────────────────────── */}
      <div className="hidden lg:block bg-muted border-b border-border">
        <div className="container-full flex items-center justify-between py-1.5 text-xs">
          <div className="hidden md:flex items-center gap-5 text-muted-foreground">
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="flex items-center gap-1.5 hover:text-flame-orange transition-colors"
            >
              <Phone className="h-3 w-3" />
              {CONTACT_PHONE}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-1.5 hover:text-flame-orange transition-colors"
            >
              <Mail className="h-3 w-3" />
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-flame-crimson font-semibold">DGMS Approved</span>
            <span className="text-muted-foreground/30">|</span>
            <span className="text-muted-foreground">20+ Years of Excellence</span>
          </div>
        </div>
      </div>

      {/* ── Main Nav ─────────────────────────────────────────────────────── */}
      <nav
        className={cn(
          'w-full transition-all duration-300 border-b border-transparent',
          scrolled
            ? 'bg-background/80 backdrop-blur-md shadow-sm border-border/50'
            : 'bg-background'
        )}
      >
        <div className={cn(
          "container-full flex items-center justify-between transition-all duration-300",
          scrolled ? "py-0.5" : "py-1.5"
        )}>
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group shrink-0 transition-all duration-300"
          >
            <div className="relative">
              <img
                src={logo}
                alt="AEI FireGuard"
                className={cn(
                  "w-auto object-contain transition-all duration-300 origin-left",
                  scrolled ? "h-11 scale-80" : "h-14 scale-100"
                )}
              />
              <div className="absolute inset-0 bg-flame-crimson/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

          </Link>

          {/* ── Desktop Navigation ── */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'relative font-medium text-sm uppercase tracking-wide px-3 xl:px-4 py-2 rounded-md transition-all duration-200',
                  location.pathname === link.path
                    ? 'text-flame-orange bg-muted'
                    : 'text-foreground/80 hover:text-flame-orange hover:bg-muted/50'
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-flame rounded-full" />
                )}
              </Link>
            ))}
            <Button
              asChild
              className="ml-3 bg-gradient-flame text-white font-semibold text-sm px-5 py-2 rounded-lg shadow-flame hover:shadow-glow hover:scale-105 transition-all duration-200 border-0"
            >
              <a href="/aei-afps.pdf" download="aei-afps.pdf" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Get Brochure
              </a>
            </Button>
          </div>

          {/* Mobile: show only brand on sm, nothing extra on lg+ */}
          <div className="lg:hidden flex items-center">
            {/* Theme Toggle for mobile removed */}
          </div>
        </div>
      </nav>
    </header>
  );
}
