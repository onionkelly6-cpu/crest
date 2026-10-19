// FICTIONAL people for a sample website. None of these solicitors exist, so
// no profile uses a photograph — portraits fall back to initials. Keep it
// that way: never attach a real person's photo to an invented profile.
// (The `attorneys` export name is kept because the portal/API code shares
// the "attorney" role name internally.)
export const attorneys = [
  {
    slug: "eleanor-hartwell",
    name: "Eleanor Hartwell",
    title: "Senior Partner, Head of Private Client",
    image: undefined as string | undefined,
    practiceAreas: ["wills-succession", "trusts", "inheritance-tax"],
    bio: "Eleanor leads the private client team, advising families on wills, trusts and passing wealth between generations.",
    longBio:
      "Eleanor's work centres on succession planning for families with property, business interests and assets in more than one country. She is known for turning complicated family circumstances into a plan that everyone can understand, and for staying involved when that plan needs to be put into effect.",
    notableMatters: [
      "Structured a three-generation succession plan around a family-owned farm",
      "Restructured a discretionary trust to reflect a blended family's wishes",
    ],
  },
  {
    slug: "james-ashworth",
    name: "James Ashworth",
    title: "Partner, Probate & Estates",
    image: undefined as string | undefined,
    practiceAreas: ["probate-estates", "contentious-probate"],
    bio: "James guides executors and families through probate, from the first call after a death to the final distribution.",
    longBio:
      "James handles estate administration of every size, including estates with overseas property and unresolved tax affairs. Where a will is challenged, he works to settle the dispute through negotiation or mediation before it reaches court.",
    notableMatters: [
      "Administered an estate with property in England, Spain and Scotland",
      "Settled a claim under the Inheritance Act 1975 at mediation",
    ],
  },
  {
    slug: "priya-raman",
    name: "Priya Raman",
    title: "Senior Associate, Powers of Attorney & Court of Protection",
    image: undefined as string | undefined,
    practiceAreas: ["lasting-powers-of-attorney", "court-of-protection"],
    bio: "Priya helps clients plan for later life and supports families when a loved one can no longer manage their own affairs.",
    longBio:
      "Priya prepares lasting powers of attorney and advises attorneys on their duties. When no LPA is in place, she handles deputyship applications to the Court of Protection and supports deputies through annual reporting.",
    notableMatters: [
      "Obtained a property and financial affairs deputyship within four months",
      "Advised a family on a statutory will application",
    ],
  },
] as const;

export type AttorneySlug = (typeof attorneys)[number]["slug"];
