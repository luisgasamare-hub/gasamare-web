"use client";

import Link from "next/link";
import { useEffect } from "react";

const PRIMARY = "#1B123A";
const GREEN = "#16a34a";

type Props = {
  open: boolean;
  onClose: () => void;

  preferences: boolean;
  setPreferences: (v: boolean) => void;

  analytics: boolean;
  setAnalytics: (v: boolean) => void;

  marketing: boolean;
  setMarketing: (v: boolean) => void;

  onRejectAll: () => void;
  onAcceptAll: () => void;
  onSave: () => void;
};

function Toggle({
  checked,
  onChange,
  disabled,
}: {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label="Activar o desactivar"
      onClick={onChange}
      disabled={disabled}
      className={[
        "relative inline-flex h-7 w-12 items-center transition-colors",
        disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
        checked ? "bg-[#1B123A]" : "bg-black/20",
      ].join(" ")}
      style={{ borderRadius: 999 }}
    >
      <span
        className={[
          "inline-block h-5 w-5 bg-white transition-transform",
          checked ? "translate-x-6" : "translate-x-1",
        ].join(" ")}
        style={{ borderRadius: 999 }}
      />
    </button>
  );
}

export default function CookieModal({
  open,
  onClose,
  analytics,
  setAnalytics,
  onRejectAll,
  onAcceptAll,
  onSave,
}: Props) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]">
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
      />

      <div className="absolute left-1/2 top-1/2 w-[min(920px,92vw)] -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white shadow-xl border border-black/10">
          <div className="flex items-start justify-between gap-6 p-6">
            <div>
              <h3 className="text-2xl font-semibold">Preferencias de cookies</h3>
              <p className="mt-2 text-sm text-black/70">
                Usamos cookies necesarias para asegurar el funcionamiento del sitio y, si lo autorizas,
                cookies para medir el rendimiento y mejorar la experiencia.
              </p>
            </div>

            <button
              onClick={onClose}
              className="px-3 py-2 text-black/60 hover:text-black hover:bg-black/5"
              aria-label="Cerrar"
              title="Cerrar"
            >
              ✕
            </button>
          </div>

          <div className="px-6 pb-6 max-h-[58vh] overflow-auto">
            <div className="border-t border-black/10 pt-4" />

            <div className="py-4 border-b border-black/10">
              <div className="flex items-center justify-between gap-4">
                <p className="font-semibold">Necesarias</p>
                <span className="text-sm font-semibold whitespace-nowrap" style={{ color: GREEN }}>
                  Siempre activas
                </span>
              </div>
              <p className="mt-2 text-sm text-black/70">
                Esenciales para el funcionamiento básico del sitio (seguridad, navegación y acceso a
                funcionalidades). No almacenan información con fines publicitarios.
              </p>
            </div>

            <div className="py-4 border-b border-black/10 opacity-50 pointer-events-none">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold">Preferencias</p>
                  <p className="mt-1 text-sm">
                    Permiten recordar ajustes (por ejemplo, idioma o preferencias de visualización)
                    para una experiencia más personalizada.
                  </p>
                </div>
                <div className="w-12 flex justify-end">
                  <Toggle checked={false} onChange={() => {}} disabled />
                </div>
              </div>
            </div>

            <div className="py-4 border-b border-black/10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold">Estadísticas (Analíticas)</p>
                  <p className="mt-1 text-sm text-black/60">
                    Nos ayudan a comprender cómo interactúan los visitantes con el sitio (p. ej.,
                    páginas visitadas, tiempo de navegación, origen del tráfico). La información se usa
                    de forma agregada para mejorar contenidos y servicios.
                  </p>
                </div>
                <div className="w-12 flex justify-end">
                  <Toggle checked={analytics} onChange={() => setAnalytics(!analytics)} />
                </div>
              </div>
            </div>

            <div className="py-4 opacity-50 pointer-events-none">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold">Marketing</p>
                  <p className="mt-1 text-sm">
                    Se utilizan para mostrar contenido o publicidad más relevante y medir la eficacia
                    de campañas.
                  </p>
                </div>
                <div className="w-12 flex justify-end">
                  <Toggle checked={false} onChange={() => {}} disabled />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-black/10 p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-4 text-sm text-black/60">
                <Link href="/cookies" className="underline whitespace-nowrap">
                  Política de cookies
                </Link>
                <Link href="/privacidad" className="underline whitespace-nowrap">
                  Política de privacidad
                </Link>
              </div>

              <div className="flex flex-row gap-2 flex-wrap sm:flex-nowrap sm:justify-end">
                <button
                  onClick={onRejectAll}
                  className="px-4 py-2 border border-black/15 text-sm whitespace-nowrap"
                >
                  Denegar
                </button>

                <button
                  onClick={onSave}
                  className="px-4 py-2 border border-black/15 text-sm whitespace-nowrap"
                >
                  Guardar preferencias
                </button>

                <button
                  onClick={onAcceptAll}
                  className="px-4 py-2 text-sm text-white whitespace-nowrap"
                  style={{ backgroundColor: PRIMARY }}
                >
                  Aceptar cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
