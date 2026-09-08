"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#solutions", label: "Solutions", id: "solutions", dropdown: true },
  { href: "#scanner", label: "Scanner", id: "scanner" },
  { href: "#business", label: "Business", id: "business" },
  { href: "#testimonials", label: "Reviews", id: "testimonials" },
  { href: "#faq", label: "FAQ", id: "faq" },
];

const SOLUTIONS_SUB = [
  { href: "/solutions/ai-skin-analysis", label: "AI Skin Analysis" },
  { href: "/solutions/ai-scalp-analysis", label: "AI Scalp Analysis" },
  { href: "/solutions/beauty-intelligence", label: "Beauty Intelligence" },
  {
    href: "/solutions/personalized-recommendations",
    label: "Personalized Recommendations",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState("solutions");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-inner">
        <a href="#" className="logo">
          <span className="logo-mark">S</span>
          SKENEV<span>ai</span>
        </a>

        <nav className="site-nav">
          <ul className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <li
                  key={link.href}
                  className="nav-dropdown"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <a
                    href={link.href}
                    className={`${active === link.id ? "active" : ""} nav-dropdown-trigger`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                    <span className="nav-dropdown-arrow">▾</span>
                  </a>
                  <div className={`nav-dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                    {SOLUTIONS_SUB.map((sub) => (
                      <a key={sub.href} href={sub.href}>
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={active === link.id ? "active" : ""}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        <a href="#contact" className="nav-cta">
          Book a Demo
          <span>→</span>
        </a>

        <button
          className="menu-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
}