import Image from "next/image";
import Reveal from "@/components/Reveal";
import { FEATURE_IMG } from "@/lib/siteImages";
import styles from "@/styles/site.module.css";

export default function FeatureImage() {
  return (
    <Reveal className={styles.featureImage}>
      <Image
        className={styles.featureImageImg}
        src={FEATURE_IMG}
        alt="The personal side of beauty technology"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className={styles.featureOverlay}>
        <h2>
          Technology that makes people feel <em>seen.</em>
        </h2>
      </div>
    </Reveal>
  );
}