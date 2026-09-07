"use client";

import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";

type CounterStat = {
  target: number;
  suffix: string;
  label: string;
};

const STATS: CounterStat[] = [
  { target: 6100, suffix: "", label: "Professional Businesses" },
  { target: 33, suffix: "K+", label: "Ingredient Intelligence" },
  { target: 11, suffix: "+", label: "Skin Parameters" },
];

function Counter({ target, suffix }: Omit<CounterStat, "label">) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const duration = 1500;
          const start = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            node.textContent = current.toLocaleString() + suffix;
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(node);
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, suffix]);

  return <strong ref={ref} className="counter">{`0${suffix}`}</strong>;
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {STATS.map((stat) => (
          <Reveal key={stat.label}>
            <div className="stat">
              <Counter target={stat.target} suffix={stat.suffix} />
              <span>{stat.label}</span>
            </div>
          </Reveal>
        ))}
        <Reveal>
          <div className="stat">
            <strong>24/7</strong>
            <span>Cloud AI Platform</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}