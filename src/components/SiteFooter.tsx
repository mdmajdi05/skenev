import Link from "next/link";
import styles from "@/styles/site.module.css";

const COMPANY = [
  { href: "/about", label: "About" },
  { href: "/technology", label: "Technology" },
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Contact" },
];

const SOLUTIONS = [
  { href: "/solutions#dermatologists", label: "Dermatologists" },
  { href: "/solutions#clinics", label: "Clinics & Salons" },
  { href: "/solutions#brands", label: "Beauty Brands" },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.brand} aria-label="SKENEV home">
            <span className={styles.brandMark}>S</span>
            SKENEV
          </Link>
          <p className={styles.footerDescription}>
            AI-powered skin, scalp and beauty analysis that makes every consultation
            deeper, faster and more personal.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerColumn}>
            <h4>Company</h4>
            <ul>
              {COMPANY.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Solutions</h4>
            <ul>
              {SOLUTIONS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Contact</h4>
            <ul>
              <li>
                <Link href="/contact">Book a Demo</Link>
              </li>
              <li>
                <span>hello@skeenev.com</span>
              </li>
              <li>
                <span>Privacy Policy</span>
              </li>
              <li>
                <span>Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <span>&copy; 2026 SKENEV. All rights reserved.</span>
          <span>Intelligent beauty technology.</span>
          <div className={styles.footerLegal}>
            <Link href="/contact">Privacy</Link>
            <Link href="/contact">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}