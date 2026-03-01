"use client"

import { Box, VStack, HStack, Text, Card } from "@chakra-ui/react"
import { LuPill, LuClock, LuCircleAlert } from "react-icons/lu"

interface RefillCardProps {
  data: {
    medication: string
    process: string[]
    timeline: string
    reminder: string
    contactIfUrgent: string
  }
}

export function RefillCard({ data }: RefillCardProps) {
  return (
    <Card.Root
      mt="3"
      bg="green.50"
      borderColor="green.200"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
    >
      <Card.Body p="4">
        <VStack align="stretch" gap="3">
          <HStack gap="2">
            <LuPill size={16} />
            <Text fontSize="sm" fontWeight="semibold" color="gray.800">
              Refill: {data.medication}
            </Text>
          </HStack>

          <VStack align="stretch" gap="1.5" pl="2">
            {data.process.map((step, index) => (
              <HStack key={index} gap="2" align="flex-start">
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  color="green.600"
                  minW="4"
                >
                  {index + 1}.
                </Text>
                <Text fontSize="sm" color="gray.700">
                  {step}
                </Text>
              </HStack>
            ))}
          </VStack>

          <HStack gap="2" pt="1">
            <LuClock size={14} />
            <Text fontSize="xs" color="gray.600">
              {data.timeline}
            </Text>
          </HStack>

          <Box
            bg="yellow.50"
            borderRadius="md"
            p="2.5"
            borderWidth="1px"
            borderColor="yellow.200"
          >
            <HStack gap="2" align="flex-start">
              <Box pt="0.5">
                <LuCircleAlert size={14} />
              </Box>
              <Text fontSize="xs" color="gray.700">
                {data.reminder}
              </Text>
            </HStack>
          </Box>

          <Text fontSize="xs" color="gray.500" fontStyle="italic">
            {data.contactIfUrgent}
          </Text>
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}
