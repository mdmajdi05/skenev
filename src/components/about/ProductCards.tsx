import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SOLUTION_IMG, SOLUTION_IMG_2, SOLUTION_IMG_3 } from "@/lib/siteImages";
import styles from "@/styles/site.module.css";

const PRODUCTS = [
  {
    id: "skenvision",
    number: "01",
    img: SOLUTION_IMG,
    alt: "SkenVision AI scanner",
    title: "SkenVision",
    copy: "Our flagship smart scanner — a 60-second skin and scalp analysis that turns every consultation into a memorable experience.",
    features: ["60-second scan", "Branded reports", "Progress tracking"],
  },
  {
    id: "hairai",
    number: "02",
    img: SOLUTION_IMG_2,
    alt: "HairAi scalp analysis",
    title: "HairAi",
    copy: "Dedicated scalp and hair intelligence for clinics and salons — density, moisture, sebum and follicle health in one pass.",
    features: ["Scalp mapping", "Density metrics", "Treatment tracking"],
  },
  {
    id: "dermaai",
    number: "03",
    img: SOLUTION_IMG_3,
    alt: "DermaAi dermatology analysis",
    title: "DermaAi",
    copy: "Dermatologist-grade analysis built for diagnosis support, lesion tracking and evidence-backed treatment plans.",
    features: ["Lesion tracking", "Full-face mapping", "Report builder"],
  },
];

export default function ProductCards() {
  return (
    <div className={styles.solutionsGrid}>
      {PRODUCTS.map((p) => (
        <Reveal key={p.id} className={styles.solutionTile}>
          <div id={p.id} className={styles.solutionTileImage}>
            <Image
              src={p.img}
              alt={p.alt}
              fill
              sizes="(max-width: 800px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.solutionTileContent}>
            <span className={styles.solutionTileNumber}>{p.number}</span>
            <h3>{p.title}</h3>
            <p>{p.copy}</p>
            <ul className={styles.solutionTileFeatures}>
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}