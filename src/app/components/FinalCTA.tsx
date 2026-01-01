import { motion, Variants } from "framer-motion";
import { useReducedMotion } from "framer-motion";

export function FinalCTA() {
  const prefersReducedMotion = !!useReducedMotion();

  const containerVariants: Variants = prefersReducedMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      };

  const buttonVariants: Variants = prefersReducedMotion
    ? {}
    : {
        hover: {
          y: -2,
          scale: 1.02,
          boxShadow: "0 10px 24px rgba(0,0,0,0.25)",
          transition: { type: "spring", stiffness: 280, damping: 20 },
        },
        tap: { scale: 0.97 },
      };

  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "var(--orbitnest-text)" }}
    >
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={containerVariants}
      >
        {/* Headline */}
        <p className="text-2xl md:text-3xl leading-tight text-white">
          Let your website do the heavy lifting.
        </p>

        {/* CTA block */}
        <div className="space-y-4">
          <motion.button
            aria-label="Get a free funnel audit for your coaching business"
            variants={buttonVariants}
            whileHover={prefersReducedMotion ? undefined : "hover"}
            whileTap={prefersReducedMotion ? undefined : "tap"}
            className="
              px-8 py-4
              rounded-xl
              font-semibold
              tracking-tight
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/30
            "
            style={{
              backgroundColor: "var(--orbitnest-accent)",
              color: "white",
            }}
          >
            Get a Free Funnel Audit
          </motion.button>

          <p className="text-sm text-neutral-400">
            Limited slots each week to ensure quality reviews
          </p>
        </div>
      </motion.div>
    </section>
  );
}
