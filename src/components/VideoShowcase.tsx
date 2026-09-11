import Reveal from "@/components/Reveal";
import VideoSlider from "@/components/VideoSlider";
import type { VideoItem } from "@/lib/videos";
import { HERO_VIDEOS } from "@/lib/videos";

export default function VideoShowcase({
  id = "video",
  eyebrow = "See It In Action",
  title = "SKENEV in a",
  accent = "real scan",
  sub = "Watch the scanner read skin, scalp & hair in real time — a 60-second pass that turns into deep, actionable insight.",
  videos = HERO_VIDEOS,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  accent?: string;
  sub?: string;
  videos?: VideoItem[];
}) {
  return (
    <section className="video-showcase" id={id}>
      <div className="container">
        <Reveal>
          <div className="section-header center">
            <div className="eyebrow">{eyebrow}</div>
            <h2>
              {title}
              <span className="heading-accent"> {accent}</span>
            </h2>
            <p>{sub}</p>
          </div>
        </Reveal>

        <Reveal>
          <VideoSlider videos={videos} />
        </Reveal>
      </div>
    </section>
  );
}