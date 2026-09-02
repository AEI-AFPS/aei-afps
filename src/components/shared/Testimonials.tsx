import { useTestimonialLogos } from '../../lib/store';

// Static fallback list — shown while loading or if no DB logos exist yet
const staticClients = [
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
  { name: "RK Group", image: "/clients/rk_group.svg" },
];

export function Testimonials() {
  const { data: dbLogos, isLoading } = useTestimonialLogos();

  // Use DB logos when available, fallback to static list while loading or empty
  const clients =
    !isLoading && dbLogos && dbLogos.length > 0
      ? dbLogos.map((l) => ({ name: l.name, image: l.image_url }))
      : staticClients;

  // Duplicate for seamless infinite loop
  const loopItems = [...clients, ...clients];

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

      <div className="relative z-10 w-full overflow-hidden logo-ticker-wrapper">
        <div className="logo-ticker">
          {loopItems.map((client, idx) => (
            <div key={idx} className="logo-ticker-item">
              <img src={client.image} alt={client.name} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .logo-ticker-wrapper {
          mask-image: linear-gradient(to right, transparent, #000 12% 88%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, #000 12% 88%, transparent);
        }

        .logo-ticker {
          display: flex;
          align-items: center;
          width: max-content;
          animation: ticker-scroll ${clients.length * 2.5}s linear infinite;
        }

        .logo-ticker:hover {
          animation-play-state: paused;
        }

        .logo-ticker-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 48px;
          flex-shrink: 0;
        }

        .logo-ticker-item img {
          height: 60px;
          width: auto;
          max-width: 130px;
          object-fit: contain;
        }

        @keyframes ticker-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
