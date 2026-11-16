import { ImageResponse } from "next/og";

export const alt = "Hien Le — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#faf9f7",
          color: "#111111",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 2, color: "#64615f" }}>$ whoami — Hien Le / Software Engineer</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 128, fontWeight: 800, lineHeight: 0.95, letterSpacing: -6 }}>
          <span>I BUILD</span>
          <span>REAL-WORLD</span>
          <span>SOFTWARE.</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 28, color: "#64615f" }}>
          <span>hienlnt.id.vn</span>
          <span style={{ width: 140, height: 10, background: "#dda91a" }} />
        </div>
      </div>
    ),
    size,
  );
}
