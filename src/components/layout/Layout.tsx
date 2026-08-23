import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileBottomNav } from './MobileBottomNav';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pb-[72px] lg:pb-0">
        {children}
      </main>
      {/* Desktop footer */}
      <div className="hidden lg:block">
        <Footer />
      </div>
      {/* Mobile: minimal footer above bottom nav */}
      <div className="lg:hidden pb-[72px]">
        <Footer />
      </div>
      {/* PhonePe-style mobile bottom nav */}
      <MobileBottomNav />
    </div>
  );
}
