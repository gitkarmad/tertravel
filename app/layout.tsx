import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ter Travel in Bhutan - Discover Hidden Treasures",
  description:
    "Experience authentic Bhutanese culture, spiritual journeys, and Himalayan adventures with Ter Travel. Your trusted local guide to the Last Shangri-La.",
  keywords:
    "Bhutan travel, Bhutan tours, cultural tours, trekking Bhutan, spiritual journey, Himalayan adventure, Bhutan travel agency",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
