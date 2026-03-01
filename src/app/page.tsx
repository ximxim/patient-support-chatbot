"use client"

import { useState, useCallback, useMemo } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Container, Flex } from "@chakra-ui/react"
import { Header } from "@/components/layout/Header"
import { ServiceSelector } from "@/components/layout/ServiceSelector"
import { TrustBadges } from "@/components/layout/TrustBadges"
import { ChatContainer } from "@/components/chat/ChatContainer"
import type { ServiceType } from "@/lib/types"

export default function Home() {
  const [activeService, setActiveService] = useState<ServiceType>("prep")
  const [inputValue, setInputValue] = useState("")

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        body: { activeService },
      }),
    [activeService],
  )

  const { messages, sendMessage, status } = useChat({ transport })

  const isLoading = status === "streaming" || status === "submitted"

  const handleSend = useCallback(
    (text: string) => {
      if (!text.trim()) return
      sendMessage({ text })
      setInputValue("")
    },
    [sendMessage],
  )

  return (
    <Flex direction="column" h="100dvh" bg="gray.50">
      <Header />
      <ServiceSelector
        activeService={activeService}
        onServiceChange={setActiveService}
      />
      <Container
        maxW="3xl"
        flex="1"
        display="flex"
        flexDirection="column"
        overflow="hidden"
        py="4"
        px="4"
      >
        <ChatContainer
          messages={messages}
          isLoading={isLoading}
          inputValue={inputValue}
          onInputChange={setInputValue}
          onSend={handleSend}
          activeService={activeService}
        />
      </Container>
      <TrustBadges />
    </Flex>
  )
}
