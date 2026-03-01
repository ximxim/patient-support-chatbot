import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#FFF5F0" },
          100: { value: "#FFE8DB" },
          200: { value: "#FFD0B5" },
          300: { value: "#FFB088" },
          400: { value: "#FF8F5E" },
          500: { value: "#E86835" },
          600: { value: "#CC5522" },
          700: { value: "#A34419" },
          800: { value: "#7A3312" },
          900: { value: "#52220C" },
          950: { value: "#2E1307" },
        },
        accent: {
          50: { value: "#F0F7FF" },
          100: { value: "#DBE8FF" },
          200: { value: "#B5D0FF" },
          300: { value: "#88B5FF" },
          400: { value: "#5E99FF" },
          500: { value: "#3B7BDB" },
          600: { value: "#2D62B3" },
          700: { value: "#214A8A" },
          800: { value: "#163362" },
          900: { value: "#0C1D3B" },
          950: { value: "#060F1F" },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "white" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.50}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing: { value: "{colors.brand.500}" },
        },
        accent: {
          solid: { value: "{colors.accent.500}" },
          contrast: { value: "white" },
          fg: { value: "{colors.accent.700}" },
          muted: { value: "{colors.accent.100}" },
          subtle: { value: "{colors.accent.50}" },
          emphasized: { value: "{colors.accent.300}" },
          focusRing: { value: "{colors.accent.500}" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
