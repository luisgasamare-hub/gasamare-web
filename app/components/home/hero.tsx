import Image from "next/image";
import Link from "next/link";

const PRIMARY = "#1B123A";
const HERO_IMAGE = "/images/inicio/hero-edificio.webp";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Edificio corporativo moderno"
          fill
          priority
          quality={80}
          className="object-cover"
          style={{ objectPosition: "96% 35%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[120rem] px-6 lg:px-12">
        <div className="flex min-h-[560px] items-center pt-16 pb-16 lg:min-h-[680px] lg:pt-20 lg:pb-20">
          <div className="max-w-3xl">
            <p
              className="mb-4 text-xs uppercase tracking-[0.25em]"
              style={{ color: PRIMARY, opacity: 0.55 }}
            >
              GESTORÍA · ASESORÍA · FISCAL · LABORAL · CONTABLE · OBRA
            </p>

            <h1
              className="max-w-[26ch] font-sans text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-6xl"
              style={{ color: PRIMARY }}
            >
              La gestión de tu empresa en las mejores manos.
            </h1>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold transition hover:opacity-90"
                style={{ backgroundColor: PRIMARY, color: "#fff" }}
              >
                Solicitar consulta
              </Link>

              <Link
                href="/servicios"
                className="inline-flex items-center justify-center border border-black/15 px-7 py-3 text-sm font-semibold transition hover:bg-black/[0.03]"
                style={{ color: PRIMARY }}
              >
                Ver servicios
              </Link>
            </div>

            <p className="mt-6 text-xs text-black/55">
              Respuesta rápida por WhatsApp o email. Sin compromiso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
