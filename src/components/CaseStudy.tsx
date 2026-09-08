import Image from "next/image";
import Reveal from "@/components/Reveal";
import { IMG_BEAUTY } from "@/lib/images";

const METRICS = [
  { value: "+28%", label: "repeat visits" },
  { value: "+41%", label: "product attach rate" },
  { value: "3×", label: "faster consultations" },
];

export default function CaseStudy() {
  return (
    <section className="case-study site-section" id="cases">
      <div className="container">
        <Reveal className="case-layout">
          <div className="case-image">
            <div className="case-image-badge">RESULTS AT A TOKYO CLINIC</div>
            <Image
              src={IMG_BEAUTY}
              alt="SKENEV case study"
              fill
              sizes="(min-width: 1000px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="case-content">
            <div className="eyebrow">CASE STUDY</div>
            <h2>Analysis that turns into measurable results.</h2>
            <p>
              Twelve weeks after equipping a Tokyo clinic with a SKENEV scanner,
              consultations became faster, recommendations more personal and
              clients started coming back — on their own.
            </p>
            <div className="case-metrics">
              {METRICS.map((m) => (
                <div className="case-metric" key={m.label}>
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn btn-primary">
              See How it Works →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}