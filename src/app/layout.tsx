import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Fraunces } from "next/font/google";
import { SplashScreen } from "@/components/motion/splash-screen";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";
import "./globals.css";

const sansFont = IBM_Plex_Sans({
  variable: "--font-sans-family",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono-family",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Fraunces: a variable serif with real optical-size character, so headings
// carry personality without losing the firm's formal tone. Italic is used
// for pull-quotes/taglines.
const displayFont = Fraunces({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const DEFAULT_DESCRIPTION =
  "Crestbridge advises families in London and across England and Wales on wills, probate, trusts, inheritance tax and later-life planning, with a secure client portal.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  // Sample site for a fictional firm: keep it out of search results so it
  // is never mistaken for a real practice.
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
  },
};

// Next.js 16: viewport/themeColor moved out of `metadata` into a separate export.
export const viewport: Viewport = {
  themeColor: "#f5f2ea",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${sansFont.variable} ${monoFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
