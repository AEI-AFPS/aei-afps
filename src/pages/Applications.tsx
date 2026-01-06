import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Mountain, Building2, Factory, HardHat, Wrench } from 'lucide-react';

const machineryTypes = [
  { name: 'Excavators', icon: Truck },
  { name: 'Dozers', icon: Truck },
  { name: 'Dump Trucks', icon: Truck },
  { name: 'Loaders', icon: Truck },
  { name: 'Graders', icon: Truck },
  { name: 'Drill Rigs', icon: Wrench },
  { name: 'Cranes', icon: HardHat },
  { name: 'Compactors', icon: Truck },
];

const sectors = [
  {
    name: 'Mining',
    icon: Mountain,
    description: 'Open-cast and underground mining operations with heavy earth-moving machinery.',
    applications: ['Coal mines', 'Iron ore mines', 'Limestone quarries', 'Bauxite mines'],
  },
  {
    name: 'Construction',
    icon: Building2,
    description: 'Large-scale construction projects requiring heavy equipment safety.',
    applications: ['Highway construction', 'Dam projects', 'Building construction', 'Infrastructure'],
  },
  {
    name: 'Industrial',
    icon: Factory,
    description: 'Industrial facilities with material handling and processing equipment.',
    applications: ['Steel plants', 'Power plants', 'Cement factories', 'Port operations'],
  },
];

const Applications = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container-industrial px-4">
          <h1 className="font-heading text-4xl md:text-5xl text-secondary-foreground mb-4">
            Applications
          </h1>
          <p className="text-lg text-industrial-concrete max-w-2xl">
            Our fire protection and safety systems are designed for diverse heavy machinery across multiple industries.
          </p>
        </div>
      </section>

      {/* Machinery Types */}
      <section className="section-padding">
        <div className="container-industrial">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8 text-center">
            Machinery We Protect
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Our systems are compatible with all types of Heavy Earth Moving Machinery (HEMM) used in mining and construction.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {machineryTypes.map((machinery) => (
              <div
                key={machinery.name}
                className="bg-card rounded-lg p-6 card-shadow text-center hover:elevated-shadow transition-shadow"
              >
                <machinery.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                <p className="font-medium text-foreground">{machinery.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section-padding bg-muted">
        <div className="container-industrial">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-12 text-center">
            Industry Sectors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <div key={sector.name} className="bg-card rounded-lg p-8 card-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <sector.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  {sector.name}
                </h3>
                <p className="text-muted-foreground mb-4">{sector.description}</p>
                <ul className="space-y-2">
                  {sector.applications.map((app) => (
                    <li key={app} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Requirements */}
      <section className="section-padding">
        <div className="container-industrial">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              DGMS Compliance
            </h2>
            <p className="text-muted-foreground mb-8">
              The Directorate General of Mines Safety (DGMS) mandates fire protection systems for heavy machinery 
              in mining operations. Our AFPS systems meet all DGMS guidelines, ensuring your equipment is compliant 
              and your operators are protected.
            </p>
            <div className="bg-primary/10 rounded-lg p-6 mb-8">
              <p className="text-sm text-foreground">
                <strong>DGMS Circular No. 05/2013:</strong> Mandates installation of automatic fire detection 
                and suppression systems on all heavy earth-moving machinery in open-cast mines.
              </p>
            </div>
            <Button variant="hero" size="lg" asChild>
              <Link to="/products?category=fire-protection">
                View Fire Protection Systems
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-industrial text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-secondary-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-industrial-concrete max-w-2xl mx-auto mb-8">
            Our engineering team can design and implement fire protection systems tailored to your specific machinery and operational requirements.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Contact Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Applications;
