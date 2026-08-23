import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "AEI FireGuard's systems have been instrumental in securing our heavy machinery across multiple mining sites. Their DGMS-approved solutions give us complete peace of mind.",
    name: "Rajesh Kumar",
    title: "Chief Safety Officer, Coal India Ltd",
  },
  {
    quote:
      "The response time and installation quality from AEI is unmatched. We had their AFPS installed on 20 excavators, and the entire process was seamless and professional.",
    name: "Amit Patel",
    title: "Operations Head, L&T Construction",
  },
  {
    quote:
      "Their proximity detection systems combined with fire suppression are industry-leading. We've seen a massive drop in near-miss incidents since we partnered with AEI.",
    name: "Sanjay Reddy",
    title: "Director of Mining, NMDC",
  },
  {
    quote:
      "Robust, reliable, and rigorously tested. AEI understands the harsh conditions of open-cast mining better than anyone else in the market.",
    name: "Prakash Singh",
    title: "Fleet Manager, Tata Steel",
  },
  {
    quote:
      "Exceptional after-sales support. Whenever we need maintenance or refills, their pan-India service network ensures minimal downtime for our equipment.",
    name: "Vikram Malhotra",
    title: "Head of Procurement, Adani Enterprises",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-muted/40 relative overflow-hidden">
      <div className="absolute inset-0 particle-bg opacity-40 pointer-events-none" />
      
      <div className="container-full relative z-10 mb-12">
        <div className="text-center">
          <p className="text-flame-orange text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Client Success
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl text-foreground">
            Trusted by <span className="text-gradient-flame">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base lg:text-lg">
            See what our partners have to say about our fire protection systems and dedicated service.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
