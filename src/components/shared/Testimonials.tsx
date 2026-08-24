import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const clients = [
  { name: "BEML", image: "https://ui-avatars.com/api/?name=BEML&background=ea580c&color=fff&font-size=0.33&size=256" },
  { name: "TELCON", image: "https://ui-avatars.com/api/?name=TEL&background=ea580c&color=fff&font-size=0.33&size=256" },
  { name: "Gainwell", image: "https://ui-avatars.com/api/?name=GWL&background=ea580c&color=fff&font-size=0.33&size=256" },
  { name: "Sany", image: "https://ui-avatars.com/api/?name=SANY&background=ea580c&color=fff&font-size=0.33&size=256" },
  { name: "Scania", image: "https://ui-avatars.com/api/?name=SCA&background=ea580c&color=fff&font-size=0.33&size=256" },
  { name: "SAIL", image: "https://ui-avatars.com/api/?name=SAIL&background=ea580c&color=fff&font-size=0.33&size=256" },
  { name: "NMDC", image: "https://ui-avatars.com/api/?name=NMDC&background=ea580c&color=fff&font-size=0.33&size=256" },
  { name: "Western Coalfields", image: "https://ui-avatars.com/api/?name=WCL&background=ea580c&color=fff&font-size=0.33&size=256" },
  { name: "Northern Coalfields", image: "https://ui-avatars.com/api/?name=NCL&background=ea580c&color=fff&font-size=0.33&size=256" },
  { name: "Singareni Collieries", image: "https://ui-avatars.com/api/?name=SCCL&background=ea580c&color=fff&font-size=0.33&size=256" },
  { name: "TATA", image: "https://ui-avatars.com/api/?name=TATA&background=ea580c&color=fff&font-size=0.33&size=256" },
  { name: "Hindustan Zinc", image: "https://ui-avatars.com/api/?name=HZL&background=ea580c&color=fff&font-size=0.33&size=256" },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-muted/40 relative overflow-hidden">
      <div className="absolute inset-0 particle-bg opacity-40 pointer-events-none" />
      
      <div className="container-full relative z-10 mb-12">
        <div className="text-center">
          <p className="text-flame-orange text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Our Clients
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl text-foreground">
            Trusted by <span className="text-gradient-flame">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base lg:text-lg">
            We are proud to protect the heavy machinery and fleets of some of the largest organizations in the industry.
          </p>
        </div>
      </div>

      <div className="w-full relative z-10 max-w-7xl mx-auto">
        <InfiniteMovingCards
          items={clients}
          direction="right"
          speed="normal"
        />
      </div>
    </section>
  );
}
