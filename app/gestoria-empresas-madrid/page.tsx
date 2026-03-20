import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gestoría para empresas en Madrid | Gasamare Gestión",
  description:
    "Gestoría para empresas en Madrid. Gestión fiscal, contable y laboral para sociedades. Servicio cercano, profesional y sin complicaciones.",
  alternates: { canonical: "/gestoria-empresas-madrid" },
};

const PRIMARY = "#1B123A";

export default function GestoriaEmpresasMadridPage() {
  return (
    <main className="bg-white">
      <section className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-4xl">
          <h1
            className="text-4xl sm:text-5xl font-semibold leading-tight"
            style={{ color: PRIMARY }}
          >
            Gestoría para empresas en Madrid
          </h1>

          <p className="mt-6 text-lg text-black/70">
            En Gasamare Gestión ayudamos a empresas y sociedades en Madrid a llevar su gestión fiscal,
            contable y laboral de forma clara, ordenada y sin complicaciones.
          </p>

          <p className="mt-6 text-black/70 leading-relaxed">
            Nos ocupamos del día a día administrativo para que puedas centrarte en tu negocio:
            presentación de impuestos, contabilidad, gestión laboral, asesoramiento continuo y
            trámites con la administración.
          </p>

          <h2 className="mt-12 text-2xl font-semibold" style={{ color: PRIMARY }}>
            Servicios de gestoría para empresas
          </h2>

          <ul className="mt-6 space-y-3 text-black/70">
            <li>• Gestión fiscal y presentación de impuestos</li>
            <li>• Contabilidad mensual y cierres contables</li>
            <li>• Gestión laboral y seguros sociales</li>
            <li>• Asesoramiento empresarial continuo</li>
            <li>• Trámites con Hacienda y Seguridad Social</li>
          </ul>

          <h2 className="mt-12 text-2xl font-semibold" style={{ color: PRIMARY }}>
            Asesoría para empresas en Madrid y online
          </h2>

          <p className="mt-6 text-black/70 leading-relaxed">
            Trabajamos con empresas de Madrid y alrededores, ofreciendo un servicio cercano y
            profesional. También atendemos de forma online en toda España, adaptándonos a la realidad
            de cada negocio.
          </p>

          <h2 className="mt-12 text-2xl font-semibold" style={{ color: PRIMARY }}>
            ¿Por qué elegir Gasamare Gestión?
          </h2>

          <p className="mt-6 text-black/70 leading-relaxed">
            Apostamos por una gestión clara, cercana y con seguimiento continuo. Nuestro objetivo es
            que tengas el control de tu empresa sin preocuparte por la carga administrativa.
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