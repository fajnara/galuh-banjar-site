import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Galuh Banjar Aesthetic Klinik — Amuntai & Banjarbaru";

// Gambar preview share (Open Graph + Twitter), dibuat dari identitas brand.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #531327, #3f0f1d)",
          color: "#fbf6f0",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#cdaf72",
            fontSize: 28,
            letterSpacing: 6,
            fontFamily: "sans-serif",
          }}
        >
          AMUNTAI · BANJARBARU
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 600,
            marginTop: 24,
            lineHeight: 1.05,
          }}
        >
          Galuh Banjar Aesthetic Klinik
        </div>
        <div
          style={{
            display: "flex",
            color: "rgba(251, 246, 240, 0.85)",
            fontSize: 34,
            marginTop: 30,
            fontFamily: "sans-serif",
          }}
        >
          Estetika yang ditemani dokter — dr. Amalia, Dipl. CIBTAC
        </div>
      </div>
    ),
    { ...size }
  );
}
