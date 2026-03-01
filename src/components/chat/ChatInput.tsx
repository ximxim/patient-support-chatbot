"use client"

import { Box, Flex, IconButton, Textarea } from "@chakra-ui/react"
import { LuSend } from "react-icons/lu"

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSend: (text: string) => void
  isLoading: boolean
}

export function ChatInput({
  value,
  onChange,
  onSend,
  isLoading,
}: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (value.trim()) {
        onSend(value)
      }
    }
  }

  return (
    <Box bg="white" borderRadius="xl" boxShadow="md" p="2" flexShrink={0}>
      <Flex gap="2" align="flex-end">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your question..."
          resize="none"
          rows={1}
          border="none"
          outline="none"
          fontSize="sm"
          _focus={{ outline: "none", boxShadow: "none", border: "none" }}
          disabled={isLoading}
        />
        <IconButton
          aria-label="Send message"
          onClick={() => {
            if (value.trim()) {
              onSend(value)
            }
          }}
          disabled={isLoading || !value.trim()}
          bg="orange.500"
          color="white"
          borderRadius="full"
          size="sm"
          _hover={{ bg: "orange.600" }}
          _disabled={{ opacity: 0.5, cursor: "not-allowed" }}
        >
          <LuSend />
        </IconButton>
      </Flex>
    </Box>
  )
}
