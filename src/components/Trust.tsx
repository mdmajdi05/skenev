const TRUST_LOGOS = ["WELLA", "AVEDA", "L'ORÉAL", "OLIVE YOUNG", "UNILEVER"];

export default function Trust() {
  return (
    <div className="trust">
      <div className="container trust-inner">
        <div className="trust-text">
          Trusted by beauty, healthcare &amp; professional businesses
        </div>
        <div className="trust-logos">
          {TRUST_LOGOS.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </div>
    </div>
  );
}