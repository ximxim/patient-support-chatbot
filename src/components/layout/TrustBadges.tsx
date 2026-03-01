"use client"

import { Flex, HStack, Text } from "@chakra-ui/react"
import { LuShield, LuLock, LuInfo } from "react-icons/lu"

const BADGES = [
  { icon: LuShield, label: "PHIPA Compliant" },
  { icon: LuLock, label: "Confidential" },
  { icon: LuInfo, label: "Not Medical Advice" },
] as const

export function TrustBadges() {
  return (
    <Flex
      bg="white"
      borderTopWidth="1px"
      borderColor="gray.200"
      py="2.5"
      px="4"
      justify="center"
      flexShrink={0}
    >
      <HStack gap="6">
        {BADGES.map((badge) => (
          <HStack key={badge.label} gap="1.5">
            <badge.icon size={14} color="#3B7BDB" />
            <Text fontSize="xs" color="gray.500">
              {badge.label}
            </Text>
          </HStack>
        ))}
      </HStack>
    </Flex>
  )
}
