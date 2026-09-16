"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Minus,
  Plus,
  ShoppingBag,
  MessageCircle,
  ShieldCheck,
  Truck,
  Sparkles,
} from "lucide-react";
import { product } from "@/data/product";
import { useCart } from "./store";

const money = (n: number | null) =>
  n == null
    ? "Price on request"
    : new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(n);

const WA_LINK = `https://wa.me/${product.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi SKENEV team, I want to enquire about the AI Skin, Scalp & Beauty Analysis Scanner."
)}`;

const PREBOOK_WA_LINK = `https://wa.me/${product.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi SKENEV! I want to PRE-BOOK the SKENEV AI scanner at the 10% launch discount."
)}`;

const TRUST_ITEMS = [
  { label: "Secure", Icon: ShieldCheck },
  { label: "India delivery", Icon: Truck },
  { label: "AI analysis", Icon: Sparkles },
] as const;

const WRAP_CLS = "mx-auto max-w-[1240px] px-[21px] max-[700px]:px-[13px]";
const SECTION_PAD = "py-[110px] max-[700px]:py-[56px]";
const SECTION_PB = "pb-[110px] max-[700px]:pb-[56px]";

const BENEFIT_IMG: Record<string, string> = {
  "01": "/acne.webp",
  "02": "/temperature.webp",
  "03": "/dark-circle.webp",
  "04": "/product-1.webp",
};

const ANALYSIS_SAMPLES = [
  ["/blemish.webp", "Blemish analysis", "Condition-level visual intelligence"],
  ["/pore-density.webp", "Pore density", "Structured skin measurement"],
  ["/moisture.webp", "Moisture", "A clear, visual analysis result"],
];

const DESIGN_SYSTEM = [
  "Description",
  "SKENEV is a professional AI skin, scalp and beauty analysis scanner combining high-resolution imaging and intelligent analysis in a single workflow.",
  "Technology",
  "High-resolution imaging, AI-powered analysis, Skin AI, Scalp AI and Beauty Intelligence. Final technical specifications should follow the approved hardware release.",
  "Key benefits",
  "Faster consultations, repeatable analysis, richer client conversations and one system spanning skin, scalp and beauty intelligence.",
  "How to use",
  "Capture → Analyze → Understand → Personalize. Position the scanner, complete the guided scan, review the structured output and use it to support the consultation.",
  "What's in the box",
  product.box.join(" • "),
];

