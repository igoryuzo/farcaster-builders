"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Layers } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function MiniAppsCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Layers className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">Mini Apps</CardTitle>
        </div>
        <CardDescription>New social feed experiences.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-sm text-muted-foreground">
          <p className="pb-4">Mini Apps are the building blocks to create content that provide 10x the user experience.</p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <Link 
            href="https://docs.farcaster.xyz/developers/frames/getting-started" 
            target="_blank"
            className={cn(
              "inline-flex items-center justify-between whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
              "px-4 py-2"
            )}
          >
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4" />
              <span>Mini App Docs</span>
            </div>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link 
            href="https://hello-world-dusky-tau.vercel.app/" 
            target="_blank"
            className={cn(
              "inline-flex items-center justify-between whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
              "px-4 py-2"
            )}
          >
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span>Vibe Code A Mini App Guide</span>
            </div>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
} 