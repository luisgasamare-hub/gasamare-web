import Link from "next/link";
import Image from "next/image";

const PRIMARY = "#1B123A";

export function HomeServices() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[120rem] px-6 lg:px-12 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            {/* CARD 1 */}
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
                      Gestión fiscal, contable y laboral orientada al control,
                      la claridad y la tranquilidad en el día a día de tu actividad.
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

            {/* CARD 2 */}
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
        </div>
      </div>
    </section>
  );
}
