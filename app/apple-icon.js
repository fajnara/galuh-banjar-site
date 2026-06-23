import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon — versi besar dari favicon brand.
export default function AppleIcon() {
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
          fontSize: 96,
          fontWeight: 600,
          fontFamily: "Georgia, serif",
          borderRadius: 40,
        }}
      >
        GB
      </div>
    ),
    { ...size }
  );
}
