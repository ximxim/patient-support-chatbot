"use client"

import { Box, Text } from "@chakra-ui/react"
import { ProviderCard } from "@/components/ui/ProviderCard"
import { RefillCard } from "@/components/ui/RefillCard"
import type { UIMessage } from "ai"

interface MessageBubbleProps {
  role: string
  content?: string
  parts?: UIMessage["parts"]
}

function getToolName(type: string): string {
  return type.startsWith("tool-") ? type.slice(5) : type
}

export function MessageBubble({ role, content, parts }: MessageBubbleProps) {
  const isUser = role === "user"

  return (
    <Box alignSelf={isUser ? "flex-end" : "flex-start"} maxW="85%">
      <Box
        bg={isUser ? "orange.500" : "white"}
        color={isUser ? "white" : "gray.800"}
        px="4"
        py="3"
        borderRadius="2xl"
        borderBottomRightRadius={isUser ? "sm" : "2xl"}
        borderBottomLeftRadius={isUser ? "2xl" : "sm"}
        boxShadow="sm"
      >
        {content && (
          <Text fontSize="sm" whiteSpace="pre-wrap">
            {content}
          </Text>
        )}

        {parts?.map((part, index) => {
          if (part.type === "text") {
            return part.text ? (
              <Text key={index} fontSize="sm" whiteSpace="pre-wrap">
                {part.text}
              </Text>
            ) : null
          }

          // Handle tool invocation parts (type starts with "tool-")
          if (part.type.startsWith("tool-")) {
            const toolName = getToolName(part.type)
            const state = "state" in part ? part.state : undefined
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const output = "output" in part ? (part as any).output : undefined

            if (state !== "output-available") {
              const loadingMessages: Record<string, string> = {
                searchFAQ: "Searching knowledge base...",
                routeToProvider: "Connecting you with a provider...",
                handleRxRefill: "Looking up refill information...",
              }
              return (
                <Text
                  key={index}
                  fontSize="sm"
                  color="gray.400"
                  fontStyle="italic"
                >
                  {loadingMessages[toolName] ?? "Processing..."}
                </Text>
              )
            }

            if (toolName === "routeToProvider" && output) {
              return <ProviderCard key={index} data={output} />
            }

            if (toolName === "handleRxRefill" && output) {
              return <RefillCard key={index} data={output} />
            }

            // searchFAQ results are consumed by the model to produce text
            return null
          }

          return null
        })}
      </Box>
      <Text
        fontSize="2xs"
        color="gray.400"
        mt="1"
        px="2"
        textAlign={isUser ? "right" : "left"}
      >
        {new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Text>
    </Box>
  )
}
