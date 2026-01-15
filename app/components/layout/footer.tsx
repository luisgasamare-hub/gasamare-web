import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const BG = "#1B123A";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: BG }} className="font-body text-white">
      <div className="mx-auto max-w-[120rem] px-6 py-14 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <Image
                src="/images/logo-footer.svg"
                alt="Gasamare Gestión"
                width={100}
                height={100}
                className="h-16 w-16"
              />
              <div>
                <h3 className="text-lg font-semibold leading-tight">
                  Gasamare Gestión
                </h3>
                <p className="text-sm text-white/70">
                  Sociedad Limitada
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold">
              Enlaces rápidos
            </h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/" className="text-white/70 hover:text-white">
                Inicio
              </Link>
              <Link href="/empresa" className="text-white/70 hover:text-white">
                Empresa
              </Link>
              <Link href="/servicios" className="text-white/70 hover:text-white">
                Servicios
              </Link>
              <Link href="/contacto" className="text-white/70 hover:text-white">
                Contacto
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold">
              Contacto
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:info@gasamare.es"
                className="flex items-center gap-3 text-white/70 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                info@gasamare.es
              </a>

              <a
                href="tel:+34614859357"
                className="flex items-center gap-3 text-white/70 hover:text-white"
              >
                <Phone className="h-5 w-5" />
                +34 614 859 357
              </a>

              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="h-5 w-5" />
                Madrid, España
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
            <p className="text-white/60">
              © {year} Gasamare Gestión S.L. Todos los derechos reservados.
            </p>

            <div className="flex gap-6">
              <Link href="/aviso-legal" className="text-white/60 hover:text-white">
                Aviso legal
              </Link>
              <Link href="/privacidad" className="text-white/60 hover:text-white">
                Privacidad
              </Link>
              <Link href="/cookies" className="text-white/60 hover:text-white">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
