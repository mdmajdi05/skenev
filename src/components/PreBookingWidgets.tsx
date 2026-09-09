"use client";

import { useEffect, useState } from "react";
import PreBookingBanner from "./PreBookingBanner";
import PreBookingFloatCTA from "./PreBookingFloatCTA";
import PreBookingDialog from "./PreBookingDialog";
import PreBookingPopup from "./PreBookingPopup";

export default function PreBookingWidgets() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);
  const closePopup = () => setPopupOpen(false);

  const handlePrebook = () => {
    setPopupOpen(false);
    setDialogOpen(true);
  };

  useEffect(() => {
    if (sessionStorage.getItem("prebook-popup-auto") === "true") return;
    const timer = setTimeout(() => {
      setPopupOpen(true);
      sessionStorage.setItem("prebook-popup-auto", "true");
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PreBookingBanner onPrebookClick={openDialog} />
      <PreBookingFloatCTA onClick={openDialog} />
      <PreBookingPopup isOpen={popupOpen} onClose={closePopup} onPrebook={handlePrebook} />
      <PreBookingDialog isOpen={dialogOpen} onClose={closeDialog} />
    </>
  );
}