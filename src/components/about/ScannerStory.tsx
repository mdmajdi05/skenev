"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SCANNER_01, SCANNER_02, SCANNER_03 } from "@/lib/siteImages";
import styles from "@/styles/site.module.css";

const IMAGES = [
  { src: SCANNER_01, alt: "SKENEV AI Beauty Scanner front view" },
  { src: SCANNER_02, alt: "SKENEV AI Beauty Scanner analysis view" },
  { src: SCANNER_03, alt: "SKENEV AI Beauty Scanner profile view" },
];

const STEPS = [
  { number: "01", title: "See", copy: "Every pore, every tone, every beauty signature." },
  {
    number: "02",
    title: "Understand",
    copy: "AI maps what the eye misses into deep, honest insight.",
  },
  {
    number: "03",
    title: "Personalize",
    copy: "Every recommendation, designed for one person. You.",
  },
];

export default function ScannerStory() {
  const storyRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    let ticking = false;
    let current = 0;

    const update = () => {
      const story = storyRef.current;
      if (!story) return;

      const rect = story.getBoundingClientRect();
      const scrollable = story.offsetHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(Math.max(-rect.top / scrollable, 0), 1) : 0;

      let next = 0;
      if (progress >= 0.66) next = 2;
      else if (progress >= 0.33) next = 1;

      if (next !== current) {
        current = next;
        setStep(next);
      }

      if (progressRef.current) {
        progressRef.current.style.height = `${Math.max(progress * 100, 5)}%`;
      }

      if (numberRef.current) {
        const scale = 0.85 + progress * 0.25;
        const rotation = progress * -3;
        numberRef.current.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`;
      }

      slotRefs.current.forEach((slot, index) => {
        if (!slot) return;
        const local = progress * 3 - index;
        const movement =
          index === next ? Math.min(Math.max(local, -1), 1) * 22 : 0;
        slot.style.marginTop = `${movement}px`;
      });
    };

    const request = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    update();

    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    };
  }, []);

  return (
    <section className={styles.scannerStory} ref={storyRef}>
      <div className={styles.scannerSticky}>
        <div className={styles.scannerBackground} />
        <div className={styles.scannerNoise} />
        <span className={styles.scannerTopline}>Experience</span>

        <div className={styles.scannerProgress}>
          <div className={styles.scannerProgressFill} ref={progressRef} />
        </div>

        <div className={styles.scannerNumber} ref={numberRef}>
          {String(step + 1).padStart(2, "0")}
        </div>

        <div className={styles.scannerStage}>
          {IMAGES.map((img, i) => (
            <div
              key={img.src}
              ref={(el) => {
                slotRefs.current[i] = el;
              }}
              className={`${styles.scannerImageSlot} ${i === step ? styles.active : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 800px) 60vw, 410px"
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
        <div className={styles.scannerGlow} />

        <div className={styles.scannerCopy}>
          {STEPS.map((s, i) => (
            <article
              key={s.number}
              className={`${styles.scannerStep} ${i === step ? styles.active : ""}`}
            >
              <span className={styles.scannerStepNumber}>
                Step {s.number} / 03
              </span>
              <h3>{s.title}.</h3>
              <p>{s.copy}</p>
            </article>
          ))}
        </div>

        <div className={styles.scannerBottom}>
          {STEPS.map((s, i) => (
            <span
              key={s.number}
              className={`${styles.scannerBottomTitle} ${i === step ? styles.active : ""}`}
            >
              {s.title}
            </span>
          ))}
          <div className={styles.scannerCounter} aria-hidden="true">
            <span className={styles.scannerCurrent}>
              {String(step + 1).padStart(2, "0")}
            </span>
            <span className={styles.scannerTotal}>/ 03</span>
          </div>
        </div>
      </div>
    </section>
  );
}