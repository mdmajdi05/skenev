import Reveal from "@/components/Reveal";

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="container cta-inner">
        <Reveal>
          <div className="eyebrow">LET&apos;S BUILD THE FUTURE</div>
          <h2>Ready to make beauty more intelligent?</h2>
          <p>
            Talk to our team about bringing AI-powered skin, scalp and beauty
            intelligence to your business.
          </p>
          <a href="mailto:hello@example.com" className="btn btn-secondary">
            Talk to Our Team →
          </a>
        </Reveal>
      </div>
    </section>
  );
}