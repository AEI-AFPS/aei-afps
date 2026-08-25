import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";
import { useNavigate } from "react-router-dom";
import { Product, categories } from "../../types";
import { Flame, Package, ArrowRight, X } from "lucide-react";
import { Button } from "../ui/button";

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black dark:text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export function ExpandableProductGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState<Product | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm h-full w-full z-[100]"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[101] p-4 md:p-10">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 md:top-6 md:right-6 items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full h-10 w-10 backdrop-blur-md border border-white/10 z-[102] transition-colors"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5" />
            </motion.button>

            <motion.div
              layoutId={`card-${active.id}-${id}`}
              ref={ref}
              className="w-full max-w-[900px] flex flex-col bg-card border border-border/50 rounded-none sm:rounded-3xl overflow-hidden shadow-2xl"
              style={{ height: "min(95dvh, 900px)" }}
            >
              {/* Cover image — tall */}
              <motion.div
                layoutId={`image-container-${active.id}-${id}`}
                className="relative w-full flex-shrink-0 bg-gradient-to-br from-navy-dark to-[#1a0a0a]"
                style={{ height: "clamp(200px, 38vh, 360px)" }}
              >
                {active.imageUrl && active.imageUrl !== '/placeholder.svg' ? (
                  <motion.img
                    layoutId={`image-${active.id}-${id}`}
                    src={active.imageUrl}
                    alt={active.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-flame-crimson/5">
                    <div className="w-20 h-20 bg-flame-crimson/15 border border-flame-crimson/25 rounded-3xl flex items-center justify-center">
                      <Flame className="h-10 w-10 text-flame-orange" />
                    </div>
                  </div>
                )}
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-flame z-10" />
                {/* Gradient fade at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card/70 to-transparent z-10" />
              </motion.div>

              {/* Fixed header */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 px-6 sm:px-8 pt-5 pb-4 border-b border-border/50 flex-shrink-0">
                <div>
                  {categories.find(c => c.id === active.category) && (
                    <motion.span
                      layoutId={`category-${active.id}-${id}`}
                      className="inline-block text-[10px] font-semibold uppercase tracking-wider bg-flame-crimson/10 text-flame-orange border border-flame-crimson/20 px-2.5 py-1 rounded-full mb-2"
                    >
                      {categories.find(c => c.id === active.category)?.name}
                    </motion.span>
                  )}
                  <motion.h3
                    layoutId={`title-${active.id}-${id}`}
                    className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-foreground leading-tight"
                  >
                    {active.title}
                  </motion.h3>
                </div>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.1 } }}
                  className="flex-shrink-0"
                >
                  <Button
                    className="bg-gradient-flame text-white hover:scale-105 transition-transform border-0 rounded-full px-6 shadow-flame whitespace-nowrap"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (active && typeof active === "object") {
                        const cat = categories.find(c => c.id === active.category);
                        const params = new URLSearchParams({
                          type: "product",
                          name: active.title,
                          category: cat?.name ?? "",
                          desc: active.description ?? "",
                        });
                        setActive(null);
                        navigate(`/contact?${params.toString()}`);
                      }
                    }}
                  >
                    Request Quote
                  </Button>
                </motion.div>
              </div>

              {/* Scrollable content area */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-6 sm:px-8 py-5 space-y-6">
                <motion.p
                  layoutId={`description-${active.id}-${id}`}
                  className="text-muted-foreground text-base sm:text-lg leading-relaxed"
                >
                  {active.description}
                </motion.p>

                {active.features && active.features.length > 0 && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h4 className="text-foreground font-semibold mb-4 text-lg">Key Features &amp; Specifications</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-6">
                      {active.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-muted/30 p-3.5 rounded-xl border border-border/40">
                          <Package className="h-5 w-5 text-flame-orange shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80 leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10 w-full">
        {products.map((product) => (
          <motion.li
            layoutId={`card-${product.id}-${id}`}
            key={product.id}
            onClick={() => setActive(product)}
            className="group flex flex-col bg-card border border-border/50 hover:border-flame-orange/40 rounded-2xl cursor-pointer hover:shadow-elevated transition-all duration-300 overflow-hidden list-none"
          >
            {/* Image — fluid aspect ratio so it scales with card width */}
            <motion.div
              layoutId={`image-container-${product.id}-${id}`}
              className="relative w-full bg-gradient-to-br from-navy-dark to-[#1a0a0a] overflow-hidden"
              style={{ aspectRatio: "16/9" }}
            >
              {product.imageUrl && product.imageUrl !== '/placeholder.svg' ? (
                <motion.img
                  layoutId={`image-${product.id}-${id}`}
                  src={product.imageUrl}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              ) : (
                <>
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-flame-crimson/15 border border-flame-crimson/25 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Flame className="h-8 w-8 text-flame-orange" />
                    </div>
                  </div>
                </>
              )}
              {categories.find(c => c.id === product.category) && (
                <motion.div
                  layoutId={`category-${product.id}-${id}`}
                  className="absolute bottom-3 left-4 z-10"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-flame-crimson/20 text-flame-orange border border-flame-crimson/20 px-2.5 py-1 rounded-full backdrop-blur-md">
                    {categories.find(c => c.id === product.category)?.name}
                  </span>
                </motion.div>
              )}
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-flame" />
            </motion.div>

            {/* Card body */}
            <div className="p-6 sm:p-7 flex flex-col flex-1">
              <motion.h3
                layoutId={`title-${product.id}-${id}`}
                className="font-heading text-xl lg:text-2xl text-foreground mb-3 group-hover:text-flame-orange transition-colors duration-300 leading-snug"
              >
                {product.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${product.id}-${id}`}
                className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-1"
              >
                {product.description}
              </motion.p>

              <div className="flex items-center gap-2 text-sm font-semibold text-flame-orange mt-auto group-hover:gap-3 transition-all duration-200">
                View Product Details
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
