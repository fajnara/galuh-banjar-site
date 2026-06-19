import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import Proof from "@/components/Proof";
import Steps from "@/components/Steps";
import Visit from "@/components/Visit";
import SiteFooter from "@/components/SiteFooter";
import Motion from "@/components/Motion";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#perawatan">
        Lompat ke perawatan
      </a>

      <SiteHeader />

      <main>
        <Hero />
        <About />
        <Treatments />
        <Proof />
        <Steps />
        <Visit />
        <SiteFooter />
      </main>

      {/* GSAP scroll-reveal / parallax (client-only, respects reduced motion) */}
      <Motion />
    </>
  );
}
