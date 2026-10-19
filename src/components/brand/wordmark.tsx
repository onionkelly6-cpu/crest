import { cn } from "@/lib/utils";
import { SITE_WORDMARK, SITE_WORDMARK_SUBTITLE } from "@/lib/site-config";
import { CREST_PATHS } from "@/components/brand/crest-paths";

const sizes = {
  sm: { box: 32, stroke: 20, gap: "gap-2", text: "text-base", sub: "text-[8px]" },
  md: { box: 40, stroke: 26, gap: "gap-2.5", text: "text-lg", sub: "text-[9px]" },
  lg: { box: 52, stroke: 34, gap: "gap-3", text: "text-2xl", sub: "text-[10px]" },
  xl: { box: 88, stroke: 58, gap: "gap-4", text: "text-3xl", sub: "text-xs" },
} as const;

type WordmarkProps = {
  size?: keyof typeof sizes;
  showText?: boolean;
  className?: string;
  textClassName?: string;
};

/**
 * Crest-and-bridge mark on a brass-edged tile, with a two-line wordmark.
 * Shares its path data with src/app/icon.tsx and opengraph-image.tsx so the
 * favicon, share card and in-page logo stay the same design.
 */
export function Wordmark({ size = "md", showText = true, className, textClassName }: WordmarkProps) {
  const { box, stroke, gap, text, sub } = sizes[size];

  return (
    <span className={cn("inline-flex items-center", gap, className)}>
      <span
        className="flex shrink-0 items-center justify-center"
        style={{
          width: box,
          height: box,
          background: "#16362c",
          border: "1px solid #b8863b",
          borderRadius: 4,
        }}
      >
        <svg
          width={stroke}
          height={stroke}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e3c587"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          {CREST_PATHS.map((d) => (
            <path key={d} d={d} />
          ))}
        </svg>
      </span>
      {showText && (
        <span className={cn("flex flex-col text-foreground", textClassName)}>
          <span className={cn("font-display leading-none tracking-tight", text)}>
            {SITE_WORDMARK}
          </span>
          <span
            className={cn(
              "mt-1 font-mono leading-none tracking-[0.22em] uppercase opacity-70",
              sub
            )}
          >
            {SITE_WORDMARK_SUBTITLE}
          </span>
        </span>
      )}
    </span>
  );
}