export default function ProductPage() {
  const [active, setActive] = useState(0);
  const [detailsIdx, setDetailsIdx] = useState<number | null>(0);
  const [faqIdx, setFaqIdx] = useState<number | null>(0);

  const { pack, setPack, qty, setQty, setOpen, setDemo } = useCart();

  const details = [];
  for (let i = 0; i < DESIGN_SYSTEM.length; i += 2) {
    details.push([DESIGN_SYSTEM[i], DESIGN_SYSTEM[i + 1]]);
  }

  return (
    <div className="productPage">
      <div className="pt-[90px] pb-24 lg:pb-0">
        <a
          href={PREBOOK_WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="productOfferBar block"
          aria-label="Pre-book the SKENEV scanner at 10% launch discount"
        >
          <span className="productOfferLabel">LAUNCH OFFER</span> {product.launchOffer} &nbsp; • &nbsp;
          Pay at delivery &nbsp; • &nbsp; First launch units are limited
        </a>

        <main>
          <section id="product" className={`${WRAP_CLS} pt-7`}>
            <div className="text-[11px] text-[#748198] flex gap-2 mb-7">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Product</span>
              <span>/</span>
              <span className="text-[#081226]">SKENEV Scanner</span>
            </div>

            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-16 items-start">
              <div>
                <div className="relative overflow-hidden rounded-[28px] border border-[#dfe4ed] bg-white softGlow aspect-square">
                  <Image
                    src={product.gallery[active].src}
                    alt={product.gallery[active].alt}
                    fill
                    priority={active === 0}
                    className="object-contain p-4"
                  />
                  <div className="absolute top-5 left-5 rounded-full bg-white/90 border border-[#dfe4ed] px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em]">
                    SKENEV scanner
                  </div>
                  <div className="absolute bottom-5 right-5 rounded-full bg-[#081226]/90 text-white px-3 py-2 text-[10px] font-bold">
                    {product.gallery[active].label}
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-2 mt-3">
                  {product.gallery.map((g, i) => (
                    <button
                      key={g.src}
                      onClick={() => setActive(i)}
                      aria-label={g.alt}
                      className={`relative aspect-square rounded-2xl overflow-hidden border bg-white ${
                        active === i ? "border-[#3e6ff5] ring-2 ring-[#3e6ff5]/20" : "border-[#dfe4ed]"
                      }`}
                    >
                      <Image src={g.src} alt={g.alt} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:sticky lg:top-[96px]">
                <p className="eyebrow">{product.eyebrow}</p>
                <h1 className="text-[39px] sm:text-[52px] leading-[0.99] tracking-[-0.055em] font-semibold mt-3">
                  {product.name}
                </h1>
                <p className="text-[18px] leading-8 text-[#647188] mt-5">{product.tagline}</p>
                <p className="text-[15px] leading-7 text-[#6d7789] mt-2">{product.description}</p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {product.highlights.map((h, i) => (
                    <span key={h} className="rounded-full bg-white border border-[#dfe4ed] px-3 py-2 text-xs font-bold">
                      <span className="text-[#3e6ff5]">0{i + 1}</span> {h}
                    </span>
                  ))}
                </div>

                <div className="mt-7 rounded-[24px] border border-[#dfe4ed] bg-white p-5 sm:p-6 shadow-[0_18px_50px_rgba(8,18,38,0.06)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-2xl font-semibold">{money(product.price)}</div>
                      <p className="text-xs text-[#738096] mt-1">{product.shipping}</p>
                    </div>
                    <span className="rounded-full bg-[#fff5d8] text-[#8c6200] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide">
                      Pre-book
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="font-extrabold text-sm">Choose your setup</h2>
                      <span className="text-xs text-[#7a879a]">Configuration</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {product.packs.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setPack(p.id)}
                          className={`text-left p-4 rounded-2xl border transition ${
                            pack === p.id
                              ? "border-[#3e6ff5] bg-[#f2f5ff] shadow-[0_8px_25px_rgba(62,111,245,0.10)]"
                              : "border-[#dfe4ed] bg-[#fff]"
                          }`}
                        >
                          <div className="font-extrabold text-sm">{p.title}</div>
                          <div className="text-xs text-[#738096] mt-1">{p.sub}</div>
                          {pack === p.id && (
                            <div className="mt-2 text-[10px] font-bold text-[#3e6ff5] flex items-center gap-1">
                              <Check size={12} /> Selected
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-5">
                    <div className="quantity">
                      <button
                        onClick={() => setQty(Math.max(1, qty - 1))}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={15} />
                      </button>
                      <span>{qty}</span>
                      <button onClick={() => setQty(qty + 1)} aria-label="Increase quantity">
                        <Plus size={15} />
                      </button>
                    </div>
                    <button className="productBtn dark flex-1" onClick={() => setOpen(true)}>
                      Add to cart <ShoppingBag size={17} />
                    </button>
                  </div>
                  <button className="productBtn blue w-full mt-2" onClick={() => setOpen(true)}>
                    Buy it now <ArrowRight size={17} />
                  </button>

                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <button
                      onClick={() => setDemo(true)}
                      className="h-11 rounded-full border border-[#dfe4ed] bg-white text-xs font-bold"
                    >
                      Book Demo
                    </button>
                    <a
                      href={`mailto:${product.email}`}
                      className="h-11 rounded-full border border-[#dfe4ed] bg-white text-xs font-bold grid place-items-center"
                    >
                      Email
                    </a>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="h-11 rounded-full border border-[#dfe4ed] bg-white text-xs font-bold grid place-items-center"
                    >
                      WhatsApp
                    </a>
                  </div>

                  <div className="grid grid-cols-3 border-t border-[#e4e8ef] mt-5 pt-5 gap-2">
                    {TRUST_ITEMS.map(({ label, Icon }) => (
                      <div key={label} className="text-center text-[10px] font-bold text-[#68758b]">
                        <Icon size={17} className="mx-auto mb-1.5 text-[#3e6ff5]" />
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={`${WRAP_CLS} mt-10`}>
            <div className="rounded-[28px] bg-[#081226] text-white grid sm:grid-cols-4 overflow-hidden">
              {product.highlights.map((x, i) => (
                <div key={x} className="p-6 border-b sm:border-b-0 sm:border-r last:border-0 border-white/10">
                  <div className="text-[#7f9bff] text-[10px] font-black">0{i + 1}</div>
                  <div className="font-bold mt-2">{x}</div>
                </div>
              ))}
            </div>
          </section>

          <section className={SECTION_PAD} id="intelligence">
            <div className={WRAP_CLS}>
              <div className="max-w-3xl">
                <p className="eyebrow">THREE INTELLIGENCES, ONE DEVICE</p>
                <h2 className="text-4xl sm:text-6xl tracking-[-0.05em] font-semibold mt-3">
                  Everything SKENEV reads.
                </h2>
                <p className="text-[#68758b] text-lg leading-8 mt-5">
                  One scanner, three deep intelligences — built to give professionals greater
                  precision and every customer a more personal beauty journey.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-12">
                {product.modes.map((m) => (
                  <motion.div
                    whileHover={{ y: -6 }}
                    key={m.num}
                    className="rounded-[28px] bg-white border border-[#dfe4ed] p-7 min-h-[310px] shadow-[0_18px_50px_rgba(8,18,38,0.05)]"
                  >
                    <div className="text-[10px] tracking-[0.16em] font-black text-[#3e6ff5]">
                      {m.num} / {m.name}
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#edf2ff] grid place-items-center mt-12 text-[#3e6ff5]">
                      <Sparkles size={20} />
                    </div>
                    <h3 className="text-2xl font-semibold mt-5">{m.title}</h3>
                    <p className="text-[#68758b] leading-7 mt-3">{m.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className={SECTION_PB}>
            <div className={`${WRAP_CLS} rounded-[34px] bg-[#edf3ff] border border-[#d7e1ff] overflow-hidden`}>
              <div className="grid lg:grid-cols-[0.75fr_1.25fr] items-center">
                <div className="p-8 sm:p-12">
                  <p className="eyebrow">THE AI ENGINE</p>
                  <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.05em] mt-3">
                    From a single image to deep intelligence.
                  </h2>
                  <p className="text-[#65738b] leading-7 mt-5">
                    The SKENEV AI engine transforms one scan into structured beauty intelligence —
                    measured, comparable and ready for real decisions.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-8">
                    {product.ai.map((x) => (
                      <span key={x} className="rounded-full bg-white border border-[#d5def5] px-3 py-2 text-xs font-bold">
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-white h-full min-h-[520px] relative flex items-center justify-center overflow-hidden">
                  <Image
                    src="/ai-powered-skin-analysis-solution.webp"
                    alt="SKENEV AI analysis engine"
                    width={1280}
                    height={1149}
                    className="aiShot rounded-[26px] shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className={`${SECTION_PAD} bg-[#081226] text-white`} id="how">
            <div className={WRAP_CLS}>
              <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-14 items-start">
                <div className="lg:sticky lg:top-28">
                  <p className="eyebrow !text-[#7f9bff]">HOW IT WORKS</p>
                  <h2 className="text-4xl sm:text-6xl tracking-[-0.05em] font-semibold mt-3">
                    From scan to personal plan in four steps.
                  </h2>
                  <p className="text-[#aab4c6] leading-7 mt-5">
                    Designed to make advanced beauty technology effortless for professionals — and
                    unforgettable for their customers.
                  </p>
                  <button onClick={() => setDemo(true)} className="productBtn light mt-8">
                    Book a Demo <ArrowRight size={16} />
                  </button>
                </div>
                <div className="space-y-3">
                  {product.workflow.map(([n, t, d]) => (
                    <motion.div
                      whileHover={{ x: 6 }}
                      key={n}
                      className="rounded-[24px] border border-white/10 bg-white/[0.04] p-7 grid grid-cols-[56px_1fr] gap-5"
                    >
                      <div className="text-[#7f9bff] font-black">{n}</div>
                      <div>
                        <h3 className="text-2xl font-semibold">{t}</h3>
                        <p className="text-[#aab4c6] leading-7 mt-2">{d}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className={SECTION_PAD}>
            <div className={WRAP_CLS}>
              <p className="eyebrow">VISIBLE ANALYSIS</p>
              <h2 className="text-4xl sm:text-5xl tracking-[-0.05em] font-semibold mt-3">
                See the result, not just the scan.
              </h2>
              <p className="text-[#68758b] max-w-2xl leading-7 mt-4">
                Examples below are visual references from the current SKENEV website. Final
                product-report screens should be connected to the approved live application output.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-10">
                {ANALYSIS_SAMPLES.map(([src, title, desc]) => (
                  <div key={title} className="rounded-[28px] overflow-hidden bg-white border border-[#dfe4ed]">
                    <Image
                      src={src}
                      alt={title}
                      width={900}
                      height={900}
                      className="w-full h-auto"
                    />
                    <div className="p-5">
                      <div className="font-extrabold">{title}</div>
                      <div className="text-sm text-[#68758b] mt-1">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={`${SECTION_PAD} bg-[#f0f4ff]`}>
            <div className={WRAP_CLS}>
              <p className="eyebrow">ANALYSIS TIMELINE</p>
              <h2 className="text-4xl sm:text-5xl tracking-[-0.05em] font-semibold mt-3">
                A 60-second journey from capture to insight.
              </h2>
              <div className="grid md:grid-cols-4 mt-10 rounded-[28px] overflow-hidden border border-[#d8e0f2] bg-white">
                {product.resultTimeline.map(([t, time, d]) => (
                  <div key={t} className="p-6 border-b md:border-b-0 md:border-r last:border-0 border-[#dfe4ed]">
                    <div className="text-[#3e6ff5] text-xs font-black">{time}</div>
                    <h3 className="text-xl font-semibold mt-8">{t}</h3>
                    <p className="text-sm text-[#68758b] leading-6 mt-2">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={SECTION_PAD}>
            <div className={WRAP_CLS}>
              <div className="max-w-3xl">
                <p className="eyebrow">WHY YOU NEED SKENEV</p>
                <h2 className="text-4xl sm:text-5xl tracking-[-0.05em] font-semibold mt-3">
                  Why professionals choose a measured experience.
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                {product.benefits.map(([n, t, d]) => (
                  <div
                    key={n}
                    className="group rounded-[28px] overflow-hidden border border-[#dfe4ed] bg-white min-h-[270px] relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081226] via-[#08122630] to-transparent opacity-0 group-hover:opacity-100 transition" />
                    <Image src={BENEFIT_IMG[n]} alt={t} fill className="object-cover opacity-90" />
                    <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#081226e8] to-transparent text-white">
                      <div className="text-[10px] font-black text-[#9db0ff]">{n}</div>
                      <h3 className="font-bold mt-1">{t}</h3>
                      <p className="text-xs text-white/75 leading-5 mt-1">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={SECTION_PB}>
            <div className={WRAP_CLS}>
              <p className="eyebrow">THE SKENEV EDGE</p>
              <h2 className="text-4xl sm:text-5xl tracking-[-0.05em] font-semibold mt-3">
                A new standard in structured beauty analysis.
              </h2>
              <div className="mt-10 overflow-x-auto rounded-[26px] border border-[#cfd6e2] bg-white">
                <table className="w-full min-w-[760px] text-sm">
                  <thead>
                    <tr className="bg-[#f2f5f9]">
                      {["BASIS", "SKENEV", "VISUAL ASSESSMENT", "BASIC CAMERA", "QUESTIONNAIRE"].map(
                        (x) => (
                          <th key={x} className="p-5 text-left text-[10px] tracking-[0.12em]">
                            {x}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {product.comparison.map((r) => (
                      <tr key={r[0]} className="border-t border-[#e1e5eb]">
                        {r.map((x, i) => (
                          <td
                            key={i}
                            className={`p-5 ${i === 0 ? "font-extrabold" : ""} ${
                              i === 1 ? "bg-[#eef3ff] text-[#244dbd]" : ""
                            }`}
                          >
                            {i === 1 && x === "Yes" ? (
                              <span className="inline-flex items-center gap-1 font-bold">
                                <Check size={15} />
                                {x}
                              </span>
                            ) : (
                              x
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className={`${SECTION_PAD} bg-white border-y border-[#e2e6ed]`} id="details">
            <div className={WRAP_CLS}>
              <div className="grid lg:grid-cols-[0.55fr_1.45fr] gap-16">
                <div>
                  <p className="eyebrow">EVERYTHING YOU NEED TO KNOW</p>
                  <h2 className="text-4xl sm:text-5xl tracking-[-0.05em] font-semibold mt-3">
                    Product details, made simple.
                  </h2>
                  <p className="text-[#68758b] leading-7 mt-5">
                    Everything from the scanner itself to the analysis workflow and deployment.
                  </p>
                </div>
                <div className="border-t border-[#dfe4ed]">
                  {details.map(([q, a], i) => (
                    <div key={q} className="border-b border-[#dfe4ed]">
                      <button
                        className="w-full py-5 flex justify-between items-center text-left font-bold"
                        onClick={() => setDetailsIdx(detailsIdx === i ? null : i)}
                      >
                        {q}
                        <span className={`transition ${detailsIdx === i ? "rotate-45" : ""}`}>+</span>
                      </button>
                      <AnimatePresence initial={false}>
                        {detailsIdx === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="pb-5 text-[#68758b] leading-7 max-w-3xl">{a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className={SECTION_PAD}>
            <div className={WRAP_CLS}>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <p className="eyebrow">PRODUCT SPECIFICATIONS</p>
                  <h2 className="text-4xl sm:text-5xl tracking-[-0.05em] font-semibold mt-3">
                    Built for professional environments.
                  </h2>
                </div>
                <div className="rounded-[26px] border border-[#dfe4ed] bg-white overflow-hidden">
                  {product.specs.map(([a, b]) => (
                    <div
                      key={a}
                      className="grid grid-cols-[0.8fr_1.2fr] gap-5 p-5 border-b last:border-0 border-[#e1e5eb] text-sm"
                    >
                      <span className="font-extrabold">{a}</span>
                      <span className="text-[#68758b]">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className={`${SECTION_PAD} bg-[#081226] text-white`}>
            <div className={WRAP_CLS}>
              <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12">
                <div>
                  <p className="eyebrow !text-[#7f9bff]">WHAT&rsquo;S IN THE BOX</p>
                  <h2 className="text-4xl sm:text-5xl tracking-[-0.05em] font-semibold mt-3">
                    Everything you need to start.
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.box.map((x, i) => (
                    <div key={x} className="rounded-[22px] border border-white/10 bg-white/[0.04] p-6">
                      <div className="text-[#7f9bff] font-black text-xs">0{i + 1}</div>
                      <div className="font-bold mt-8">{x}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className={SECTION_PAD} id="faq">
            <div className={`${WRAP_CLS} max-w-4xl`}>
              <p className="eyebrow">FAQ</p>
              <h2 className="text-4xl sm:text-5xl tracking-[-0.05em] font-semibold mt-3">
                Answers, before you even ask.
              </h2>
              <div className="mt-10 border-t border-[#dfe4ed]">
                {product.faqs.map(([q, a], i) => (
                  <div key={q} className="border-b border-[#dfe4ed]">
                    <button
                      onClick={() => setFaqIdx(faqIdx === i ? null : i)}
                      className="w-full py-6 flex justify-between text-left font-bold"
                    >
                      {q}
                      <ChevronDown size={18} className={`transition ${faqIdx === i ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {faqIdx === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-[#68758b] leading-7">{a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={`${SECTION_PAD} softGlow`}>
            <div className={`${WRAP_CLS} rounded-[34px] bg-[#eaf0ff] border border-[#d4defa] p-8 sm:p-14 text-center`}>
              <p className="eyebrow">TAKE THE NEXT STEP</p>
              <h2 className="text-4xl sm:text-6xl tracking-[-0.06em] font-semibold mt-3">
                Ready to see beauty more clearly?
              </h2>
              <p className="text-[#68758b] max-w-2xl mx-auto leading-7 mt-5">
                Book a demo, request pricing or discuss a multi-location deployment with the SKENEV
                team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
                <button onClick={() => setDemo(true)} className="productBtn blue">
                  Book a Demo <ArrowRight size={16} />
                </button>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="productBtn light">
                  WhatsApp <MessageCircle size={16} />
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-[60] lg:hidden bg-white/95 backdrop-blur border-t border-[#dfe4ed] p-3 grid grid-cols-2 gap-2">
        <button onClick={() => setOpen(true)} className="productBtn light">
          Add to cart
        </button>
        <button onClick={() => setDemo(true)} className="productBtn blue">
          Get Started
        </button>
      </div>
    </div>
  );
}