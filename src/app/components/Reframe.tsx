import { motion } from "framer-motion";

export function Reframe() {
  return (
    <section className="py-10 px-6 bg-background ">
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-8 flex flex-col"
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
        <div className="md:order-2">
          {/* Headline */}
          <motion.div>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl text-foreground"
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
                  className="text-xl md:text-2xl text-muted-foreground"
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
              className="text-xl md:text-2xl pt-8 text-foreground"
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
        </div>

        {/* RIGHT: image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 40 },
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          className="flex justify-center md:order-1"
        >
          <img
            src="/coachingDM.png"
            alt="Problem illustration"
            className="w-full max-w-md object-contain mb-8 mt-0"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
