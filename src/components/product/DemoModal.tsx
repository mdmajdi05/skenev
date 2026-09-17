"use client";

import { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { site } from "@/lib/site";
import { useCart } from "./store";
import { BTN_BLUE, EYEBROW } from "./ui";

const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const company = String(data.get("company") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  const text = [
    "Hi SKENEV! I'd like to book a demo / request pricing.",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Clinic / Company: ${company}` : "",
    "",
    message,
  ]
    .filter((line) => line.length > 0)
    .join("\n");

  window.open(
    `${site.whatsappLink}?text=${encodeURIComponent(text)}`,
    "_blank",
    "noopener,noreferrer"
  );
};

export default function DemoModal() {
  const { demo, setDemo } = useCart();

  return (
    <AnimatePresence>
      {demo && (
        <div className="fixed inset-0 z-[1700] grid place-items-center p-4">
          <div
            className="absolute inset-0 bg-[#30261f]/55"
            onClick={() => setDemo(false)}
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="relative bg-[#fffdf4] rounded-[28px] p-7 sm:p-9 w-full max-w-[570px] shadow-2xl"
          >
            <button
              className="absolute right-5 top-5 text-[#1f1814]"
              onClick={() => setDemo(false)}
              aria-label="Close demo"
            >
              <X />
            </button>
            <p className={EYEBROW}>SKENEV</p>
            <h2 className="text-3xl font-semibold mt-2 text-[#1f1814]">Book a demo / request pricing.</h2>
            <p className="text-[#5c534c] mt-3 leading-6">
              Share your requirements and the SKENEV team can follow up with configuration and
              deployment details.
            </p>
            <form className="space-y-3 mt-7" onSubmit={onSubmit}>
              <input
                required
                name="name"
                placeholder="Full name"
                className="w-full h-12 rounded-xl border border-[#ddd3c0] bg-white px-4 text-[#1f1814] placeholder:text-[#8a8178]"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Work email"
                className="w-full h-12 rounded-xl border border-[#ddd3c0] bg-white px-4 text-[#1f1814] placeholder:text-[#8a8178]"
              />
              <input
                name="company"
                placeholder="Clinic / company"
                className="w-full h-12 rounded-xl border border-[#ddd3c0] bg-white px-4 text-[#1f1814] placeholder:text-[#8a8178]"
              />
              <textarea
                rows={4}
                name="message"
                placeholder="Tell us what you need"
                className="w-full rounded-xl border border-[#ddd3c0] bg-white p-4 text-[#1f1814] placeholder:text-[#8a8178]"
              />
              <button type="submit" className={`${BTN_BLUE} w-full`}>
                Send enquiry <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}