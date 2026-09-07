"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#solutions", label: "Solutions", id: "solutions" },
  { href: "#technology", label: "Technology", id: "technology" },
  { href: "#scanner", label: "Scanner", id: "scanner" },
  { href: "#business", label: "Business", id: "business" },
  { href: "#cases", label: "Case Studies", id: "cases" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-inner">
        <a href="#" className="logo">
          <span className="logo-mark">S</span>
          SKENEV<span>IQ</span>
        </a>

        <nav className="site-nav">
          <ul className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.id ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
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
