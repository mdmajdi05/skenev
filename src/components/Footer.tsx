const FOOTER_COLUMNS = [
  {
    heading: "Solutions",
    links: [
      { label: "Skin AI", href: "#solutions" },
      { label: "Scalp AI", href: "#solutions" },
      { label: "Beauty AI", href: "#solutions" },
      { label: "AI Scanner", href: "#scanner" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Case Studies", href: "#cases" },
      { label: "Technology", href: "#technology" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-mark">B</span>
              BEAUT<span>IQ</span>
            </div>
            <p>
              AI-powered beauty intelligence for the next generation of
              personalized skin, scalp and beauty experiences.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div className="footer-column" key={column.heading}>
              <h4>{column.heading}</h4>
              {column.links.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="copyright">
          <span>© 2026 BEAUTIQ. All rights reserved.</span>
          <span>AI Beauty Intelligence Platform</span>
        </div>
      </div>
    </footer>
  );
}