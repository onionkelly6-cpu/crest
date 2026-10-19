import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site-config";
import { CREST_PATHS } from "@/components/brand/crest-paths";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f2ea",
          color: "#16362c",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 112,
            height: 112,
            borderRadius: 8,
            border: "2px solid #b8863b",
            background: "#16362c",
            marginBottom: 32,
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e3c587"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {CREST_PATHS.map((d) => (
              <path key={d} d={d} />
            ))}
          </svg>
        </div>
        <div style={{ display: "flex", fontSize: 56, fontFamily: "serif" }}>
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#6b6255", marginTop: 16 }}>
          Wills · Probate · Trusts · Later-life planning
        </div>
      </div>
    ),
    { ...size }
  );
}
