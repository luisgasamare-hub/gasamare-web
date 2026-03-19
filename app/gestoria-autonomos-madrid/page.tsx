import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gestoría para autónomos en Madrid | Gasamare Gestión",
  description:
    "Servicio de gestoría para autónomos en Madrid. Gestión fiscal, contable y asesoramiento continuo para que te centres en tu actividad.",
  alternates: { canonical: "/gestoria-autonomos-madrid" },
};

const PRIMARY = "#1B123A";

export default function GestoriaAutonomosMadridPage() {
  return (
    <main className="bg-white">
      <section className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        
        <div className="max-w-4xl">
          <h1
            className="text-4xl sm:text-5xl font-semibold leading-tight"
            style={{ color: PRIMARY }}
          >
            Gestoría para autónomos en Madrid
          </h1>

          <p className="mt-6 text-lg text-black/70">
            En Gasamare Gestión ayudamos a autónomos y profesionales en Madrid a llevar su gestión fiscal, contable y administrativa de forma clara, ordenada y sin complicaciones.
          </p>

          <p className="mt-6 text-black/70 leading-relaxed">
            Nos encargamos de todas las obligaciones necesarias para que puedas centrarte en tu trabajo: presentación de impuestos, control contable, asesoramiento continuo y gestión de trámites con la administración.
          </p>

          <h2 className="mt-12 text-2xl font-semibold" style={{ color: PRIMARY }}>
            Servicios de gestoría para autónomos
          </h2>

          <ul className="mt-6 space-y-3 text-black/70">
            <li>• Alta y baja de autónomos</li>
            <li>• Presentación de impuestos trimestrales</li>
            <li>• Gestión contable y fiscal</li>
            <li>• Asesoramiento personalizado</li>
            <li>• Trámites con Hacienda y Seguridad Social</li>
          </ul>

          <h2 className="mt-12 text-2xl font-semibold" style={{ color: PRIMARY }}>
            Gestoría cercana en Madrid y online
          </h2>

          <p className="mt-6 text-black/70 leading-relaxed">
            Trabajamos con autónomos de Madrid y alrededores, ofreciendo un servicio cercano y profesional. También atendemos de forma online en toda España, adaptándonos a las necesidades de cada cliente.
          </p>

          <h2 className="mt-12 text-2xl font-semibold" style={{ color: PRIMARY }}>
            ¿Por qué elegir Gasamare Gestión?
          </h2>

          <p className="mt-6 text-black/70 leading-relaxed">
            Nuestro enfoque se basa en la claridad, el orden y el seguimiento continuo. No solo gestionamos tus obligaciones, sino que te acompañamos para que tengas control total sobre tu actividad y tomes mejores decisiones.
          </p>

          <div className="mt-12">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
              style={{ backgroundColor: PRIMARY, color: "#fff" }}
            >
              Solicitar información
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}