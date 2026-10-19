// General, firm-wide FAQ shown on the home page. Practice-area-specific
// FAQs live alongside each area in practice-areas.ts.
export const generalFaqs = [
  {
    id: "areas-served",
    question: "Where is the firm based?",
    answer: "In London, advising clients across England and Wales.",
  },
  {
    id: "consultation",
    question: "How do I get started?",
    answer:
      "Send an enquiry through the contact form. A member of the team will review it and, if we can help, open your matter and set up your client portal access.",
  },
  {
    id: "billing",
    question: "How do fees work?",
    answer:
      "Fixed fees for wills and lasting powers of attorney, and hourly or fixed fees for probate, agreed in writing at the outset.",
  },
  {
    id: "portal",
    question: "What is the client portal?",
    answer:
      "The portal shows each client their matter's progress, shared documents and a message thread with their solicitor.",
  },
  {
    id: "timeline",
    question: "How long do matters take?",
    answer:
      "A will can be ready within a few weeks; a straightforward probate often takes nine to twelve months. Each practice area page explains typical timescales.",
  },
  {
    id: "first-meeting",
    question: "What should I bring to a first meeting?",
    answer:
      "For a will, a summary of your assets and family. For probate, the death certificate, the will and any recent statements. Photo ID is always needed.",
  },
  {
    id: "virtual-consultations",
    question: "Are meetings available by video?",
    answer:
      "Yes. Meetings can be in person or by video, with signing arranged in person where the law requires it.",
  },
] as const;
