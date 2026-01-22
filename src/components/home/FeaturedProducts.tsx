import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { ArrowRight, Flame, Shield, Radar, Lightbulb } from 'lucide-react';

const categories = [
  {
    id: 'fire-protection',
    name: 'Fire Protection Systems',
    description: 'DGMS-approved automatic fire suppression for HEMM',
    icon: Flame,
    color: 'bg-orange-500/10 text-orange-600',
  },
  {
    id: 'safety-monitoring',
    name: 'Safety & Monitoring',
    description: 'Cameras, alarms, and fatigue detection systems',
    icon: Shield,
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    id: 'proximity-detection',
    name: 'Proximity Detection',
    description: 'Radar sensors and collision avoidance systems',
    icon: Radar,
    color: 'bg-green-500/10 text-green-600',
  },
  {
    id: 'industrial-lighting',
    name: 'Industrial Lighting',
    description: 'Heavy-duty LED work lights for night operations',
    icon: Lightbulb,
    color: 'bg-primary/10 text-primary',
  },
];

export function FeaturedProducts() {
  return (
    <section className="section-padding">
      <div className="container-industrial">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Our Product Range
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive safety solutions designed for the demanding environments of mining and construction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group bg-card rounded-lg p-6 card-shadow hover:elevated-shadow transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 ${category.color}`}>
                <category.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {category.description}
              </p>
              <div className="flex items-center text-primary text-sm font-medium">
                View Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
