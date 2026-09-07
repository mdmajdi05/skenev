import Image from "next/image";
import Reveal from "@/components/Reveal";
import { IMG_SKIN, IMG_SCALP, IMG_BEAUTY } from "@/lib/images";

const SOLUTIONS = [
  {
    number: "01 / SKIN",
    title: "AI Skin Analysis",
    description:
      "Analyze multiple skin conditions and transform visual information into clear, personalized insights.",
    link: "Explore Skin AI →",
    image: IMG_SKIN,
    alt: "AI Skin Analysis",
  },
  {
    number: "02 / SCALP",
    title: "AI Scalp Analysis",
    description:
      "Understand scalp condition, hair characteristics, moisture, sebum and other key indicators.",
    link: "Explore Scalp AI →",
    image: IMG_SCALP,
    alt: "AI Scalp Analysis",
  },
  {
    number: "03 / BEAUTY",
    title: "Beauty Intelligence",
    description:
      "Build personalized beauty experiences using AI-powered recommendations and visual intelligence.",
    link: "Explore Beauty AI →",
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
            <div className="eyebrow">PROFESSIONAL SOLUTIONS</div>
            <h2>Intelligence designed for every beauty journey.</h2>
            <p>
              Give professionals the technology they need to understand skin,
              scalp and personal beauty needs with greater precision.
            </p>
          </div>
        </Reveal>

        <div className="solution-grid">
          {SOLUTIONS.map((solution) => (
            <Reveal key={solution.number}>
              <article className="solution-card">
                <div className="solution-image">
                  <Image
                    src={solution.image}
                    alt={solution.alt}
                    fill
                    sizes="(min-width: 1000px) 33vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="solution-content">
                  <div className="solution-number">{solution.number}</div>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <a href="#" className="text-link">
                    {solution.link}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}