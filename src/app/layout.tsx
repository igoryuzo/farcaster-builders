import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

// Define the Farcaster Frame metadata
const frameMetadata = {
  version: "next",
  imageUrl: "https://farcaster-builders.vercel.app/growth.gif",
  button: {
    title: "Open App",
    action: {
      type: "launch_frame",
      url: "https://farcaster-builders.vercel.app",
      name: "Hello World Mini App",
      splashImageUrl: "https://farcaster-builders.vercel.app/images/splash.png",
      splashBackgroundColor: "#855dcd"
    }
  }
};

export const metadata: Metadata = {
  title: "Farcaster Story",
  description: "The rise of Farcaster as a decentralized social network",
  other: {
    "fc:frame": JSON.stringify(frameMetadata),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
