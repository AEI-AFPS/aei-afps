import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Package, FolderOpen, Menu, Cpu, Wrench, Phone, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../../components/ui/sheet';

const mainNavItems = [
  { name: 'Home',     path: '/',         icon: Home },
  { name: 'About',    path: '/about',    icon: Info },
  { name: 'Products', path: '/products', icon: Package },
  { name: 'Projects', path: '/projects', icon: FolderOpen },
];

const menuItems = [
  { name: 'Advancements', path: '/advancements', icon: Cpu },
  { name: 'Applications', path: '/applications', icon: Wrench },
  { name: 'Contact',      path: '/contact',      icon: Phone },
];

export function MobileBottomNav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      aria-label="Mobile navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass-dark border-t border-white/10 safe-area-bottom"
    >
      <div className="flex items-stretch justify-around">
        {mainNavItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex flex-col items-center justify-center flex-1 py-2.5 gap-1 transition-all duration-200 relative group',
                isActive
                  ? 'text-flame-orange'
                  : 'text-white/50 hover:text-white/80'
              )}
            >
              {/* Active indicator */}
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-flame rounded-b-full" />
              )}

              {/* Icon with glow on active */}
              <span
                className={cn(
                  'relative flex items-center justify-center w-8 h-8 rounded-xl transition-all duration-200',
                  isActive
                    ? 'bg-flame-crimson/15 shadow-flame scale-110'
                    : 'group-hover:bg-white/5 group-hover:scale-105'
                )}
              >
                <item.icon
                  className={cn(
                    'h-5 w-5 transition-all duration-200',
                    isActive && 'animate-glow-pulse'
                  )}
                  strokeWidth={isActive ? 2.5 : 1.75}
                />
              </span>

              {/* Label */}
              <span
                className={cn(
                  'text-[10px] font-medium tracking-wide transition-all duration-200',
                  isActive ? 'font-semibold' : ''
                )}
              >
                {item.name}
              </span>
            </Link>
          );
        })}

        {/* Hamburger Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="flex flex-col items-center justify-center flex-1 py-2.5 gap-1 transition-all duration-200 relative group text-white/50 hover:text-white/80">
              <span className="relative flex items-center justify-center w-8 h-8 rounded-xl transition-all duration-200 group-hover:bg-white/5 group-hover:scale-105">
                <Menu className="h-5 w-5 transition-all duration-200" strokeWidth={1.75} />
              </span>
              <span className="text-[10px] font-medium tracking-wide transition-all duration-200">
                Menu
              </span>
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="rounded-t-2xl bg-background border-t border-border p-0 overflow-hidden">
            <SheetHeader className="p-4 border-b border-border/50">
              <SheetTitle className="text-left font-heading text-lg text-foreground">More Options</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col py-2 pb-6">
              {menuItems.map(item => {
                const isItemActive = location.pathname === item.path;
                return (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    onClick={() => setIsOpen(false)} 
                    className={cn(
                      "flex items-center gap-4 px-6 py-4 transition-colors",
                      isItemActive ? "bg-flame-crimson/5 text-flame-crimson border-l-2 border-flame-crimson" : "hover:bg-muted/50 text-foreground"
                    )}
                  >
                    <item.icon className={cn("h-5 w-5", isItemActive ? "text-flame-crimson" : "text-muted-foreground")} />
                    <span className="text-sm font-medium">{item.name}</span>
                    <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground/50" />
                  </Link>
                )
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
