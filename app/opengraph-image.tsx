import { ImageResponse } from "next/og";

export const alt = "Chaerin Ryu | Portfolio - WEB DEVELOPER PORTFOLIO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
            padding: "8px 16px",
            background: "#eff6ff",
            color: "#1d4ed8",
            borderRadius: "9999px",
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "0.1em",
          }}
        >
          FRONTEND · HEALTHCARE · IOT
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            WEB
          </span>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "#2563eb",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            DEVELOPER
          </span>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            PORTFOLIO
          </span>
        </div>
        <p
          style={{
            fontSize: "28px",
            color: "#475569",
            maxWidth: "700px",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          만들고 끝내는 것이 아니라, 실제 문제 해결 → 검증 → 확장까지 비즈니스
          가치를 설계합니다.
        </p>
        <p
          style={{
            fontSize: "20px",
            color: "#64748b",
            marginTop: "24px",
          }}
        >
          Chaerin Ryu · Portfolio
        </p>
      </div>
    ),
    { ...size }
  );
}
