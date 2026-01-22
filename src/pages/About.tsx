import { Layout } from '../components/layout/Layout';
import { CertificationsBar } from '../components/home/CertificationsBar';
import { CheckCircle, Target, Eye, Users } from 'lucide-react';

const milestones = [
  { year: '2000', title: 'Company Founded', description: 'Established in Hyderabad with a vision to provide safety solutions.' },
  { year: '2005', title: 'DGMS Approval', description: 'Received first DGMS approval for fire protection systems.' },
  { year: '2010', title: 'ISO Certification', description: 'Achieved ISO 9001 and ISO 14001 certifications.' },
  { year: '2015', title: 'Pan-India Expansion', description: 'Extended service network across all major mining regions.' },
  { year: '2020', title: '1000+ Installations', description: 'Milestone of 1000+ successful system installations.' },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-industrial px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl text-secondary-foreground mb-6">
              About <span className="text-primary">Associated Engg. Industries</span>
            </h1>
            <p className="text-lg text-industrial-concrete">
              India's trusted partner for automatic fire protection systems in the mining and construction industry.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-industrial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                Two Decades of Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Associated Engg. Industries (AEI – AFPS Division) specializes in Automatic Fire Protection Systems 
                  for heavy earth-moving machinery. Headquartered in Uppal, Hyderabad, we have been serving the 
                  mining and construction industry for over two decades.
                </p>
                <p>
                  Our systems are designed to protect operators, equipment, and assets in high-risk environments. 
                  Every product we manufacture meets the stringent safety standards set by the Directorate General 
                  of Mines Safety (DGMS).
                </p>
                <p>
                  With a pan-India service network, we provide comprehensive support from installation to maintenance, 
                  ensuring your machinery remains protected at all times.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="font-heading text-4xl text-primary font-bold">20+</p>
                  <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-4xl text-primary font-bold">1000+</p>
                  <p className="text-sm text-muted-foreground mt-1">Installations</p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-4xl text-primary font-bold">100+</p>
                  <p className="text-sm text-muted-foreground mt-1">Clients</p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-4xl text-primary font-bold">24/7</p>
                  <p className="text-sm text-muted-foreground mt-1">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted">
        <div className="container-industrial">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-8 card-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be India's most trusted provider of fire safety solutions for heavy machinery, 
                setting industry standards for quality, innovation, and customer service.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 card-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To protect lives and assets through innovative fire protection technology, 
                delivering reliable solutions that exceed regulatory requirements and customer expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-industrial">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-12 text-center">
            Why Choose AEI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'DGMS-approved systems meeting all safety regulations',
              'Customized solutions for all HEMM types',
              'Quick response time for service and support',
              'Competitive pricing without compromising quality',
              'Experienced team of engineers and technicians',
              'Comprehensive after-sales service and maintenance',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary">
        <div className="container-industrial">
          <h2 className="font-heading text-3xl md:text-4xl text-secondary-foreground mb-12 text-center">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-primary-foreground text-sm">{milestone.year}</span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-industrial-steel mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-heading text-lg font-semibold text-secondary-foreground">{milestone.title}</h3>
                  <p className="text-industrial-concrete mt-1">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CertificationsBar />
    </Layout>
  );
};

export default About;
