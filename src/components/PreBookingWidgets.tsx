"use client";

import { useEffect, useState } from "react";
import PreBookingBanner from "./PreBookingBanner";
import PreBookingFloatCTA from "./PreBookingFloatCTA";
import PreBookingDialog from "./PreBookingDialog";

export default function PreBookingWidgets() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  useEffect(() => {
    if (sessionStorage.getItem("prebook-popup-auto") === "true") return;
    const timer = setTimeout(() => {
      setDialogOpen(true);
      sessionStorage.setItem("prebook-popup-auto", "true");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PreBookingBanner onPrebookClick={openDialog} />
      <PreBookingFloatCTA onClick={openDialog} />
      <PreBookingDialog isOpen={dialogOpen} onClose={closeDialog} />
    </>
  );
}