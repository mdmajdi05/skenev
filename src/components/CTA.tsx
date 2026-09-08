import Reveal from "@/components/Reveal";

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="container cta-inner">
        <Reveal>
          <div className="eyebrow">TAKE THE NEXT STEP</div>
          <h2>Ready to see beauty more clearly?</h2>
          <p>
            Book a demo and let the SKENEV scanner show you — and your clients —
            a deeper way to understand skin, scalp and beauty.
          </p>
          <a href="/contact" className="btn btn-secondary">
            Talk to Our Team →
          </a>
        </Reveal>
      </div>
    </section>
  );
}