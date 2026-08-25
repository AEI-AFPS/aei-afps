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

  const numItems = clients.length;
  // Calculate dynamic duration based on the number of items to maintain a consistent speed
  const duration = numItems * 1.5;

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

      <div className="w-full relative z-10 max-w-7xl mx-auto py-10">
        <div 
          className="carousel-container mx-auto"
          style={{
            '--num': numItems,
            '--wd': 150,
            '--duration': `${duration}s`,
          } as React.CSSProperties}
        >
          <ul className="gallery">
            {clients.map((client, idx) => (
              <li 
                key={idx} 
                className="gallery-card"
                style={{ '--timer': idx + 1 } as React.CSSProperties}
              >
                <img src={client.image} alt={client.name} />
                {/* Optional: Show name below the logo, or keep it clean just with logos */}
                <p className="name-label text-center text-xs mt-6 text-foreground font-medium transition-opacity duration-300">
                  {client.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .carousel-container {
            display: flex;
            align-items: flex-start;
            height: 300px;
            overflow: hidden;
            mask-image: linear-gradient(to right, transparent, #000 15% 85%, transparent); 
            -webkit-mask-image: linear-gradient(to right, transparent, #000 15% 85%, transparent); 
            --item-gap: 200px; /* Fixed physical distance between items */
        }

        .carousel-container .gallery {
            list-style-type: none;
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            position: relative;
            perspective: 40em; 
            margin: 0;
            padding: 0;
        }

        .carousel-container .gallery .gallery-card {
            width: calc(var(--wd) * 1px);
            position: absolute;
            transform-style: preserve-3d;
            /* Centers the card exactly on its 'left' coordinate */
            margin-left: calc(var(--wd) * -0.5px);

            animation: slide var(--duration) linear infinite, scaleEffect var(--duration) ease-in-out infinite;
            animation-delay: calc(var(--duration) * ((var(--timer) - 1) / var(--num) - 1));
            transition: transform 0.25s ease-in-out;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .carousel-container .gallery .gallery-card img {
            width: 100%;
            height: auto;
            max-height: 80px;
            object-fit: contain;
            /* Added reflection as requested */
            -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.2));
            /* We remove the background box and box-shadow to keep it clean */
        }

        @keyframes slide {
            from {
                left: calc(50% + (var(--num) * var(--item-gap)) / 2);
            }
            to {
                left: calc(50% - (var(--num) * var(--item-gap)) / 2);
            }
        }

        @keyframes scaleEffect {
            0%, 25%, 75%, 100% {
                transform: scale(1) rotateY(0deg);
                z-index: 0; 
                filter: grayscale(1) opacity(0.3);
            }

            35% {
                transform: scale(1.25) rotateY(-45deg);
                z-index: 5;
                filter: grayscale(1) opacity(0.6);
            }

            50% {
                transform: scale(1.8) rotateY(0deg);
                z-index: 10;
                filter: grayscale(0) opacity(1);
            }

            65% {
                transform: scale(1.25) rotateY(45deg);
                z-index: 5;
                filter: grayscale(1) opacity(0.6);
            }    
        }

        /* Show the name label only when the item is scaled up */
        .carousel-container .gallery .gallery-card .name-label {
            animation: showName var(--duration) ease-in-out infinite;
            animation-delay: calc(var(--duration) * ((var(--timer) - 1) / var(--num) - 1));
        }

        @keyframes showName {
            0%,
            40%,
            60%,
            100% {
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
        }

        /* Pause animation only when hovering over a specific logo */
        .carousel-container .gallery:has(.gallery-card:hover) .gallery-card,
        .carousel-container .gallery:has(.gallery-card:hover) .gallery-card .name-label {
            animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
