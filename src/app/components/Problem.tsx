import { motion } from "framer-motion";

export function Problem() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#F5F5F4" }}>
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Headline */}
        <motion.div
          className="space-y-3"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {["You already have attention.", "That's not the problem."].map(
            (line) => (
              <motion.p
                key={line}
                className="text-2xl md:text-3xl"
                style={{ color: "var(--orbitnest-text)" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                {line}
              </motion.p>
            )
          )}
        </motion.div>

        {/* Pain points */}
        <motion.div className="pt-10 flex flex-col items-center">
          {[
            "Endless DMs.",
            "Repeating yourself.",
            "Price questions.",
            "Ghosting.",
          ].map((item, index, arr) => {
            const isLast = index === arr.length - 1;

            return (
              <motion.div
                key={item}
                className={`text-center ${isLast ? "mt-6" : "mt-3"}`}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.06,
                    },
                  },
                }}
              >
                <p
                  className={`${
                    isLast
                      ? "text-2xl md:text-3xl font-medium tracking-tight"
                      : "text-xl md:text-2xl"
                  }`}
                  style={{
                    color: isLast
                      ? "var(--orbitnest-text)"
                      : "var(--orbitnest-text-light)",
                    opacity: isLast ? 1 : 0.75,
                  }}
                >
                  {item}
                </p>

                {/* Subtle emphasis for final pain */}
                {isLast && (
                  <div
                    className="mx-auto mt-3 h-px w-12"
                    style={{
                      backgroundColor: "var(--orbitnest-accent)",
                      opacity: 0.4,
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          className="text-base md:text-lg pt-6"
          style={{ color: "var(--orbitnest-text)" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
        >
          None of this is because your content isn’t working.
        </motion.p>

        {/* Body */}
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto pt-8"
          style={{ color: "var(--orbitnest-text-light)" }}
        >
          You're burning hours on{" "}
          <span
            className="font-medium"
            style={{ color: "var(--orbitnest-text)" }}
          >
            conversations that go nowhere,
          </span>
          <br className="hidden md:block" />
          while the serious clients who'd actually pay slip through the cracks
          because they don't want to feel like they're being sold to.
        </motion.p>
      </motion.div>
    </section>
  );
}
