import Image from "next/image";
import Reveal from "@/components/Reveal";
import { IMG_SCALP } from "@/lib/images";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <Reveal>
          <div className="eyebrow">MEET THE SKENEV SCANNER</div>
          <h1>
            See what
            <span>skin,scalp &amp; beauty</span>
            can&rsquo;t hide.
          </h1>
          <p className="hero-description">
            SKENEV is one intelligent beauty scanner — a 60-second analysis that
            reads skin, scalp and hair at a depth no mirror can match, then
            turns it into clear, personal insight for you and your clients.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Book a Demo
              <span>→</span>
            </a>
            <a href="#scanner" className="btn btn-secondary">
              Discover the Scanner
            </a>
          </div>
          <div className="hero-meta">
            <span className="hero-meta-item">
              <strong>60s</strong> full analysis
            </span>
            <span className="hero-meta-item">
              <strong>11+</strong> skin parameters
            </span>
            <span className="hero-meta-item">
              <strong>3</strong> intelligence modes
            </span>
          </div>
        </Reveal>

        <Reveal>
          <div className="hero-visual">
            <div className="hero-product-badge">
              <span className="hero-product-dot" />
              <span>The SKENEV scanner</span>
            </div>
            <div className="hero-image-wrap">
              <Image
                className="hero-image"
                src={IMG_SCALP}
                alt="The SKENEV AI beauty scanner"
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

            <div className="floating-card floating-card--alt">
              <small>HYDRATION LEVEL</small>
              <div className="score">
                0.7<span> AU</span>
              </div>
              <small>Optimized for your skin</small>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="hero-scroll">
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}