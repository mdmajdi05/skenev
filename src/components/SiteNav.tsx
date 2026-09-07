"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/styles/site.module.css";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/technology", label: "Technology" },
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <div className={styles.navWrap}>
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
          <Link href="/" className={styles.brand} aria-label="SKENEV home">
            <span className={styles.brandMark}>S</span>
            SKENEV
          </Link>
          <div className={styles.navLinks}>
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={isActive(l.href) ? styles.active : undefined}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link href="/contact" className={styles.navCta}>
            Get Started
          </Link>
          <button
            className={styles.menuBtn}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? "\u00d7" : "\u2630"}
          </button>
        </nav>
      </div>
      <div className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
        <div className={styles.mobileMenuLinks}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? styles.active : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}