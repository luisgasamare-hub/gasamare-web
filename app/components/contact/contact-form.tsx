"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const PRIMARY = "#1B123A";
const ACCENT = "#6D5AE6";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const helpText = useMemo(
    () => "Respondemos en un plazo máximo de 24–48 horas laborables.",
    []
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd });

      if (!res.ok) {
        const data: unknown = await res.json().catch(() => null);
        const msg =
          typeof data === "object" && data !== null && "error" in data && typeof (data as { error?: unknown }).error === "string"
            ? (data as { error: string }).error
            : "No se pudo enviar el formulario.";
        throw new Error(msg);
      }

      setStatus("sent");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Error inesperado.");
    }
  }

  return (
    <div className="relative">
      <div className="relative pr-14">
        <h2 className="text-2xl font-semibold tracking-tight" style={{ color: PRIMARY }}>
          Envíanos un mensaje
        </h2>

        <Image
          src="/images/contacto/logo-contacto.svg"
          alt="GASAMARE"
          width={38}
          height={38}
          className="absolute right-0 top-[3px] opacity-[0.88]"
          priority={false}
        />

        <div
          className="mt-4 h-[3px] w-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(109,90,230,0.35) 0%, rgba(109,90,230,1) 100%)",
          }}
        />
      </div>

      <p className="mt-4 text-sm text-black/60 max-w-xl">
        Completa el formulario y te contactamos. Los campos marcados con * son obligatorios.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Nombre *" name="name" placeholder="Tu nombre" required />
          <Field label="Email *" name="email" type="email" placeholder="tu@email.com" required />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Teléfono (opcional)" name="phone" placeholder="+34 ..." />
          <Select
            label="Motivo *"
            name="reason"
            required
            options={[
              { value: "", label: "Selecciona una opción" },
              { value: "autonomos", label: "Autónomos" },
              { value: "empresas", label: "Empresas" },
              { value: "sociedades", label: "Sociedades" },
              { value: "subcontrata", label: "Subcontrata" },
              { value: "tramites puntuales", label: "Trámites puntuales" },
              { value: "otros", label: "Otros" },
            ]}
          />
        </div>

        <Field
          label="Mensaje *"
          name="message"
          placeholder="Cuéntanos brevemente tu situación y qué necesitas."
          required
          textarea
          rows={6}
        />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
          <label className="flex items-start gap-2 text-sm text-black/70">
            <input
              required
              type="checkbox"
              className="mt-1 h-4 w-4 accent-[var(--accent)]"
              style={{ "--accent": ACCENT } as React.CSSProperties}
            />
            <span>
              He leído y acepto la{" "}
              <Link href="/privacidad" className="underline underline-offset-4 hover:text-black">
                política de privacidad
              </Link>
              .
            </span>
          </label>

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="inline-flex items-center justify-center px-6 py-3 text-white font-medium disabled:opacity-60"
            style={{ backgroundColor: PRIMARY }}
          >
            {status === "sending" ? "Enviando..." : status === "sent" ? "Enviado" : "Enviar"}
          </button>
        </div>

        {status === "error" ? (
          <div className="border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        ) : null}

        {status === "sent" ? (
          <div className="border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm text-emerald-700">
            Perfecto. Hemos recibido tu mensaje y te responderemos lo antes posible.
          </div>
        ) : null}

        <p className="pt-4 text-xs text-black/50">{helpText}</p>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
  type = "text",
  textarea,
  rows = 4,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  textarea?: boolean;
  rows?: number;
}) {
  const base =
    "mt-1 w-full border border-black/15 bg-white px-3 py-2 outline-none focus:border-[#6D5AE6]";

  return (
    <label className="block">
      <span className="block text-sm text-black/70">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={rows}
          placeholder={placeholder}
          className={base}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}

function Select({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="block text-sm text-black/70">{label}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-1 w-full border border-black/15 bg-white px-3 py-2 outline-none focus:border-[#6D5AE6]"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} disabled={o.value === ""}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
