import { motion, Variants, useReducedMotion } from "framer-motion";

type BookAuditButtonProps = {
  onClick?: () => void;
  title?: string;
};

export default function BookAuditButton({ onClick, title }: BookAuditButtonProps) {
  const prefersReducedMotion = !!useReducedMotion();

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
    <motion.button
      onClick={onClick}
      variants={buttonVariants}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      className="px-8 py-4 text-md cursor-pointer rounded-lg font-semibold"
      style={{
        backgroundColor: "var(--primary)",
        color: "var(--primary-foreground)",
      }}
    >
      {title?title:"Book a Free Call"}
    </motion.button>
  );
}
