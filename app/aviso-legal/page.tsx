import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso legal | Gasamare Gestión",
  description: 
   "Aviso legal y condiciones de uso del sitio web de Gasamare Gestión.",
  alternates: { canonical: "/aviso-legal" }
};

const PRIMARY = "#1B123A";

export default function AvisoLegalPage() {
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
          <h1 className="text-3xl font-semibold tracking-tight">Aviso legal</h1>
          <p className="text-sm text-black/60 mt-1">
            Información legal y condiciones de uso del sitio web.
          </p>
        </div>
      </header>

      <h2 className="sr-only">Información legal de Gasamare Gestión</h2>

      <div className="mt-6 border-t border-black/10" />

      <section className="mt-10 space-y-10">
        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            Datos identificativos del titular de la web
          </h2>
          <p className="mt-3 text-black/70 leading-relaxed">
            En cumplimiento de lo previsto en la Ley 34/2002, de 11 de julio, de Servicios de la
            Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que el titular
            del sitio web <strong>www.gasamare.es</strong> (en adelante, el “Sitio Web”) es:
          </p>
          <p className="mt-4 text-black/70 leading-relaxed">
            <strong>Gasamare Gestión, S.L.</strong>
            <br />
            <strong>CIF:</strong> B-25892894
            <br />
            <strong>Domicilio social:</strong> Calle Formentera, 25, 28939 Arroyomolinos, Madrid
            <br />
            <strong>Correo electrónico:</strong> luis.gasamare@gmail.com
            <br />
            <strong>Datos registrales:</strong> Inscrita en el Registro Mercantil. Hoja n.º 869907,
            Inscripción 1.ª, Asiento 10/2025/27906.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            I. Presentación
          </h2>
          <p className="mt-3 text-black/70 leading-relaxed">
            En el Sitio Web se ofrecen contenidos de carácter informativo sobre la actividad del
            titular. Su principal objetivo es facilitar a clientes y al público en general
            información relativa a la empresa y a los servicios que presta.
          </p>
          <p className="mt-3 text-black/70 leading-relaxed">
            Gasamare Gestión, S.L. presta servicios de <strong>gestoría</strong> y{" "}
            <strong>coordinación de obra</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            II. Condiciones de uso
          </h2>
          <p className="mt-3 text-black/70 leading-relaxed">
            Las condiciones de acceso y uso del Sitio Web se rigen por la legalidad vigente y por el
            principio de buena fe. El usuario se compromete a realizar un buen uso del Sitio Web y a
            no llevar a cabo conductas que vayan contra la ley, los derechos o intereses de terceros.
          </p>
          <p className="mt-3 text-black/70 leading-relaxed">
            El acceso y uso del Sitio Web implica que el usuario reconoce haber leído y aceptado las
            presentes condiciones. Si no está de acuerdo con ellas, deberá abstenerse de utilizar el
            Sitio Web.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            III. Responsabilidades
          </h2>
          <p className="mt-3 text-black/70 leading-relaxed">
            El titular del Sitio Web no se responsabiliza de los daños y perjuicios que se pudieran
            producir por fallos o malas configuraciones del software instalado en el dispositivo del
            usuario, ni por incidencias técnicas derivadas de la conexión a internet.
          </p>
          <p className="mt-3 text-black/70 leading-relaxed">
            Igualmente, no se garantiza la inexistencia de interrupciones o errores en el acceso al
            Sitio Web. El titular se reserva el derecho a actualizar, modificar o eliminar la
            información contenida en el Sitio Web, así como su configuración o presentación, en
            cualquier momento.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            IV. Propiedad intelectual e industrial
          </h2>
          <p className="mt-3 text-black/70 leading-relaxed">
            El titular del Sitio Web es titular de los derechos de propiedad intelectual e industrial
            sobre los contenidos del Sitio Web (textos, diseños, logotipos, imágenes, marcas, código,
            etc.), o dispone de las licencias necesarias para su uso.
          </p>
          <p className="mt-3 text-black/70 leading-relaxed">
            Los contenidos de terceros son propiedad de sus respectivos autores o titulares y se
            utilizan conforme a las licencias o autorizaciones correspondientes.
          </p>
          <p className="mt-3 text-black/70 leading-relaxed">
            Queda prohibida la reproducción, copia, distribución o comunicación pública, total o
            parcial, sin la autorización expresa y por escrito del titular, salvo en los casos
            legalmente permitidos.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            V. Datos de carácter personal
          </h2>
          <p className="mt-3 text-black/70 leading-relaxed">
            Para más información sobre el tratamiento de datos personales, consulte nuestra{" "}
            <Link className="underline" href="/privacidad">
              Política de Privacidad
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            VI. Cookies
          </h2>
          <p className="mt-3 text-black/70 leading-relaxed">
            Puede consultar la información sobre el uso de cookies en nuestra{" "}
            <Link className="underline" href="/cookies">
              Política de Cookies
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            VII. Ley aplicable y jurisdicción
          </h2>
          <p className="mt-3 text-black/70 leading-relaxed">
            Las presentes condiciones se rigen por la legislación española. Para cualquier
            controversia derivada del Sitio Web, serán competentes los Juzgados y Tribunales que
            correspondan conforme a la normativa aplicable.
          </p>
          <p className="mt-4 text-sm text-black/50">
            Última actualización: {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </main>
  );
}
