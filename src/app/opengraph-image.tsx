import { ImageResponse } from "next/og";
import { config } from "@/data/config";

export const runtime = "edge";
export const alt = `${config.author}, Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#5ee7de";

/**
 * Rendered at request time from `config`, so the share card can never drift out of
 * sync with the site the way a checked-in PNG did.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05070d",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* accent hairline */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 6,
            background: ACCENT,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: ACCENT,
            }}
          />
          <div
            style={{
              color: "#8b95a7",
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Miami, FL
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 104,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -3,
            }}
          >
            Sebastian
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 104,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -3,
            }}
          >
            Becerra
          </div>
          <div
            style={{
              marginTop: 28,
              color: ACCENT,
              fontSize: 34,
              fontWeight: 600,
              letterSpacing: -0.5,
            }}
          >
            Software Engineer
          </div>
          <div
            style={{
              marginTop: 10,
              color: "#8b95a7",
              fontSize: 27,
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            Full-stack products, applied AI, and the data and payments systems
            behind live operations.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1b2233",
            paddingTop: 26,
            color: "#5d6779",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex" }}>sebastian-becerra.com</div>
          <div style={{ display: "flex", gap: 28 }}>
            <div style={{ display: "flex" }}>9+ years</div>
            <div style={{ display: "flex", color: "#2a3346" }}>/</div>
            <div style={{ display: "flex" }}>TypeScript · Python · AI</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
