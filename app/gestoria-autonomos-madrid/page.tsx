import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gestoría para autónomos en Madrid | Fiscal, contable y trámites | GASAMARE",
  description:
    "Gestoría para autónomos en Madrid con gestión fiscal, contable y administrativa. Impuestos, altas, bajas, trámites y asesoramiento continuo.",
  alternates: { canonical: "https://gasamare.es/gestoria-autonomos-madrid" },
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
            En Gasamare Gestión ayudamos a autónomos y profesionales en Madrid a
            llevar su gestión fiscal, contable y administrativa de forma clara,
            ordenada y sin complicaciones.
          </p>

          <p className="mt-6 text-black/70 leading-relaxed">
            Sabemos que para un autónomo el tiempo es un recurso limitado y que
            la carga administrativa puede convertirse en una preocupación
            constante. Por eso ofrecemos un servicio de gestoría orientado a que
            tengas tus obligaciones al día, conozcas tu situación en todo momento
            y puedas centrarte en tu actividad con tranquilidad.
          </p>

          <p className="mt-6 text-black/70 leading-relaxed">
            Nos encargamos de la gestión fiscal y administrativa habitual, del
            seguimiento de impuestos y de la resolución de trámites con la
            administración, siempre con un trato cercano y profesional.
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
            <li>• Gestión de notificaciones y comunicaciones oficiales</li>
          </ul>

          <h2 className="mt-12 text-2xl font-semibold" style={{ color: PRIMARY }}>
            ¿Qué incluye nuestro servicio?
          </h2>

          <p className="mt-6 text-black/70 leading-relaxed">
            Nuestro servicio de gestoría para autónomos en Madrid está pensado
            para cubrir las necesidades habituales del día a día. Desde el alta
            inicial hasta el seguimiento de obligaciones fiscales periódicas,
            trabajamos para que tengas una gestión ordenada y sin imprevistos.
          </p>

          <p className="mt-6 text-black/70 leading-relaxed">
            Además de la parte fiscal y contable, también prestamos apoyo en
            trámites administrativos concretos, resolución de dudas y
            acompañamiento continuo, adaptándonos a cada tipo de actividad y a la
            situación real de cada profesional.
          </p>

          <h2 className="mt-12 text-2xl font-semibold" style={{ color: PRIMARY }}>
            Gestoría cercana en Madrid y online
          </h2>

          <p className="mt-6 text-black/70 leading-relaxed">
            Trabajamos con autónomos de Madrid y alrededores, ofreciendo un
            servicio cercano, claro y profesional. También atendemos de forma
            online en toda España, lo que permite gestionar la documentación y el
            seguimiento sin necesidad de desplazamientos.
          </p>

          <p className="mt-6 text-black/70 leading-relaxed">
            Esto nos permite adaptarnos tanto a profesionales que prefieren una
            atención más directa como a quienes buscan comodidad y rapidez en la
            gestión diaria de su actividad.
          </p>

          <h2 className="mt-12 text-2xl font-semibold" style={{ color: PRIMARY }}>
            ¿Por qué elegir Gasamare Gestión?
          </h2>

          <p className="mt-6 text-black/70 leading-relaxed">
            Nuestro enfoque se basa en la claridad, el orden y el seguimiento
            continuo. No solo gestionamos tus obligaciones, sino que te ayudamos
            a entender tu situación para que puedas tomar mejores decisiones y
            trabajar con más tranquilidad.
          </p>

          <p className="mt-6 text-black/70 leading-relaxed">
            Apostamos por un trato cercano y profesional, evitando complicaciones
            innecesarias y ofreciendo un servicio útil, directo y adaptado a la
            realidad de cada autónomo.
          </p>

          <h2 className="mt-12 text-2xl font-semibold" style={{ color: PRIMARY }}>
            Preguntas frecuentes sobre gestoría para autónomos
          </h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-lg font-semibold" style={{ color: PRIMARY }}>
                ¿Qué hace una gestoría para autónomos?
              </h3>
              <p className="mt-2 text-black/70 leading-relaxed">
                Una gestoría para autónomos se encarga de la gestión fiscal,
                contable y administrativa necesaria para mantener la actividad al
                día, incluyendo impuestos, altas, bajas, asesoramiento y trámites
                con organismos oficiales.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold" style={{ color: PRIMARY }}>
                ¿Es obligatorio tener gestoría si soy autónomo?
              </h3>
              <p className="mt-2 text-black/70 leading-relaxed">
                No es obligatorio, pero sí muy recomendable si quieres evitar
                errores, ahorrar tiempo y tener control sobre tus obligaciones
                fiscales y administrativas.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold" style={{ color: PRIMARY }}>
                ¿Puedo contratar el servicio aunque no esté en Madrid?
              </h3>
              <p className="mt-2 text-black/70 leading-relaxed">
                Sí. Aunque trabajamos con muchos autónomos de Madrid y
                alrededores, también ofrecemos servicio online en toda España.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold" style={{ color: PRIMARY }}>
                ¿También ayudáis con trámites puntuales?
              </h3>
              <p className="mt-2 text-black/70 leading-relaxed">
                Sí, además de la gestión habitual, también podemos ayudarte con
                trámites concretos relacionados con Hacienda, Seguridad Social y
                otras gestiones administrativas.
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
              href="/servicios#autonomos"
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