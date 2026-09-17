"use client";

import { BadgeCheck, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import { product } from "@/data/product";

const WRAP_CLS = "mx-auto max-w-[1240px] px-[21px] max-[700px]:px-[13px]";
const SECTION_PAD = "py-[110px] max-[700px]:py-[56px]";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} className="fill-[#c4a274] text-[#c4a274]" />
      ))}
    </div>
  );
}

export default function EuropeReviews() {
  return (
    <div id="europe-reviews">
      <section className={`${SECTION_PAD} bg-[#f7f0e2]`}>
        <div className={WRAP_CLS}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-3xl">
              <p className="eyebrow">SOLD & LOVED ACROSS EUROPE</p>
              <h2 className="text-4xl sm:text-5xl tracking-[-0.05em] font-semibold mt-3">
                Already trusted in Europe.
              </h2>
              <p className="productMuted text-lg leading-8 mt-5">{product.europe.intro}</p>
            </div>

            <div className="grid grid-cols-3 gap-3 shrink-0">
              {product.europe.stats.map((s) => (
                <div key={s.label} className="productCard rounded-[18px] border border-[#d4c6ad] p-4 text-center min-w-[124px]">
                  <div className="productGold text-2xl sm:text-[28px] font-black tracking-tight">{s.value}</div>
                  <div className="productMuted text-[10px] font-bold mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {product.europe.countries.map((c) => (
              <span
                key={c}
                className="productCard rounded-full border border-[#d4c6ad] px-3 py-2 text-xs font-bold inline-flex items-center gap-1.5"
              >
                <MapPin size={13} className="productGold" />
                {c}
              </span>
            ))}
            {product.trustedBadges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-[#cbb992] bg-white/70 px-3 py-2 text-xs font-bold inline-flex items-center gap-1.5"
              >
                <BadgeCheck size={13} className="productGold" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={`${SECTION_PAD} softGlow`}>
        <div className={WRAP_CLS}>
          <div className="max-w-3xl">
            <p className="eyebrow">VERIFIED CUSTOMER REVIEWS</p>
            <h2 className="text-4xl sm:text-5xl tracking-[-0.05em] font-semibold mt-3">
              What European professionals say.
            </h2>
            <p className="productMuted text-lg leading-8 mt-5">
              Real feedback from clinics, salons and studios that already run SKENEV.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {product.europe.reviews.map((r) => (
              <motion.div
                whileHover={{ y: -6 }}
                key={r.country}
                className="productCard rounded-[28px] border border-[#d4c6ad] p-7 flex flex-col shadow-[0_18px_50px_rgba(48,38,31,0.06)]"
              >
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="flex items-center gap-1 text-[10px] font-extrabold text-[#6f8f5f] bg-[#eef3e7] rounded-full px-2.5 py-1">
                    <BadgeCheck size={12} /> Verified order
                  </span>
                </div>

                <blockquote className="productMuted text-[15px] leading-7 mt-5 flex-1">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>

                <div className="border-t border-[#e0d6c4] mt-6 pt-5 flex items-center gap-3">
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-[#efe3c4] text-lg" aria-hidden>
                    {r.flag}
                  </span>
                  <div className="min-w-0">
                    <div className="font-extrabold text-sm truncate">{r.name}</div>
                    <div className="productMuted text-xs mt-0.5">{r.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}