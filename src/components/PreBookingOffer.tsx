"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/site";
import styles from "@/styles/site.module.css";

export default function PreBookingOffer() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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
      "WhatsApp is opening with your pre-booking details ready to send. Just press send — we'll confirm your 10% discount within one business day."
    );
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="prebooking" className={styles.prebook} aria-labelledby="prebook-heading">
      <div className={styles.prebookBanner}>
        <Image
          src="/banner.webp"
          alt="SKENEV AI beauty scanner launch offer"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className={styles.prebookOverlay} />
        <div className={styles.prebookRibbon} aria-hidden="true">
          <span className={styles.prebookRibbonText}>🔥 LAUNCH OFFER</span>
          <span className={styles.prebookRibbonPercent}>10% OFF</span>
        </div>
        <div className={styles.prebookBadge}>Limited time · Launch offer</div>
        <h2 id="prebook-heading">
          Pre-book the SKENEV scanner & get <em>10% off.</em>
        </h2>
        <p>
          Reserve your unit now, pay only at delivery — and lock in guaranteed
          launch pricing on India&rsquo;s first all-in-one AI beauty scanner.
        </p>
        <div className={styles.prebookUrgency}>
          <span className={styles.prebookUrgencyIcon} aria-hidden="true">⏳</span>
          <span>Offer valid for first <strong>100 pre-bookings</strong> only</span>
        </div>
      </div>

      <div className={styles.prebookInner}>
        <div className={styles.prebookInfo}>
          <span className={styles.eyebrow}>How pre-booking works</span>
          <ol className={styles.prebookSteps}>
            <li>
              <strong>Fill the form</strong>
              <span>It takes under a minute — your details go straight to our team on WhatsApp.</span>
            </li>
            <li>
              <strong>We call you back</strong>
              <span>We confirm stock, pricing and delivery timeline for your city.</span>
            </li>
            <li>
              <strong>Pay at delivery</strong>
              <span>No advance needed today. Your 10% launch discount stays locked.</span>
            </li>
          </ol>
          <div className={styles.prebookNote}>
            <strong>{site.whatsappDisplay}</strong>
            <span>WhatsApp us directly — we reply within one business day.</span>
          </div>
        </div>

        <form className={`${styles.contactForm} ${styles.prebookForm}`} onSubmit={onSubmit} noValidate>
          <h3>Reserve your 10% discount</h3>
          <div className={styles.contactField}>
            <label htmlFor="prebook-name">Full name</label>
            <input
              id="prebook-name"
              name="name"
              type="text"
              required
              placeholder="Aarav Sharma"
              className={`${styles.contactInput} ${errors.name ? styles.inputError : ""}`}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "prebook-name-error" : undefined}
            />
            {errors.name && <p id="prebook-name-error" className={styles.fieldError}>{errors.name}</p>}
          </div>
          <div className={styles.contactField}>
            <label htmlFor="prebook-phone">Phone / WhatsApp</label>
            <input
              id="prebook-phone"
              name="phone"
              type="tel"
              required
              placeholder="+91 98XXXXXXXX"
              className={`${styles.contactInput} ${errors.phone ? styles.inputError : ""}`}
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "prebook-phone-error" : undefined}
            />
            {errors.phone && <p id="prebook-phone-error" className={styles.fieldError}>{errors.phone}</p>}
          </div>
          <div className={styles.contactField}>
            <label htmlFor="prebook-email">Email</label>
            <input
              id="prebook-email"
              name="email"
              type="email"
              placeholder="aarav@clinic.com"
              className={styles.contactInput}
            />
          </div>
          <div className={styles.contactField}>
            <label htmlFor="prebook-city">City</label>
            <input
              id="prebook-city"
              name="city"
              type="text"
              required
              placeholder="New Delhi"
              className={`${styles.contactInput} ${errors.city ? styles.inputError : ""}`}
              aria-invalid={errors.city ? "true" : "false"}
              aria-describedby={errors.city ? "prebook-city-error" : undefined}
            />
            {errors.city && <p id="prebook-city-error" className={styles.fieldError}>{errors.city}</p>}
          </div>
          <div className={styles.contactField}>
            <label htmlFor="prebook-profile">I am a</label>
            <select
              id="prebook-profile"
              name="profile"
              className={`${styles.contactInput} ${errors.profile ? styles.inputError : ""}`}
              aria-invalid={errors.profile ? "true" : "false"}
              aria-describedby={errors.profile ? "prebook-profile-error" : undefined}
            >
              <option value="">Select your business</option>
              <option value="Dermatologist / Clinic">Dermatologist / Clinic</option>
              <option value="Salon / Spa">Salon / Spa</option>
              <option value="Beauty Brand">Beauty Brand</option>
              <option value="Distributor / Reseller">Distributor / Reseller</option>
              <option value="Other">Other</option>
            </select>
            {errors.profile && <p id="prebook-profile-error" className={styles.fieldError}>{errors.profile}</p>}
          </div>
          <div className={styles.contactField}>
            <label htmlFor="prebook-message">Anything else?</label>
            <textarea
              id="prebook-message"
              name="message"
              rows={3}
              placeholder="Tell us what you'd like to use SKENEV for..."
              className={styles.contactTextarea}
            />
          </div>
          <button type="submit" className={styles.contactSubmit} disabled={isSubmitting}>
            {isSubmitting ? "Opening WhatsApp…" : "Send via WhatsApp \u2192"}
          </button>
          {status ? <p className={styles.contactStatus}>{status}</p> : null}
        </form>
      </div>
    </section>
  );
}