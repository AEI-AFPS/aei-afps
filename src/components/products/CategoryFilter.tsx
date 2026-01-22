import { categories } from '../../data/products';
import { cn } from '../../lib/utils';
import { Flame, Shield, Radar, Lightbulb } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame,
  Shield,
  Radar,
  Lightbulb,
};

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="bg-card rounded-lg p-6 card-shadow">
      <h3 className="font-heading text-lg font-semibold mb-4">Categories</h3>
      <div className="space-y-2">
        <button
          onClick={() => onSelectCategory(null)}
          className={cn(
            "w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors",
            selectedCategory === null
              ? "bg-primary text-primary-foreground"
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
                "w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors flex items-center gap-3",
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
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
