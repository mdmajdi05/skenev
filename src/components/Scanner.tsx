import Image from "next/image";
import Reveal from "@/components/Reveal";
import { IMG_SCALP } from "@/lib/images";

const SCANNER_SPECS = [
  { value: "20×", label: "CMOS Camera" },
  { value: "IR", label: "Temperature" },
  { value: "VOC", label: "Sensor" },
];

export default function Scanner() {
  return (
    <section className="scanner site-section" id="scanner">
      <div className="container scanner-layout">
        <Reveal>
          <div className="eyebrow">HARDWARE + AI</div>
          <h2>A scanner built for precision.</h2>
          <p>
            Combine high-resolution imaging with intelligent analysis to
            create a deeper understanding of skin and scalp conditions.
          </p>
          <a href="#contact" className="btn btn-secondary">
            Discover the Scanner →
          </a>

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
            <Image
              src={IMG_SCALP}
              alt="AI Beauty Scanner"
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