export type VideoItem = {
  src: string;
  title?: string;
  label?: string;
  poster?: string;
};

export const HERO_VIDEOS: VideoItem[] = [
  {
    src: "/video/hero-video.mp4",
    title: "SKENEV in a real scan",
    label: "Live Demo",
  },
];

export const REEL_VIDEOS: VideoItem[] = [
  {
    src: "/video/p1.mp4",
    poster: "/skenev-hero.webp",
    title: "Meet the SKENEV scanner",
    label: "Intro",
  },
  {
    src: "/video/p2.mp4",
    poster: "/skenev-hero1.webp",
    title: "60s full analysis",
    label: "Demo",
  },
  {
    src: "/video/p3.mp4",
    poster: "/skin.webp",
    title: "Skin mode deep dive",
    label: "Skin",
  },
  {
    src: "/video/p4.mp4",
    poster: "/acne.webp",
    title: "Scalp & hair reading",
    label: "Scalp",
  },
  {
    src: "/video/p5.mp4",
    poster: "/product-1.webp",
    title: "Client report in real time",
    label: "Reports",
  },
];