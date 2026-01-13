import { Hero } from "./components/home/hero";
import { HomeServices } from "./components/home/home-services";
import { HomeSupport } from "./components/home/home-support";
import { HomeHowWeWork } from "./components/home/home-how-we-work";


export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        Asesoría y gestoría para autónomos y empresas
      </h1>

      <Hero />
      <HomeServices />
      <HomeSupport />
      <HomeHowWeWork />
    </>
  );
}
