import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export function Qualification() {
  const forYou = [
    "You're a fitness or health coach with an established social presence",
    "You get engagement and DMs, but struggle to convert them efficiently",
    "You're ready to move beyond 'link in bio' to a real funnel",
    "You value your time and want a system that filters leads for you",
  ];

  const notFor = [
    "You're just starting out and have no audience yet",
    "You expect a website alone to generate all your leads",
    "You're looking for the cheapest option possible",
    "You don't have a clear coaching offer or pricing structure",
  ];

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#F5F5F4" }}>
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
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 grid-flow-row">
          {/* FOR YOU */}
          <motion.div
            className="space-y-6"
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <h2
              className="text-2xl md:text-3xl"
              style={{ color: "var(--orbitnest-text)" }}
            >
              This is for you if
            </h2>

            <ul className="space-y-5">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span
                    className="mt-1 flex h-5 w-5 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: "var(--orbitnest-accent)",
                      opacity: 0.85,
                    }}
                  >
                    <Check size={14} color="white" />
                  </span>

                  <p
                    className="leading-relaxed"
                    style={{ color: "var(--orbitnest-text-light)" }}
                  >
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NOT FOR */}
          <motion.div
            className="space-y-6 "
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.05,
                },
              },
            }}
          >
            <h2
              className="text-2xl md:text-3xl"
              style={{ color: "var(--orbitnest-text)" }}
            >
              This is not for
            </h2>

            <ul className="space-y-5">
              {notFor.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span
                    className="mt-1 flex h-5 w-5 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: "var(--orbitnest-text-light)",
                      opacity: 0.35,
                    }}
                  >
                    <X size={14} color="white" />
                  </span>

                  <p
                    className="leading-relaxed opacity-75"
                    style={{ color: "var(--orbitnest-text-light)" }}
                  >
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="md:hidden col-span-full flex justify-center">
            <p className="text-sm text-center opacity-60 max-w-xs">
              This works best for a specific type of coach.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
