"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export type SeoFaq = { question: string; answer: string };

type SeoFaqSectionProps = {
  items: SeoFaq[];
  heading: string;
  accent: string;
  intro?: string;
  contactLabel?: string;
  schema?: boolean;
};

export default function SeoFaqSection({
  items,
  heading,
  accent,
  intro,
  contactLabel,
  schema = true,
}: SeoFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = schema
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <section className="faq site-section" id="faq">
        <div className="container faq-layout">
          <Reveal className="faq-heading">
            <div className="eyebrow">FAQ</div>
            <h2>
              {heading} <em style={{ color: "var(--gold)" }}>{accent}</em>
            </h2>
            <p>
              {intro ?? "Everything you need to know."}{" "}
              {contactLabel ? (
                <>
                  {contactLabel} <a href="/contact">Talk to us</a>.
                </>
              ) : (
                <>
                  <a href="/contact">Talk to us</a>.
                </>
              )}
            </p>
          </Reveal>

          <div className="faq-list">
            {items.map((item, i) => {
              const open = openIndex === i;
              return (
                <Reveal key={item.question}>
                  <div className={`faq-item ${open ? "open" : ""}`}>
                    <button
                      className="faq-question"
                      onClick={() => setOpenIndex(open ? null : i)}
                      aria-expanded={open}
                    >
                      <span>{item.question}</span>
                      <span className="faq-icon" aria-hidden="true">
                        {open ? "−" : "+"}
                      </span>
                    </button>
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}