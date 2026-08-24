import { ClipboardCheck, PackageSearch, Target, Waypoints, Hand, BadgeCheck } from 'lucide-react';
import { GlowingEffect } from '../ui/glowing-effect';

const steps = [
  {
    id: '01',
    icon: ClipboardCheck,
    title: 'Machine Assessment',
    description: 'We thoroughly assess the size, type, and application of the vehicle to engineer a custom system.',
  },
  {
    id: '02',
    icon: PackageSearch,
    title: 'Component Placement',
    description: 'System components are meticulously positioned to never obstruct vehicle maintenance or daily operation.',
  },
  {
    id: '03',
    icon: Target,
    title: 'Nozzle & Detection Targeting',
    description: 'Heat detection wires and suppression nozzles are specifically targeted at identified high-risk fire zones.',
  },
  {
    id: '04',
    icon: Waypoints,
    title: 'Hose Routing',
    description: 'All hoses are strategically routed within the chassis to be fully protected from mechanical damage.',
  },
  {
    id: '05',
    icon: Hand,
    title: 'Accessible Actuators',
    description: 'Manual actuators are mounted in easily accessible locations for rapid emergency access by operators.',
  },
  {
    id: '06',
    icon: BadgeCheck,
    title: 'Customer Validation',
    description: "The final system configuration is thoroughly validated alongside the customer's onsite operations team.",
  },
];

export function InstallationProcess() {
  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden mt-16 md:mt-24">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="container-full relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-flame-orange text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Implementation
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            System Installation Process
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base lg:text-lg">
            Engineered for each individual machine and installed on-site for long-term reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative p-[2px] rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
              <GlowingEffect spread={30} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
              <div className="bg-card border border-border/50 rounded-2xl p-6 lg:p-8 h-full relative overflow-hidden z-10 flex flex-col items-start shadow-sm">
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-12 h-12 bg-flame-crimson/10 rounded-xl flex items-center justify-center text-flame-crimson">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className="font-heading text-4xl font-bold text-muted-foreground/10 group-hover:text-flame-orange/20 transition-colors">
                    {step.id}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
