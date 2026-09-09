"use client";

import { useCallback, useEffect, useRef } from "react";
import styles from "@/styles/site.module.css";

interface PreBookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onPrebook: () => void;
}

export default function PreBookingPopup({ isOpen, onClose, onPrebook }: PreBookingPopupProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  const handlePrebook = useCallback(() => {
    onPrebook();
  }, [onPrebook]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const timer = setTimeout(() => dialogRef.current?.focus(), 100);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.prebookPopupOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className={styles.prebookPopup}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={styles.prebookPopupClose}
          aria-label="Close promotional popup"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/skenev-hero1.webp"
          alt="SKENEV AI beauty scanner — launch offer, pre-book with 10% off"
          className={styles.prebookPopupImage}
          loading="eager"
        />
        <div className={styles.prebookPopupBody}>
          <span className={styles.prebookPopupBadge}>Launch Offer</span>
          <h2 id="popup-title">
            The scanner is here — <em>reserve yours now.</em>
          </h2>
          <p>
            Pre-book the SKENEV AI beauty scanner and lock in <strong>10% off</strong>{" "}
            launch pricing, before it launches in India.
          </p>
          <button onClick={handlePrebook} className={styles.prebookPopupCta}>
            Pre-book Now
          </button>
        </div>
      </div>
    </div>
  );
}