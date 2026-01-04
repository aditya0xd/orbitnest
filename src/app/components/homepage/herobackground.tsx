import { motion, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { OrbitnestTextBackground } from "./orbitnestTextBackground";

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
