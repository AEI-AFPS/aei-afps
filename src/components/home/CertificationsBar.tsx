import { ShieldCheck, Award, CheckCircle } from 'lucide-react';

const certifications = [
  {
    icon: ShieldCheck,
    name: 'ISO 9001:2015',
    description: 'Quality Management',
  },
  {
    icon: Award,
    name: 'ISO 14001:2015',
    description: 'Environmental Management',
  },
  {
    icon: CheckCircle,
    name: 'DGMS Approved',
    description: 'Mines Safety Certified',
  },
];

export function CertificationsBar() {
  return (
    <section className="bg-secondary py-8">
      <div className="container-industrial px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <cert.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-secondary-foreground">{cert.name}</p>
                <p className="text-sm text-industrial-concrete">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
