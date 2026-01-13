import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Servicios | Gasamare Gestión",
  description:
    "Servicios de asesoría fiscal, contable y laboral para autónomos y empresas. Gestión clara, cercana y sin complicaciones.",
  alternates: { canonical: "/servicios" },
};

const PRIMARY = "#1B123A";
const LOGO_GRAY = "#696969";

type Service = {
  id: string;
  serviceName: string;
  serviceImage?: string;
  shortDescription?: string;
  detailedDescription?: string;
  includes?: string[];
  targetAudience?: string;
  ctaLabel?: string;
};

const SERVICES: Service[] = [
  {
    id: "autonomos",
    serviceName: "Gestión de autónomos",
    serviceImage: "/images/servicios/autonomos.png",
    shortDescription:
      "Gestión fiscal y administrativa para autónomos y profesionales, con un servicio ordenado y orientado a resultados.",
    detailedDescription:
      "Nos ocupamos de tus obligaciones y del seguimiento administrativo para que lo tengas todo al día y puedas centrarte en tu trabajo.",
    includes: [
      "Alta y baja de autónomos",
      "Gestión fiscal trimestral",
      "Presentación de impuestos",
      "Asesoramiento continuo",
      "Trámites con organismos oficiales",
      "Gestión de notificaciones",
    ],
    targetAudience:
      "Autónomos y profesionales que buscan una gestión sencilla, bien llevada y con seguimiento.",
    ctaLabel: "Solicitar información",
  },
  {
    id: "empresas",
    serviceName: "Gestión de empresas",
    serviceImage: "/images/servicios/empresas.jpg",
    shortDescription: "Gestión integral para empresas que quieren control y tranquilidad.",
    detailedDescription:
      "Organizamos y gestionamos el día a día fiscal y contable, asesorando en decisiones y trámites clave.",
    includes: [
      "Gestión fiscal y presentación de impuestos",
      "Contabilidad mensual y cierres contables",
      "Gestión laboral y seguros sociales",
      "Asesoramiento empresarial",
      "Trámites administrativos y comunicaciones oficiales",
      "Subcontratación administrativa",
    ],
    targetAudience: "PYMES y sociedades que necesitan una gestión profesional y con trato directo.",
    ctaLabel: "Solicitar información",
  },
  {
    id: "sociedades",
    serviceName: "Constitución y puesta en marcha de sociedades",
    serviceImage: "/images/servicios/sociedades.jpg",
    shortDescription:
      "Asesoramiento y tramitación completa para crear tu sociedad y dejarla operativa desde el inicio.",
    detailedDescription:
      "Te acompañamos en todo el proceso: forma jurídica, documentación, altas y primeros pasos para empezar con orden.",
    includes: [
      "Elección de forma jurídica",
      "Gestión de trámites y documentación",
      "Constitución de sociedades",
      "Altas iniciales",
      "Modificaciones societarias",
      "Acompañamiento inicial",
    ],
    targetAudience:
      "Emprendedores y empresas que quieren constituir una sociedad con garantías y un arranque bien organizado.",
    ctaLabel: "Solicitar información",
  },
  {
    id: "obra",
    serviceName: "Gestión de personal de obra",
    serviceImage: "/images/servicios/obra.jpg",
    shortDescription:
      "Gestión administrativa y laboral de personal en obra para empresas de construcción y subcontratas.",
    detailedDescription:
      "Altas, contratos y control documental con un enfoque ágil para cumplir requisitos sin frenar la operativa.",
    includes: [
      "Altas y bajas de personal",
      "Gestión de contratos",
      "Control documental",
      "Coordinación administrativa",
      "Subcontratación",
      "Cumplimiento normativo",
    ],
    targetAudience: "Empresas de construcción y subcontratas con personal en obra.",
    ctaLabel: "Solicitar información",
  },
  {
    id: "tramites",
    serviceName: "Trámites y gestiones administrativas",
    serviceImage: "/images/servicios/tramites.jpg",
    shortDescription: "Gestiones concretas para resolver un trámite con rapidez y sin complicaciones.",
    detailedDescription:
      "Te acompañamos en todo el proceso para que el trámite se resuelva correctamente y sin complicaciones.",
    includes: [
      "Declaración de la renta",
      "Transferencia de vehículos",
      "Certificados digitales",
      "Trámites con Hacienda",
      "Trámites con Seguridad Social",
      "Otros trámites",
    ],
    targetAudience:
      "Particulares, autónomos y empresas que necesitan una gestión puntual y bien resuelta.",
    ctaLabel: "Solicitar trámite",
  },
];

