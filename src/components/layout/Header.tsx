import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, ChevronRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import logo from '/tiff_logo.jpg';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home',         path: '/' },
  { name: 'About Us',     path: '/about' },
  { name: 'Products',     path: '/products' },
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
      <div className="bg-navy-dark border-b border-white/5">
        <div className="container-full flex items-center justify-between py-1.5 text-xs">
          <div className="hidden md:flex items-center gap-5 text-white/60">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 hover:text-flame-orange transition-colors"
            >
              <Phone className="h-3 w-3" />
              +91 98765 43210
            </a>
            <a
              href="mailto:info@aei-afps.com"
              className="flex items-center gap-1.5 hover:text-flame-orange transition-colors"
            >
              <Mail className="h-3 w-3" />
              info@aei-afps.com
            </a>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-flame-crimson font-semibold">DGMS Approved</span>
            <span className="text-white/30">|</span>
            <span className="text-white/50">20+ Years of Excellence</span>
          </div>
        </div>
      </div>

      {/* ── Main Nav ─────────────────────────────────────────────────────── */}
      <nav
        className={cn(
          'w-full transition-all duration-300',
          scrolled
            ? 'glass-dark shadow-lg'
            : 'bg-gradient-to-r from-navy-dark via-navy-mid to-navy-dark'
        )}
      >
        <div className="container-full flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative">
              <img
                src={logo}
                alt="AEI FireGuard"
                className="w-10 h-10 object-contain"
              />
              <div className="absolute inset-0 bg-flame-crimson/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="hidden sm:block">
              <p className="font-heading text-lg font-bold text-white leading-tight tracking-wide group-hover:text-flame-orange transition-colors">
                Associated Engg. Industries
              </p>
              <p className="text-[10px] text-flame-orange uppercase tracking-[0.25em] font-semibold">
                AFPS Division
              </p>
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
                    ? 'text-flame-orange bg-white/8'
                    : 'text-white/80 hover:text-flame-orange hover:bg-white/5'
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
              <Link to="/contact" className="flex items-center gap-1">
                Get Quote
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile: show only brand on sm, nothing extra on lg+ */}
          <div className="lg:hidden">
            {/* Mobile nav is handled by MobileBottomNav — no hamburger needed */}
          </div>
        </div>
      </nav>
    </header>
  );
}
