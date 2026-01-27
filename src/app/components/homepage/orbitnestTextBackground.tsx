import { motion, useSpring, useMotionValue, useTransform, useVelocity } from "framer-motion";
import { useEffect } from "react";

export function OrbitnestTextBackground({
  prefersReducedMotion,
}: {
  prefersReducedMotion: boolean;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Velocity tracking for 'Momentum' physics
  const velX = useVelocity(mouseX);
  const velY = useVelocity(mouseY);

  // Physics springs (different mass/tension for different feel)
  const springConfig = { damping: 30, stiffness: 120, mass: 1 };
  const floatSpring = { damping: 15, stiffness: 40 }; // Softer for floating
  
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const springVelX = useSpring(velX, { damping: 50, stiffness: 200 });

  // Physics mapping: Position -> Parallax
  const translateX = useTransform(springX, [-0.5, 0.5], [-90, 90]);
  const translateY = useTransform(springY, [-0.5, 0.5], [-70, 70]);
  
  // Physics mapping: Momentum -> Skew/Tilt (The 'leaning' effect)
  const skewX = useTransform(springVelX, [-1.5, 1.5], [-15, 15]);
  const rotateZ = useTransform(springVelX, [-1.5, 1.5], [-8, 8]);

  // Physics mapping: Proximity -> Scale (The 'Magnetic' effect)
  // Distance from center (0,0) ranges roughly from 0 to 0.7
  const distance = useTransform([springX, springY], ([x, y]) => 
    Math.sqrt(Math.pow(x as number, 2) + Math.pow(y as number, 2))
  );
  const magneticScale = useTransform(distance, [0, 0.7], [1.05, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) - 0.5);
      mouseY.set((clientY / innerHeight) - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden pointer-events-none z-0">
      {/* Deep Atmospheric Layer (The "Fog") */}
      <motion.div
        style={{
          x: prefersReducedMotion ? 0 : useTransform(springX, [-0.5, 0.5], [-40, 40]),
          y: prefersReducedMotion ? 0 : useTransform(springY, [-0.5, 0.5], [-35, 35]),
        }}
        className="absolute inset-0 flex items-center justify-center opacity-5"
      >
        <motion.span 
          animate={{ x: [-20, 20, -20], y: [-15, 15, -15] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="text-[24vw] font-black tracking-widest leading-none block blur-[60px] text-white/50"
        >
          ORBITNEST
        </motion.span>
      </motion.div>

      {/* Main Diffused Light Layer */}
      <motion.div
        style={{
          x: prefersReducedMotion ? 0 : translateX,
          y: prefersReducedMotion ? 0 : translateY,
          skewX: prefersReducedMotion ? 0 : skewX,
          rotateZ: prefersReducedMotion ? 0 : rotateZ,
          scale: prefersReducedMotion ? 1 : magneticScale,
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <motion.div
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: [0, 10, -10, 0],
                  y: [0, -15, 15, 0],
                  rotate: [-0.5, 0.5, -0.5],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative text-center select-none"
        >
          {/* Base Glow (Soft Diffusion) */}
          <span 
            className="text-[16vw] font-black tracking-tight leading-none text-white/10 block blur-[1px]"
            style={{
              filter: `
                drop-shadow(0 0 35px rgba(255, 255, 255, 0.15)) 
                drop-shadow(0 0 65px rgba(255, 255, 255, 0.05))
              `
            }}
          >
            ORBITNEST
          </span>

          {/* Sharpish definition (Light Source) */}
          <span 
            className="absolute inset-0 text-[16vw] font-black tracking-tight leading-none text-white/1 block"
            style={{
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
              filter: "blur(0.5px)"
            }}
          >
            ORBITNEST
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
