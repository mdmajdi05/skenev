import type { ReactNode } from "react";
import styles from "@/styles/site.module.css";

type TitleLine = { text: string; accent?: boolean };

export default function AboutHero({
  eyebrow,
  title,
  copy,
  showScroll = false,
  signature,
}: {
  eyebrow: string;
  title: TitleLine[];
  copy: string;
  showScroll?: boolean;
  signature?: ReactNode;
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow} />
      <div className={styles.heroContent}>
        <h1>
          {title.map((line, i) => (
            <span key={i} className={line.accent ? styles.accent : undefined}>
              {line.text}
            </span>
          ))}
        </h1>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <p>{copy}</p>
          {signature ? <h2>{signature}</h2> : null}
        </div>
      </div>
      {showScroll && (
        <div className={styles.scrollIndicator} aria-hidden="true">
          Scroll
          <span className={styles.scrollLine} />
        </div>
      )}
    </section>
  );
}