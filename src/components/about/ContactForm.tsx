"use client";

import { useState } from "react";
import styles from "@/styles/site.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Thanks — we received your message and will reply within one business day.");
    e.currentTarget.reset();
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
        Send message
      </button>
      {status ? <p className={styles.contactStatus}>{status}</p> : null}
    </form>
  );
}