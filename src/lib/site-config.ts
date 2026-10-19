// Vercel sets VERCEL_PROJECT_PRODUCTION_URL (no scheme) on every build and
// function, so canonical URLs follow whatever domain the project is on
// without hardcoding one here.
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (productionHost ? `https://${productionHost}` : "http://localhost:3000");
export const SITE_NAME = "Crestbridge Private Client Solicitors";
export const SITE_WORDMARK = "Crestbridge";
export const SITE_WORDMARK_SUBTITLE = "Private Client Solicitors";
export const SITE_LOCATION = "London, United Kingdom";

// This is a sample site for a fictional firm. The notice is rendered on
// every page (root layout) and must stay in place for as long as the site
// is publicly reachable.
export const SITE_DEMO_NOTICE =
  "Demo website: Crestbridge is a fictional firm created to showcase this design and does not provide legal services.";
