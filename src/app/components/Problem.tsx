import { motion } from "framer-motion";

export function Problem() {
  return (
    <section className=" py-24 px-6 bg-secondary/30">
      <motion.div
        className="max-w-6xl grid grid-cols-1 md:grid-cols-3  text-center "
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
        {/* LEFT: text */}
        <motion.div className="px-10 col-span-2">
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
                <motion.span
                  key={line}
                  className="text-left text-2xl md:text-3xl"
                  style={{ color: "var(--foreground)" }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  {line}{" "}
                </motion.span>
              ),
            )}
          </motion.div>

          {/* Pain points */}
          <motion.div className="ml-10 pt-10 flex flex-col items-start">
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
                  className={`${isLast ? "mt-6" : "mt-3"}`}
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
                        ? "text-xl md:text-2xl font-medium tracking-tight"
                        : "text-xl md:text-2xl"
                    }`}
                    style={{
                      color: isLast
                        ? "var(--foreground)"
                        : "var(--muted-foreground)",
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
                        backgroundColor: "var(--primary)",
                        opacity: 0.4,
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.p
            className="text-left text-base md:text-lg pt-12"
            style={{ color: "var(--foreground)" }}
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
            className="text-lg md:text-xl max-w-2xl mx-auto pt-12 text-left"
            style={{ color: "var(--muted-foreground)" }}
          >
            You're burning hours on{" "}
            <span
              className="font-medium"
              style={{ color: "var(--foreground)" }}
            >
              conversations that go nowhere,
            </span>
            <br className="hidden md:block" />
            while the serious clients who'd actually pay slip through the cracks
            because they don't want to feel like they're being sold to.
          </motion.p>
        </motion.div>

        {/* RIGHT: image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 40 },
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
            },
          }}
          className="flex justify-center"
        >
          <img
            src="/editt.png"
            alt="Problem illustration"
            className="w-full max-w-md object-contain mt-0 mb-5"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
