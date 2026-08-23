import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { ProductCard } from '../components/products/ProductCard';
import { ProductModal } from '../components/products/ProductModal';
import { CategoryFilter } from '../components/products/CategoryFilter';
import { products, categories, Product } from '../data/products';
import { Filter, X, Package } from 'lucide-react';
import { Button } from '../components/ui/button';
import { cn } from '../lib/utils';

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
      {/* ── Hero ── */}
      <section className="relative bg-navy-dark py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="h-0.5 w-full bg-gradient-flame absolute top-0" />
        <div className="container-full relative z-10">
          <p className="text-flame-orange text-sm font-semibold uppercase tracking-[0.2em] mb-3 animate-fade-down">Catalogue</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-4 animate-fade-up leading-tight">
            Our <span className="text-gradient-flame">Products</span>
          </h1>
          <p className="text-lg text-white/55 max-w-2xl animate-fade-up delay-200">
            Comprehensive range of safety and fire protection solutions for heavy earth-moving machinery.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="section-padding">
        <div className="container-full">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 xl:w-72 shrink-0">
              <div className="sticky top-24">
                <CategoryFilter
                  selectedCategory={selectedCategory}
                  onSelectCategory={handleCategoryChange}
                />
              </div>
            </aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden flex items-center justify-between mb-2">
              <Button
                variant="outline"
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center gap-2 border-flame-crimson/30 text-flame-crimson hover:bg-flame-crimson/10"
              >
                <Filter className="h-4 w-4" />
                Filter
                {selectedCategory && (
                  <span className="bg-flame-crimson text-white text-xs px-2 py-0.5 rounded-full">1</span>
                )}
              </Button>
              {currentCategory && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Showing:</span>
                  <span className="font-medium text-flame-orange">{currentCategory.name}</span>
                </div>
              )}
            </div>

            {/* Mobile Filter Drawer */}
            <div
              className={cn(
                'fixed inset-0 z-50 lg:hidden transition-opacity duration-300',
                isFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              )}
            >
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)} />
              <div
                className={cn(
                  'absolute left-0 top-0 bottom-0 w-80 bg-card p-6 transition-transform duration-300 shadow-2xl',
                  isFilterOpen ? 'translate-x-0' : '-translate-x-full'
                )}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-lg font-semibold">Filter Products</h3>
                  <button onClick={() => setIsFilterOpen(false)} className="p-1 hover:text-flame-crimson transition-colors">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <CategoryFilter
                  selectedCategory={selectedCategory}
                  onSelectCategory={handleCategoryChange}
                />
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Package className="h-4 w-4" />
                  <span>
                    Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
                    {currentCategory && <> in <span className="text-flame-orange font-medium">{currentCategory.name}</span></>}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredProducts.map((product, i) => (
                  <div
                    key={product.id}
                    className="animate-fade-up"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <ProductCard
                      product={product}
                      onViewDetails={setSelectedProduct}
                    />
                  </div>
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
