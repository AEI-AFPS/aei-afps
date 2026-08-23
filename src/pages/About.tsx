import { Layout } from '../components/layout/Layout';
import { CertificationsBar } from '../components/home/CertificationsBar';
import { CheckCircle, Target, Eye, Users, Flame } from 'lucide-react';

const milestones = [
  { year: '2000', title: 'Company Founded',       description: 'Established in Hyderabad with a vision to provide safety solutions.' },
  { year: '2005', title: 'DGMS Approval',         description: 'Received first DGMS approval for fire protection systems.' },
  { year: '2010', title: 'ISO Certification',     description: 'Achieved ISO 9001 and ISO 14001 certifications.' },
  { year: '2015', title: 'Pan-India Expansion',   description: 'Extended service network across all major mining regions.' },
  { year: '2020', title: '1000+ Installations',   description: 'Milestone of 1000+ successful system installations.' },
];

const whyPoints = [
  'DGMS-approved systems meeting all safety regulations',
  'Customized solutions for all HEMM types',
  'Quick response time for service and support',
  'Competitive pricing without compromising quality',
  'Experienced team of engineers and technicians',
  'Comprehensive after-sales service and maintenance',
];

const About = () => {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative bg-navy-dark py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top-left, hsl(6 85% 42% / 0.15), transparent 60%)' }}
        />
        <div className="h-0.5 w-full bg-gradient-flame absolute top-0" />

        <div className="container-full relative z-10">
          <p className="text-flame-orange text-sm font-semibold uppercase tracking-[0.2em] mb-3 animate-fade-down">
            Who We Are
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-5 animate-fade-up leading-tight">
            About <span className="text-gradient-flame">Associated Engg.</span>
          </h1>
          <p className="text-lg text-white/55 max-w-3xl animate-fade-up delay-200">
            India's trusted partner for automatic fire protection systems in the mining and construction industry.
          </p>
        </div>
      </section>

      {/* ── Company Overview ── */}
      <section className="section-padding">
        <div className="container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
            <div className="animate-slide-right">
              <p className="text-flame-orange text-sm font-semibold uppercase tracking-[0.2em] mb-3">Our Story</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Two Decades of Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground text-base lg:text-lg leading-relaxed">
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

            {/* Stats grid */}
            <div className="bg-navy-dark rounded-2xl p-8 border border-white/8 relative overflow-hidden animate-slide-left">
              <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
              <div className="relative grid grid-cols-2 gap-8">
                {[
                  { value: '20+',  label: 'Years Experience' },
                  { value: '1000+',label: 'Installations' },
                  { value: '100+', label: 'Clients' },
                  { value: '24/7', label: 'Support' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-heading text-4xl lg:text-5xl font-bold text-gradient-flame">{stat.value}</p>
                    <p className="text-sm text-white/50 mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="section-padding bg-muted/40">
        <div className="container-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                icon: Eye,
                title: 'Our Vision',
                text: "To be India's most trusted provider of fire safety solutions for heavy machinery, setting industry standards for quality, innovation, and customer service.",
              },
              {
                icon: Target,
                title: 'Our Mission',
                text: 'To protect lives and assets through innovative fire protection technology, delivering reliable solutions that exceed regulatory requirements and customer expectations.',
              },
            ].map((item) => (
              <div key={item.title} className="group bg-card border border-border/50 rounded-2xl p-8 lg:p-10 card-beam hover-lift relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-flame-crimson/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 bg-flame-crimson/10 border border-flame-crimson/20 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-flame-crimson" />
                </div>
                <h3 className="font-heading text-2xl lg:text-3xl font-semibold mb-4 group-hover:text-flame-crimson transition-colors">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-flame group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose AEI ── */}
      <section className="section-padding">
        <div className="container-full">
          <div className="text-center mb-12">
            <p className="text-flame-orange text-sm font-semibold uppercase tracking-[0.2em] mb-3">Our Advantages</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">Why Choose AEI?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {whyPoints.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-card border border-border/50 rounded-xl hover:border-flame-crimson/30 hover:bg-flame-crimson/3 transition-all duration-200">
                <CheckCircle className="h-5 w-5 text-flame-orange shrink-0 mt-0.5" />
                <p className="text-foreground text-sm lg:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section-padding bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container-full relative z-10">
          <div className="text-center mb-12">
            <p className="text-flame-orange text-sm font-semibold uppercase tracking-[0.2em] mb-3">Company History</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white">Our Journey</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 lg:gap-10 mb-8 last:mb-0 group">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-gradient-flame rounded-full flex items-center justify-center shrink-0 shadow-flame group-hover:scale-110 transition-transform duration-300">
                    <span className="font-heading font-bold text-white text-xs leading-tight text-center">{milestone.year}</span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-flame-crimson/40 to-transparent mt-2 min-h-[3rem]" />
                  )}
                </div>
                <div className="pb-8 pt-2">
                  <h3 className="font-heading text-lg lg:text-xl font-semibold text-white group-hover:text-flame-orange transition-colors">{milestone.title}</h3>
                  <p className="text-white/50 mt-1 text-sm lg:text-base">{milestone.description}</p>
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
