import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">{product.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center rounded-lg">
              <span className="font-heading text-4xl text-muted-foreground/50">AEI</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-2">Description</h4>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          {product.features && product.features.length > 0 && (
            <div>
              <h4 className="font-heading text-lg font-semibold mb-3">Key Features</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <Button variant="hero" size="lg" asChild className="flex-1">
              <Link to="/contact" onClick={onClose}>
                Enquire Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
