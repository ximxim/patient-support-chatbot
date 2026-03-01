"use client"

import { Box, Tabs } from "@chakra-ui/react"
import type { ServiceType } from "@/lib/types"

const SERVICES = [
  { value: "prep", label: "PrEP" },
  { value: "adhd", label: "ADHD" },
  { value: "hrt", label: "HRT" },
] as const

interface ServiceSelectorProps {
  activeService: ServiceType
  onServiceChange: (service: ServiceType) => void
}

export function ServiceSelector({
  activeService,
  onServiceChange,
}: ServiceSelectorProps) {
  return (
    <Box bg="white" borderBottomWidth="1px" borderColor="gray.200">
      <Box maxW="3xl" mx="auto">
        <Tabs.Root
          value={activeService}
          onValueChange={(details) =>
            onServiceChange(details.value as ServiceType)
          }
        >
          <Tabs.List borderBottomWidth="0">
            {SERVICES.map((svc) => (
              <Tabs.Trigger
                key={svc.value}
                value={svc.value}
                fontWeight="medium"
                fontSize="sm"
                px="4"
                py="3"
                color="gray.600"
                _selected={{
                  color: "orange.600",
                  borderBottomColor: "orange.500",
                  borderBottomWidth: "2px",
                }}
              >
                {svc.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>
      </Box>
    </Box>
  )
}
