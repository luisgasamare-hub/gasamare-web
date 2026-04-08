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
            En Gasamare Gestión ayudamos a empresas y sociedades en Madrid a llevar
            su gestión fiscal, contable y laboral de forma clara, ordenada y sin
            complicaciones.
          </p>

          <p className="mt-6 text-black/70 leading-relaxed">
            Sabemos que en una empresa el tiempo y la organización son esenciales.
            Por eso ofrecemos un servicio de gestoría pensado para que puedas
            centrarte en la actividad de tu negocio mientras nosotros nos ocupamos
            del seguimiento administrativo, fiscal y contable.
          </p>

          <p className="mt-6 text-black/70 leading-relaxed">
            Nos encargamos del día a día administrativo para que tengas tus
            obligaciones al día: presentación de impuestos, contabilidad, gestión
            laboral, asesoramiento continuo y trámites con la administración,
            siempre con un enfoque profesional, cercano y adaptado a cada empresa.
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
            <li>• Comunicaciones y gestiones administrativas habituales</li>
          </ul>

          <h2 className="mt-12 text-2xl font-semibold" style={{ color: PRIMARY }}>
            ¿Qué incluye nuestro servicio?
          </h2>

          <p className="mt-6 text-black/70 leading-relaxed">
            Nuestro servicio de gestoría para empresas en Madrid está orientado a
            cubrir las necesidades habituales de sociedades, pymes y negocios que
            necesitan una gestión sólida y bien organizada. Desde el control fiscal
            y contable hasta la gestión laboral, trabajamos para que cada área esté
            correctamente atendida.
          </p>

          <p className="mt-6 text-black/70 leading-relaxed">
            Además del cumplimiento de obligaciones periódicas, también ofrecemos
            apoyo en trámites concretos, consultas empresariales y seguimiento
            continuo, adaptándonos a la situación real de cada empresa y a su forma
            de trabajar.
          </p>

          <h2 className="mt-12 text-2xl font-semibold" style={{ color: PRIMARY }}>
            Asesoría para empresas en Madrid y online
          </h2>

          <p className="mt-6 text-black/70 leading-relaxed">
            Trabajamos con empresas de Madrid y alrededores, ofreciendo un servicio
            cercano y profesional. También atendemos de forma online en toda España,
            lo que nos permite acompañar a negocios de distintos sectores sin que la
            ubicación sea un problema.
          </p>

          <p className="mt-6 text-black/70 leading-relaxed">
            Esta forma de trabajo nos permite ser ágiles en el seguimiento, resolver
            incidencias con rapidez y mantener una comunicación clara y continua con
            cada cliente.
          </p>

          <h2 className="mt-12 text-2xl font-semibold" style={{ color: PRIMARY }}>
            ¿Por qué elegir Gasamare Gestión?
          </h2>

          <p className="mt-6 text-black/70 leading-relaxed">
            Apostamos por una gestión clara, cercana y con seguimiento continuo.
            Nuestro objetivo es que tengas el control de tu empresa sin preocuparte
            por la carga administrativa ni por errores derivados de la falta de
            tiempo o de organización.
          </p>

          <p className="mt-6 text-black/70 leading-relaxed">
            Nos implicamos en el trabajo diario con una atención profesional y
            directa, buscando que cada empresa tenga una gestión ordenada, útil y
            adaptada a su realidad.
          </p>

          <h2 className="mt-12 text-2xl font-semibold" style={{ color: PRIMARY }}>
            Preguntas frecuentes sobre gestoría para empresas
          </h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-lg font-semibold" style={{ color: PRIMARY }}>
                ¿Qué hace una gestoría para empresas?
              </h3>
              <p className="mt-2 text-black/70 leading-relaxed">
                Una gestoría para empresas se encarga de la gestión fiscal,
                contable, laboral y administrativa del negocio, ayudando a mantener
                al día las obligaciones con Hacienda, Seguridad Social y otros
                organismos.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold" style={{ color: PRIMARY }}>
                ¿Qué tipo de empresas pueden contratar este servicio?
              </h3>
              <p className="mt-2 text-black/70 leading-relaxed">
                Trabajamos con pymes, sociedades y empresas de distintos sectores
                que necesitan una gestión profesional, ordenada y con seguimiento
                continuo.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold" style={{ color: PRIMARY }}>
                ¿Ofrecéis servicio solo en Madrid?
              </h3>
              <p className="mt-2 text-black/70 leading-relaxed">
                No. Aunque trabajamos con muchas empresas de Madrid y alrededores,
                también ofrecemos servicio online en toda España.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold" style={{ color: PRIMARY }}>
                ¿También ayudáis con trámites concretos o consultas puntuales?
              </h3>
              <p className="mt-2 text-black/70 leading-relaxed">
                Sí. Además de la gestión habitual, también podemos ayudarte con
                trámites administrativos concretos, consultas fiscales y cuestiones
                relacionadas con la gestión del negocio.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
              style={{ backgroundColor: PRIMARY, color: "#fff" }}
            >
              Solicitar información
            </Link>

            <Link
              href="/servicios#empresas"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold border border-black/15 hover:bg-black/[0.03] transition"
              style={{ color: PRIMARY }}
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}