import type { Metadata } from "next";
import { Hero } from "./components/home/hero";
import { HomeServices } from "./components/home/home-services";
import { HomeSupport } from "./components/home/home-support";
import { HomeHowWeWork } from "./components/home/home-how-we-work";

export const metadata: Metadata = {
  title: "Asesoría y gestoría en Madrid para autónomos y empresas | GASAMARE",
  description:
    "Asesoría y gestoría en Madrid para autónomos, empresas y pymes. Servicio fiscal, contable, laboral y gestión administrativa con atención cercana y profesional.",
  alternates: {
    canonical: "https://gasamare.es/",
  },
};

export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        Asesoría y gestoría en Madrid para autónomos y empresas
      </h1>

      <Hero />
      <HomeServices />
      <HomeSupport />
      <HomeHowWeWork />
    </>
  );
}