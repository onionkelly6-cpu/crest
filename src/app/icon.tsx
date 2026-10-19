import { ImageResponse } from "next/og";
import { CREST_PATHS } from "@/components/brand/crest-paths";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Same crest-and-bridge mark as the in-page Wordmark, so the browser tab
// icon matches the site logo.
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
          background: "#16362c",
          border: "1px solid #b8863b",
          borderRadius: 4,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e3c587"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {CREST_PATHS.map((d) => (
            <path key={d} d={d} />
          ))}
        </svg>
      </div>
    ),
    { ...size }
  );
}
