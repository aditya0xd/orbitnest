import {
  motion,
  useScroll,
  useTransform,
  Variants,
  useReducedMotion,
} from "framer-motion";
import type { MotionValue } from "framer-motion";

import { useRef } from "react";

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

  const buttonVariants: Variants = prefersReducedMotion
    ? {}
    : {
        hover: {
          y: -2,
          scale: 1.03,
          boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
          transition: { type: "spring", stiffness: 300, damping: 18 },
        },
        tap: { scale: 0.97 },
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
          <motion.button
            variants={buttonVariants}
            whileHover={prefersReducedMotion ? undefined : "hover"}
            whileTap={prefersReducedMotion ? undefined : "tap"}
            className="px-8 py-4 text-md cursor-pointer rounded-lg font-semibold"
            style={{
              backgroundColor: "var(--orbitnest-accent)",
              color: "white",
            }}
          >
            Get a Free Funnel Audit
          </motion.button>

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

export function HeroBackground({
  scrollYProgress,
  prefersReducedMotion,
}: {
  scrollYProgress: MotionValue<number>;
  prefersReducedMotion: boolean;
}) {
  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1 */}
      <motion.div
        className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full blur-3xl will-change-transform"
        style={{
          y: prefersReducedMotion ? 0 : blobY1,
          backgroundColor: "var(--orbitnest-accent)",
          opacity: 0.25,
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, 80, 0], scale: [1, 1.15, 1] }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute top-1/3 -right-40 w-[480px] h-[480px] rounded-full blur-3xl will-change-transform"
        style={{
          y: prefersReducedMotion ? 0 : blobY2,
          backgroundColor: "#7ccdff",
          opacity: 0.2,
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, -70, 0], scale: [1, 1.1, 1] }
        }
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <OrbitnestTextBackground
        scrollYProgress={scrollYProgress}
        prefersReducedMotion={prefersReducedMotion}
      />
    </div>
  );
}

export function OrbitnestTextBackground({
  scrollYProgress,
  prefersReducedMotion,
}: {
  scrollYProgress: MotionValue<number>;
  prefersReducedMotion: boolean;
}) {
  const x = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 2]);

  return (
    <motion.svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={prefersReducedMotion ? undefined : { x, y, rotate }}
    >
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className="font-bold tracking-[0.18em]"
        style={{
          fontSize: "clamp(72px, 16vw, 180px)",
          color: "var(--orbitnest-accent)",
        }}
        animate={
          prefersReducedMotion
            ? { opacity: 0.06 }
            : { opacity: [0.05, 0.12, 0.05] }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ORBITNEST
      </motion.text>
    </motion.svg>
  );
}
