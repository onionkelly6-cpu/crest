import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { practiceAreas } from "@/lib/content/practice-areas";
import { offices } from "@/lib/content/offices";
import { Wordmark } from "@/components/brand/wordmark";
import { SITE_DEMO_NOTICE, SITE_NAME } from "@/lib/site-config";

const firmLinks = [
  { href: "/about", label: "About the Firm" },
  { href: "/solicitors", label: "Our Solicitors" },
  { href: "/case-results", label: "Case Studies" },
  { href: "/faq", label: "FAQ" },
  { href: "/locations", label: "Location" },
  { href: "/contact", label: "Make an Enquiry" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Notice" },
  { href: "/terms", label: "Terms of Use" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-6 border-b border-background/15 pb-14 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-lg font-display text-3xl leading-tight sm:text-4xl">
            Planning ahead, or dealing with an estate?
          </h2>
          <Link href="/contact" transitionTypes={["nav-forward"]}>
            <Button
              variant="primary"
              className="rounded-none bg-background text-foreground hover:opacity-90"
            >
              Make an Enquiry
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <Wordmark size="md" textClassName="text-background" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-background/65">
              Wills, probate, trusts and later-life planning for families,
              with a secure portal that keeps every document and update in
              one place.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-widest text-accent-2 uppercase">
              Practice Areas
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="text-background/65 hover:text-background"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-widest text-accent-2 uppercase">
              Firm
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {firmLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/65 hover:text-background">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-widest text-accent-2 uppercase">
              Location
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-background/65">
              {offices.map((office) => (
                <li key={office.name} className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" aria-hidden />
                  <span>
                    <span className="block font-medium text-background">{office.name}</span>
                    {office.address}
                    <span className="block text-xs">{office.hours}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-background/65">
              Enquiries are taken through the{" "}
              <Link href="/contact" className="underline hover:text-background">
                enquiry form
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-background/15 pt-8 text-sm text-background/65">
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-background">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="mt-6">
            &copy; {new Date().getFullYear()} {SITE_NAME}.
          </p>
        </div>
      </div>
    </footer>
  );
}
