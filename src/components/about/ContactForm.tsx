"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import styles from "@/styles/site.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const phone = String(data.get("phone") ?? "");
    const interest = String(data.get("interest") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Demo request from ${name}${company ? ` (${company})` : ""}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : "",
      phone ? `Phone: ${phone}` : "",
      interest ? `I am interested in: ${interest}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setStatus(
      "Your email app is opening with your details ready to send. Prefer chat? Message us on WhatsApp directly."
    );
    form.reset();
  };

  return (
    <form className={styles.contactForm} onSubmit={onSubmit}>
      <h3>Book a demo</h3>
      <div className={styles.contactField}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Jane Smith"
          className={styles.contactInput}
        />
      </div>
      <div className={styles.contactField}>
        <label htmlFor="email">Work email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@studio.com"
          className={styles.contactInput}
        />
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
          placeholder="+91 98XXXXXX00"
          className={styles.contactInput}
        />
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
      <button type="submit" className={styles.contactSubmit}>
        Send via Email
      </button>
      {status ? <p className={styles.contactStatus}>{status}</p> : null}
      <a
        href={site.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappLinked}
      >
        Prefer chat? Message us on WhatsApp →
      </a>
    </form>
  );
}