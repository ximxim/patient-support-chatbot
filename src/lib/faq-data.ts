import type { FAQEntry } from "./types"

export const FAQ_DATA: readonly FAQEntry[] = [
  // ── PrEP ──────────────────────────────────────────────
  {
    id: "prep-001",
    service: "prep",
    category: "Getting Started",
    question: "How do I start PrEP with PurposeMed?",
    answer:
      "Starting PrEP with PurposeMed is simple and confidential. You'll complete a brief online assessment, have a virtual consultation with a licensed healthcare provider, get lab work ordered, and receive your prescription. The entire process can often be completed within a few days from the comfort of your home.",
    keywords: ["start", "begin", "get", "how", "process", "steps", "sign up", "enroll"],
  },
  {
    id: "prep-002",
    service: "prep",
    category: "Eligibility",
    question: "Who is eligible for PrEP?",
    answer:
      "PrEP is for anyone who may be at risk for HIV. There is no judgment here — wanting to protect your health is a positive step. During your consultation, your provider will discuss your individual situation confidentially and help determine if PrEP is right for you. You'll need to test HIV-negative before starting.",
    keywords: ["eligible", "qualify", "who", "can I", "criteria", "candidate", "requirements"],
  },
  {
    id: "prep-003",
    service: "prep",
    category: "Side Effects",
    question: "What are the common side effects of PrEP?",
    answer:
      "PrEP is very well-tolerated by most people. Some may experience mild side effects in the first few weeks, such as nausea, headache, or fatigue. These usually go away on their own. Serious side effects are rare. Your provider will monitor your health with regular check-ups and lab work to ensure everything is going well.",
    keywords: ["side effects", "effects", "nausea", "headache", "safe", "safety", "risks"],
  },
  {
    id: "prep-004",
    service: "prep",
    category: "Cost & Coverage",
    question: "Is PrEP covered by insurance in Canada?",
    answer:
      "PrEP coverage varies by province. Many provincial health plans cover PrEP, and most private insurance plans do as well. PurposeMed's team can help you navigate your coverage options during your consultation. We want to make sure cost isn't a barrier to protecting your health.",
    keywords: ["cost", "price", "insurance", "covered", "pay", "afford", "free", "coverage", "provincial"],
  },
  {
    id: "prep-005",
    service: "prep",
    category: "Effectiveness",
    question: "How effective is PrEP at preventing HIV?",
    answer:
      "When taken as prescribed, PrEP is up to 99% effective at preventing HIV from sexual contact. Consistency is key — taking your medication daily gives you the best protection. Your provider will help you find a routine that works for your lifestyle.",
    keywords: ["effective", "work", "prevent", "protection", "efficacy", "percentage", "99"],
  },
  {
    id: "prep-006",
    service: "prep",
    category: "Getting Started",
    question: "Do I need regular testing while on PrEP?",
    answer:
      "Yes, regular check-ups are an important part of PrEP care. You'll typically have follow-up appointments every 3 months, which include HIV testing, kidney function monitoring, and STI screening. PurposeMed makes this easy with virtual follow-ups and convenient lab work.",
    keywords: ["testing", "test", "check-up", "follow-up", "monitoring", "regular", "appointment", "labs"],
  },

  // ── ADHD ──────────────────────────────────────────────
  {
    id: "adhd-001",
    service: "adhd",
    category: "Assessment Process",
    question: "How does the ADHD assessment work with PurposeMed?",
    answer:
      "Our ADHD assessment is thorough yet convenient. You'll start with a validated screening questionnaire, followed by a comprehensive virtual consultation with a licensed healthcare provider experienced in ADHD. They'll review your history, symptoms, and daily challenges to provide an accurate assessment. Many people feel relieved to finally have answers.",
    keywords: ["assessment", "diagnose", "diagnosis", "evaluate", "evaluation", "how", "process", "test"],
  },
  {
    id: "adhd-002",
    service: "adhd",
    category: "Medication",
    question: "Can I get ADHD medication through PurposeMed?",
    answer:
      "Yes, if your provider determines that medication is appropriate for you, they can prescribe it during your consultation. We offer both stimulant and non-stimulant options depending on your needs. Your provider will work with you to find the right fit, and regular follow-ups ensure your treatment plan is working well.",
    keywords: ["medication", "medicine", "prescribe", "prescription", "stimulant", "get", "obtain"],
  },
  {
    id: "adhd-003",
    service: "adhd",
    category: "Telehealth",
    question: "Can adults be assessed for ADHD online?",
    answer:
      "Absolutely. ADHD doesn't just affect children — many adults discover they have ADHD later in life, and that's completely normal. Our virtual assessments are designed for adults and are just as thorough as in-person evaluations. You deserve support regardless of when you seek it.",
    keywords: ["adult", "online", "virtual", "telehealth", "age", "older", "grown", "late diagnosis"],
  },
  {
    id: "adhd-004",
    service: "adhd",
    category: "Follow-up",
    question: "What happens after my ADHD diagnosis?",
    answer:
      "After your assessment, your provider will discuss a personalized care plan with you. This may include medication, strategies for managing daily life, and regular follow-up appointments. You'll have ongoing support to adjust your treatment as needed. Living well with ADHD is absolutely possible with the right support.",
    keywords: ["after", "diagnosis", "next", "treatment", "plan", "follow-up", "support", "care"],
  },
  {
    id: "adhd-005",
    service: "adhd",
    category: "Cost & Coverage",
    question: "How much does an ADHD assessment cost?",
    answer:
      "Assessment costs vary depending on your province and insurance coverage. Many private insurance plans cover virtual ADHD assessments. PurposeMed's team can provide you with pricing details and help you check your coverage before your appointment so there are no surprises.",
    keywords: ["cost", "price", "much", "pay", "insurance", "covered", "afford", "fee"],
  },
  {
    id: "adhd-006",
    service: "adhd",
    category: "Assessment Process",
    question: "Is my ADHD diagnosis confidential?",
    answer:
      "Absolutely. Your diagnosis and all medical information are completely confidential, protected by Canadian privacy laws (PHIPA/PIPEDA). Your employer, school, or anyone else will not be notified. You choose who to share your health information with.",
    keywords: ["confidential", "private", "privacy", "secret", "employer", "know", "share", "work"],
  },

  // ── HRT ───────────────────────────────────────────────
  {
    id: "hrt-001",
    service: "hrt",
    category: "Getting Started",
    question: "How do I start HRT with PurposeMed?",
    answer:
      "Getting started with HRT at PurposeMed begins with a virtual consultation with a knowledgeable, affirming healthcare provider. They'll discuss your goals, review your health history, and create a personalized treatment plan. We provide a safe, judgment-free space where you can ask any questions and feel supported throughout your journey.",
    keywords: ["start", "begin", "get", "how", "process", "steps", "initiate"],
  },
  {
    id: "hrt-002",
    service: "hrt",
    category: "Types of HRT",
    question: "What types of HRT are available?",
    answer:
      "There are several types of hormone therapy available, including estrogen, testosterone, and anti-androgens, delivered through various methods like pills, patches, injections, and gels. Your provider will help you understand the options and choose what's right for your goals and health profile.",
    keywords: ["types", "options", "estrogen", "testosterone", "patch", "injection", "pills", "gel", "forms"],
  },
  {
    id: "hrt-003",
    service: "hrt",
    category: "Monitoring",
    question: "What monitoring is needed during HRT?",
    answer:
      "Regular monitoring is an important part of safe HRT care. You'll have periodic blood work to check hormone levels and overall health markers, along with virtual check-ins with your provider. This helps ensure your treatment is effective and allows adjustments to be made as needed.",
    keywords: ["monitoring", "blood work", "test", "check", "labs", "follow-up", "regular", "safety"],
  },
  {
    id: "hrt-004",
    service: "hrt",
    category: "Eligibility",
    question: "Do I need a referral to start HRT?",
    answer:
      "No referral is needed to access HRT through PurposeMed. You can book a consultation directly with one of our providers. We follow informed consent principles, meaning you'll receive thorough information about your options and work collaboratively with your provider to make decisions about your care.",
    keywords: ["referral", "need", "doctor", "GP", "refer", "direct", "access", "informed consent"],
  },
  {
    id: "hrt-005",
    service: "hrt",
    category: "Cost & Coverage",
    question: "Is HRT covered by insurance?",
    answer:
      "HRT medication coverage varies by province and insurance plan. Many private insurance plans cover hormone therapy. PurposeMed can help you navigate your coverage options and explore alternative programs if needed. We believe everyone deserves access to affirming healthcare.",
    keywords: ["cost", "price", "insurance", "covered", "pay", "afford", "coverage", "free"],
  },
  {
    id: "hrt-006",
    service: "hrt",
    category: "Getting Started",
    question: "Is PurposeMed's HRT care gender-affirming?",
    answer:
      "Yes, absolutely. PurposeMed is committed to providing affirming, respectful care for all gender identities. Our providers are experienced in gender-affirming hormone therapy and create a safe space for you to discuss your needs and goals. You'll be treated with dignity and respect at every step.",
    keywords: ["affirming", "gender", "trans", "transgender", "nonbinary", "inclusive", "lgbtq", "safe"],
  },
] as const
