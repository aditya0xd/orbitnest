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
      className="py-24 px-6"
      style={{ backgroundColor: "var(--orbitnest-bg)" }}
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
          className="text-3xl md:text-4xl text-center mb-16 leading-tight"
          style={{ color: "var(--orbitnest-text)" }}
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
              className="rounded-xl border p-8 transition-shadow"
              style={{
                backgroundColor: "white",
                borderColor: "var(--orbitnest-border)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <Check
                  size={18}
                  className="mt-1 opacity-70"
                  style={{ color: "var(--orbitnest-accent)" }}
                />
                <h3
                  className="text-lg font-medium leading-snug"
                  style={{ color: "var(--orbitnest-text)" }}
                >
                  {service.title}
                </h3>
              </div>

              <p
                className="leading-relaxed"
                style={{ color: "var(--orbitnest-text-light)" }}
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
