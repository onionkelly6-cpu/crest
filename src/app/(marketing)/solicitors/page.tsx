import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { AttorneyPortrait } from "@/components/marketing/attorney-portrait";
import { attorneys } from "@/lib/content/attorneys";
import { practiceAreas } from "@/lib/content/practice-areas";

export const metadata = {
  title: "Our Solicitors",
  description:
    "Meet the Crestbridge private client team: wills, probate, trusts, inheritance tax and later-life planning.",
};

export default function SolicitorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        Our Team
      </p>
      <h1 className="mt-4 font-display text-4xl sm:text-5xl">Our Solicitors</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Every client has a named solicitor who stays with their matter from
        the first meeting to completion.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {attorneys.map((solicitor, i) => (
          <Reveal key={solicitor.slug} delay={(i % 3) * 80}>
            <Link href={`/solicitors/${solicitor.slug}`} className="group block h-full">
              <AttorneyPortrait name={solicitor.name} image={solicitor.image} />
              <h2 className="mt-5 font-display text-xl">{solicitor.name}</h2>
              <p className="mt-1 text-sm text-accent">{solicitor.title}</p>
              <p className="mt-3 text-sm text-muted-foreground">{solicitor.bio}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {solicitor.practiceAreas.map((slug) => {
                  const area = practiceAreas.find((a) => a.slug === slug);
                  if (!area) return null;
                  return (
                    <li
                      key={slug}
                      className="border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {area.name}
                    </li>
                  );
                })}
              </ul>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-foreground group-hover:text-accent">
                View profile <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
