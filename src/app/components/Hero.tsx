import { HeroBackground } from "./homepage/herobackground";
import { motion, useScroll, Variants, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import BookAuditButton from "./CTA/BookAuditButton";

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = !!useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { staggerChildren: 0.15, delayChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: prefersReducedMotion ? 0 : 24,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
      style={{ backgroundColor: "var(--orbitnest-bg)" }}
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <HeroBackground
        scrollYProgress={scrollYProgress}
        prefersReducedMotion={prefersReducedMotion}
      />

      <motion.div className="relative z-20 max-w-3xl mx-auto text-center space-y-8">
        <motion.h1
          variants={itemVariants}
          className="text-md md:text-6xl lg:text-[25px] tracking-tight font-bold mb-25"
          style={{ color: "var(--orbitnest-text)" }}
        >
          ORBITNEST
        </motion.h1>
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl tracking-tight"
          style={{ color: "var(--orbitnest-text)" }}
        >
          Stop Selling Your{" "}
          <span className="font-semibold" style={{ color: "#3a3a3b" }}>
            Coaching in DMs
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl max-w-2xl mx-auto opacity-70"
          style={{ color: "var(--orbitnest-text-light)" }}
        >
          We build websites and funnels for fitness & health coaches that turn
          content into booked calls — without endless back-and-forth.
        </motion.p>

        {/* CTA BLOCK — restored */}
        <motion.div variants={itemVariants} className="pt-4 space-y-4">
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
              }, 1500);
            }}
          />

          <p
            className="text-sm"
            style={{ color: "var(--orbitnest-text-light)" }}
          >
            {" "}
          </p>

          <p
            className="text-sm"
            style={{ color: "var(--orbitnest-text-light)" }}
          >
            Built specifically for online fitness & health coaches
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
