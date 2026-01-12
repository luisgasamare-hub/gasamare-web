"use client";

import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { getConsent } from "./consent";

const PRIMARY = "#1B123A";

export default function CookieButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const refresh = () => setVisible(getConsent() !== null);

    refresh();
    window.addEventListener("gasamare:consent-updated", refresh);
    return () => window.removeEventListener("gasamare:consent-updated", refresh);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Configurar cookies"
      title="Configurar cookies"
      onClick={() =>
        window.dispatchEvent(new CustomEvent("gasamare:open-cookie-settings"))
      }
      className="fixed left-5 z-[70] h-10 w-10 rounded-full text-white shadow-lg transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
      style={{
        backgroundColor: PRIMARY,
        bottom: "calc(env(safe-area-inset-bottom) + 1.25rem)",
      }}
    >
      <Cookie className="h-4 w-4 mx-auto" />
    </button>
  );
}
