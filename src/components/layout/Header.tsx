"use client"

import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react"
import { LuPhone } from "react-icons/lu"

export function Header() {
  return (
    <Box
      bg="white"
      borderBottomWidth="1px"
      borderColor="gray.200"
      px="4"
      py="3"
    >
      <Flex maxW="3xl" mx="auto" justify="space-between" align="center">
        <Flex align="center" gap="3">
          <Flex
            w="9"
            h="9"
            bg="orange.500"
            borderRadius="lg"
            align="center"
            justify="center"
            color="white"
            fontWeight="bold"
            fontSize="lg"
          >
            P
          </Flex>
          <Box>
            <Heading size="md" fontWeight="bold" color="gray.900">
              PurposeMed
            </Heading>
            <Text fontSize="xs" color="gray.500">
              Patient Support
            </Text>
          </Box>
        </Flex>
        <Button
          asChild
          size="sm"
          bg="orange.500"
          color="white"
          borderRadius="lg"
          _hover={{ bg: "orange.600" }}
        >
          <a href="https://purposemed.com/book" target="_blank" rel="noopener noreferrer">
            <LuPhone />
            Talk to a Provider
          </a>
        </Button>
      </Flex>
    </Box>
  )
}