function ServiceCard({ s }: { s: Service }) {
  return (
    <article className="border border-black/10 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
      {s.serviceImage ? (
        <div className="relative h-64 sm:h-72 overflow-hidden">
          <Image
            src={s.serviceImage}
            alt={s.serviceName}
            fill
            sizes="(max-width: 640px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="p-7 sm:p-10">
        <h3 className="text-2xl sm:text-3xl font-semibold" style={{ color: PRIMARY }}>
          {s.serviceName}
        </h3>

        {s.shortDescription ? <p className="mt-4 text-black/80">{s.shortDescription}</p> : null}

        {s.detailedDescription ? (
          <p className="mt-4 text-sm text-black/70">{s.detailedDescription}</p>
        ) : null}

        {s.includes?.length ? (
          <div className="mt-8">
            <h4 className="font-semibold" style={{ color: PRIMARY }}>
              Incluye
            </h4>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-black/70">
              {s.includes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: LOGO_GRAY }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {s.targetAudience ? (
          <div className="mt-8">
            <h4 className="font-semibold" style={{ color: PRIMARY }}>
              Dirigido a
            </h4>
            <p className="mt-2 text-sm text-black/70">{s.targetAudience}</p>
          </div>
        ) : null}

        <div className="mt-10">
          <Link
            href="/contacto"
            className="inline-flex font-semibold transition-all hover:opacity-80 hover:translate-x-[2px]"
            style={{ color: LOGO_GRAY }}
          >
            {s.ctaLabel ?? "Solicitar información"}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ServiciosPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/servicios/servicios-hero.jpg"
            alt="Nuestros servicios"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/40" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.55) 55%, rgba(255,255,255,0.78) 100%)",
            }}
          />
        </div>

        <div className="relative max-w-[120rem] mx-auto px-6 lg:px-12 text-center">
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1B123A]">
            Nuestros servicios
          </h1>

          <div className="mx-auto mt-6 h-[2px] w-16 bg-[#6D5AE6]" />

          <p className="mt-8 max-w-3xl mx-auto text-black/70 text-base sm:text-lg leading-relaxed">
            Gestión para autónomos y empresas, constitución de sociedades, soporte en obra y trámites
            puntuales.
          </p>
        </div>
      </section>

      <section id="lista-servicios" className="py-16 sm:py-20 bg-black/[0.02]">
        <h2 className="sr-only">Servicios de Gasamare Gestión</h2>

        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-10">
            {SERVICES.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-32">
                <p className="sr-only">
                  {s.serviceName}. {s.shortDescription}
                </p>
                <ServiceCard s={s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden bg-[#F6F6F7]">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #F6F6F7 0%, #F2F2F3 60%, #EFEFF1 100%)",
          }}
        />

        <div className="relative max-w-[120rem] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1B123A]">
            ¿Necesitas una solución personalizada?
          </h2>

          <p className="mt-6 text-base sm:text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
            Cuéntanos tu caso y te indicamos la mejor opción para tu situación, sin compromiso.
          </p>

          <div className="mt-10">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-10 py-4 font-semibold border border-[#696969] text-[#1B123A] bg-transparent transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#1B123A] hover:text-white hover:border-[#1B123A]"
            >
              Contactar con nosotros
            </Link>
          </div>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full h-16 sm:h-20"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,70 C240,10 520,10 720,45 C920,80 1140,95 1440,55 L1440,120 L0,120 Z"
            fill="#D9D9D9"
            opacity="1"
          />
        </svg>
      </section>
    </div>
  );
}
