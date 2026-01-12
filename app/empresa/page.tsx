import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollToEmpresaContentButton } from "./scroll-to-content-button";

export const metadata: Metadata = {
  title: "Empresa | Gasamare Gestión",
};

const PRIMARY = "#1B123A";
const ACCENT = "#6D5AE6";

export default function EmpresaPage() {
  return (
    <section id="empresa" className="bg-white">
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/empresa/introduccion.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.68) 50%, rgba(255,255,255,0.55) 100%)",
          }}
        />

        <div className="relative max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]"
              style={{ color: PRIMARY }}
            >
              Orden. Control. Tranquilidad.
            </h1>

            <div className="mt-8">
              <ScrollToEmpresaContentButton primary={PRIMARY} accent={ACCENT} />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="border-t border-black/10" />
          </div>
        </div>
      </div>

      <div id="empresa-content" className="bg-white">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 max-w-4xl">
              <p className="text-base sm:text-lg text-black/70 leading-relaxed">
                GASAMARE GESTIÓN nace con un objetivo muy claro: hacer que la gestión deje de ser una
                preocupación constante para empresas, autónomos y particulares.
              </p>

              <p className="mt-6 text-base sm:text-lg text-black/70 leading-relaxed">
                Trabajamos con empresas y autónomos ocupándonos de la gestión fiscal, contable y
                administrativa, así como de todos los procedimientos necesarios para el correcto
                funcionamiento del negocio, siempre con un enfoque personalizado, ordenado y orientado
                al día a día real de la actividad.
              </p>

              <p className="mt-6 text-base sm:text-lg text-black/70 leading-relaxed">
                Prestamos apoyo en la gestión habitual del negocio, incluyendo altas y bajas,
                comunicaciones con la administración, control documental y otros procedimientos
                administrativos necesarios para que la empresa funcione con orden y sin imprevistos.
              </p>

              <p className="mt-6 text-base sm:text-lg text-black/70 leading-relaxed">
                Además, ofrecemos apoyo en trámites personales que requieren rigor y experiencia, como
                la declaración de la renta o la transferencia de vehículos entre particulares,
                garantizando que cada gestión se realice correctamente y con total tranquilidad.
              </p>

              <p className="mt-6 text-base sm:text-lg text-black/70 leading-relaxed">
                En el ámbito de las obras, aportamos el personal solicitado y nos encargamos de toda su
                gestión administrativa, incluyendo altas, control de documentación y verificación de
                que todo esté correcto. Asimismo, gestionamos la documentación exigida por las
                plataformas habituales del sector, facilitando a las empresas el cumplimiento de los
                requisitos necesarios para poder operar sin incidencias ni retrasos.
              </p>

              <p className="mt-6 text-base sm:text-lg text-black/70 leading-relaxed">
                En GASAMARE GESTIÓN apostamos por una relación cercana y profesional, con una forma de
                trabajar transparente y un seguimiento continuo, para que puedas centrarte en tu
                actividad con la seguridad de que la gestión está bien llevada y bajo control.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <Image
                src="/images/empresa/isotipo.svg"
                alt="Gasamare Gestión"
                width={160}
                height={160}
                className="w-32 sm:w-40 h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="border-t border-black/10" />
        </div>

        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="border border-black/10 bg-black/[0.02] px-6 sm:px-10 py-10 sm:py-12 rounded-none">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="max-w-2xl">
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-3"
                  style={{ color: PRIMARY, opacity: 0.55 }}
                >
                  SIN COMPROMISO
                </p>

                <h3
                  className="font-sans font-semibold text-3xl sm:text-4xl leading-[1.08]"
                  style={{ color: PRIMARY }}
                >
                  ¿Hablamos de tu caso?
                </h3>

                <p className="mt-3 text-base sm:text-lg text-black/70">
                  Si necesitas una gestoría o coordinación de obra, cuéntanos qué haces y te decimos
                  cómo lo plantearíamos.
                </p>
              </div>

              <div className="flex flex-col gap-3 justify-start lg:justify-end">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition rounded-none"
                  style={{ backgroundColor: PRIMARY, color: "#fff" }}
                >
                  Solicitar consulta
                </Link>

                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold border border-black/15 bg-white hover:border-black/25 transition rounded-none"
                  style={{ color: PRIMARY }}
                >
                  Ver servicios
                </Link>
              </div>
            </div>

            <div
              className="mt-8 h-[2px] w-24 opacity-70"
              style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})` }}
            />
          </div>
        </div>

        <div className="pointer-events-none">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="block w-full h-[90px] sm:h-[110px]"
          >
            <path
              d="M0,64 C240,120 420,20 720,64 C1020,108 1200,40 1440,80 L1440,120 L0,120 Z"
              fill={ACCENT}
              opacity="0.95"
            />
          </svg>
        </div>
      </section>
    </section>
  );
}
