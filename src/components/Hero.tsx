import Image from "next/image";
import Reveal from "@/components/Reveal";
import { IMG_BEAUTY } from "@/lib/images";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <Reveal>
          <div className="eyebrow">AI BEAUTY INTELLIGENCE</div>
          <h1>
            See beauty
            <span>differently.</span>
          </h1>
          <p className="hero-description">
            Next-generation AI technology for skin, scalp and beauty analysis.
            Turn visual data into personalized insights, recommendations and
            better customer experiences.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Request a Demo
              <span>→</span>
            </a>
            <a href="#solutions" className="btn btn-secondary">
              Explore Solutions
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <Image
                className="hero-image"
                src={IMG_BEAUTY}
                alt="AI Beauty Analysis"
                fill
                sizes="(min-width: 1000px) 50vw, 100vw"
                style={{ objectFit: "cover" }}
                preload
              />
            </div>

            <div className="floating-card">
              <small>AI ANALYSIS SCORE</small>
              <div className="score">
                94<span>%</span>
              </div>
              <small>Personalized analysis completed</small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}