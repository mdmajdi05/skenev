import Reveal from "@/components/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Capture",
    description:
      "Capture high-quality visual information using the AI scanner or supported camera system.",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "Our AI models process multiple visual and environmental parameters.",
  },
  {
    number: "03",
    title: "Understand",
    description:
      "Turn raw analysis into easy-to-understand insights and customer-friendly reports.",
  },
  {
    number: "04",
    title: "Personalize",
    description:
      "Deliver recommendations and services tailored to individual customer needs.",
  },
];

export default function Steps() {
  return (
    <section className="steps site-section">
      <div className="container">
        <Reveal>
          <div className="section-header center">
            <div className="eyebrow">SIMPLE PROCESS</div>
            <h2>Intelligence in four steps.</h2>
            <p>
              Designed to make advanced beauty technology simple for
              professionals and customers.
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