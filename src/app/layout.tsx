import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Roboto } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Loader from "@/components/Loader"
import { Suspense } from "react"

const monteserrat = Montserrat({ subsets: ["latin"], variable: "--font-display" })
const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "KUHS 12th Intercollege Athletics Meet 2025-26",
  description:
    "Join us for the prestigious KUHS Intercollege Athletics Meet featuring track and field events, professional coordination, and athletes from health science institutions across Kerala.",
  authors: [{ name: "Alvin Dennis" }],
  openGraph: {
    title: "KUHS 12th Intercollege Athletics Meet 2025-26",
    description:
      "Join us for the prestigious KUHS Intercollege Athletics Meet featuring track and field events, professional coordination, and athletes from health science institutions across Kerala.",
    siteName: "µLearn",
    url: "https://kuhs-gmc.vercel.app/",
    type: "website",
    images: ["/assets/logo.png"],
  },
  icons: {
    icon: "/assets/logo.png",
  },
  metadataBase: new URL("https://kuhs-gmc.vercel.app/"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${monteserrat.variable} ${roboto.variable} antialiased`}>
        <Navbar />
        <Suspense fallback={<Loader />}>
          {children}
          </Suspense>
        <Footer />
      </body>
    </html>
  )
}
