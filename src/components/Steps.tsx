import Reveal from "@/components/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Capture",
    description:
      "Point SKENEV at the face or scalp. In seconds the scanner captures high-resolution visual and environmental data.",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "Our AI models process 11+ parameters — from hydration and sebum to density and tone — in real time.",
  },
  {
    number: "03",
    title: "Understand",
    description:
      "Raw analysis becomes clear, honest insight and customer-ready reports — no medical degree needed.",
  },
  {
    number: "04",
    title: "Personalize",
    description:
      "Turn insight into action: routines, products and treatments built for one unique beauty signature.",
  },
];

export default function Steps() {
  return (
    <section className="steps site-section">
      <div className="container">
        <Reveal>
          <div className="section-header center">
            <div className="eyebrow">HOW IT WORKS</div>
            <h2>From scan to personal plan in four steps.</h2>
            <p>
              Designed to make advanced beauty technology effortless for
              professionals — and unforgettable for their customers.
            </p>
          </div>
        </Reveal>

        <div className="steps-grid">
          {STEPS.map((step) => (
            <Reveal key={step.number}>
              <div className="step">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}