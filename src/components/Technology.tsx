import Image from "next/image";
import Reveal from "@/components/Reveal";
import { IMG_SKIN } from "@/lib/images";

const PARAMETERS = [
  "Hydration",
  "Sebum",
  "Acne",
  "Redness",
  "Pores",
  "Wrinkles",
  "Skin Tone",
  "Moisture",
  "Elasticity",
  "Pigmentation",
  "Smoothness",
];

export default function Technology() {
  return (
    <section className="analysis site-section" id="technology">
      <div className="container analysis-layout">
        <Reveal>
          <div className="analysis-visual">
            <div className="analysis-visual-overlay">
              <span>LIVE SCAN</span>
            </div>
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
          <div className="eyebrow">THE AI ENGINE</div>
          <div className="section-header">
            <h2>From a single image to deep intelligence.</h2>
            <p>
              The SKENEV AI engine transforms one scan into structured beauty
              intelligence — measured, comparable and ready for real decisions.
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