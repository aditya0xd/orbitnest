import { motion } from "framer-motion";

export function Reframe() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "var(--orbitnest-bg)" }}
    >
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
      >
        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl"
          style={{ color: "var(--orbitnest-text)" }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          DMs were never designed to close coaching clients.
        </motion.h2>

        {/* Supporting lines */}
        <motion.div
          className="space-y-4 pt-4"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {[
            "High-intent prospects don't want conversations.",
            "They want clarity.",
          ].map((line) => (
            <motion.p
              key={line}
              className="text-xl md:text-2xl"
              style={{ color: "var(--orbitnest-text-light)" }}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        {/* Final reframe */}
        <motion.p
          className="text-xl md:text-2xl pt-8"
          style={{ color: "var(--orbitnest-text)" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
            },
          }}
        >
          Content brings interest. Websites convert it.
        </motion.p>
      </motion.div>
    </section>
  );
}
