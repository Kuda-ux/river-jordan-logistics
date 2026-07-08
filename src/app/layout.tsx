import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "River Jordan Logistics Consultancy (Pvt) Ltd | Total Logistics Solutions",
    template: "%s | River Jordan Logistics",
  },
  description:
    "River Jordan Logistics Consultancy delivers world-class freight broking, supply chain consulting, fleet management, and logistics transformation services across Africa and beyond. Based in Harare, Zimbabwe.",
  keywords: [
    "logistics consulting Zimbabwe",
    "freight broking Africa",
    "supply chain consulting Harare",
    "fleet management Zimbabwe",
    "warehouse management consulting",
    "transport operations",
    "humanitarian logistics",
    "procurement consulting Africa",
    "logistics outsourcing",
    "River Jordan Logistics",
  ],
  authors: [{ name: "River Jordan Logistics Consultancy (Pvt) Ltd" }],
  creator: "River Jordan Logistics Consultancy (Pvt) Ltd",
  publisher: "River Jordan Logistics Consultancy (Pvt) Ltd",
  metadataBase: new URL("https://riverjordanlogistics.co.zw"),
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://riverjordanlogistics.co.zw",
    title: "River Jordan Logistics Consultancy | Moving Logistics Beyond Borders",
    description:
      "Professional freight broking, supply chain consulting, fleet management and logistics transformation across Africa. Your trusted logistics partner.",
    siteName: "River Jordan Logistics Consultancy",
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
    card: "summary_large_image",
    title: "River Jordan Logistics Consultancy | Total Logistics Solutions",
    description:
      "Moving logistics beyond borders. Professional freight broking, supply chain & fleet management across Africa.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://riverjordanlogistics.co.zw",
  },
  category: "Business, Logistics, Consulting",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "River Jordan Logistics Consultancy (Pvt) Ltd",
  alternateName: "River Jordan Logistics",
  url: "https://riverjordanlogistics.co.zw",
  logo: "https://riverjordanlogistics.co.zw/logo.jpeg",
  description:
    "Professional freight broking, supply chain consulting, fleet management and logistics transformation services across Africa.",
  foundingLocation: {
    "@type": "Place",
    name: "Harare, Zimbabwe",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "408, 4th Floor, Equity House, Corner Jason Moyo & Rezende Street",
    addressLocality: "Harare",
    addressCountry: "ZW",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+263-242-757034",
      contactType: "customer service",
    },
    {
      "@type": "ContactPoint",
      telephone: "+263-710-781705",
      contactType: "customer service",
      contactOption: "HearingImpairedSupported",
    },
  ],
  sameAs: [],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: -17.8292, longitude: 31.0522 },
    geoRadius: "5000000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Logistics Consulting Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Freight Broking" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Supply Chain Consulting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fleet Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Warehouse Design & Optimisation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Logistics Outsourcing" } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen antialiased">
        {/* JSON-LD structured data — placed in body per Next.js 16 docs recommendation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}
