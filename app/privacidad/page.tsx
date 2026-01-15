import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de privacidad | Gasamare Gestión",
  description:
   "Política de privacidad y protección de datos personales de Gasamare Gestión.",
  alternates: { canonical: "/privacidad" }
};

const PRIMARY = "#1B123A";

export default function PrivacidadPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 lg:px-12 py-12">
      <header className="flex items-center gap-4">
        <div className="relative w-12 h-12 shrink-0">
          <Image
            src="/images/simbolo.svg"
            alt="Gasamare Gestión"
            fill
            className="object-contain"
            priority={false}
          />
        </div>

        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Política de privacidad
          </h1>
          <p className="text-sm text-black/60 mt-1">
            Información sobre el tratamiento de datos personales.
          </p>
        </div>
      </header>

      <h2 className="sr-only">Política de privacidad y protección de datos</h2>

      <div className="mt-6 border-t border-black/10" />

      <section className="mt-10 space-y-10">
        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            1. Responsable del tratamiento
          </h2>

          <p className="mt-3 text-black/70 leading-relaxed">
            El responsable del tratamiento de los datos personales recabados a través
            del sitio web <strong>www.gasamare.es</strong> es:
          </p>

          <p className="mt-4 text-black/70 leading-relaxed">
            <strong>Gasamare Gestión, S.L.</strong>
            <br />
            CIF: B-25892894
            <br />
            Domicilio social: Calle Formentera, 25
            <br />
            Correo electrónico:{" "}
            <a
              href="mailto:info@gasamare.es"
              className="underline underline-offset-4"
            >
              info@gasamare.es
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            2. Datos personales que se recogen
          </h2>

          <p className="mt-3 text-black/70 leading-relaxed">
            A través del sitio web se recogen únicamente los datos personales que el
            usuario facilita de forma voluntaria mediante los formularios de
            contacto:
          </p>

          <ul className="mt-3 list-disc pl-6 text-black/70 space-y-1">
            <li>Nombre y apellidos (si se facilita).</li>
            <li>Dirección de correo electrónico.</li>
            <li>Contenido del mensaje.</li>
            <li>Datos técnicos mínimos, como la dirección IP.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            3. Finalidad del tratamiento
          </h2>

          <p className="mt-3 text-black/70 leading-relaxed">
            Los datos personales se tratan exclusivamente para:
          </p>

          <ul className="mt-3 list-disc pl-6 text-black/70 space-y-1">
            <li>Gestionar consultas o solicitudes de información.</li>
            <li>Responder mensajes y solicitudes de presupuesto.</li>
            <li>Mantener comunicaciones relacionadas con los servicios ofrecidos.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            4. Base jurídica del tratamiento
          </h2>

          <p className="mt-3 text-black/70 leading-relaxed">
            La base legal para el tratamiento de los datos personales es:
          </p>

          <ul className="mt-3 list-disc pl-6 text-black/70 space-y-1">
            <li>El consentimiento del usuario al enviar el formulario.</li>
            <li>La aplicación de medidas precontractuales a petición del interesado.</li>
            <li>El cumplimiento de obligaciones legales, cuando proceda.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            5. Conservación de los datos
          </h2>

          <p className="mt-3 text-black/70 leading-relaxed">
            Los datos personales se conservarán durante el tiempo necesario para
            atender la solicitud del usuario y, posteriormente, durante los plazos
            legalmente exigidos o hasta que el interesado solicite su supresión.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            6. Destinatarios de los datos
          </h2>

          <p className="mt-3 text-black/70 leading-relaxed">
            No se cederán datos personales a terceros, salvo obligación legal o
            cuando sea necesario para la prestación del servicio (por ejemplo,
            proveedores de alojamiento web o servicios de correo electrónico), con
            los que se han formalizado los correspondientes acuerdos de
            confidencialidad y tratamiento de datos.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            7. Derechos del usuario
          </h2>

          <p className="mt-3 text-black/70 leading-relaxed">
            El usuario puede ejercer los derechos de acceso, rectificación,
            supresión, oposición, limitación del tratamiento y portabilidad de sus
            datos mediante solicitud escrita al correo electrónico indicado.
          </p>

          <p className="mt-3 text-black/70 leading-relaxed">
            Asimismo, tiene derecho a presentar una reclamación ante la Agencia
            Española de Protección de Datos ({" "}
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              www.aepd.es
            </a>
            ).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            8. Medidas de seguridad
          </h2>

          <p className="mt-3 text-black/70 leading-relaxed">
            Gasamare Gestión, S.L. adopta las medidas técnicas y organizativas
            necesarias para garantizar la seguridad y confidencialidad de los datos
            personales, evitando su pérdida, alteración o acceso no autorizado.
          </p>

          <p className="mt-3 text-black/70 leading-relaxed">
            Para más información sobre el tratamiento de datos personales, consulte
            nuestra{" "}
            <Link className="underline underline-offset-4" href="/cookies">
              Política de Cookies
            </Link>{" "}
            y el{" "}
            <Link className="underline underline-offset-4" href="/aviso-legal">
              Aviso Legal
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            9. Modificación de la política de privacidad
          </h2>

          <p className="mt-3 text-black/70 leading-relaxed">
            Gasamare Gestión, S.L. se reserva el derecho a modificar la presente
            Política de Privacidad para adaptarla a cambios legislativos o a la
            actividad del sitio web.
          </p>

          <p className="mt-4 text-sm text-black/50">
            Última actualización: {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </main>
  );
}
