import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Statistics from "@/components/sections/Statistics";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Industries from "@/components/sections/Industries";
import DigitalInnovation from "@/components/sections/DigitalInnovation";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* 1. Full-screen hero with parallax */}
      <Hero />

      {/* 2. Partner / accreditation strip */}
      <Partners />

      {/* 3. Animated statistics */}
      <Statistics />

      {/* 4. About — company overview + 6 Rights philosophy */}
      <About />

      {/* 5. Services — 18 service cards with category filter */}
      <Services />

      {/* 6. Why Choose Us — feature cards on dark background */}
      <WhyChooseUs />

      {/* 7. Process — animated 7-step timeline */}
      <Process />

      {/* 8. Industries served */}
      <Industries />

      {/* 9. Digital innovation — future tech roadmap */}
      <DigitalInnovation />

      {/* 10. Client testimonials */}
      <Testimonials />

      {/* 11. Mid-page CTA banner */}
      <CTABanner />

      {/* 12. FAQ accordion */}
      <FAQ />

      {/* 13. Contact form + map */}
      <Contact />
    </>
  );
}
