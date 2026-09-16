"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { product } from "@/data/product";

export type PackId = (typeof product.packs)[number]["id"];

type CartState = {
  open: boolean;
  setOpen: (v: boolean) => void;
  demo: boolean;
  setDemo: (v: boolean) => void;
  pack: PackId;
  setPack: (v: PackId) => void;
  qty: number;
  setQty: (v: number) => void;
};

const CartContext = createContext<CartState | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [demo, setDemo] = useState(false);
  const [pack, setPack] = useState<PackId>(product.packs[0].id);
  const [qty, setQty] = useState(1);

  const value = useMemo(
    () => ({ open, setOpen, demo, setDemo, pack, setPack, qty, setQty }),
    [open, demo, pack, qty]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}