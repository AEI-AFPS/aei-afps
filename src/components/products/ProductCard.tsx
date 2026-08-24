import { Product, categories } from '../../types';
import { ArrowRight, Flame, Package } from 'lucide-react';
import { GlowingEffect } from '../ui/glowing-effect';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const category = categories.find((c) => c.id === product.category);

  return (
    <div className="group block cursor-pointer h-full" onClick={() => onViewDetails(product)}>
      <div className="relative p-[2px] rounded-2xl h-full flex flex-col">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
        <div className="relative z-10 bg-card border border-border/50 rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-elevated transition-shadow duration-300">
          
          {/* Cover image area */}
          <div className="relative h-48 md:h-56 bg-gradient-to-br from-navy-dark to-[#1a0a0a] flex items-center justify-center overflow-hidden">
            {product.imageUrl && product.imageUrl !== '/placeholder.svg' ? (
              <img src={product.imageUrl} alt={product.title} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
            ) : (
              <>
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute inset-0 bg-flame-crimson/5 group-hover:bg-flame-crimson/10 transition-colors duration-500" />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-flame-crimson/15 border border-flame-crimson/25 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Flame className="h-8 w-8 text-flame-orange" />
                  </div>
                </div>
              </>
            )}

            {/* Tag chip */}
            {category && (
              <div className="absolute bottom-3 left-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-flame-crimson/20 text-flame-orange border border-flame-crimson/20 px-2 py-0.5 rounded-full backdrop-blur-md">
                  {category.name}
                </span>
              </div>
            )}

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-flame" />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <h2 className="font-heading text-lg lg:text-xl text-foreground mb-3 group-hover:text-flame-orange transition-colors duration-300 leading-snug">
              {product.title}
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-5 flex-1">
              {product.description}
            </p>

            {/* Key Features preview */}
            {product.features && product.features.length > 0 && (
              <div className="space-y-1.5 mb-5">
                {product.features.slice(0, 2).map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Package className="h-3.5 w-3.5 text-flame-orange shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{feat}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center gap-1.5 text-sm text-flame-orange font-semibold mt-auto">
              View Product Details
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
