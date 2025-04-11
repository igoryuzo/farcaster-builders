"use client";

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserFunnelCard } from "@/components/user-funnel-card"
import { DryPowderCard } from "@/components/dry-powder-card"
import { MiniAppsCard } from "@/components/mini-apps-card"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Heart } from "lucide-react"
import { sdk } from "@farcaster/frame-sdk"

export default function Home() {
  // Add error state to track and display any errors
  const [error, setError] = useState<string | null>(null)

  // Error boundary effect
  useEffect(() => {
    // Add global error handler for unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("Unhandled promise rejection:", event.reason)
      setError("An error occurred. Please try refreshing the page.")
      event.preventDefault()
    }

    window.addEventListener("unhandledrejection", handleUnhandledRejection)

    // Call sdk.actions.ready() to hide the splash screen
    sdk.actions.ready()
    
    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection)
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <div className="w-full max-w-[430px] px-4 py-6 flex flex-col gap-6">
        {error && <div className="w-full p-4 bg-red-100 text-red-800 rounded-md">{error}</div>}

        <header className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <Image
              src="/images/farcaster-logo.png"
              alt="Farcaster Logo"
              width={40}
              height={40}
              className="rounded-lg"
              onError={() => setError("Failed to load image")}
            />
            <h1 className="text-2xl font-bold text-primary">Why Build on Farcaster?</h1>
          </div>
          <p className="text-sm text-muted-foreground ml-1">
            Farcaster is one of the most interesting pockets of the internet.
          </p>
        </header>

        <section className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Build something 100 people love</CardTitle>
              <CardDescription>A well known Y Combinator mantra.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Farcaster is the perfect experimental playground. It&apos;s easier to grow from an obsessive early adopters
                community than luke warm mass appeal. Farcaster laid the foundation through growing DAUs, Mini Apps, and
                Embedded Wallets.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="growth" className="mb-6">
          <UserFunnelCard />
        </section>

        <section id="miniapps" className="mb-6">
          <MiniAppsCard />
        </section>

        <section id="wallets">
          <DryPowderCard />
        </section>

        <footer className="mt-12 mb-10 py-6 text-center text-sm text-muted-foreground">
          <Link
            href="https://warpcast.com/igoryuzo.eth"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 hover:text-primary transition-colors"
          >
            Made with <Heart className="h-3 w-3 fill-current text-red-500" /> by @igoryuzo.eth
          </Link>
        </footer>
      </div>
    </main>
  )
}
