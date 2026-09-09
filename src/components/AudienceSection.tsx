import Reveal from "@/components/Reveal";
import styles from "@/styles/site.module.css";

type AudienceItem = { title: string; copy: string };

export default function AudienceSection({
  heading,
  accent,
  intro,
  items,
}: {
  heading: string;
  accent: string;
  intro: string;
  items: AudienceItem[];
}) {
  return (
    <section className={styles.technology}>
      <div className={styles.technologyInner}>
        <div className={styles.sectionHeading}>
          <h2>
            {heading} <em>{accent}</em>
          </h2>
          <p>{intro}</p>
        </div>
        <div className={styles.careerPerksGrid}>
          {items.map((item) => (
            <Reveal key={item.title} className={styles.careerPerk}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}