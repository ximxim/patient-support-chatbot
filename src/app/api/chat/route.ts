import { anthropic } from "@ai-sdk/anthropic"
import {
  convertToModelMessages,
  streamText,
  stepCountIs,
  type UIMessage,
} from "ai"
import { chatTools } from "@/lib/tools"
import { getSystemPrompt } from "@/lib/system-prompt"
import type { ServiceType } from "@/lib/types"

export const maxDuration = 30

export async function POST(req: Request) {
  const {
    messages,
    activeService,
  }: {
    messages: UIMessage[]
    activeService?: ServiceType
  } = await req.json()

  const result = streamText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: getSystemPrompt(activeService),
    messages: await convertToModelMessages(messages),
    tools: chatTools,
    stopWhen: stepCountIs(3),
  })

  return result.toUIMessageStreamResponse()
}
