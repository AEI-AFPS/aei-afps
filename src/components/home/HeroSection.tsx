import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 industrial-gradient" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Content */}
      <div className="container-industrial relative z-10 px-4 py-16 lg:py-24">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">DGMS Approved Systems</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary-foreground leading-tight mb-6">
            Automatic Fire Protection Systems for{' '}
            <span className="text-primary">Heavy Earth Moving Machinery</span>
          </h1>
          
          <p className="text-lg md:text-xl text-industrial-concrete mb-8 leading-relaxed max-w-2xl">
            Protecting mining and construction equipment with cutting-edge fire suppression technology. 
            Trusted by industry leaders across India for over two decades.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/products">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
