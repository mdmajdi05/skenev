import Reveal from "@/components/Reveal";

const TESTIMONIALS = [
  {
    quote:
      "SKENEV turned our consultations upside down. Clients now arrive already knowing what we found — visits feel deeper, and sales follow naturally.",
    name: "Dr. Anika Sharma",
    role: "Dermatologist · Mumbai",
    highlight: "62% longer consultations",
  },
  {
    quote:
      "We scan every client in under a minute. It's the most professional 'wow' moment we've added to a salon floor in years.",
    name: "Lena Moreau",
    role: "Salon Director · Paris",
    highlight: "90s average scan time",
  },
  {
    quote:
      "Real numbers, real evidence. SKENEV gives us consumer-scale beauty intelligence we can actually build products on.",
    name: "James Okafor",
    role: "Head of R&D · Beauty brand",
    highlight: "33K+ analyses analyzed",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials site-section" id="testimonials">
      <div className="container">
        <Reveal>
          <div className="section-header center">
            <div className="eyebrow">TRUSTED IN PRACTICE</div>
            <h2>Professionals who chose SKENEV.</h2>
            <p>From clinics to salons to labs — the scanner that makes intelligence personal.</p>
          </div>
        </Reveal>

        <div className="testimonial-grid">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.name}>
              <figure className="testimonial-card">
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  {"★★★★★"}
                </div>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </figcaption>
                <div className="testimonial-highlight">{t.highlight}</div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}