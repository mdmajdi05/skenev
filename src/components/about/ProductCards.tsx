import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SCANNER_02 } from "@/lib/siteImages";
import styles from "@/styles/site.module.css";

const IN_THE_BOX = [
  { label: "SKENEV AI Scanner", copy: "The precision imaging device reads skin and scalp in a single pass." },
  { label: "Cloud AI Engine", copy: "11+ analysis parameters processed in real time on a secure platform." },
  { label: "Analysis Suite", copy: "Skin, scalp and beauty intelligence — one subscription, three modes." },
  { label: "Branded Reports", copy: "Professional, customizable reports ready for every consultation." },
];

export default function ProductShowcase() {
  return (
    <section className={styles.technology}>
      <div className={styles.technologyInner}>
        <div className={styles.sectionHeading}>
          <h2>
            Everything you need. <em>Nothing you don&rsquo;t.</em>
          </h2>
          <p>
            One product. One subscription. Three intelligences. Designed to
            make advanced beauty technology feel effortless.
          </p>
        </div>
        <div className={styles.productShowcase}>
          <Reveal className={styles.productDevice}>
            <div className={styles.productDeviceGlow} />
            <Image
              src={SCANNER_02}
              alt="The SKENEV AI scanner"
              fill
              sizes="(max-width: 1000px) 100vw, 45vw"
              style={{ objectFit: "contain" }}
            />
          </Reveal>
          <div className={styles.productBox}>
            {IN_THE_BOX.map((item, i) => (
              <Reveal key={item.label} className={styles.productBoxItem}>
                <span className={styles.productBoxNumber}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{item.label}</h3>
                  <p>{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}