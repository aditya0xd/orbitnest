import { useReducedMotion } from "framer-motion";
import { OrbitnestTextBackground } from "./orbitnestTextBackground";

export function HeroBackground() {
  const prefersReducedMotion = !!useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div 
        className="absolute inset-0 bg-[url('/bg1.png')] bg-cover bg-center bg-no-repeat" 
        style={{ opacity: 0.4 }}
        aria-hidden="true"
      />

        {/* <video
          className="absolute inset-0 overflow-hidden pointer-events-none z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/bg2.jpg"
        >
          <source src="/video1.mp4" type="video/mp4" />
          <source src="/hero.webm" type="video/webm" />
        </video> */}
      {/* <OrbitnestTextBackground prefersReducedMotion={prefersReducedMotion} /> */}
    </div>
  );
}
