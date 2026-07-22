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

const SITE = {
  name: "River Jordan Logistics Consultancy (Pvt) Ltd",
  shortName: "River Jordan Logistics",
  domain: "https://www.rjlogisticsconsultancy.co.zw",
  defaultTitle: "River Jordan Logistics Consultancy | Total Logistics Solutions",
  defaultDescription:
    "Premium freight broking, supply chain consulting, fleet management, and logistics transformation services across Africa and beyond. Based in Harare, Zimbabwe.",
};

export const metadata: Metadata = {
  applicationName: SITE.shortName,
  title: {
    default: SITE.defaultTitle,
    template: "%s | River Jordan Logistics",
  },
  description: SITE.defaultDescription,
  keywords: [
    "River Jordan Logistics Consultancy",
    "freight broking Zimbabwe",
    "freight broking Africa",
    "supply chain consulting Harare",
    "supply chain consulting Zimbabwe",
    "fleet management Zimbabwe",
    "fleet management Africa",
    "warehouse management consulting",
    "warehouse design Zimbabwe",
    "transport operations",
    "transport operations Africa",
    "humanitarian logistics",
    "humanitarian logistics Zimbabwe",
    "procurement consulting Africa",
    "procurement sourcing Zimbabwe",
    "logistics outsourcing",
    "logistics outsourcing Africa",
    "risk management logistics",
    "cross border trade logistics",
    "SADC logistics",
    "EAC logistics",
    "third party logistics Zimbabwe",
    "3PL Zimbabwe",
    "CILT Zimbabwe",
    "Zimbabwe logistics consultancy",
  ],
  authors: [{ name: SITE.name, url: SITE.domain }],
  creator: SITE.name,
  publisher: SITE.name,
  metadataBase: new URL(SITE.domain),
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: SITE.domain,
    title: "River Jordan Logistics Consultancy | Moving Logistics Beyond Borders",
    description: SITE.defaultDescription,
    siteName: SITE.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "River Jordan Logistics Consultancy - Total Logistics Solutions",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RJLogistics",
    creator: "@RJLogistics",
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE.domain,
    languages: {
      "en-ZW": SITE.domain,
      "en-GB": SITE.domain,
      "en-US": SITE.domain,
    },
  },
  category: "Business, Logistics, Consulting",
  classification: "Logistics Consulting, Supply Chain Management, Freight Broking, Fleet Management",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/favicon-32x32.png",
        color: "#2980B9",
      },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: SITE.shortName,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  other: {
    "msapplication-TileColor": "#2980B9",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#0B1F3A",
    "geo.placename": "Harare, Zimbabwe",
    "geo.region": "ZW-HA",
    "geo.position": "-17.8292;31.0522",
    "ICBM": "-17.8292, 31.0522",
    "rating": "General",
    "target": "River Jordan Logistics Consultancy, freight broking, supply chain consulting, Zimbabwe",
  },
  verification: {
    google: "cb9e0a28b7d8003e",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.domain}/#organization`,
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.domain,
  logo: `${SITE.domain}/logo.jpeg`,
  image: `${SITE.domain}/og-image.jpg`,
  description: SITE.defaultDescription,
  slogan: "Moving Logistics Beyond Borders",
  foundingDate: "2009",
  foundingLocation: {
    "@type": "Place",
    name: "Harare, Zimbabwe",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "408, 4th Floor, Equity House, Corner Jason Moyo & Rezende Street",
    addressLocality: "Harare",
    addressRegion: "Harare Province",
    addressCountry: "ZW",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+263-242-757034",
      contactType: "customer service",
      availableLanguage: ["English"],
      areaServed: ["ZW", "ZA", "ZM", "BW", "MZ", "MW", "TZ", "KE", "UG", "RW"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+263-710-781705",
      contactType: "customer service",
      contactOption: "HearingImpairedSupported",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+44-7979-696097",
      contactType: "customer service",
      areaServed: ["GB", "EU"],
      availableLanguage: ["English"],
    },
  ],
  email: "info@riverjordanlogistics.co.zw",
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Logistics Consulting Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Freight Broking" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Supply Chain Consulting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fleet Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Warehouse Design & Optimisation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Logistics Outsourcing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transport Operations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Humanitarian Logistics" } },
    ],
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Zimbabwe",
    },
    {
      "@type": "Continent",
      name: "Africa",
    },
  ],
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.domain}/#website`,
  name: SITE.name,
  url: SITE.domain,
  publisher: {
    "@id": `${SITE.domain}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.domain}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.domain}/#localbusiness`,
  name: SITE.name,
  image: `${SITE.domain}/og-image.jpg`,
  url: SITE.domain,
  telephone: "+263-242-757034",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "408, 4th Floor, Equity House, Corner Jason Moyo & Rezende Street",
    addressLocality: "Harare",
    addressCountry: "ZW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -17.8292,
    longitude: 31.0522,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "13:00",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-ZW"
      className={`${inter.variable} ${sora.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([jsonLdOrganization, jsonLdWebsite, jsonLdLocalBusiness]).replace(/</g, "\\u003c"),
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
