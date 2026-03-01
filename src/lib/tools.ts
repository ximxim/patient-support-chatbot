import { tool } from "ai"
import { z } from "zod"
import { FAQ_DATA } from "./faq-data"
import type { FAQEntry } from "./types"

export const searchFAQ = tool({
  description:
    "Search the PurposeMed FAQ knowledge base for answers to patient questions about services, processes, eligibility, costs, or general information about PrEP, ADHD treatment, or HRT. Always use this tool first for informational questions.",
  inputSchema: z.object({
    query: z.string().describe("The patient's question or search terms"),
    service: z
      .enum(["prep", "adhd", "hrt"])
      .optional()
      .describe("Optional service filter to narrow results"),
  }),
  execute: async ({ query, service }) => {
    const queryLower = query.toLowerCase()
    const queryWords = queryLower.split(/\s+/).filter((w) => w.length > 2)

    let results = [...FAQ_DATA] as FAQEntry[]

    if (service) {
      results = results.filter((faq) => faq.service === service)
    }

    const scored = results.map((faq) => {
      let score = 0
      for (const word of queryWords) {
        if (faq.keywords.some((kw) => kw.includes(word) || word.includes(kw))) {
          score += 2
        }
        if (faq.question.toLowerCase().includes(word)) {
          score += 1
        }
        if (faq.answer.toLowerCase().includes(word)) {
          score += 0.5
        }
      }
      return { faq, score }
    })

    const topMatches = scored
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((item) => ({
        id: item.faq.id,
        service: item.faq.service,
        category: item.faq.category,
        question: item.faq.question,
        answer: item.faq.answer,
      }))

    if (topMatches.length === 0) {
      return {
        found: false,
        message:
          "No matching FAQ found. This might be a question better suited for a healthcare provider.",
        suggestion: "Consider using routeToProvider for this question.",
      }
    }

    return {
      found: true,
      results: topMatches,
    }
  },
})

export const routeToProvider = tool({
  description:
    "Route the patient to a healthcare provider when their question is clinical, medical, or beyond FAQ scope. Use for questions about symptoms, diagnoses, medication changes, side effects, drug interactions, or personalized medical advice.",
  inputSchema: z.object({
    reason: z
      .string()
      .describe("Brief description of why provider attention is needed"),
    urgency: z
      .enum(["routine", "soon", "urgent"])
      .describe("How urgently the patient should see a provider"),
  }),
  execute: async ({ reason, urgency }) => {
    return {
      action: "route_to_provider",
      reason,
      urgency,
      contacts: [
        {
          method: "Book Online",
          detail: "https://purposemed.com/book",
          availability: "Next available appointment",
        },
        {
          method: "Phone",
          detail: "1-888-PURPOSE",
          availability: "Mon–Fri 9am–5pm ET",
        },
        {
          method: "Secure Message",
          detail: "Log in to your PurposeMed account",
          availability: "Response within 24 hours",
        },
      ],
      message:
        urgency === "urgent"
          ? "This sounds like something that needs prompt attention. Please reach out to a provider as soon as possible."
          : "A healthcare provider would be the best person to help with this. Here's how to reach our team:",
    }
  },
})

export const handleRxRefill = tool({
  description:
    "Handle prescription refill or renewal requests. Use when a patient asks about getting a medication refill, running out of medication, or renewing their prescription.",
  inputSchema: z.object({
    medication: z
      .string()
      .optional()
      .describe("The medication name if mentioned"),
    service: z
      .enum(["prep", "adhd", "hrt"])
      .optional()
      .describe("The service area related to the refill"),
  }),
  execute: async ({ medication }) => {
    return {
      action: "rx_refill",
      medication: medication ?? "your medication",
      process: [
        "Log in to your PurposeMed patient portal",
        "Navigate to 'My Prescriptions'",
        "Click 'Request Refill' next to your medication",
        "Your provider will review and approve within 1–2 business days",
        "Your pharmacy will be notified once approved",
      ],
      timeline: "Typically processed within 1–2 business days",
      reminder:
        "Please request refills at least 7 days before running out to ensure continuity of care.",
      contactIfUrgent:
        "If you've already run out, call 1-888-PURPOSE for expedited processing.",
    }
  },
})

export const chatTools = {
  searchFAQ,
  routeToProvider,
  handleRxRefill,
} as const
