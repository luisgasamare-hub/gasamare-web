import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de cookies | Gasamare Gestión",
  description: 
   "Política de cookies del sitio web de Gasamare Gestión.",
  alternates: { canonical: "/cookies" }

};

const PRIMARY = "#1B123A";

export default function CookiesPage() {
  const updated = "21/02/2025";
  const domain = "https://www.gasamare.es";

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
          <h1 className="text-3xl font-semibold tracking-tight" style={{ color: PRIMARY }}>
            Política de cookies
          </h1>
          <p className="text-sm text-black/60 mt-1">
            Información sobre el uso de cookies en el sitio web.
          </p>
        </div>
      </header>

      <h2 className="sr-only">Política de cookies de Gasamare Gestión</h2>

      <div className="mt-6 border-t border-black/10" />

      <section className="mt-10 space-y-10 text-black/75 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            1. ¿Qué son las cookies?
          </h2>
          <p className="mt-3">
            En el ámbito de la navegación web, una “cookie” es un pequeño archivo de texto que se almacena
            en el navegador de tu dispositivo cuando accedes a ciertas páginas. Las cookies permiten, por
            ejemplo, recordar información sobre tu visita (preferencias, configuración, mediciones de uso,
            etc.).
          </p>
          <p className="mt-3">
            Existen otras tecnologías similares (por ejemplo, identificadores o píxeles) que también pueden
            utilizarse para recopilar información sobre la navegación. En esta política, por simplicidad,
            nos referimos a todas ellas como “cookies”.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            2. ¿Para qué se utilizan las cookies en esta web?
          </h2>
          <p className="mt-3">
            Las cookies son una parte esencial del funcionamiento del sitio. En <strong>{domain}</strong> se
            utilizan principalmente para:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>
              <strong>Garantizar el funcionamiento y la seguridad</strong> del sitio (cookies necesarias).
            </li>
            <li>
              <strong>Medir de forma agregada</strong> el uso del sitio y mejorar contenidos/servicios{" "}
              <strong>solo si lo autorizas</strong> (cookies analíticas).
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            3. ¿Para qué NO se utilizan las cookies en esta web?
          </h2>
          <p className="mt-3">
            En las cookies que utilizamos no almacenamos información sensible de identificación personal
            como tu nombre, dirección, contraseñas o datos similares.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            4. ¿Quién utiliza la información almacenada en las cookies?
          </h2>
          <p className="mt-3">
            La información almacenada en cookies puede ser tratada por <strong>Gasamare Gestión</strong>{" "}
            (cookies propias) y, en su caso, por <strong>terceros</strong> (cookies de terceros) cuando
            activas ciertas categorías.
          </p>
          <p className="mt-3">
            En particular, si aceptas las <strong>cookies analíticas</strong>, podrán instalarse cookies de{" "}
            <strong>Google Analytics 4</strong> (Google) para obtener estadísticas de uso del sitio (por
            ejemplo: páginas visitadas, duración de la visita, eventos u origen del tráfico) de forma
            agregada.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            5. ¿Cómo puedo evitar o gestionar el uso de cookies?
          </h2>
          <p className="mt-3">
            Puedes <strong>rechazar</strong> las cookies no necesarias o <strong>configurarlas</strong> desde
            el banner de cookies. Si ya diste tu consentimiento, no volveremos a preguntarte salvo que borres
            las cookies de tu navegador o cambies tu configuración.
          </p>
          <p className="mt-3">
            Para <strong>revocar</strong> tu consentimiento, puedes volver a abrir “Configurar cookies” y
            modificar tu elección en cualquier momento.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            6. ¿Cómo deshabilitar o eliminar cookies desde el navegador?
          </h2>
          <p className="mt-3">
            Puedes permitir, bloquear o eliminar las cookies mediante la configuración del navegador. La mayoría
            de navegadores permite, entre otras opciones:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Rechazar cookies siempre.</li>
            <li>Preguntar antes de instalar cada cookie.</li>
            <li>Aceptar cookies siempre.</li>
            <li>Bloquear cookies de terceros o de dominios concretos.</li>
            <li>Eliminar cookies al cerrar el navegador (cookies de sesión) o mantenerlas (persistentes).</li>
          </ul>
          <p className="mt-3 text-sm text-black/60">
            Nota: si bloqueas ciertas cookies necesarias desde el navegador, el sitio podría no funcionar
            correctamente.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            7. ¿Qué tipos de cookies se utilizan en esta web?
          </h2>

          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-base font-semibold text-black/80">Según la entidad que las gestiona</h3>
              <ul className="mt-2 list-disc pl-6 space-y-2 text-black/70">
                <li>
                  <span className="font-semibold text-black/80">Cookies propias:</span> enviadas desde un dominio
                  gestionado por Gasamare Gestión.
                </li>
                <li>
                  <span className="font-semibold text-black/80">Cookies de terceros:</span> enviadas desde dominios
                  gestionados por entidades externas (por ejemplo, Google), únicamente si activas la categoría
                  correspondiente.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-black/80">Según su finalidad</h3>
              <ul className="mt-2 list-disc pl-6 space-y-2 text-black/70">
                <li>
                  <span className="font-semibold text-black/80">Cookies técnicas o necesarias:</span> imprescindibles
                  para la navegación, seguridad y funcionamiento básico del sitio.
                </li>
                <li>
                  <span className="font-semibold text-black/80">Cookies de análisis (analíticas):</span> permiten medir
                  y analizar el uso del sitio con fines de mejora{" "}
                  <span className="font-semibold text-black/80">solo si el usuario lo consiente</span>.
                </li>
              </ul>
              <p className="mt-3 text-sm text-black/60">
                Actualmente no utilizamos cookies de preferencias/personalización ni cookies de marketing/seguimiento en
                este sitio web.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-black/80">Según su duración</h3>
              <ul className="mt-2 list-disc pl-6 space-y-2 text-black/70">
                <li>
                  <span className="font-semibold text-black/80">Cookies de sesión:</span> se eliminan al cerrar el
                  navegador.
                </li>
                <li>
                  <span className="font-semibold text-black/80">Cookies persistentes:</span> permanecen durante un
                  tiempo definido por el responsable de la cookie (minutos, meses o años). Se recomienda limitar su
                  duración al mínimo necesario.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            8. Detalle de cookies utilizadas en esta web
          </h2>

          <div className="mt-4 space-y-8">
            <div>
              <p className="font-semibold text-black/80">8.1 Cookies técnicas (necesarias)</p>
              <ul className="mt-2 list-disc pl-6 space-y-1 text-black/70">
                <li>
                  <span className="font-semibold text-black/80">Finalidad:</span> funcionamiento del sitio, seguridad y
                  gestión del consentimiento.
                </li>
                <li>
                  <span className="font-semibold text-black/80">Gestión:</span> propias.
                </li>
                <li>
                  <span className="font-semibold text-black/80">Duración:</span> pueden ser de sesión o persistentes
                  (según finalidad).
                </li>
                <li>
                  <span className="font-semibold text-black/80">Base jurídica:</span> necesarias para el funcionamiento
                  del servicio solicitado.
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-black/80">8.2 Cookies analíticas (Google Analytics 4)</p>
              <ul className="mt-2 list-disc pl-6 space-y-1 text-black/70">
                <li>
                  <span className="font-semibold text-black/80">Finalidad:</span> medición estadística y análisis
                  agregado del uso del sitio para mejorar contenidos y servicios.
                </li>
                <li>
                  <span className="font-semibold text-black/80">Gestión:</span> terceros (Google),{" "}
                  <span className="font-semibold text-black/80">solo si el usuario las acepta</span>.
                </li>
                <li>
                  <span className="font-semibold text-black/80">Duración:</span> normalmente persistentes (según
                  configuración del proveedor).
                </li>
                <li>
                  <span className="font-semibold text-black/80">Base jurídica:</span> consentimiento.
                </li>
              </ul>
              <p className="mt-3 text-sm text-black/60">
                Nota: la instalación y nombres concretos de cookies analíticas (p. ej. <em>_ga</em>, <em>_ga_*</em>)
                dependen de la configuración y del proveedor.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black/80">8.3 Preferencias y marketing</p>
              <p className="mt-2 text-black/70">
                Actualmente <span className="font-semibold text-black/80">no utilizamos</span> cookies de preferencias
                ni de marketing/seguimiento en este sitio web. Si en el futuro se activaran, se informará y se solicitará
                el consentimiento cuando proceda.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            9. Consentimiento
          </h2>
          <p className="mt-3">
            Al acceder por primera vez, verás un banner para <strong>aceptar</strong>, <strong>denegar</strong> o{" "}
            <strong>configurar</strong> las cookies no necesarias. Puedes cambiar tu decisión en cualquier momento
            desde “Configurar cookies”.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            10. Información adicional y derechos
          </h2>
          <p className="mt-3">
            Para más información sobre el tratamiento de datos personales y el ejercicio de derechos, consulta nuestra{" "}
            <Link className="underline" href="/privacidad">
              Política de Privacidad
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold" style={{ color: PRIMARY }}>
            11. Contacto
          </h2>
          <p className="mt-3">
            Si tienes preguntas sobre esta Política de Cookies, puedes contactar con nosotros a través del formulario de{" "}
            <Link className="underline" href="/contacto">
              Contacto
            </Link>
            .
          </p>
        </div>

        <p className="pt-2 text-sm text-black/50">Última actualización: {updated}</p>
      </section>
    </main>
  );
}
