import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden card-shadow hover:elevated-shadow transition-all duration-300 group">
      <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
          <span className="font-heading text-2xl text-muted-foreground/50">AEI</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {product.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {product.description}
        </p>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full"
          onClick={() => onViewDetails(product)}
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
