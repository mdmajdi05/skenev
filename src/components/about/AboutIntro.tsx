import Reveal from "@/components/Reveal";
import styles from "@/styles/site.module.css";

export default function AboutIntro() {
  return (
    <section className={styles.intro}>
      <Reveal className={styles.introInner}>
        <div>
          <span className={styles.introLabel}>Our philosophy</span>
          <h2>
            Beauty is complex. <em>Understanding it is our craft.</em>
          </h2>
        </div>
        <div className={styles.introDescription}>
          <p>
            We started SKENEV with a simple observation: the tools of beauty were built
            for the machine, not for the person. Data was cold, consultations were
            shallow, and real understanding sat untapped in every scan.
          </p>
          <p>
            Our technology reads skin, scalp and beauty at a depth no human eye can
            match &mdash; then translates it into something <em>you</em> can feel and
            understand. Not charts and jargon. Clarity.
          </p>
          <p>
            From the first algorithm to the device in your clinic, everything is
            designed around one question: <em>how do we make beauty more human?</em>
          </p>
        </div>
      </Reveal>
    </section>
  );
}