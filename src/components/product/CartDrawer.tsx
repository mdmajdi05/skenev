"use client";

import Image from "next/image";
import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus, Plus, X } from "lucide-react";
import { product } from "@/data/product";
import { useCart } from "./store";
import { BTN_BLUE, BTN_LIGHT } from "./ui";

const WA_LINK = `https://wa.me/${product.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi SKENEV team, I want to enquire about the AI Skin, Scalp & Beauty Analysis Scanner."
)}`;

export default function CartDrawer() {
  const { open, setOpen, pack, qty, setQty, setDemo } = useCart();
  const selected = useMemo(
    () => product.packs.find((p) => p.id === pack) ?? product.packs[0],
    [pack]
  );

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[1600]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-[#081226]/45"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="absolute right-0 top-0 h-full w-full max-w-[480px] bg-[#fbfaf6] p-6 overflow-y-auto shadow-2xl"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Your SKENEV selection</h2>
              <button onClick={() => setOpen(false)} aria-label="Close cart">
                <X />
              </button>
            </div>

            <div className="rounded-[24px] border border-[#dfe4ed] bg-white p-4 mt-7 flex gap-4">
              <div className="w-24 h-24 rounded-2xl bg-[#eef3ff] overflow-hidden relative flex-shrink-0">
                <Image src={product.productShot} alt="SKENEV scanner" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="font-extrabold">{selected.title}</div>
                <div className="text-sm text-[#68758b] mt-1">{selected.sub}</div>
                <div className="flex items-center gap-2 mt-4">
                  <button
                    className="w-8 h-8 rounded-full bg-[#eef2f7] grid place-items-center"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={13} />
                  </button>
                  <b>{qty}</b>
                  <button
                    className="w-8 h-8 rounded-full bg-[#eef2f7] grid place-items-center"
                    onClick={() => setQty(qty + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus size={13} />
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-[22px] bg-[#edf3ff] p-5 mt-5">
              <div className="font-extrabold">Checkout-ready interface</div>
              <p className="text-sm text-[#68758b] leading-6 mt-2">
                The live price and payment gateway are intentionally configurable. Add your approved
                commercial terms before accepting online orders.
              </p>
            </div>

            <button
              onClick={() => {
                setOpen(false);
                setDemo(true);
              }}
              className={`${BTN_BLUE} w-full mt-5`}
            >
              Request purchase quote <ArrowRight size={16} />
            </button>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className={`${BTN_LIGHT} w-full mt-2`}
            >
              Talk on WhatsApp
            </a>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}