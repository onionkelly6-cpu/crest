import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { attorneys } from "@/lib/content/attorneys";
import { practiceAreas } from "@/lib/content/practice-areas";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AttorneyPortrait } from "@/components/marketing/attorney-portrait";
import { SITE_NAME } from "@/lib/site-config";

export function generateStaticParams() {
  return attorneys.map((solicitor) => ({ slug: solicitor.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solicitor = attorneys.find((a) => a.slug === slug);
  if (!solicitor) return { title: "Solicitor" };
  return {
    title: solicitor.name,
    description: `${solicitor.name}, ${solicitor.title} at ${SITE_NAME}. ${solicitor.bio}`,
    openGraph: {
      title: `${solicitor.name} | ${SITE_NAME}`,
      description: solicitor.bio,
    },
  };
}

// No schema.org Person markup: these are fictional people on a sample site.
export default async function SolicitorPage({ params }: Props) {
  const { slug } = await params;
  const solicitor = attorneys.find((a) => a.slug === slug);
  if (!solicitor) notFound();

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1fr_1.4fr]">
        <div>
          <AttorneyPortrait name={solicitor.name} image={solicitor.image} />
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">{solicitor.title}</p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl">{solicitor.name}</h1>
          <p className="mt-6 text-lg text-muted-foreground">{solicitor.bio}</p>
          <p className="mt-4 text-muted-foreground">{solicitor.longBio}</p>

          <div className="mt-8">
            <h2 className="font-display text-xl">Practice Areas</h2>
            <ul className="mt-4 flex flex-wrap gap-4">
              {solicitor.practiceAreas.map((areaSlug) => {
                const area = practiceAreas.find((a) => a.slug === areaSlug);
                if (!area) return null;
                return (
                  <li key={areaSlug}>
                    <Link
                      href={`/practice-areas/${areaSlug}`}
                      className="border border-border px-4 py-2 text-sm hover:border-accent hover:text-accent"
                    >
                      {area.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-xl">Experience</h2>
            <ul className="mt-4 space-y-3">
              {solicitor.notableMatters.map((matter) => (
                <li
                  key={matter}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1 text-accent" aria-hidden>•</span>
                  {matter}
                </li>
              ))}
            </ul>
          </div>

          <Card className="mt-10 rounded-none">
            <h2 className="font-display text-lg">Speak to the team</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {`Enquiries for ${solicitor.name.split(" ")[0]} are handled through the firm's enquiry form.`}
            </p>
            <Link href="/contact" className="mt-6 block" transitionTypes={["nav-forward"]}>
              <Button variant="primary" className="w-full rounded-none">
                Make an Enquiry
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}
