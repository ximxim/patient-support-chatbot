"use client"

import { Box, HStack } from "@chakra-ui/react"

export function TypingIndicator() {
  return (
    <Box alignSelf="flex-start" maxW="80%">
      <Box
        bg="white"
        px="4"
        py="3"
        borderRadius="2xl"
        borderBottomLeftRadius="sm"
        boxShadow="sm"
      >
        <HStack gap="1.5">
          {[0, 1, 2].map((i) => (
            <Box
              key={i}
              w="2"
              h="2"
              borderRadius="full"
              bg="gray.400"
              animation="pulse 1.4s infinite ease-in-out both"
              style={{ animationDelay: `${i * 0.16}s` }}
            />
          ))}
        </HStack>
      </Box>
    </Box>
  )
}
