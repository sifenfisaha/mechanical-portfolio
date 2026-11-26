import { Capabilities } from "./_components/capabilities";
import { CtaBand } from "./_components/cta-band";
import { Hero } from "./_components/hero";
import { Intro } from "./_components/intro";
import { Tools } from "./_components/tools";
import { Vision } from "./_components/vision";
import { Work } from "./_components/work";

export default function Home() {
  return (
    <>
      <Hero />
      <Tools />
      <Intro />
      <Capabilities />
      <Work />
      <Vision />
      <CtaBand />
    </>
  );
}
