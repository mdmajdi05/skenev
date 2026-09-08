import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import styles from "@/styles/site.module.css";

const COMPANY = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Product" },
  { href: "/solutions", label: "Solutions" },
  { href: "/technology", label: "Technology" },
  { href: "/careers", label: "Careers" },
];

const SOLUTIONS = [
  { href: "/solutions/ai-skin-analysis", label: "AI Skin Analysis" },
  { href: "/solutions/ai-scalp-analysis", label: "AI Scalp Analysis" },
  { href: "/solutions/beauty-intelligence", label: "Beauty Intelligence" },
  {
    href: "/solutions/personalized-recommendations",
    label: "Personalized Recommendations",
  },
];

const SUPPORT = [
  { href: "/contact", label: "Book a Demo" },
  { href: "/contact", label: "Privacy Policy" },
  { href: "/contact", label: "Terms & Conditions" },
  { href: "/careers", label: "Join Our Team" },
];

const SOCIALS = [
  { href: site.socials.instagram, label: "Instagram", handle: "@skenev" },
  { href: site.socials.linkedin, label: "LinkedIn", handle: "SKENEV" },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.brand} aria-label="SKENEV home">
            <Image src="/logo.webp" alt="SKENEV" width={433} height={142} className={styles.brandLogo} />
          </Link>
          <p className={styles.footerDescription}>
            AI-powered skin, scalp and beauty analysis that makes every
            consultation deeper, faster and more personal. Proudly made in
            India for the world.
          </p>
          <div className={styles.footerAddress}>
            <strong>{site.name}</strong>
            <span>{site.address.city}, {site.address.country}</span>
            <span>
              {site.whatsappDisplay
                ? `WhatsApp ${site.whatsappDisplay}`
                : "Mon – Sat, 10am – 7pm IST"}
            </span>
          </div>
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
            <h4>Support</h4>
            <ul>
              {SUPPORT.map((l) => (
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
                <a href={`mailto:${site.email}`}>
                  {site.email || "careers@skenev.in"}
                </a>
              </li>
              <li>
                <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer">
                  WhatsApp {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <span>{site.address.city}, {site.address.country}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <span>&copy; 2026 {site.name}. All rights reserved.</span>
          <div className={styles.footerSocials}>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
          <span>Intelligent beauty technology · Made in India</span>
          <div className={styles.footerLegal}>
            <Link href="/contact">Privacy</Link>
            <Link href="/contact">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}