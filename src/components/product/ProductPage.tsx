"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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

  const prevImage = () =>
    setActive((i) => (i - 1 + product.gallery.length) % product.gallery.length);
  const nextImage = () => setActive((i) => (i + 1) % product.gallery.length);

  const { qty, setQty, setOpen, setDemo } = useCart();

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
            <div className="productMuted text-[11px] flex gap-2 mb-7">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Product</span>
              <span>/</span>
              <span className="font-semibold" style={{ color: "#1f1814" }}>
                SKENEV Scanner
              </span>
            </div>

            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-16 items-start">
              <div>
                <div className="relative overflow-hidden rounded-[28px] border border-[#ddd3c0] bg-white softGlow aspect-square">
                  <Image
                    src={product.gallery[active].src}
                    alt={product.gallery[active].alt}
                    fill
                    priority={active === 0}
                    className="object-contain p-4"
                  />
                  <div className="productDark absolute bottom-5 right-5 rounded-full px-3 py-2 text-[10px] font-bold">
                    {product.gallery[active].label}
                  </div>
                  <div className="absolute bottom-5 left-5 rounded-full bg-white border border-[#d4c6ad] px-3 py-2 text-[10px] font-extrabold text-[#1f1814]">
                    {active + 1} / {product.gallery.length}
                  </div>
                  <button
                    onClick={prevImage}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-white/90 border border-[#ddd3c0] text-[#30261f] shadow hover:bg-white transition"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-white/90 border border-[#ddd3c0] text-[#30261f] shadow hover:bg-white transition"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                <div className="grid grid-cols-6 max-[700px]:gap-1.5 gap-2 mt-3">
                  {product.gallery.slice(0, 5).map((g, i) => (
                    <button
                      key={g.src}
                      onClick={() => setActive(i)}
                      aria-label={g.alt}
                      className={`relative aspect-square max-[700px]:rounded-xl rounded-2xl overflow-hidden border bg-white ${
                        active === i ? "border-[#b89a68] ring-2 ring-[#b89a68]/20" : "border-[#ddd3c0]"
                      }`}
                    >
                      <Image src={g.src} alt={g.alt} fill className="object-cover" />
                    </button>
                  ))}
                  {product.gallery.length > 5 && (
                    <button
                      onClick={nextImage}
                      aria-label={`View ${product.gallery.length - 5} more images`}
                      className="relative aspect-square max-[700px]:rounded-xl rounded-2xl overflow-hidden border border-[#ddd3c0] bg-white"
                    >
                      <Image src={product.gallery[5].src} alt="" fill className="object-cover" />
                      <span className="productDark absolute inset-0 flex flex-col items-center justify-center gap-0.5 bg-[#241d18]/70">
                        <Plus size={18} strokeWidth={3} />
                        <span className="text-[11px] font-extrabold">+{product.gallery.length - 5}</span>
                      </span>
                    </button>
                  )}
                </div>
              </div>

              <div className="lg:sticky lg:top-[96px]">
                <p className="eyebrow">{product.eyebrow}</p>
                <h1 className="text-[39px] sm:text-[52px] leading-[0.99] tracking-[-0.055em] font-semibold mt-3">
                  {product.name}
                </h1>
                <p className="productMuted text-[18px] leading-8 mt-5">{product.tagline}</p>
                <p className="productMuted text-[15px] leading-7 mt-2">{product.description}</p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {product.highlights.map((h, i) => (
                    <span key={h} className="productCard rounded-full border border-[#d4c6ad] px-3 py-2 text-xs font-bold">
                      <span className="productGold">0{i + 1}</span> {h}
                    </span>
                  ))}
                </div>

                <div className="productCard mt-7 rounded-[24px] border border-[#d4c6ad] p-5 sm:p-6 shadow-[0_18px_50px_rgba(48,38,31,0.08)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-2xl font-semibold">{money(product.price)}</div>
                      <p className="productMuted text-xs mt-1">{product.shipping}</p>
                    </div>
                    <span className="productGold rounded-full bg-[#efe3c4] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide">
                      Pre-book
                    </span>
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
                      className="productCard h-11 rounded-full border border-[#d4c6ad] text-xs font-bold"
                    >
                      Book Demo
                    </button>
                    <a
                      href={`mailto:${product.email}`}
                      className="productCard h-11 rounded-full border border-[#d4c6ad] text-xs font-bold grid place-items-center"
                    >
                      Email
                    </a>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="productCard h-11 rounded-full border border-[#d4c6ad] text-xs font-bold grid place-items-center"
                    >
                      WhatsApp
                    </a>
                  </div>

                  <div className="grid grid-cols-3 border-t border-[#e0d6c4] mt-5 pt-5 gap-2">
                    {TRUST_ITEMS.map(({ label, Icon }) => (
                      <div key={label} className="productMuted text-center text-[10px] font-bold">
                        <Icon size={17} className="productGold mx-auto mb-1.5" />
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={`${WRAP_CLS} mt-10`}>
            <div className="productDark rounded-[28px] grid sm:grid-cols-4 overflow-hidden">
              {product.highlights.map((x, i) => (
                <div key={x} className="p-6 border-b sm:border-b-0 sm:border-r last:border-0 border-white/15">
                  <div className="productGold text-[10px] font-black">0{i + 1}</div>
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
                <p className="productMuted text-lg leading-8 mt-5">
                  One scanner, three deep intelligences — built to give professionals greater
                  precision and every customer a more personal beauty journey.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-12">
                {product.modes.map((m) => (
                  <motion.div
                    whileHover={{ y: -6 }}
                    key={m.num}
                    className="productCard rounded-[28px] border border-[#d4c6ad] p-7 min-h-[310px] shadow-[0_18px_50px_rgba(48,38,31,0.06)]"
                  >
                    <div className="productGold text-[10px] tracking-[0.16em] font-black">
                      {m.num} / {m.name}
                    </div>
                    <div className="productGold w-12 h-12 rounded-2xl bg-[#efe3c4] grid place-items-center mt-12">
                      <Sparkles size={20} />
                    </div>
                    <h3 className="text-2xl font-semibold mt-5">{m.title}</h3>
                    <p className="productMuted leading-7 mt-3">{m.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className={SECTION_PB}>
            <div className={`${WRAP_CLS} rounded-[34px] bg-[#efe6d2] border border-[#d4c6ad] overflow-hidden`}>
              <div className="grid lg:grid-cols-[0.75fr_1.25fr] items-center">
                <div className="p-8 sm:p-12">
                  <p className="eyebrow">THE AI ENGINE</p>
                  <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.05em] mt-3">
                    From a single image to deep intelligence.
                  </h2>
                  <p className="productMuted leading-7 mt-5">
                    The SKENEV AI engine transforms one scan into structured beauty intelligence —
                    measured, comparable and ready for real decisions.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-8">
                    {product.ai.map((x) => (
                      <span key={x} className="productCard rounded-full border border-[#d4c6ad] px-3 py-2 text-xs font-bold">
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="productCard h-full min-h-[520px] relative flex items-center justify-center overflow-hidden">
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

          <section className={`${SECTION_PAD} productDark`} id="how">
            <div className={WRAP_CLS}>
              <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-14 items-start">
                <div className="lg:sticky lg:top-28">
                  <p className="eyebrow">HOW IT WORKS</p>
                  <h2 className="text-4xl sm:text-6xl tracking-[-0.05em] font-semibold mt-3">
                    From scan to personal plan in four steps.
                  </h2>
                  <p className="productMuted leading-7 mt-5">
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
                      className="productStep rounded-[24px] p-7 grid grid-cols-[56px_1fr] gap-5"
                    >
                      <div className="productGold font-black">{n}</div>
                      <div>
                        <h3 className="text-2xl font-semibold">{t}</h3>
                        <p className="productMuted leading-7 mt-2">{d}</p>
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
              <p className="productMuted max-w-2xl leading-7 mt-4">
                Examples below are visual references from the current SKENEV website. Final
                product-report screens should be connected to the approved live application output.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-10">
                {ANALYSIS_SAMPLES.map(([src, title, desc]) => (
                  <div key={title} className="productCard rounded-[28px] overflow-hidden border border-[#d4c6ad]">
                    <Image
                      src={src}
                      alt={title}
                      width={900}
                      height={900}
                      className="w-full h-auto"
                    />
                    <div className="p-5">
                      <div className="font-extrabold">{title}</div>
                      <div className="productMuted text-sm mt-1">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={`${SECTION_PAD} bg-[#efe6d2]`}>
            <div className={WRAP_CLS}>
              <p className="eyebrow">ANALYSIS TIMELINE</p>
              <h2 className="text-4xl sm:text-5xl tracking-[-0.05em] font-semibold mt-3">
                A 60-second journey from capture to insight.
              </h2>
              <div className="productCard grid md:grid-cols-4 mt-10 rounded-[28px] overflow-hidden border border-[#d4c6ad]">
                {product.resultTimeline.map(([t, time, d]) => (
                  <div key={t} className="p-6 border-b md:border-b-0 md:border-r last:border-0 border-[#d4c6ad]">
                    <div className="productGold text-xs font-black">{time}</div>
                    <h3 className="text-xl font-semibold mt-8">{t}</h3>
                    <p className="productMuted text-sm leading-6 mt-2">{d}</p>
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
                    className="group rounded-[28px] overflow-hidden border border-[#d4c6ad] bg-[#241d18] min-h-[270px] relative"
                  >
                    <Image src={BENEFIT_IMG[n]} alt={t} fill className="object-cover opacity-80" />
                    <div className="productBenefitCap absolute inset-x-0 bottom-0 p-5">
                      <div className="productGold text-[10px] font-black">{n}</div>
                      <h3 className="font-bold mt-1">{t}</h3>
                      <p className="productMuted text-xs leading-5 mt-1">{d}</p>
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
              <div className="mt-10 overflow-x-auto rounded-[26px] border border-[#d4c6ad] productCard">
                <table className="w-full min-w-[760px] text-sm">
                  <thead>
                    <tr className="bg-[#efe3c4]">
                      {["BASIS", "SKENEV", "VISUAL ASSESSMENT", "BASIC CAMERA", "QUESTIONNAIRE"].map(
                        (x) => (
                          <th key={x} className="p-5 text-left text-[10px] tracking-[0.12em] text-[#1f1814]">
                            {x}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {product.comparison.map((r) => (
                      <tr key={r[0]} className="border-t border-[#d4c6ad]">
                        {r.map((x, i) => (
                          <td
                            key={i}
                            className={`p-5 ${i === 0 ? "font-extrabold" : ""} ${
                              i === 1 ? "bg-[#f6edd8] productGold font-semibold" : ""
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

          <section className={`${SECTION_PAD} productCard border-y border-[#d4c6ad]`} id="details">
            <div className={WRAP_CLS}>
              <div className="grid lg:grid-cols-[0.55fr_1.45fr] gap-16">
                <div>
                  <p className="eyebrow">EVERYTHING YOU NEED TO KNOW</p>
                  <h2 className="text-4xl sm:text-5xl tracking-[-0.05em] font-semibold mt-3">
                    Product details, made simple.
                  </h2>
                  <p className="productMuted leading-7 mt-5">
                    Everything from the scanner itself to the analysis workflow and deployment.
                  </p>
                </div>
                <div className="border-t border-[#d4c6ad]">
                  {details.map(([q, a], i) => (
                    <div key={q} className="border-b border-[#d4c6ad]">
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
                            <p className="productMuted pb-5 leading-7 max-w-3xl">{a}</p>
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
                <div className="productCard rounded-[26px] border border-[#d4c6ad] overflow-hidden">
                  {product.specs.map(([a, b]) => (
                    <div
                      key={a}
                      className="grid grid-cols-[0.8fr_1.2fr] gap-5 p-5 border-b last:border-0 border-[#d4c6ad] text-sm"
                    >
                      <span className="font-extrabold">{a}</span>
                      <span className="productMuted">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className={`${SECTION_PAD} productDark`}>
            <div className={WRAP_CLS}>
              <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12">
                <div>
                  <p className="eyebrow">WHAT&rsquo;S IN THE BOX</p>
                  <h2 className="text-4xl sm:text-5xl tracking-[-0.05em] font-semibold mt-3">
                    Everything you need to start.
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.box.map((x, i) => (
                    <div key={x} className="productStep rounded-[22px] p-6">
                      <div className="productGold font-black text-xs">0{i + 1}</div>
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
              <div className="mt-10 border-t border-[#d4c6ad]">
                {product.faqs.map(([q, a], i) => (
                  <div key={q} className="border-b border-[#d4c6ad]">
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
                          <p className="productMuted pb-6 leading-7">{a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={`${SECTION_PAD} softGlow`}>
            <div className={`${WRAP_CLS} rounded-[34px] bg-[#efe3c4] border border-[#cbb992] p-8 sm:p-14 text-center`}>
              <p className="eyebrow">TAKE THE NEXT STEP</p>
              <h2 className="text-4xl sm:text-6xl tracking-[-0.06em] font-semibold mt-3">
                Ready to see beauty more clearly?
              </h2>
              <p className="productMuted max-w-2xl mx-auto leading-7 mt-5">
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

      <div className="fixed bottom-0 left-0 right-0 z-[60] lg:hidden bg-[#fffdf8]/95 backdrop-blur border-t border-[#d4c6ad] p-3 grid grid-cols-2 gap-2">
        <button onClick={() => setOpen(true)} className="productBtn light">
          Add to cart
        </button>
        <button onClick={() => setDemo(true)} className="productBtn blue">
          Book Now
        </button>
      </div>
    </div>
  );
}