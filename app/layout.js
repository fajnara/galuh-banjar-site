import { Fraunces, Jost } from "next/font/google";
import "./globals.css";

// Display serif + sans — self-hosted via next/font (no Google Fonts CDN).
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const SITE_URL = "https://galuh-banjar-site.vercel.app";
const TITLE =
  "Galuh Banjar Aesthetic Klinik — Estetika Tepercaya di Amuntai & Banjarbaru";
const DESC =
  "Galuh Banjar Aesthetic Klinik, dipimpin dr. Amalia (Dipl. CIBTAC). Perawatan estetik yang aman dan telaten untuk perempuan Banua — Amuntai & Banjarbaru, Kalimantan Selatan.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESC,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Galuh Banjar Aesthetic Klinik",
    title: TITLE,
    description: DESC,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Structured data (local SEO) — MedicalClinic dengan 2 cabang.
const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const branchHours = [
  { "@type": "OpeningHoursSpecification", dayOfWeek: WEEKDAYS, opens: "09:00", closes: "18:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "17:00" },
];
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Galuh Banjar Aesthetic Klinik",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  telephone: "+628115111315",
  medicalSpecialty: "Dermatology",
  founder: {
    "@type": "Person",
    name: "dr. Amalia A",
    jobTitle: "Dokter Estetika (Dipl. CIBTAC)",
  },
  department: [
    {
      "@type": "MedicalClinic",
      name: "Galuh Banjar Amuntai",
      telephone: "+628115111315",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Jl. H. Saberan Effendi, Palampitan Hilir (dekat Pasar Sajumput)",
        addressLocality: "Amuntai",
        addressRegion: "Hulu Sungai Utara, Kalimantan Selatan",
        addressCountry: "ID",
      },
      openingHoursSpecification: branchHours,
    },
    {
      "@type": "MedicalClinic",
      name: "Galuh Banjar Banjarbaru",
      telephone: "+628115111315",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Kaca Piring No. 07, Kel. Komet, Banjarbaru Utara",
        addressLocality: "Banjarbaru",
        addressRegion: "Kalimantan Selatan",
        addressCountry: "ID",
      },
      openingHoursSpecification: branchHours,
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`no-js ${fraunces.variable} ${jost.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        {/* swap to JS-enhanced styles only when JS available
            (content stays visible if JS fails) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
