"use client"

import { useRef, useEffect } from "react"
import { Box, Flex, VStack, Text } from "@chakra-ui/react"
import { MessageBubble } from "./MessageBubble"
import { ChatInput } from "./ChatInput"
import { SuggestedQuestions } from "./SuggestedQuestions"
import { TypingIndicator } from "./TypingIndicator"
import type { ServiceType } from "@/lib/types"
import type { UIMessage } from "ai"

interface ChatContainerProps {
  messages: UIMessage[]
  isLoading: boolean
  inputValue: string
  onInputChange: (value: string) => void
  onSend: (text: string) => void
  activeService: ServiceType
}

export function ChatContainer({
  messages,
  isLoading,
  inputValue,
  onInputChange,
  onSend,
  activeService,
}: ChatContainerProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isLoading])

  const showSuggestions = messages.length === 0

  return (
    <Flex direction="column" flex="1" overflow="hidden" gap="3">
      <Box ref={scrollRef} flex="1" overflowY="auto" px="1">
        <VStack gap="3" align="stretch" py="4">
          {showSuggestions && (
            <Box alignSelf="flex-start" maxW="85%">
              <Box
                bg="white"
                px="4"
                py="3"
                borderRadius="2xl"
                borderBottomLeftRadius="sm"
                boxShadow="sm"
              >
                <Text fontSize="sm" color="gray.800">
                  Welcome to PurposeMed Patient Support! I&apos;m here to help
                  answer your questions about our services. Choose a topic above
                  and ask me anything, or pick one of the suggested questions
                  below.
                </Text>
                <Text fontSize="xs" color="gray.500" mt="2" fontStyle="italic">
                  I can help with general information, but I&apos;m not a
                  substitute for medical advice.
                </Text>
              </Box>
            </Box>
          )}

          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              role={message.role}
              parts={message.parts}
            />
          ))}

          {isLoading && <TypingIndicator />}
        </VStack>
      </Box>

      {showSuggestions && (
        <SuggestedQuestions activeService={activeService} onSelect={onSend} />
      )}

      <ChatInput
        value={inputValue}
        onChange={onInputChange}
        onSend={onSend}
        isLoading={isLoading}
      />
    </Flex>
  )
}
