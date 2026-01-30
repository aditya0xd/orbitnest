import { motion, Variants } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import BookAuditButton from "./CTA/BookAuditButton";

export function Offer() {
  const prefersReducedMotion = !!useReducedMotion();

  const auditIncludes = [
    "Analysis of your current funnel or landing page (if you have one)",
    "Messaging review based on your niche and audience",
    "Specific recommendations for improving conversions",
    "No-pressure conversation about what a custom build would look like for you",
  ];

  /* Motion system (shared feel with Hero & Problem) */
  const containerVariants: Variants = prefersReducedMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      };

  return (
    <section
      id="programs"
      className="py-24 px-6"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={containerVariants}
          className={`rounded-2xl border p-8 md:p-12 space-y-12
           bg-[url('/audit2.png')] bg-contain bg-no-repeat bg-[#141413] bg-center`}
          style={{
            borderColor: "var(--border)",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)",
          }}
        >
          {/* Accent marker */}
          <div className="flex justify-center">
            <span
              className="h-1 w-10 rounded-full"
              style={{
                backgroundColor: "var(--primary)",
                opacity: 0.4,
              }}
            />
          </div>

          {/* Heading */}
          <div className="space-y-4 text-center">
            <h2
              className="text-3xl md:text-4xl leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              Start with a free website & funnel audit
            </h2>

            <p
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              We'll review your current setup (or help you plan your first
              funnel from scratch) and show you exactly what's missing.
            </p>
          </div>

          {/* List framing */}
          <p
            className="text-sm text-center opacity-70"
            style={{ color: "var(--muted-foreground)" }}
          >
            In the audit, you’ll get:
          </p>

          {/* List (no individual item animation – intentional) */}
          <ul className="space-y-3 max-w-2xl mx-auto opacity-90">
            {auditIncludes.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span
                  className="mt-2 h-1.5 w-1.5  rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: "var(--primary)",
                    boxShadow: "0 0 0 3px rgba(0,0,0,0.03)",
                  }}
                />
                <p
                  className="leading-relaxed w-xs"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>

          {/* Reassurance */}
          <p
            className="text-sm text-center italic opacity-60"
            style={{ color: "var(--muted-foreground)" }}
          >
            No sales pressure. If it’s not a fit, we’ll tell you.
          </p>

          {/* CTA */}
          <div className="flex justify-center pt-2">
            <BookAuditButton
              onClick={() => {
                const el = document.getElementById("contact-form");
                el?.scrollIntoView({ behavior: "smooth" });

                // wait for scroll, then focus
                setTimeout(() => {
                  const input = document.getElementById(
                    "contact-first-name",
                  ) as HTMLInputElement | null;
                  input?.focus();
                }, 800);
              }}
            />
          </div>

          {/* Post-CTA expectation */}
          <p
            className="text-sm text-center opacity-60"
            style={{ color: "var(--muted-foreground)" }}
          >
            Takes ~15 minutes. No obligation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
