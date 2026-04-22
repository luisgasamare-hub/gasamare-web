import Link from "next/link";
import Image from "next/image";

const PRIMARY = "#1B123A";

export function HomeServices() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[120rem] px-6 lg:px-12 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 max-w-3xl">
            <p
              className="text-xs tracking-[0.28em] uppercase mb-4"
              style={{ color: PRIMARY, opacity: 0.55 }}
            >
              SERVICIOS
            </p>

            <h2
              className="font-sans font-semibold leading-[1.08] text-3xl sm:text-4xl"
              style={{ color: PRIMARY }}
            >
              Servicios de asesoría y gestoría para autónomos, empresas y obra.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-black/70">
              Ofrecemos servicio de asesoría y gestoría en Madrid con atención
              cercana, control de plazos y gestión profesional para cada necesidad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <Link
              href="/servicios#autonomos"
              aria-label="Ir a Gestión de autónomos"
              className="group block bg-white border border-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_30px_100px_rgba(0,0,0,0.16)]"
            >
              <div className="p-8 sm:p-10 lg:p-16 min-h-[240px] sm:min-h-[280px] lg:min-h-[320px]">
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                  <div className="relative shrink-0 h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 mx-auto md:mx-0">
                    <Image
                      src="/images/inicio/servicio-gestoria.webp"
                      alt="Gestoría y asesoría"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 112px, 144px"
                    />
                  </div>

                  <div className="w-full min-w-0">
                    <h3
                      className="text-2xl sm:text-[28px] lg:text-[32px] font-semibold leading-tight break-words"
                      style={{ color: PRIMARY }}
                    >
                      Gestoría y asesoría
                    </h3>

                    <p className="mt-4 sm:mt-5 text-base sm:text-lg text-black/70 break-words">
                      Gestión fiscal, contable y laboral para autónomos y empresas,
                      orientada al control, la claridad y la tranquilidad en el día a día.
                    </p>

                    <span
                      className="mt-6 sm:mt-8 lg:mt-10 inline-flex text-sm font-semibold transition-opacity group-hover:opacity-80"
                      style={{ color: PRIMARY }}
                    >
                      Ver servicio
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/servicios#obra"
              aria-label="Ir a Gestión de personal de obra"
              className="group block bg-white border border-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_30px_100px_rgba(0,0,0,0.16)]"
            >
              <div className="p-8 sm:p-10 lg:p-16 min-h-[240px] sm:min-h-[280px] lg:min-h-[320px]">
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                  <div className="relative shrink-0 h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 mx-auto md:mx-0">
                    <Image
                      src="/images/inicio/servicio-obra.webp"
                      alt="Documentación y accesos a obra"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 112px, 144px"
                    />
                  </div>

                  <div className="w-full min-w-0">
                    <h3
                      className="text-2xl sm:text-[28px] lg:text-[32px] font-semibold leading-tight break-words"
                      style={{ color: PRIMARY }}
                    >
                      Gestión administrativa y laboral en obra
                    </h3>

                    <p className="mt-4 sm:mt-5 text-base sm:text-lg text-black/70 break-words">
                      Gestión de documentación, PRL y plataformas de obra
                      para garantizar el acceso y el cumplimiento normativo.
                    </p>

                    <span
                      className="mt-6 sm:mt-8 lg:mt-10 inline-flex text-sm font-semibold transition-opacity group-hover:opacity-80"
                      style={{ color: PRIMARY }}
                    >
                      Ver servicio
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <Link href="/gestoria-autonomos-madrid" className="underline underline-offset-2 text-black/70">
              Ver gestoría para autónomos en Madrid
            </Link>
            <Link href="/gestoria-empresas-madrid" className="underline underline-offset-2 text-black/70">
              Ver gestoría para empresas en Madrid
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}