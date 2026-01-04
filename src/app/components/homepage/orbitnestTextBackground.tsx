import type { MotionValue } from "framer-motion";
import { useTransform, motion } from "framer-motion";

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
