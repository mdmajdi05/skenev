"use client";

import { useState, useEffect, useRef } from "react";
import styles from "@/styles/site.module.css";

const TICKER_ITEMS = [
  { icon: "🚀", text: "Launch Offer: Pre-book the SKENEV AI Scanner & get 10% OFF — Pay only at delivery" },
  { icon: "🎁", text: "First 100 pre-bookings get FREE priority delivery across India" },
  { icon: "💎", text: "Zero advance payment — reserve your unit today, pay at delivery" },
  { icon: "📦", text: "Launch units are limited — early access for clinics, salons & beauty brands" },
  { icon: "⚡", text: "60-second AI analysis — skin, scalp & hair intelligence in one scanner" },
];

export default function PreBookingBanner({ onPrebookClick }: { onPrebookClick: () => void }) {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mounted || dismissed) return;
    const el = bannerRef.current;
    const updateOffset = () => {
      if (el) document.documentElement.style.setProperty("--nav-offset", `${el.offsetHeight}px`);
    };
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, [mounted, dismissed]);

  useEffect(() => {
    if (mounted && dismissed) {
      document.documentElement.style.setProperty("--nav-offset", "0px");
    }
  }, [mounted, dismissed]);

  if (dismissed) return null;

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDismissed(true);
  };

  const track = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className={styles.prebookBannerWrap} ref={bannerRef} role="region" aria-label="Launch offer announcement">
      <div className={styles.prebookBannerInner}>
        <div className={styles.prebookTicker} onClick={onPrebookClick}>
          <div className={styles.prebookTickerTrack}>
            {track.map((item, i) => (
              <span key={i} className={styles.prebookTickerItem}>
                <span className={styles.prebookTickerIcon} aria-hidden="true">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.prebookBannerActions}>
          <button
            onClick={(e) => { e.stopPropagation(); onPrebookClick(); }}
            className={styles.prebookBannerCta}
            aria-label="Pre-book now and get 10% off"
          >
            Pre-book Now
          </button>
          <button
            onClick={handleDismiss}
            className={styles.prebookBannerDismiss}
            aria-label="Dismiss announcement"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}