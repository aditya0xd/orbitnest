import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  {
    title: "High converting Websites and Funnels",
    description:
      "Clear positioning that establishes credibility without being salesy",
  },
  {
    title: "Mobile-first design for Instagram traffic",
    description:
      "Optimized for the way your audience actually finds and consumes content",
  },
  {
    title: "DM Automation & Lead Qualification",
    description:
      "Lead qualification on autopilot, so you only talk to serious prospects",
  },
  {
    title: "Social Media Management Systems",
    description:
      "Centralized tools to plan, schedule, monitor, and optimize all your social media in one place",
  },
];

export function WhatWeBuild() {
  return (
    <section className="py-24 px-6 bg-[url(/whatwedo.png)] bg-cover bg-center bg-fixed">
      <motion.div
        className="max-w-6xl mx-auto px-15"
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
          className="text-3xl md:text-4xl text-center leading-tight text-foreground mb-30"
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

        {/* RIGHT: image */}
        {/* <motion.div
          variants={{
            hidden: { opacity: 0, x: 40 },
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          className="flex justify-center w-full aspect-[16/9]"
        >
          <img
            src="/whatwedo.png"
            alt="Problem illustration"
            className="w-full object-contain p-0"
          />
        </motion.div> */}

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-20">
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
                <Check size={18} className="mt-1 opacity-70 text-primary" />
                <h3 className="text-lg font-medium leading-snug text-foreground">
                  {service.title}
                </h3>
              </div>

              <p className="leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
