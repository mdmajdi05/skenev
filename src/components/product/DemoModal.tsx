"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { product } from "@/data/product";
import { useCart } from "./store";
import { BTN_BLUE, EYEBROW } from "./ui";

export default function DemoModal() {
  const { demo, setDemo } = useCart();

  return (
    <AnimatePresence>
      {demo && (
        <div className="fixed inset-0 z-[1700] grid place-items-center p-4">
          <div
            className="absolute inset-0 bg-[#081226]/55"
            onClick={() => setDemo(false)}
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="relative bg-[#fbfaf6] rounded-[28px] p-7 sm:p-9 w-full max-w-[570px] shadow-2xl"
          >
            <button
              className="absolute right-5 top-5"
              onClick={() => setDemo(false)}
              aria-label="Close demo"
            >
              <X />
            </button>
            <p className={EYEBROW}>SKENEV</p>
            <h2 className="text-3xl font-semibold mt-2">Book a demo / request pricing.</h2>
            <p className="text-[#68758b] mt-3 leading-6">
              Share your requirements and the SKENEV team can follow up with configuration and
              deployment details.
            </p>
            <form
              className="space-y-3 mt-7"
              onSubmit={() => {
                window.location.href = `mailto:${product.email}?subject=SKENEV Demo / Pricing Request&body=Please contact me regarding SKENEV.`;
              }}
            >
              <input
                required
                placeholder="Full name"
                className="w-full h-12 rounded-xl border border-[#dfe4ed] bg-white px-4"
              />
              <input
                required
                type="email"
                placeholder="Work email"
                className="w-full h-12 rounded-xl border border-[#dfe4ed] bg-white px-4"
              />
              <input
                placeholder="Clinic / company"
                className="w-full h-12 rounded-xl border border-[#dfe4ed] bg-white px-4"
              />
              <textarea
                rows={4}
                placeholder="Tell us what you need"
                className="w-full rounded-xl border border-[#dfe4ed] bg-white p-4"
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