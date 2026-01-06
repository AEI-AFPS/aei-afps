import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { ProductModal } from '@/components/products/ProductModal';
import { CategoryFilter } from '@/components/products/CategoryFilter';
import { products, categories, Product } from '@/data/products';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category')
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const category = searchParams.get('category');
    setSelectedCategory(category);
  }, [searchParams]);

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    if (categoryId) {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
    setIsFilterOpen(false);
  };

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const currentCategory = categories.find((c) => c.id === selectedCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container-industrial px-4">
          <h1 className="font-heading text-4xl md:text-5xl text-secondary-foreground mb-4">
            Our Products
          </h1>
          <p className="text-lg text-industrial-concrete max-w-2xl">
            Comprehensive range of safety and fire protection solutions for heavy earth-moving machinery.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-industrial">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24">
                <CategoryFilter
                  selectedCategory={selectedCategory}
                  onSelectCategory={handleCategoryChange}
                />
              </div>
            </aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden flex items-center justify-between mb-4">
              <Button
                variant="outline"
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filter
                {selectedCategory && (
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                    1
                  </span>
                )}
              </Button>
              {currentCategory && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Showing:</span>
                  <span className="font-medium">{currentCategory.name}</span>
                </div>
              )}
            </div>

            {/* Mobile Filter Drawer */}
            <div
              className={cn(
                "fixed inset-0 z-50 lg:hidden transition-opacity",
                isFilterOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              )}
            >
              <div className="absolute inset-0 bg-foreground/50" onClick={() => setIsFilterOpen(false)} />
              <div
                className={cn(
                  "absolute left-0 top-0 bottom-0 w-80 bg-card p-6 transition-transform",
                  isFilterOpen ? "translate-x-0" : "-translate-x-full"
                )}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-lg font-semibold">Filter Products</h3>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <CategoryFilter
                  selectedCategory={selectedCategory}
                  onSelectCategory={handleCategoryChange}
                />
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={setSelectedProduct}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </Layout>
  );
};

export default Products;
