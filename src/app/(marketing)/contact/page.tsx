import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { practiceAreas } from "@/lib/content/practice-areas";
import { offices } from "@/lib/content/offices";
import { submitLeadAction } from "./actions";

export const metadata = {
  title: "Make an Enquiry",
  description:
    "Make an enquiry with Crestbridge about wills, probate, trusts and later-life planning.",
};

type Props = {
  searchParams: Promise<{ error?: string; success?: string }>;
};

const inputClassName =
  "mt-2 w-full rounded-sm border border-border bg-background px-4 py-2.5 text-foreground transition-colors focus-visible:outline-none focus-visible:border-accent";

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Get in Touch
        </p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl">Make an Enquiry</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Tell us a little about what you need, whether that is a new will,
          help with an estate or planning for later life. Every enquiry is
          reviewed by a person before a matter is opened.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[3fr_2fr]">
        <Reveal direction="left">
          <Card className="rounded-none">
            {params.success && (
              <p
                role="status"
                className="mb-6 rounded-sm border border-success/40 bg-success/10 px-4 py-3 text-sm text-success"
              >
                Thank you. Your enquiry has been received and will appear in the firm workspace for review.
              </p>
            )}
            {params.error && (
              <p
                role="alert"
                className="mb-6 rounded-sm border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
              >
                {params.error}
              </p>
            )}
            <form action={submitLeadAction} className="space-y-6" aria-describedby="intake-form-note">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Full name
                </label>
                <input id="name" name="name" type="text" required className={inputClassName} />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Your email
                  </label>
                  <input id="email" name="email" type="email" required className={inputClassName} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Your phone (optional)
                  </label>
                  <input id="phone" name="phone" type="tel" className={inputClassName} />
                </div>
              </div>
              <div>
                <label htmlFor="practiceArea" className="block text-sm font-medium">
                  How can we help?
                </label>
                <select id="practiceArea" name="practiceArea" className={inputClassName}>
                  {practiceAreas.map((area) => (
                    <option key={area.slug} value={area.slug}>
                      {area.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Tell us a little more
                </label>
                <textarea id="message" name="message" rows={5} required className={inputClassName} />
              </div>
              <Button type="submit" variant="primary" className="rounded-none">
                Send Enquiry
              </Button>
              <p id="intake-form-note" className="text-xs text-muted-foreground">
                Your enquiry creates a lead in the firm workspace, where staff
                can review it and open a matter.
              </p>
            </form>
          </Card>
        </Reveal>

        <Reveal direction="right" delay={80}>
          <div className="flex h-full flex-col overflow-hidden border border-border">
            <div className="relative h-48 w-full">
              <Image
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex-1 bg-card p-8">
              <h2 className="font-display text-lg">What happens next</h2>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  A member of the team reviews your enquiry and, if the firm
                  can help, opens a matter and sets up your portal access.
                </li>
              </ul>

              <div className="mt-6 space-y-4 border-t border-border pt-6">
                {offices.map((office) => (
                  <div key={office.name} className="flex items-start gap-2.5 text-sm">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    <div>
                      <p className="font-medium text-foreground">{office.name}</p>
                      <p className="mt-1 text-muted-foreground">{office.address}</p>
                      <p className="text-xs text-muted-foreground">{office.hours}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
