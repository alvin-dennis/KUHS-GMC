import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Roboto } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const monteserrat = Montserrat({ subsets: ["latin"], variable: "--font-display" })
const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "KUHS 12th Intercollege Athletics Meet 2025-26",
  description:
    "Join us for the prestigious KUHS Intercollege Athletics Meet featuring track and field events, professional coordination, and athletes from health science institutions across Kerala.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} ${monteserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
