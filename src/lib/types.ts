export type ServiceType = "prep" | "adhd" | "hrt"

export interface FAQEntry {
  readonly id: string
  readonly service: ServiceType
  readonly category: string
  readonly question: string
  readonly answer: string
  readonly keywords: readonly string[]
}

export interface ProviderContact {
  readonly method: string
  readonly detail: string
  readonly availability: string
}

export interface RefillInfo {
  readonly medication: string
  readonly process: readonly string[]
  readonly timeline: string
  readonly nextSteps: readonly string[]
}

export const SERVICE_LABELS: Record<ServiceType, string> = {
  prep: "PrEP (HIV Prevention)",
  adhd: "ADHD Treatment",
  hrt: "Hormone Replacement Therapy (HRT)",
} as const
