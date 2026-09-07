import Image from "next/image";
import Reveal from "@/components/Reveal";
import { IMG_SKIN } from "@/lib/images";

const PARAMETERS = [
  "Acne",
  "Hydration",
  "Sebum",
  "Redness",
  "Pores",
  "Wrinkles",
  "Skin Tone",
  "Moisture",
];

export default function Technology() {
  return (
    <section className="analysis site-section" id="technology">
      <div className="container analysis-layout">
        <Reveal>
          <div className="analysis-visual">
            <Image
              src={IMG_SKIN}
              alt="AI skin analysis technology"
              fill
              sizes="(min-width: 1000px) 45vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="eyebrow">ADVANCED ANALYSIS</div>
          <div className="section-header">
            <h2>From an image to intelligence.</h2>
            <p>
              Our AI engine transforms visual information into structured
              beauty intelligence that professionals can actually use.
            </p>
          </div>

          <div className="parameter-list">
            {PARAMETERS.map((parameter) => (
              <div className="parameter" key={parameter}>
                {parameter}
                <span>AI</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}