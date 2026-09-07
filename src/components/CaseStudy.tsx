import Image from "next/image";
import Reveal from "@/components/Reveal";
import { IMG_BEAUTY } from "@/lib/images";

export default function CaseStudy() {
  return (
    <section className="case-study site-section" id="cases">
      <div className="container">
        <Reveal className="case-layout">
          <div className="case-image">
            <Image
              src={IMG_BEAUTY}
              alt="Beauty AI case study"
              fill
              sizes="(min-width: 1000px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="case-content">
            <div className="eyebrow">CASE STUDY</div>
            <h2>Turn analysis into action.</h2>
            <p>
              Help your team deliver more meaningful consultations, improve
              customer engagement and create a data-driven beauty experience.
            </p>
            <a href="#" className="btn btn-primary">
              View Case Studies →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}