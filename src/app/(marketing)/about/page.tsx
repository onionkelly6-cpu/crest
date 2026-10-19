import Image from "next/image";
import { testimonials } from "@/lib/content/testimonials";
import { practiceAreas } from "@/lib/content/practice-areas";
import { Reveal } from "@/components/motion/reveal";

export const metadata = {
  title: "About",
  description:
    "About Crestbridge, a London private client practice: wills, probate, trusts and later-life planning, with a client portal that always shows where your matter stands.",
};

const stats = [
  { label: "Private client practice areas", value: `${practiceAreas.length}` },
  { label: "Based in", value: "London" },
  { label: "Client portal access", value: "24/7" },
  { label: "Matter updates in the portal", value: "Live" },
];

const values = [
  {
    title: "Responsive Communication",
    body: "Families dealing with a bereavement should never be left waiting. Every enquiry is acknowledged promptly and every client has a named solicitor.",
  },
  {
    title: "Transparent Fees",
    body: "Fixed fees for wills and lasting powers of attorney, and a written estimate for every probate, agreed before work begins.",
  },
  {
    title: "Thinking Generations Ahead",
    body: "Our advice looks beyond the immediate document to how your estate will pass, and how your family will live with the result.",
  },
  {
    title: "A Portal That Keeps You Informed",
    body: "Status changes, documents, and messages all land in one secure place, not scattered across email and voicemail.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#0c0a08]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0c0a08] via-[#0c0a08]/60 to-[#0c0a08]/20" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-28">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-2">
            London, United Kingdom
          </p>
          <h1 className="mt-4 font-display text-5xl text-[#f5f2ea] sm:text-6xl">
            About Crestbridge
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[#f5f2ea]/70">
            Crestbridge is a London private client practice built on a simple
            idea: families planning ahead, or dealing with a loss, deserve
            clear advice and should always know where their matter stands,
            backed by a portal that keeps them informed without having to
            ask.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 60} className="px-6 py-10 sm:px-8">
              <p className="font-display text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal direction="left" className="relative aspect-4/5 w-full overflow-hidden lg:aspect-3/4">
          <Image
            src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b"
            alt=""
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Why Crestbridge</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Private client work, done carefully
          </h2>
          <div className="mt-10 space-y-8">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 4) * 80}>
                <h3 className="font-display text-lg">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-accent-2">What Clients Say</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <Reveal key={testimonial.quote} delay={i * 80} className="border-l border-background/20 pl-6">
                <p className="font-display text-lg leading-snug italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm text-background/60">
                  — {testimonial.context}
                </p>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-xs text-background/50">
            Testimonials reflect individual experiences; every matter is different.
          </p>
        </div>
      </section>
    </div>
  );
}
