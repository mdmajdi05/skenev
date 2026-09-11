"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { VideoItem } from "@/lib/videos";

export default function VideoSlider({ videos }: { videos: VideoItem[] }) {
  const count = videos.length;
  const [index, setIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (i: number) => setIndex(Math.min(Math.max(i, 0), count - 1)),
    [count]
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [index]);

  useEffect(() => {
    if (count === 1) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count, goPrev, goNext]);

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 50) {
      if (delta < 0) goNext();
      else goPrev();
    }
  };

  return (
    <div className="video-slider">
      <div className="slider-viewport">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {videos.map((video, i) => (
            <div
              className="slider-slide"
              key={`${video.src}-${i}`}
              aria-hidden={i !== index}
            >
              <div className="slider-frame">
                <video
                  ref={(node) => {
                    videoRefs.current[i] = node;
                  }}
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  className="slider-video"
                />
                {video.label && (
                  <div className="slider-badge">
                    <span className="slider-live-dot" />
                    <span>{video.label}</span>
                  </div>
                )}
              </div>
              {video.title && <div className="slider-caption">{video.title}</div>}
            </div>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              className={`slider-arrow slider-arrow--prev ${index === 0 ? "is-hidden" : ""}`}
              onClick={goPrev}
              aria-label="Previous video"
            >
              ←
            </button>
            <button
              type="button"
              className={`slider-arrow slider-arrow--next ${index === count - 1 ? "is-hidden" : ""}`}
              onClick={goNext}
              aria-label="Next video"
            >
              →
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="slider-nav">
          <div className="slider-dots">
            {videos.map((_, i) => (
              <button
                type="button"
                key={i}
                className={`slider-dot ${i === index ? "is-active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to video ${i + 1}`}
              />
            ))}
          </div>
          <div className="slider-index">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </div>
        </div>
      )}
    </div>
  );
}