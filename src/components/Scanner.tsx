import Image from "next/image";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { IMG_SCALP } from "@/lib/images";

const SCANNER_SPECS = [
  { value: "20×", label: "CMOS Camera" },
  { value: "IR", label: "Temperature" },
  { value: "VOC", label: "Gas Sensor" },
  { value: "0.7 AU", label: "Hydration" },
];

const SCANNER_FEATURES = [
  "Hyperspectral capture",
  "Dermatologist-grade models",
  "Secure, private by design",
  "Results in under a minute",
];

export default function Scanner() {
  return (
    <section className="scanner site-section" id="scanner">
      <div className="container scanner-layout">
        <Reveal>
          <div className="eyebrow">HARDWARE + AI</div>
          <h2>Precision, engineered into a single device.</h2>
          <p>
            SKENEV combines high-resolution imaging with intelligent analysis —
            so a 60-second scan becomes a deeper understanding of skin and
            scalp. No guesswork, no waiting.
          </p>
          <div className="scanner-actions">
            <a href="#contact" className="btn btn-secondary">
              Book a Demo →
            </a>
            <Link href="/products" className="btn btn-ghost">
              View Product
            </Link>
          </div>

          <ul className="scanner-features">
            {SCANNER_FEATURES.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <div className="scanner-specs">
            {SCANNER_SPECS.map((spec) => (
              <div className="spec" key={spec.label}>
                <strong>{spec.value}</strong>
                <small>{spec.label}</small>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="scanner-image">
            <div className="scanner-image-caption">
              <span>SKENEV · AI SCANNER</span>
            </div>
            <Image
              src={IMG_SCALP}
              alt="The SKENEV AI beauty scanner"
              fill
              sizes="(min-width: 1000px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}