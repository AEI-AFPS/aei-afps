import { Product } from '../../data/products';
import { ArrowRight, Flame } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <div className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover-lift card-beam transition-all duration-300 flex flex-col h-full">
      {/* Image / placeholder */}
      <div className="aspect-[4/3] bg-gradient-to-br from-navy-dark to-navy-light flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        {/* Glow on hover */}
        <div className="absolute inset-0 bg-flame-crimson/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-flame-crimson/15 border border-flame-crimson/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Flame className="h-8 w-8 text-flame-orange" />
          </div>
          <span className="font-heading text-white/30 text-xs uppercase tracking-widest">AEI Product</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading text-base lg:text-lg font-semibold text-foreground mb-2 group-hover:text-flame-crimson transition-colors duration-300 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed flex-1">
          {product.description}
        </p>
        <button
          className="flex items-center justify-center gap-2 w-full py-2.5 border border-flame-crimson/25 text-flame-crimson text-sm font-semibold rounded-xl hover:bg-flame-crimson hover:text-white hover:border-flame-crimson transition-all duration-200 mt-auto"
          onClick={() => onViewDetails(product)}
        >
          View Details
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Bottom accent */}
      <div className="h-0.5 bg-gradient-flame w-0 group-hover:w-full transition-all duration-500" />
    </div>
  );
}
