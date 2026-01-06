import { Award, Clock, MapPin } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '20+ Years Experience',
    description: 'Over two decades of expertise in manufacturing fire protection systems for heavy machinery.',
  },
  {
    icon: Award,
    title: 'DGMS Approved',
    description: 'All our systems meet the stringent safety standards set by the Directorate General of Mines Safety.',
  },
  {
    icon: MapPin,
    title: 'Pan-India Service',
    description: 'Comprehensive service and support network across all major mining and industrial regions in India.',
  },
];

export function WhyAEI() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-industrial">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Why Choose <span className="text-primary">AEI</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            India's leading manufacturer of automatic fire protection systems for heavy earth-moving machinery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-card rounded-lg p-8 card-shadow hover:elevated-shadow transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
