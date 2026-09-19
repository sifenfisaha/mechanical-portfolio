import { Hero } from "./_components/hero";
import { Process } from "./_components/process";
import { Showcase } from "./_components/showcase";
import { Testimonials } from "./_components/testimonials";
import { Tools } from "./_components/tools";
import { Work } from "./_components/work";

export default function Home() {
  return (
    <>
      <Hero />
      <Tools />
      <Work />
      <Process />
      <Testimonials />
      <Showcase />
    </>
  );
}
