import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SOLUTION_IMG, SOLUTION_IMG_2, SOLUTION_IMG_3 } from "@/lib/siteImages";
import styles from "@/styles/site.module.css";

const SOLUTIONS = [
  {
    id: "dermatologists",
    number: "01",
    img: SOLUTION_IMG,
    alt: "Dermatology analysis with SKENEV",
    title: "Dermatologists",
    copy: "Objective, high-resolution skin analysis that supports diagnosis, tracks treatment and empowers your patients.",
    features: ["Full-face mapping", "Lesion tracking", "Report builder"],
  },
  {
    id: "clinics",
    number: "02",
    img: SOLUTION_IMG_2,
    alt: "Clinic and salon consultation",
    title: "Clinics & Salons",
    copy: "A 60-second scan that turns every consultation into a memorable, high-value experience.",
    features: ["Instant results", "Branded reports", "Retail pairing"],
  },
  {
    id: "brands",
    number: "03",
    img: SOLUTION_IMG_3,
    alt: "Skincare product on a beauty counter",
    title: "Beauty Brands",
    copy: "Understand how real people respond to your formulations with consumer-scale beauty intelligence.",
    features: ["Consumer studies", "Ingredient insights", "Trend signals"],
  },
];

export default function SolutionCards() {
  return (
    <div className={styles.solutionsGrid}>
      {SOLUTIONS.map((s) => (
        <Reveal key={s.id} className={styles.solutionTile}>
          <div id={s.id} className={styles.solutionTileImage}>
            <Image
              src={s.img}
              alt={s.alt}
              fill
              sizes="(max-width: 800px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.solutionTileContent}>
            <span className={styles.solutionTileNumber}>{s.number}</span>
            <h3>{s.title}</h3>
            <p>{s.copy}</p>
            <ul className={styles.solutionTileFeatures}>
              {s.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}