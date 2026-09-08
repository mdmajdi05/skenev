import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { IMG_SKIN, IMG_SCALP, IMG_BEAUTY } from "@/lib/images";

const MODES = [
  {
    number: "01 / SKIN",
    title: "AI Skin Analysis",
    description:
      "Analyze multiple skin conditions and transform visual information into clear, personalized insights.",
    href: "/solutions/ai-skin-analysis",
    image: IMG_SKIN,
    alt: "AI Skin Analysis",
  },
  {
    number: "02 / SCALP",
    title: "AI Scalp Analysis",
    description:
      "Understand scalp condition, hair characteristics, moisture, sebum and other key indicators.",
    href: "/solutions/ai-scalp-analysis",
    image: IMG_SCALP,
    alt: "AI Scalp Analysis",
  },
  {
    number: "03 / BEAUTY",
    title: "Beauty Intelligence",
    description:
      "Build personalized beauty experiences using AI-powered recommendations and visual intelligence.",
    href: "/solutions/beauty-intelligence",
    image: IMG_BEAUTY,
    alt: "Beauty AI",
  },
];

export default function Solutions() {
  return (
    <section className="solutions site-section" id="solutions">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <div className="eyebrow">THREE INTELLIGENCES, ONE DEVICE</div>
            <h2>Everything SKENEV reads.</h2>
            <p>
              One scanner, three deep intelligences — each built to give
              professionals greater precision and every customer a more personal
              beauty journey.
            </p>
          </div>
        </Reveal>

        <div className="solution-grid">
          {MODES.map((mode) => (
            <Reveal key={mode.number}>
              <Link href={mode.href} className="solution-card">
                <div className="solution-image">
                  <div className="solution-image-badge">{mode.number}</div>
                  <Image
                    src={mode.image}
                    alt={mode.alt}
                    fill
                    sizes="(min-width: 1000px) 33vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="solution-content">
                  <h3>{mode.title}</h3>
                  <p>{mode.description}</p>
                  <span className="text-link">
                    Explore {mode.title} <span>→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}