"use client"

import { Flex, Button } from "@chakra-ui/react"
import type { ServiceType } from "@/lib/types"

const SUGGESTIONS: Record<ServiceType, readonly string[]> = {
  prep: [
    "How do I start PrEP?",
    "Is PrEP covered by insurance?",
    "What are common side effects?",
    "How effective is PrEP?",
  ],
  adhd: [
    "How does the ADHD assessment work?",
    "Can I get ADHD medication online?",
    "How much does it cost?",
    "Is my diagnosis confidential?",
  ],
  hrt: [
    "How do I start HRT?",
    "What types of HRT are available?",
    "What monitoring is needed?",
    "Is HRT covered by insurance?",
  ],
} as const

interface SuggestedQuestionsProps {
  activeService: ServiceType
  onSelect: (question: string) => void
}

export function SuggestedQuestions({
  activeService,
  onSelect,
}: SuggestedQuestionsProps) {
  const questions = SUGGESTIONS[activeService]

  return (
    <Flex gap="2" flexWrap="wrap" justify="center" px="2">
      {questions.map((question) => (
        <Button
          key={question}
          size="sm"
          variant="outline"
          borderRadius="full"
          borderColor="orange.300"
          color="orange.700"
          bg="orange.50"
          fontSize="xs"
          fontWeight="medium"
          _hover={{ bg: "orange.100", borderColor: "orange.400" }}
          onClick={() => onSelect(question)}
        >
          {question}
        </Button>
      ))}
    </Flex>
  )
}
