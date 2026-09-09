"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import styles from "@/styles/site.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (data: FormData) => {
    const newErrors: Record<string, string> = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Enter a valid email";
    if (!phone) newErrors.phone = "Phone / WhatsApp number is required";
    else if (!/^[\d\s+\-()]{10,}$/.test(phone)) newErrors.phone = "Enter a valid phone number";

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
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const text = [
      "Hi SKENEV! I'd like to book a demo.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : "",
      `Phone / WhatsApp: ${phone}`,
      interest ? `Interest: ${interest}` : "",
      "",
      message,
    ]
      .filter((line) => line.length > 0)
      .join("\n");

    const url = `${site.whatsappLink}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setStatus(
      "WhatsApp is opening with your demo request details ready to send. Just press send — we'll get back to you within one business day."
    );
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <form className={styles.contactForm} onSubmit={onSubmit} noValidate>
      <h3>Book a demo</h3>
      <div className={styles.contactField}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Jane Smith"
          className={`${styles.contactInput} ${errors.name ? styles.inputError : ""}`}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && <p id="name-error" className={styles.fieldError}>{errors.name}</p>}
      </div>
      <div className={styles.contactField}>
        <label htmlFor="email">Work email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@studio.com"
          className={`${styles.contactInput} ${errors.email ? styles.inputError : ""}`}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && <p id="email-error" className={styles.fieldError}>{errors.email}</p>}
      </div>
      <div className={styles.contactField}>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Studio Name"
          className={styles.contactInput}
        />
      </div>
      <div className={styles.contactField}>
        <label htmlFor="phone">Phone / WhatsApp</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+91 98XXXXXX00"
          className={`${styles.contactInput} ${errors.phone ? styles.inputError : ""}`}
          aria-invalid={errors.phone ? "true" : "false"}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && <p id="phone-error" className={styles.fieldError}>{errors.phone}</p>}
      </div>
      <div className={styles.contactField}>
        <label htmlFor="interest">I am interested in</label>
        <select id="interest" name="interest" className={styles.contactInput}>
          <option value="">Select an option</option>
          <option value="AI Skin Analysis">AI Skin Analysis</option>
          <option value="AI Scalp Analysis">AI Scalp Analysis</option>
          <option value="Beauty Intelligence">Beauty Intelligence</option>
          <option value="Personalized Recommendations">
            Personalized Recommendations
          </option>
          <option value="SKENEV Scanner for my clinic/salon">
            SKENEV Scanner for my clinic/salon
          </option>
        </select>
      </div>
      <div className={styles.contactField}>
        <label htmlFor="message">How can we help?</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your practice or brand..."
          className={styles.contactTextarea}
        />
      </div>
      <button type="submit" className={styles.contactSubmit} disabled={isSubmitting}>
        {isSubmitting ? "Opening WhatsApp…" : "Send via WhatsApp"}
      </button>
      {status ? <p className={styles.contactStatus}>{status}</p> : null}
    </form>
  );
}