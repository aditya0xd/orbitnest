import { ArrowDown, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = ["Content", "Website", "Application", "Call", "Client"];

export function Mechanism() {
  return (
    <section
      className="py-24 px-6 2xl:py-32"
      style={{ backgroundColor: "#F5F5F4" }}
    >
      <motion.div
        className="max-w-6xl 2xl:max-w-7xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 2xl:gap-28 items-center">
          {/* LEFT — COPY */}
          <motion.div
            className="space-y-7 2xl:space-y-9"
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <h2
              className="text-3xl md:text-4xl 2xl:text-5xl leading-tight"
              style={{ color: "var(--orbitnest-text)" }}
            >
              Sell without the DM chaos
            </h2>

            <ul className="space-y-4 2xl:space-y-5">
              {[
                "Explains the offer clearly",
                "Pre-frames the value before you speak",
                "Filters out low-intent leads",
                "Positions you as the expert, not the chaser",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="mt-1 opacity-70"
                    style={{ color: "var(--orbitnest-accent)" }}
                  />
                  <p
                    className="text-lg 2xl:text-xl leading-relaxed"
                    style={{ color: "var(--orbitnest-text-light)" }}
                  >
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT — FLOW (CLEAR & VISIBLE) */}
          <motion.div
            className="relative"
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            {/* Spine */}
            <motion.div
              className="absolute left-1/2 top-4 bottom-4 w-px hidden md:block"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, var(--orbitnest-accent), transparent)",
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <div className="flex flex-col gap-8">
              {steps.map((step, index) => {
                const isLeft = index % 2 === 0;
                const isFinal = step === "Client";

                return (
                  <motion.div
                    key={step}
                    className={`relative flex items-center ${
                      isLeft ? "justify-start pr-10" : "justify-end pl-10"
                    }`}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    {/* Dot */}
                    <span
                      className="absolute left-1/2 -translate-x-1/2 h-3 w-3 rounded-full z-10"
                      style={{ backgroundColor: "var(--orbitnest-accent)" }}
                    />

                    {/* Card */}
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="w-[85%] rounded-xl border bg-white px-6 py-6 transition-shadow"
                      style={{
                        borderColor: isFinal
                          ? "var(--orbitnest-accent)"
                          : "var(--orbitnest-border)",
                        boxShadow: isFinal
                          ? "0 14px 32px rgba(0,0,0,0.08)"
                          : "0 6px 18px rgba(0,0,0,0.04)",
                      }}
                    >
                      <p
                        className={`text-lg ${isFinal ? "font-medium" : ""}`}
                        style={{ color: "var(--orbitnest-text)" }}
                      >
                        {step}
                      </p>
                    </motion.div>

                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <ArrowDown
                        size={16}
                        className="absolute left-1/2 -translate-x-1/2 -bottom-6 opacity-40 hidden md:block"
                        style={{ color: "var(--orbitnest-accent)" }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
