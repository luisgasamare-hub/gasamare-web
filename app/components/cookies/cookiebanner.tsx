"use client";

import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import CookieModal from "./cookiemodal";
import { getConsent, setConsent } from "./consent";

const PRIMARY = "#1B123A";

type State = {
  hydrated: boolean;
  showBanner: boolean;
  openModal: boolean;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const [state, setState] = useState<State>({
    hydrated: false,
    showBanner: false,
    openModal: false,
    preferences: false,
    analytics: false,
    marketing: false,
  });

  useLayoutEffect(() => {
    const c = getConsent();

    setState({
      hydrated: true,
      showBanner: !c,
      openModal: false,
      preferences: c?.preferences ?? false,
      analytics: c?.analytics ?? false,
      marketing: c?.marketing ?? false,
    });

    const openSettings = () => {
      const current = getConsent();
      setState((prev) => ({
        ...prev,
        openModal: true,
        preferences: current?.preferences ?? prev.preferences,
        analytics: current?.analytics ?? prev.analytics,
        marketing: current?.marketing ?? prev.marketing,
      }));
    };

    window.addEventListener("gasamare:open-cookie-settings", openSettings);
    return () => window.removeEventListener("gasamare:open-cookie-settings", openSettings);
  }, []);

  function acceptAll() {
    setConsent({ preferences: true, analytics: true, marketing: true });
    setState((prev) => ({
      ...prev,
      showBanner: false,
      openModal: false,
      preferences: true,
      analytics: true,
      marketing: true,
    }));
  }

  function rejectAll() {
    setConsent({ preferences: false, analytics: false, marketing: false });
    setState((prev) => ({
      ...prev,
      showBanner: false,
      openModal: false,
      preferences: false,
      analytics: false,
      marketing: false,
    }));
  }

  function savePreferences() {
    setConsent({
      preferences: state.preferences,
      analytics: state.analytics,
      marketing: state.marketing,
    });
    setState((prev) => ({ ...prev, showBanner: false, openModal: false }));
  }

  if (!state.hydrated) return null;

  return (
    <>
      {state.showBanner && !state.openModal && (
        <div className="fixed inset-x-0 bottom-0 z-[60] bg-white border-t border-black/10">
          <div className="max-w-[120rem] mx-auto px-6 py-6 lg:py-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h4 className="text-base font-semibold mb-1">Valoramos tu privacidad</h4>
                <p className="text-sm text-black/70 leading-relaxed">
                  Usamos cookies necesarias para el funcionamiento del sitio y, si lo autorizas, cookies para medir el
                  rendimiento y mejorar la experiencia.{" "}
                  <Link href="/cookies" className="underline">
                    Ver política de cookies
                  </Link>
                  .
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <button
                  onClick={() => setState((prev) => ({ ...prev, openModal: true }))}
                  className="px-5 py-2.5 border border-black/20 text-sm font-medium"
                >
                  Personalizar
                </button>

                <button
                  onClick={rejectAll}
                  className="px-5 py-2.5 border border-black/20 text-sm font-medium"
                >
                  Rechazar todo
                </button>

                <button
                  onClick={acceptAll}
                  className="px-5 py-2.5 text-sm font-medium text-white"
                  style={{ backgroundColor: PRIMARY }}
                >
                  Aceptar todo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <CookieModal
        open={state.openModal}
        onClose={() => setState((prev) => ({ ...prev, openModal: false }))}
        preferences={state.preferences}
        setPreferences={(v) => setState((prev) => ({ ...prev, preferences: v }))}
        analytics={state.analytics}
        setAnalytics={(v) => setState((prev) => ({ ...prev, analytics: v }))}
        marketing={state.marketing}
        setMarketing={(v) => setState((prev) => ({ ...prev, marketing: v }))}
        onRejectAll={rejectAll}
        onAcceptAll={acceptAll}
        onSave={savePreferences}
      />
    </>
  );
}
