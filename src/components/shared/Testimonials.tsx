import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const clients = [
  { name: "BEML", image: "/clients/beml.svg" },
  { name: "TELCON", image: "/clients/telcon.png" },
  { name: "Gainwell", image: "/clients/gainwell.svg" },
  { name: "Sany", image: "/clients/sany.png" },
  { name: "Scania", image: "/clients/scania.png" },
  { name: "SAIL", image: "/clients/sail.svg" },
  { name: "NMDC", image: "/clients/nmdc.svg" },
  { name: "Western Coalfields", image: "/clients/western_coalfields.svg" },
  { name: "Northern Coalfields", image: "/clients/northern_coalfields.svg" },
  { name: "Singareni Collieries", image: "/clients/singareni_collieries.svg" },
  { name: "TATA", image: "/clients/tata.png" },
  { name: "Hindustan Zinc", image: "/clients/hindustan_zinc.png" },
  { name: "BGR Mining", image: "/clients/bgr_mining.svg" },
  { name: "SMS", image: "/clients/sms.svg" },
  { name: "Mahanadi Coalfields", image: "/clients/mahanadi_coalfields.png" },
  { name: "PC Patel", image: "/clients/pc_patel.svg" },
  { name: "Rithwik", image: "/clients/rithwik.svg" },
  { name: "Buildcon", image: "/clients/buildcon.svg" },
  { name: "XCMG", image: "/clients/xcmg.png" },
  { name: "DMM", image: "/clients/dmm.svg" },
  { name: "Dev Mining", image: "/clients/dev_mining.svg" },
  { name: "VPR Mining", image: "/clients/vpr_mining.svg" },
  { name: "RK Group", image: "/clients/rk_group.svg" }
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
