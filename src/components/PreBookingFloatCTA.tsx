"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/site.module.css";

interface PreBookingFloatCTAProps {
  onClick: () => void;
}

export default function PreBookingFloatCTA({ onClick }: PreBookingFloatCTAProps) {
  const [visible, setVisible] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

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

  const toggleCollapsed = () => setCollapsed((c) => !c);

  return (
    <div
      className={`${styles.prebookFloatCta} ${collapsed ? styles.prebookFloatCollapsed : ""}`}
    >
      <button
        type="button"
        className={styles.prebookFloatInner}
        onClick={onClick}
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
      <button
        type="button"
        className={styles.prebookFloatClose}
        onClick={toggleCollapsed}
        aria-label={collapsed ? "Restore pre-book offer" : "Close pre-book offer"}
      >
        {"\u00d7"}
      </button>
      {collapsed && (
        <button
          type="button"
          className={styles.prebookFloatPull}
          onClick={toggleCollapsed}
          aria-label="Restore pre-book offer"
          title="Open pre-book offer"
        >
          <span className={styles.prebookFloatPullArrow}>{"\u2039"}</span>
          <span className={styles.prebookFloatPullText}>10% OFF</span>
        </button>
      )}
    </div>
  );
}