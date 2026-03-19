"use client";

import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo y nombre */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Logo GASAMARE"
            width={38}
            height={38}
            className="object-contain"
          />
          <span className="text-2xl font-semibold text-[#3A1D6E] tracking-wide">
            GASAMARE
          </span>
        </div>

        {/* Menú principal */}
        <div className="hidden md:flex space-x-10 text-[16px] font-medium text-gray-700">
          <Link href="/" className="hover:text-[#3A1D6E] transition-colors">Inicio</Link>
          <Link href="#empresa" className="hover:text-[#3A1D6E] transition-colors">Empresa</Link>
          <Link href="#servicios" className="hover:text-[#3A1D6E] transition-colors">Servicios</Link>
          <Link href="#precios" className="hover:text-[#3A1D6E] transition-colors">Precios</Link>
          <Link href="#contacto" className="hover:text-[#3A1D6E] transition-colors">Contacto</Link>
        </div>

        {/* Lupa y botón */}
        <div className="flex items-center gap-6">
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-600 hover:text-[#3A1D6E]" />
          </button>

          <a
            href="https://erp.gasamare.es"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3A1D6E] text-white px-5 py-2 rounded-lg font-semibold text-[15px] hover:bg-[#5A2DA0] transition-all duration-300"
          >
            Entrar
          </a>
        </div>
      </div>
    </nav>
  );
}
