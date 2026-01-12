"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PRIMARY = "#1B123A";
const TEXT_DEFAULT = "#333333";
const BG = "#FFFFFF";
const BORDER = "#E0DDD6";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/empresa", label: "Empresa" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Cierra el menú al navegar
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquea scroll cuando el menú está abierto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: BG, borderBottom: `1px solid ${BORDER}` }}
    >
      <div className="mx-auto max-w-[120rem] px-2 sm:px-4 lg:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* ✅ LOGO como el antiguo (sin límites raros en móvil) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-gasamare.svg"
              alt="Gasamare Gestión"
              width={900}
              height={220}
              priority
              className="h-12 w-auto"
              quality={100}
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base transition-colors"
                  style={{
                    color: active ? PRIMARY : TEXT_DEFAULT,
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Link href="/area-clientes" aria-label="Área clientes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill={PRIMARY}
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.02-6 4.5V20h12v-1.5C18 16.02 15.31 14 12 14z" />
              </svg>
            </Link>

            <Link
              href="/contacto"
              className="px-6 py-3 text-sm font-semibold transition hover:opacity-90"
              style={{ backgroundColor: PRIMARY, color: "#fff" }}
            >
              Solicitar consulta
            </Link>
          </div>

          {/* ✅ Hamburguesa solo móvil, SIN recuadro */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span className="block w-6">
              <span className="block h-[2px] mb-1.5" style={{ background: PRIMARY }} />
              <span className="block h-[2px] mb-1.5" style={{ background: PRIMARY }} />
              <span className="block h-[2px]" style={{ background: PRIMARY }} />
            </span>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
          />

          <div
            className="absolute right-0 top-0 h-full w-[82%] max-w-[360px] bg-white shadow-xl"
            style={{ borderLeft: `1px solid ${BORDER}` }}
          >
            <div
              className="h-20 px-4 flex items-center justify-end border-b"
              style={{ borderColor: BORDER }}
            >
              <button
                className="w-10 h-10 inline-flex items-center justify-center"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
              >
                <span className="text-2xl leading-none" style={{ color: PRIMARY }}>
                  ×
                </span>
              </button>
            </div>

            <div className="px-4 py-2">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-4 border-b"
                    style={{
                      borderColor: BORDER,
                      color: active ? PRIMARY : TEXT_DEFAULT,
                      fontWeight: active ? 700 : 500,
                      fontSize: "18px",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/area-clientes"
                className="block py-4 border-b"
                style={{
                  borderColor: BORDER,
                  color: TEXT_DEFAULT,
                  fontWeight: 500,
                  fontSize: "18px",
                }}
              >
                Área clientes
              </Link>

              <Link
                href="/contacto"
                className="mt-4 block w-full text-center py-4 font-semibold"
                style={{ backgroundColor: PRIMARY, color: "#fff" }}
              >
                Solicitar consulta
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
