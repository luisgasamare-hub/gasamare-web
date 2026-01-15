import type { Metadata } from "next";
import { ContactForm } from "../components/contact/contact-form";
import { ContactInfo } from "../components/contact/contact-info";

export const metadata: Metadata = {
  title: "Contacto | Gasamare Gestión",
  description: "Contacta con GASAMARE. Te atendemos por email, teléfono o WhatsApp.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Gasamare Gestión, S.L.",
    url: "https://gasamare.es/contacto",
    areaServed: ["Arroyomolinos", "Madrid", "España", "Online"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Arroyomolinos",
      addressRegion: "Madrid",
      addressCountry: "ES",
    },
    telephone: "+34 614 85 93 57",
    email: "info@gasamare.es",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Atención al cliente",
        telephone: "+34 614 85 93 57",
        email: "info@gasamare.es",
        areaServed: "ES",
        availableLanguage: ["es"],
      },
    ],
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative w-full h-[260px] sm:h-[320px] lg:h-[380px]">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/images/contacto/contacto-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-[#1B123A]">
              Contacto
            </h1>

            <p className="sr-only">
              Contacta con Gasamare Gestión, S.L., asesoría y gestoría para autónomos y empresas en
              Arroyomolinos (Madrid) y online.
            </p>

            <div className="mt-4 mx-auto h-[2px] w-12 bg-[#6D5AE6]" />

            <p className="mt-4 text-base lg:text-lg text-black/70 max-w-2xl mx-auto">
              Envíanos tu consulta y te contestamos lo antes posible.
            </p>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="lg:hidden absolute inset-0 bg-black/[0.05]" />
          <div className="hidden lg:block absolute inset-y-0 left-1/2 right-0 bg-black/[0.05]" />
        </div>

        <div className="relative max-w-[120rem] mx-auto px-6 lg:px-12 py-10 lg:py-14">
          <h2 className="sr-only">Formulario y datos de contacto</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <ContactInfo />
            </div>
            <div className="py-2 lg:py-0">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute left-0 right-0 bottom-0">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full h-[90px] block"
            aria-hidden="true"
          >
            <path
              d="M0,60 C180,110 360,10 540,60 C720,110 900,10 1080,60 C1260,110 1350,80 1440,60 L1440,120 L0,120 Z"
              fill="rgba(109,90,230,0.18)"
            />
          </svg>
        </div>

        <div className="h-[90px]" />
      </section>
    </main>
  );
}
