import Image from "next/image";
import Reveal from "@/components/Reveal";
import { IMG_SKIN, IMG_BEAUTY, IMG_SCALP } from "@/lib/images";

const BUSINESS_CARDS = [
  { title: "Dermatology", image: IMG_SKIN, alt: "Dermatology" },
  { title: "Beauty Salons", image: IMG_BEAUTY, alt: "Beauty Salon" },
  { title: "Beauty Brands", image: IMG_SCALP, alt: "Beauty Brand" },
  { title: "Hair Clinics", image: IMG_SKIN, alt: "Hair Clinic" },
];

export default function Business() {
  return (
    <section className="site-section" id="business">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <div className="eyebrow">BUILT FOR BUSINESS</div>
            <h2>One technology. Multiple industries.</h2>
            <p>
              Bring AI-powered beauty intelligence into the places where
              customers make decisions.
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
                  <h3>{card.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}