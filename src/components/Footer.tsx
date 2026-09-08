import { site } from "@/lib/site";

const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "SKENEV Scanner", href: "/products" },
      { label: "Skin AI", href: "/solutions/ai-skin-analysis" },
      { label: "Scalp AI", href: "/solutions/ai-scalp-analysis" },
      { label: "Beauty Intelligence", href: "/solutions/beauty-intelligence" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Solutions", href: "/solutions" },
      { label: "Technology", href: "/technology" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ", href: "#faq" },
      {
        label: "Personalized Recommendations",
        href: "/solutions/personalized-recommendations",
      },
      { label: "Privacy", href: "/contact" },
      { label: "Terms", href: "/contact" },
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
              <span className="logo-mark">S</span>
              SKENEV<span>ai</span>
            </div>
            <p>
              One intelligent beauty scanner for skin, scalp and beauty
              analysis — built for the professionals who measure what matters.
            </p>
            <div className="footer-address">
              <strong>{site.name} — New Delhi</strong>
              <span>{site.address.full}</span>
            </div>
            <a className="footer-whatsapp" href={site.whatsappLink} target="_blank" rel="noopener noreferrer">
              WhatsApp {site.whatsappDisplay}
            </a>
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
          <span>© 2026 {site.name}. All rights reserved.</span>
          <span>Intelligent Beauty Technology · Made in India</span>
        </div>
      </div>
    </footer>
  );
}