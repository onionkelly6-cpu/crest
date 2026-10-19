import {
  ScrollText,
  Landmark,
  KeyRound,
  PoundSterling,
  HeartHandshake,
  Gavel,
  Scale,
  type LucideIcon,
} from "lucide-react";
import type { PracticeAreaSlug } from "@/lib/content/practice-areas";
import { cn } from "@/lib/utils";

const iconBySlug: Record<PracticeAreaSlug, LucideIcon> = {
  "wills-succession": ScrollText,
  "probate-estates": Landmark,
  trusts: KeyRound,
  "inheritance-tax": PoundSterling,
  "lasting-powers-of-attorney": HeartHandshake,
  "court-of-protection": Gavel,
  "contentious-probate": Scale,
};

export function PracticeAreaIcon({
  slug,
  className,
}: {
  slug: PracticeAreaSlug;
  className?: string;
}) {
  const Icon = iconBySlug[slug];
  return <Icon aria-hidden className={cn("h-6 w-6", className)} />;
}
