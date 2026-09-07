import Reveal from "@/components/Reveal";
import styles from "@/styles/site.module.css";

export default function AboutBelief() {
  return (
    <section className={styles.belief}>
      <Reveal className={styles.beliefInner}>
        <span className={styles.beliefLabel}>What we believe</span>
        <h2>
          Data should feel <em>human.</em>
        </h2>
        <p>
          Machines can measure a million things. But the moment that matters is the one
          where a person understands themselves a little better. We build the gap
          between numbers and feeling — and it is the only gap that counts.
        </p>
      </Reveal>
    </section>
  );
}