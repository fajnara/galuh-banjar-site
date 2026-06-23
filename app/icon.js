import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon dibuat dari identitas brand: kotak maroon + monogram "GB" emas.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3f0f1d",
          color: "#bf9b5a",
          fontSize: 34,
          fontWeight: 600,
          fontFamily: "Georgia, serif",
          borderRadius: 14,
        }}
      >
        GB
      </div>
    ),
    { ...size }
  );
}
