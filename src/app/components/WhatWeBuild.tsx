import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  {
    title: "Authority-based website structure",
    description:
      "Clear positioning that establishes credibility without being salesy",
  },
  {
    title: "Application-style funnels",
    description:
      "Lead qualification built in, so you only talk to serious prospects",
  },
  {
    title: "Conversion-focused messaging",
    description:
      "Copy that speaks to your ideal client’s transformation, not features",
  },
  {
    title: "Mobile-first design for Instagram traffic",
    description:
      "Optimized for the way your audience actually finds and consumes content",
  },
];

export function WhatWeBuild() {
  return (
    <section
      className="py-24 px-6 bg-background"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl text-center mb-16 leading-tight text-foreground"
          variants={{
            hidden: { opacity: 0, y: 14 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          What we build at OrbitNest
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.04,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-border p-8 transition-shadow bg-card shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-3 mb-4">
                <Check
                  size={18}
                  className="mt-1 opacity-70 text-primary"
                />
                <h3
                  className="text-lg font-medium leading-snug text-foreground"
                >
                  {service.title}
                </h3>
              </div>

              <p
                className="leading-relaxed text-muted-foreground"
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
