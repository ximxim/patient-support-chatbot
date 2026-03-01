import type { Metadata } from "next"
import { Provider } from "@/components/ui/provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "PurposeMed Patient Support",
  description:
    "Get answers about PrEP, ADHD, and HRT services — confidential and judgment-free",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
