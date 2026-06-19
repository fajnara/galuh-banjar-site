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

export const metadata = {
  title:
    "Galuh Banjar Aesthetic Klinik — Estetika Tepercaya di Amuntai & Banjarbaru",
  description:
    "Galuh Banjar Aesthetic Klinik, dipimpin dr. Amalia (Dipl. CIBTAC). Perawatan estetik yang aman dan telaten untuk perempuan Banua — Amuntai & Banjarbaru, Kalimantan Selatan.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`no-js ${fraunces.variable} ${jost.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* swap to JS-enhanced styles only when JS available
            (content stays visible if JS fails) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');",
          }}
        />
        {children}
      </body>
    </html>
  );
}
