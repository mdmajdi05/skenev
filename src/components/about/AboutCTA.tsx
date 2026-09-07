import Link from "next/link";
import styles from "@/styles/site.module.css";

export default function AboutCTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2>
          Let&rsquo;s build the <em>future of beauty.</em>
        </h2>
        <Link href="/contact" className={styles.ctaButton}>
          Get Started
        </Link>
      </div>
    </section>
  );
}