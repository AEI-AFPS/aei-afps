import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Package, Wrench, Phone } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { name: 'Home',    path: '/',             icon: Home    },
  { name: 'About',   path: '/about',        icon: Info    },
  { name: 'Products',path: '/products',     icon: Package },
  { name: 'Apply',   path: '/applications', icon: Wrench  },
  { name: 'Contact', path: '/contact',      icon: Phone   },
];

export function MobileBottomNav() {
  const location = useLocation();

  return (
    <nav
      aria-label="Mobile navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass-dark border-t border-white/10 safe-area-bottom"
    >
      <div className="flex items-stretch justify-around">
        {navItems.map((item) => {
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
      </div>
    </nav>
  );
}
