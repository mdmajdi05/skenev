"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { VideoItem } from "@/lib/videos";
import { REEL_VIDEOS } from "@/lib/videos";
import styles from "@/styles/site.module.css";

function ReelTile({ video }: { video: VideoItem }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState(false);

  useEffect(() => {
    const node = wrapRef.current;
    const video = videoRef.current;
    if (!node || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          video.play().catch(() => {});
          observer.unobserve(node);
        });
      },
      { threshold: 0.45 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  };

  const toggleSound = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setSound((prev) => !prev);
  };

  return (
    <div className={styles.reelCard}>
      <div className={styles.reelTile} ref={wrapRef}>
        {video.poster && (
          <Image
            src={video.poster}
            alt=""
            aria-hidden
            fill
            sizes="(max-width: 800px) 33vw, (max-width: 480px) 50vw, 20vw"
            className={`${styles.reelPoster} ${playing ? styles.reelPosterHidden : ""}`}
            style={{ objectFit: "cover" }}
          />
        )}
        <video
          ref={videoRef}
          src={video.src}
          muted={!sound}
          loop
          playsInline
          preload="metadata"
          onClick={togglePlay}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className={styles.reelVideo}
        />
        <div className={styles.reelGradient} />

        {!playing && (
          <button
            type="button"
            className={styles.reelPlay}
            onClick={togglePlay}
            aria-label={video.label}
          >
            <span className={styles.reelPlayIcon} />
          </button>
        )}

        {video.label && <span className={styles.reelLabel}>{video.label}</span>}
        <button
          type="button"
          className={styles.reelMute}
          onClick={toggleSound}
          aria-label={sound ? "Mute" : "Unmute"}
        >
          {sound ? "Sound" : "Mute"}
        </button>
      </div>
      {video.title && <h3 className={styles.reelTitle}>{video.title}</h3>}
    </div>
  );
}

export default function VideoReel({
  heading = "Short videos.",
  accent = "Long stories.",
  intro = "Quick, real clips from the SKENEV studio — demos, client sessions and the tiny moments that show how it all works.",
  videos = REEL_VIDEOS,
}: {
  heading?: string;
  accent?: string;
  intro?: string;
  videos?: VideoItem[];
} = {}) {
  return (
    <section className={styles.reelSection}>
      <div className={styles.technologyInner}>
        <Reveal className={styles.sectionHeading}>
          <h2>
            {heading} <em>{accent}</em>
          </h2>
          <p>{intro}</p>
        </Reveal>
        <div className={styles.reelGrid}>
          {videos.map((video) => (
            <ReelTile key={video.title} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}