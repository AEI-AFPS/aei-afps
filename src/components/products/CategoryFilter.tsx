import { categories } from '../../data/products';
import { cn } from '../../lib/utils';
import { Flame, Shield, Radar, Lightbulb, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame,
  Shield,
  Radar,
  Lightbulb,
  Sparkles,
};

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="bg-card border border-border/50 rounded-xl p-5">
      <h3 className="font-heading text-base font-semibold mb-4 uppercase tracking-wide">Categories</h3>
      <div className="space-y-1.5">
        <button
          onClick={() => onSelectCategory(null)}
          className={cn(
            "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
            selectedCategory === null
              ? "bg-gradient-flame text-white shadow-flame"
              : "hover:bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          All Products
        </button>
        {categories.map((category) => {
          const Icon = iconMap[category.icon];
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-3",
                selectedCategory === category.id
                  ? "bg-flame-crimson/15 text-flame-orange border border-flame-crimson/30"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {Icon && <Icon className="h-4 w-4" />}
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
