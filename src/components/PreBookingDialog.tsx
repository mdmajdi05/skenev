"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { site } from "@/lib/site";
import styles from "@/styles/site.module.css";

interface PreBookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PreBookingDialog({ isOpen, onClose }: PreBookingDialogProps) {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const dialogRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const trapFocus = useCallback((e: KeyboardEvent) => {
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable?.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        firstInputRef.current?.focus();
        closeBtnRef.current?.focus();
      }, 100);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") trapFocus(e);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, trapFocus]);

  if (!isOpen) return null;

  const validateForm = (data: FormData) => {
    const newErrors: Record<string, string> = {};
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const city = String(data.get("city") ?? "").trim();
    const profile = String(data.get("profile") ?? "").trim();

    if (!name) newErrors.name = "Full name is required";
    if (!phone) newErrors.phone = "Phone / WhatsApp is required";
    else if (!/^[\d\s+\-()]{10,}$/.test(phone)) newErrors.phone = "Enter a valid phone number";
    if (!city) newErrors.city = "City is required";
    if (!profile) newErrors.profile = "Please select your business type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!validateForm(data)) return;

    setIsSubmitting(true);
    setStatus("");

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const city = String(data.get("city") ?? "").trim();
    const profile = String(data.get("profile") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const text = [
      "Hi SKENEV! I want to PRE-BOOK the SKENEV AI scanner at the 10% launch discount.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `City: ${city}`,
      `I am a: ${profile}`,
      "",
      message,
    ]
      .filter((line) => line.length > 0)
      .join("\n");

    const url = `${site.whatsappLink}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setStatus(
      "WhatsApp is opening with your pre-booking details ready to send. Just press send — we&rsquo;ll confirm your 10% discount within one business day."
    );
    form.reset();
    setIsSubmitting(false);

    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className={styles.prebookDialogOverlay} onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="dialog-title">
      <div className={styles.prebookDialog} onClick={(e) => e.stopPropagation()} ref={dialogRef}>
        <div className={styles.prebookDialogHeader}>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className={styles.prebookDialogClose}
            aria-label="Close pre-booking dialog"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className={styles.prebookDialogRibbon} aria-hidden="true">
            <span className={styles.prebookDialogRibbonText}>Launch Offer</span>
            <span className={styles.prebookDialogRibbonPercent}>10% OFF</span>
          </div>
          <h2 id="dialog-title">Pre-book the SKENEV scanner & get <em>10% off.</em></h2>
          <p>Reserve your unit now, pay only at delivery — lock in launch pricing on India&rsquo;s first all-in-one AI beauty scanner.</p>
        </div>

        <form ref={formRef} className={styles.prebookDialogForm} onSubmit={onSubmit} noValidate>
          <div className={styles.prebookDialogField}>
            <label htmlFor="dialog-name">Full name</label>
            <input
              ref={firstInputRef}
              id="dialog-name"
              name="name"
              type="text"
              required
              placeholder="Aarav Sharma"
              className={`${styles.prebookDialogInput} ${errors.name ? styles.inputError : ""}`}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "dialog-name-error" : undefined}
              disabled={isSubmitting}
            />
            {errors.name && <p id="dialog-name-error" className={styles.prebookDialogFieldError}>{errors.name}</p>}
          </div>
          <div className={styles.prebookDialogField}>
            <label htmlFor="dialog-phone">Phone / WhatsApp</label>
            <input
              id="dialog-phone"
              name="phone"
              type="tel"
              required
              placeholder="+91 98XXXXXXXX"
              className={`${styles.prebookDialogInput} ${errors.phone ? styles.inputError : ""}`}
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "dialog-phone-error" : undefined}
              disabled={isSubmitting}
            />
            {errors.phone && <p id="dialog-phone-error" className={styles.prebookDialogFieldError}>{errors.phone}</p>}
          </div>
          <div className={styles.prebookDialogField}>
            <label htmlFor="dialog-email">Email</label>
            <input
              id="dialog-email"
              name="email"
              type="email"
              placeholder="aarav@clinic.com"
              className={styles.prebookDialogInput}
              disabled={isSubmitting}
            />
          </div>
          <div className={styles.prebookDialogField}>
            <label htmlFor="dialog-city">City</label>
            <input
              id="dialog-city"
              name="city"
              type="text"
              required
              placeholder="New Delhi"
              className={`${styles.prebookDialogInput} ${errors.city ? styles.inputError : ""}`}
              aria-invalid={errors.city ? "true" : "false"}
              aria-describedby={errors.city ? "dialog-city-error" : undefined}
              disabled={isSubmitting}
            />
            {errors.city && <p id="dialog-city-error" className={styles.prebookDialogFieldError}>{errors.city}</p>}
          </div>
          <div className={styles.prebookDialogField}>
            <label htmlFor="dialog-profile">I am a</label>
            <select
              id="dialog-profile"
              name="profile"
              className={`${styles.prebookDialogSelect} ${errors.profile ? styles.inputError : ""}`}
              aria-invalid={errors.profile ? "true" : "false"}
              aria-describedby={errors.profile ? "dialog-profile-error" : undefined}
              disabled={isSubmitting}
            >
              <option value="">Select your business</option>
              <option value="Dermatologist / Clinic">Dermatologist / Clinic</option>
              <option value="Salon / Spa">Salon / Spa</option>
              <option value="Beauty Brand">Beauty Brand</option>
              <option value="Distributor / Reseller">Distributor / Reseller</option>
              <option value="Other">Other</option>
            </select>
            {errors.profile && <p id="dialog-profile-error" className={styles.prebookDialogFieldError}>{errors.profile}</p>}
          </div>
          <div className={styles.prebookDialogField}>
            <label htmlFor="dialog-message">Anything else?</label>
            <textarea
              id="dialog-message"
              name="message"
              rows={3}
              placeholder="Tell us what you'd like to use SKENEV for..."
              className={styles.prebookDialogTextarea}
              disabled={isSubmitting}
            />
          </div>
          <button type="submit" className={styles.prebookDialogSubmit} disabled={isSubmitting}>
            {isSubmitting ? "Opening WhatsApp…" : "Send via WhatsApp →"}
          </button>
          {status ? <p className={styles.prebookDialogStatus}>{status}</p> : null}
        </form>
      </div>
    </div>
  );
}