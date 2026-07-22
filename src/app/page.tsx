import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Premium Logistics Consulting & Freight Broking | Zimbabwe & Africa",
  description:
    "River Jordan Logistics Consultancy (Pvt) Ltd delivers freight broking, supply chain consulting, fleet management and logistics transformation across Zimbabwe and Africa. Contact our Harare team today.",
  openGraph: {
    url: "https://www.rjlogisticsconsultancy.co.zw/",
    title: "River Jordan Logistics Consultancy | Moving Logistics Beyond Borders",
    description:
      "Freight broking, supply chain consulting, fleet management and logistics transformation across Africa. Trusted by 500+ projects.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "River Jordan Logistics Consultancy - Total Logistics Solutions",
      },
    ],
  },
  twitter: {
    title: "River Jordan Logistics Consultancy | Total Logistics Solutions",
    description:
      "Moving logistics beyond borders. Professional freight broking, supply chain & fleet management across Africa.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.rjlogisticsconsultancy.co.zw/",
  },
};

const jsonLdHome = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.rjlogisticsconsultancy.co.zw/#webpage",
  name: "River Jordan Logistics Consultancy | Total Logistics Solutions",
  url: "https://www.rjlogisticsconsultancy.co.zw/",
  description:
    "Premium freight broking, supply chain consulting, fleet management and logistics transformation services across Africa.",
  isPartOf: { "@id": "https://www.rjlogisticsconsultancy.co.zw/#website" },
  about: { "@id": "https://www.rjlogisticsconsultancy.co.zw/#organization" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.rjlogisticsconsultancy.co.zw/",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdHome).replace(/</g, "\\u003c"),
        }}
      />
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
