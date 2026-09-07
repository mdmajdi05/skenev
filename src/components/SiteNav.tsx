"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/styles/site.module.css";

const SOLUTIONS_SUB = [
  { href: "/solutions/ai-skin-analysis", label: "AI Skin Analysis" },
  { href: "/solutions/ai-scalp-analysis", label: "AI Scalp Analysis" },
  { href: "/solutions/beauty-intelligence", label: "Beauty Intelligence" },
  { href: "/solutions/personalized-recommendations", label: "Personalized Recommendations" },
];

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions", dropdown: true },
  { href: "/products", label: "Product" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSolutionsOpen(false);
      }
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
            {LINKS.map((l) =>
              l.dropdown ? (
                <div
                  key={l.href}
                  className={styles.navDropdown}
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <Link
                    href={l.href}
                    className={`${isActive(l.href) || SOLUTIONS_SUB.some((s) => isActive(s.href)) ? styles.active : ""} ${styles.dropdownTrigger}`}
                  >
                    {l.label}
                    <span className={`${styles.dropdownArrow} ${solutionsOpen ? styles.arrowUp : ""}`}>{"\u25BE"}</span>
                  </Link>
                  <div className={`${styles.dropdownMenu} ${solutionsOpen ? styles.show : ""}`}>
                    {SOLUTIONS_SUB.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className={isActive(s.href) ? styles.active : undefined}
                        onClick={() => setSolutionsOpen(false)}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className={isActive(l.href) ? styles.active : undefined}
                >
                  {l.label}
                </Link>
              )
            )}
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
          <div className={styles.mobileDropdown}>
            <div className={styles.mobileDropdownHeader}>
              <Link
                href="/solutions"
                className={isActive("/solutions") ? styles.active : undefined}
                onClick={() => setOpen(false)}
              >
                Solutions
              </Link>
              <button
                className={styles.mobileDropdownBtn}
                onClick={() => setMobileSolutionsOpen((o) => !o)}
                aria-label="Toggle solutions submenu"
              >
                {mobileSolutionsOpen ? "\u2212" : "\u002B"}
              </button>
            </div>
            <div className={`${styles.mobileSubmenu} ${mobileSolutionsOpen ? styles.show : ""}`}>
              <div className={styles.mobileSubmenuInner}>
                {SOLUTIONS_SUB.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={isActive(s.href) ? styles.active : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/products" className={isActive("/products") ? styles.active : undefined} onClick={() => setOpen(false)}>
            Product
          </Link>
          <Link href="/about" className={isActive("/about") ? styles.active : undefined} onClick={() => setOpen(false)}>
            About Us
          </Link>
          <Link href="/contact" className={isActive("/contact") ? styles.active : undefined} onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}