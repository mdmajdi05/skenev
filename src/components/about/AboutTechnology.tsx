import Reveal from "@/components/Reveal";
import styles from "@/styles/site.module.css";

const TECH = [
  {
    title: "Hyperspectral Imaging",
    copy: "Deep spectral capture sees beneath the surface, where the real beauty story lives.",
  },
  {
    title: "Deep Learning Analysis",
    copy: "Neural networks trained on millions of skin signals deliver dermatologist-grade insight.",
  },
  {
    title: "Real-Time Processing",
    copy: "Decisions in milliseconds, so a 60-second scan feels effortless and instant.",
  },
  {
    title: "Personalization Engine",
    copy: "Every result becomes a bespoke routine — built for one unique beauty signature.",
  },
  {
    title: "Secure by Design",
    copy: "Your data is encrypted, private and never sold. Beauty intelligence you can trust.",
  },
  {
    title: "Adaptive Intelligence",
    copy: "Our models learn and refine with every scan, growing sharper for you over time.",
  },
];

export default function AboutTechnology() {
  return (
    <section className={styles.technology}>
      <div className={styles.technologyInner}>
        <div className={styles.sectionHeading}>
          <h2>
            Intelligence, <em>woven into everything.</em>
          </h2>
          <p>
            Six systems, one experience. Each layer of our stack is built to feel
            effortless while doing remarkable work.
          </p>
        </div>
        <div className={styles.techGrid}>
          {TECH.map((card, i) => (
            <Reveal key={card.title} className={styles.techCard}>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
              <span className={styles.techNumber}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}