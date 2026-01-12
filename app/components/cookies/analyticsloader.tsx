"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getConsent } from "./consent";

const GA_ID = "G-Z11SPCQW2K";

declare global {
  interface Window {
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

export default function AnalyticsLoader() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const sync = () => {
      const c = getConsent();
      const allow = !!c?.analytics;

      window[`ga-disable-${GA_ID}`] = !allow;
      setEnabled(allow);
    };

    sync();
    window.addEventListener("gasamare:consent-updated", sync);
    return () => window.removeEventListener("gasamare:consent-updated", sync);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
