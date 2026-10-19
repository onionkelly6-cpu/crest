/**
 * Crestbridge mark: a heraldic shield with a single-span bridge (deck over
 * an arch) inside it. Drawn on a 24×24 grid as stroked paths so the same
 * data renders in the in-page Wordmark and in next/og image routes
 * (favicon, Open Graph card), which only support plain SVG.
 */
export const CREST_PATHS = [
  "M12 2.5 19.5 5.5V11.5C19.5 16.2 16.3 19.6 12 21.5 7.7 19.6 4.5 16.2 4.5 11.5V5.5Z",
  "M7.5 11H16.5",
  "M8.5 16a3.5 3.5 0 0 1 7 0",
  "M8.5 11V16M15.5 11V16",
] as const;
