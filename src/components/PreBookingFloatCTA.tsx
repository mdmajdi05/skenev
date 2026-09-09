"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/site.module.css";

interface PreBookingFloatCTAProps {
  onClick: () => void;
}

export default function PreBookingFloatCTA({ onClick }: PreBookingFloatCTAProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const prebookSection = document.getElementById("prebooking");
      if (!prebookSection) {
        setVisible(true);
        return;
      }
      const rect = prebookSection.getBoundingClientRect();
      const isNear = rect.top < window.innerHeight * 1.2 && rect.bottom > 0;
      setVisible(!isNear);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={onClick}
      className={styles.prebookFloatCta}
      aria-label="Pre-book SKENEV scanner and get 10% off"
      title="Pre-book & Save 10%"
    >
      <span className={styles.prebookFloatPulse} aria-hidden="true" />
      <span className={styles.prebookFloatIcon} aria-hidden="true">🎁</span>
      <span className={styles.prebookFloatLabel}>
        <strong>Pre-book</strong>
        <em>10% OFF</em>
      </span>
    </button>
  );
}