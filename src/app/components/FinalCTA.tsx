import { motion, Variants } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import BookAuditButton from "./CTA/BookAuditButton";

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
          <BookAuditButton
            onClick={() => {
              const el = document.getElementById("contact-form");
              el?.scrollIntoView({ behavior: "smooth" });

              // wait for scroll, then focus
              setTimeout(() => {
                const input = document.getElementById(
                  "contact-first-name"
                ) as HTMLInputElement | null;
                input?.focus();
              }, 400);
            }}
          />

          <p className="text-sm text-neutral-400">
            Limited slots each week to ensure quality reviews
          </p>
        </div>
      </motion.div>
    </section>
  );
}
