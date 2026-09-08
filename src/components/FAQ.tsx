"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { FAQS } from "@/lib/faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq site-section" id="faq">
      <div className="container faq-layout">
        <Reveal className="faq-heading">
          <div className="eyebrow">FAQ</div>
          <h2>Answers, before you even ask.</h2>
          <p>
            Everything you need to know about SKENEV. Still curious?{" "}
            <a href="#contact">Talk to us</a>.
          </p>
        </Reveal>

        <div className="faq-list">
          {FAQS.map((item, i) => {
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
  );
}