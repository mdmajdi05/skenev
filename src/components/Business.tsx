import Image from "next/image";
import Reveal from "@/components/Reveal";
import { IMG_SKIN, IMG_BEAUTY, IMG_SCALP } from "@/lib/images";

const BUSINESS_CARDS = [
  {
    title: "Dermatology Clinics",
    subtitle: "Objective analysis, lesion tracking & treatment reports",
    image: IMG_SKIN,
    alt: "Dermatology",
  },
  {
    title: "Beauty Salons",
    subtitle: "A 60-second scan that sells the experience",
    image: IMG_BEAUTY,
    alt: "Beauty Salon",
  },
  {
    title: "Hair Clinics",
    subtitle: "Scalp scoring, density maps & hair-care pairing",
    image: IMG_SCALP,
    alt: "Hair Clinic",
  },
  {
    title: "Beauty Brands",
    subtitle: "Consumer-scale evidence for better formulations",
    image: IMG_SKIN,
    alt: "Beauty Brand",
  },
];

export default function Business() {
  return (
    <section className="site-section" id="business">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <div className="eyebrow">BUILT FOR PROFESSIONALS</div>
            <h2>One scanner. Every beauty business.</h2>
            <p>
              Wherever customers make beauty decisions, SKENEV turns
              consultations into measured, high-value experiences.
            </p>
          </div>
        </Reveal>

        <div className="business-grid">
          {BUSINESS_CARDS.map((card) => (
            <Reveal key={card.title}>
              <div className="business-card">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1000px) 25vw, (min-width: 650px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="business-overlay">
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.subtitle}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}