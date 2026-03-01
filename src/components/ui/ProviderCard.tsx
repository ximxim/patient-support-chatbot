"use client"

import { Box, VStack, HStack, Text, Button, Card } from "@chakra-ui/react"
import { LuCalendar, LuPhone, LuMessageSquare } from "react-icons/lu"
import type { ComponentType } from "react"

const METHOD_ICONS: Record<string, ComponentType<{ size?: number }>> = {
  "Book Online": LuCalendar,
  Phone: LuPhone,
  "Secure Message": LuMessageSquare,
}

interface ProviderCardProps {
  data: {
    message: string
    urgency: string
    contacts: Array<{
      method: string
      detail: string
      availability: string
    }>
  }
}

export function ProviderCard({ data }: ProviderCardProps) {
  return (
    <Card.Root
      mt="3"
      bg="blue.50"
      borderColor="blue.200"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
    >
      <Card.Body p="4">
        <VStack align="stretch" gap="3">
          <Text fontSize="sm" fontWeight="medium" color="gray.800">
            {data.message}
          </Text>
          {data.contacts.map((contact) => {
            const IconComp = METHOD_ICONS[contact.method] ?? LuPhone
            return (
              <HStack key={contact.method} justify="space-between">
                <HStack gap="2">
                  <IconComp size={16} />
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" color="gray.800">
                      {contact.method}
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      {contact.availability}
                    </Text>
                  </Box>
                </HStack>
                <Button
                  size="xs"
                  variant="outline"
                  borderColor="blue.300"
                  color="blue.700"
                  borderRadius="md"
                  _hover={{ bg: "blue.100" }}
                >
                  {contact.method === "Book Online" ? "Book Now" : "Contact"}
                </Button>
              </HStack>
            )
          })}
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}
