// Sample content for a fictional private client firm in England and Wales.
// General information only, not legal advice; figures (nil-rate bands,
// deadlines) reflect the rules at the time of writing.
export const practiceAreas = [
  {
    slug: "wills-succession",
    name: "Wills & Succession Planning",
    code: "WS",
    blurb: "Wills that reflect your wishes, protect the people you care about and stand up to scrutiny.",
    longDescription:
      "A will is the foundation of any succession plan. We take time to understand your family, your assets and what matters to you, then prepare a will that deals with second marriages, children from earlier relationships, business interests and overseas property, so the people you leave behind are not left guessing.",
    whyUs: [
      "Plain-English drafting you can read and understand before you sign",
      "Supervised signing so formalities under the Wills Act 1837 are met",
      "Safe storage of your original will and a reminder to review it",
    ],
    services: [
      "Single and mirror wills",
      "Wills with discretionary and life-interest trusts",
      "Business property and farm succession",
      "Wills for clients with overseas assets",
      "Letters of wishes and guardianship appointments",
      "Will reviews after marriage, divorce or a new child",
    ],
    processSteps: [
      { title: "Initial Meeting", body: "We discuss your family, assets and wishes, in person or by video." },
      { title: "Draft Will", body: "We send a draft with a plain-English summary of how it works." },
      { title: "Signing", body: "We supervise signing with two independent witnesses so the will is valid." },
      { title: "Storage & Review", body: "We store the original securely and suggest a review every few years." },
    ],
    faqs: [
      {
        q: "What happens if I die without a will?",
        a: "Your estate passes under the intestacy rules, which follow a fixed order of relatives. Unmarried partners and stepchildren receive nothing under those rules, which is a common reason to make a will.",
      },
      {
        q: "Does getting married affect my will?",
        a: "In England and Wales, marriage or civil partnership normally revokes an existing will unless it was made in contemplation of that marriage. It is worth reviewing your will before the wedding.",
      },
      {
        q: "Can I leave someone out of my will?",
        a: "You can, but some family members and dependants may be able to bring a claim under the Inheritance (Provision for Family and Dependants) Act 1975. We can help you record your reasons to reduce that risk.",
      },
    ],
  },
  {
    slug: "probate-estates",
    name: "Probate & Estate Administration",
    code: "PR",
    blurb: "Calm, organised support for executors and families after a death.",
    longDescription:
      "Administering an estate means valuing assets, dealing with HMRC, applying for the grant and distributing to beneficiaries, often while grieving. We can handle the whole process or support executors with the parts they would rather not take on, and we keep everyone informed through the client portal.",
    whyUs: [
      "Fixed-fee options for straightforward estates",
      "One named solicitor from the first call to final accounts",
      "Progress, documents and estate accounts visible in the client portal",
    ],
    services: [
      "Applying for a grant of probate or letters of administration",
      "Inheritance tax returns and reliefs",
      "Valuing and selling estate property",
      "Estate accounts and distribution to beneficiaries",
      "Estates with overseas assets",
      "Deeds of variation",
    ],
    processSteps: [
      { title: "First Steps", body: "We explain the executors' role, secure assets and notify banks and other institutions." },
      { title: "Valuation & Tax", body: "We value the estate and prepare any inheritance tax account for HMRC." },
      { title: "The Grant", body: "We apply to the Probate Registry for the grant of representation." },
      { title: "Distribution", body: "We collect assets, pay debts and distribute the estate with full accounts." },
    ],
    faqs: [
      {
        q: "How long does probate take?",
        a: "A straightforward estate often takes nine to twelve months from start to finish. Estates with property to sell, inheritance tax to pay or overseas assets usually take longer.",
      },
      {
        q: "Is probate always needed?",
        a: "Not always. Small estates or assets held jointly may pass without a grant. It depends on the institutions holding the assets and whether land is involved.",
      },
      {
        q: "Are executors personally liable?",
        a: "Executors can be personally liable if they distribute too early or overlook debts or tax. Taking advice early is the best protection.",
      },
    ],
  },
  {
    slug: "trusts",
    name: "Trusts & Trustee Services",
    code: "TR",
    blurb: "Setting up and running trusts that protect family wealth for the long term.",
    longDescription:
      "Trusts can protect assets for children, vulnerable beneficiaries or future generations, and can play a part in tax planning. We advise on which type of trust fits your aims, prepare the trust deed, and support trustees with their ongoing duties, from registration to periodic charges.",
    whyUs: [
      "Clear advice on whether a trust is needed at all",
      "Ongoing support for trustees, not just drafting the deed",
      "Registration with HMRC's Trust Registration Service handled for you",
    ],
    services: [
      "Discretionary trusts",
      "Life-interest trusts",
      "Trusts for vulnerable beneficiaries",
      "Trust Registration Service compliance",
      "Retirement and appointment of trustees",
      "Winding up trusts",
    ],
    processSteps: [
      { title: "Objectives", body: "We discuss who the trust is for and what it should achieve." },
      { title: "Structure", body: "We recommend the trust type and explain the tax treatment." },
      { title: "Documentation", body: "We prepare the trust deed and a letter of wishes for the trustees." },
      { title: "Administration", body: "We support trustees with registration, records and tax filings." },
    ],
    faqs: [
      {
        q: "Do all trusts need to be registered?",
        a: "Most express trusts must be registered on HMRC's Trust Registration Service, even if they pay no tax. Some limited exemptions apply.",
      },
      {
        q: "Can I be a trustee and a beneficiary?",
        a: "Yes, in many cases. It is usually sensible to have at least one other trustee who is not a beneficiary.",
      },
      {
        q: "Will a trust avoid inheritance tax?",
        a: "Not automatically. Some trusts have their own tax charges. We explain the tax position before you decide.",
      },
    ],
  },
  {
    slug: "inheritance-tax",
    name: "Inheritance Tax Planning",
    code: "IT",
    blurb: "Lawful planning that reduces the inheritance tax your family will face.",
    longDescription:
      "Inheritance tax is charged at 40% on estates above the available nil-rate bands. With planning, many families can reduce that bill through lifetime gifts, use of reliefs and careful will drafting. We work alongside your accountant or financial adviser where needed.",
    whyUs: [
      "Planning built around your income needs, not just tax savings",
      "Coordinated advice with your accountant and financial adviser",
      "Regular reviews as rules and family circumstances change",
    ],
    services: [
      "Estate valuations and IHT forecasts",
      "Use of the nil-rate and residence nil-rate bands",
      "Lifetime gifting strategies",
      "Business and agricultural property relief",
      "Gifts to charity",
      "Pension and life-policy planning with advisers",
    ],
    processSteps: [
      { title: "Estate Review", body: "We estimate your current inheritance tax exposure." },
      { title: "Options", body: "We set out the planning options with their benefits and risks." },
      { title: "Implementation", body: "We put the agreed plan in place, including wills and trusts." },
      { title: "Review", body: "We revisit the plan as your circumstances and the rules change." },
    ],
    faqs: [
      {
        q: "How much can I leave before inheritance tax applies?",
        a: "Each person has a nil-rate band of £325,000, and a residence nil-rate band of up to £175,000 may apply when a home passes to direct descendants. Unused allowances can often pass to a surviving spouse.",
      },
      {
        q: "What is the seven-year rule?",
        a: "Most lifetime gifts fall outside your estate if you survive seven years after making them. Gifts made within seven years may be taxed, with tapering in some cases.",
      },
      {
        q: "Can I give my home to my children?",
        a: "You can, but if you keep living there without paying a market rent the gift may still be taxed as part of your estate. Take advice before transferring property.",
      },
    ],
  },
  {
    slug: "lasting-powers-of-attorney",
    name: "Lasting Powers of Attorney",
    code: "LP",
    blurb: "Choose who makes decisions for you if you cannot make them yourself.",
    longDescription:
      "A lasting power of attorney lets you choose trusted people to handle your finances or make health and care decisions if you lose mental capacity. Without one, your family may need to apply to the Court of Protection, which is slower and more expensive. We prepare LPAs, act as certificate provider and register them for you.",
    whyUs: [
      "Advice on choosing attorneys and setting sensible instructions",
      "Independent certificate provider to protect against pressure",
      "Registration with the Office of the Public Guardian handled for you",
    ],
    services: [
      "Property and financial affairs LPAs",
      "Health and welfare LPAs",
      "Business LPAs for company owners",
      "Advice to attorneys on their duties",
      "Registering existing enduring powers of attorney",
      "Revoking or replacing an LPA",
    ],
    processSteps: [
      { title: "Planning Meeting", body: "We discuss who to appoint and how they should act." },
      { title: "Preparation", body: "We prepare the LPA forms and any preferences or instructions." },
      { title: "Signing", body: "We guide you, your attorneys and witnesses through signing in the right order." },
      { title: "Registration", body: "We register the LPA with the Office of the Public Guardian." },
    ],
    faqs: [
      {
        q: "When should I make an LPA?",
        a: "While you have mental capacity. An LPA cannot be made once capacity is lost, so it is best done as part of routine planning.",
      },
      {
        q: "Can my attorneys act straight away?",
        a: "A property and financial affairs LPA can be used once registered, with your permission, even while you have capacity. A health and welfare LPA can only be used when you lack capacity.",
      },
      {
        q: "How long does registration take?",
        a: "Registration with the Office of the Public Guardian usually takes several weeks, so it is wise not to leave it until it is urgently needed.",
      },
    ],
  },
  {
    slug: "court-of-protection",
    name: "Court of Protection & Deputyships",
    code: "CP",
    blurb: "Support for families when a loved one can no longer manage their affairs.",
    longDescription:
      "When someone has lost capacity without an LPA in place, a deputy may need to be appointed by the Court of Protection to manage their finances or welfare. We prepare deputyship applications, advise deputies on their duties, and handle related applications such as statutory wills and gifts.",
    whyUs: [
      "Applications prepared carefully to avoid delays at court",
      "Practical support for lay deputies, including annual reports",
      "Sensitive handling of family disagreements",
    ],
    services: [
      "Property and affairs deputyship applications",
      "Health and welfare deputyship applications",
      "Statutory will applications",
      "Applications to approve gifts",
      "Deputy annual reports and supervision",
      "Objections to applications",
    ],
    processSteps: [
      { title: "Assessment", body: "We review capacity evidence and confirm a deputyship is needed." },
      { title: "Application", body: "We prepare and file the application and notify relevant people." },
      { title: "Court Order", body: "We deal with any queries until the court makes its order." },
      { title: "Ongoing Support", body: "We help the deputy with bonds, records and annual reporting." },
    ],
    faqs: [
      {
        q: "What is a deputy?",
        a: "A deputy is someone appointed by the Court of Protection to make decisions for a person who lacks capacity and has no valid LPA covering those decisions.",
      },
      {
        q: "How long does a deputyship application take?",
        a: "Timescales vary with the court's workload, but several months is common. Urgent applications can be made where there is an immediate need.",
      },
      {
        q: "Is a deputy supervised?",
        a: "Yes. Deputies are supervised by the Office of the Public Guardian and usually file an annual report.",
      },
    ],
  },
  {
    slug: "contentious-probate",
    name: "Contentious Probate & Trust Disputes",
    code: "CT",
    blurb: "Resolving disputes over wills, estates and trusts, wherever possible without court.",
    longDescription:
      "Disputes over a will or estate can divide families. We act for beneficiaries, executors and those who feel they have been left out, looking first for a negotiated or mediated settlement and preparing properly for court where that is not possible.",
    whyUs: [
      "Early, honest assessment of the strength of a claim",
      "Mediation-first approach that keeps costs and conflict down",
      "Close attention to strict deadlines, including the six-month time limit for Inheritance Act claims",
    ],
    services: [
      "Challenges to the validity of a will",
      "Inheritance Act 1975 claims",
      "Disputes between executors or trustees",
      "Removal of executors and trustees",
      "Caveats and warnings",
      "Mediation and settlement",
    ],
    processSteps: [
      { title: "Case Review", body: "We review the will, the estate and the evidence available." },
      { title: "Preserve Position", body: "We take urgent steps such as entering a caveat where appropriate." },
      { title: "Negotiation", body: "We pursue settlement through correspondence or mediation." },
      { title: "Proceedings", body: "If settlement fails, we prepare and run the case at court." },
    ],
    faqs: [
      {
        q: "On what grounds can a will be challenged?",
        a: "Common grounds include lack of mental capacity, undue influence, lack of knowledge and approval, invalid signing, and fraud.",
      },
      {
        q: "Is there a time limit?",
        a: "Claims under the Inheritance Act 1975 must normally be issued within six months of the grant of representation. Other claims have different limits, so take advice promptly.",
      },
      {
        q: "Will I have to go to court?",
        a: "Most disputes settle before trial, often at mediation. Preparing thoroughly for court is usually what produces a good settlement.",
      },
    ],
  },
] as const;

export type PracticeAreaSlug = (typeof practiceAreas)[number]["slug"];
