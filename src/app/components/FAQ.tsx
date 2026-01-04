import * as Accordion from "@radix-ui/react-accordion";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function FAQ() {
  const faqs = [
    {
      question: "Do I need a website already?",
      answer:
        "No. We can audit your current setup if you have one, or we'll walk through what you need if you're starting fresh. Either way, the audit gives you a clear roadmap.",
    },
    {
      question: "Is this only for fitness coaches?",
      answer:
        "Primarily, yes. We specialize in fitness and health coaching because the market, messaging, and funnel structure are unique. That focus allows us to deliver better results faster.",
    },
    {
      question: "What happens after the audit?",
      answer:
        "You'll get a detailed breakdown of what's working, what's not, and what to change. If we're a good fit and you want us to build it for you, we'll discuss next steps. No pressure, no hard sell.",
    },
  ];

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#F5F5F4" }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-4xl text-center mb-12"
          style={{ color: "var(--orbitnest-text)" }}
        >
          Frequently Asked Questions
        </h2>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="rounded-lg border bg-white"
              style={{ borderColor: "var(--orbitnest-border)" }}
            >
              {/* HEADER */}
              <Accordion.Header>
                <Accordion.Trigger
                  className="
                       group
                      w-full px-6 py-5
                      flex items-center justify-between gap-4
                      text-left
                      focus-visible:outline-none
                      "
                >
                  <span style={{ color: "var(--orbitnest-text)" }}>
                    {faq.question}
                  </span>

                  {/* Arrow — transform-only, delayed feel */}
                  <ArrowRight
                    size={20}
                    className="
                        flex-shrink-0
                        transition-transform
                        duration-300
                        ease-[cubic-bezier(0.16,1,0.3,1)]
                        group-data-[state=open]:rotate-90
                        "
                    style={{
                      color: "var(--orbitnest-accent)",
                      willChange: "transform",
                    }}
                  />
                </Accordion.Trigger>
              </Accordion.Header>

              {/* CONTENT — NO HEIGHT ANIMATION */}
              <Accordion.Content
                className="
                  overflow-hidden
                  data-[state=open]:animate-[accordion-down_400ms_cubic-bezier(0.16,1,0.3,1)]
                  data-[state=closed]:animate-[accordion-up_300ms_cubic-bezier(0.16,1,0.3,1)]
                "
              >
                <div className="pt-2 pb-5 px-6">
                  <p style={{ color: "var(--orbitnest-text-light)" }}>
                    {faq.answer}
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
