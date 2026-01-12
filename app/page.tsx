import { Hero } from "./components/home/hero";
import { HomeServices } from "./components/home/home-services";
import { HomeSupport } from "./components/home/home-support";
import { HomeHowWeWork } from "./components/home/home-how-we-work";


export default function Home() {
  return (
    <>
      <Hero />
      <HomeServices />
      <HomeSupport />
      <HomeHowWeWork />
    </>
  );
}
