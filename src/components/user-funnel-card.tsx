"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, ArrowDown, TrendingUp } from "lucide-react"
import Link from "next/link"

export function UserFunnelCard() {
  const [imageError, setImageError] = useState(false)

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">DAU Growing Rapidly</CardTitle>
        </div>
        <div className="text-sm text-muted-foreground space-y-2">
          <p>Farcaster&apos;s daily active users are growing fast.</p>
          <p>
            Creating a vibrant community of engaged users from artists, business owners, engineers, designers &amp; many
            more. There is depth in social interactions that you cannot find on any other social network.
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center">
          <div className="flex flex-col p-4 border rounded-lg w-full items-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-5 w-5" />
              <span>Total Signups (FID)</span>
            </div>
            <div className="mt-2 text-3xl font-bold">1,046,387</div>
          </div>

          <ArrowDown className="h-8 w-8 my-2 text-primary" />

          <div className="flex flex-col p-4 border rounded-lg w-full items-center bg-primary/5">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <UserCheck className="h-5 w-5" />
              <span>Daily Active Users</span>
            </div>
            <div className="mt-2 text-3xl font-bold">45,108</div>
          </div>
        </div>

        <div className="pt-4">
          <div className="flex items-center gap-2 mb-2">
            {!imageError ? (
              <Link href="https://warpcast.com/emptyblock" target="_blank" rel="noopener noreferrer">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                  <Image
                    src="/images/empty-block-logo.png"
                    alt="Empty Block Logo"
                    width={24}
                    height={24}
                    onError={() => setImageError(true)}
                  />
                </div>
              </Link>
            ) : (
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
            )}
            <div className="text-xs">
              <div>
                <Link
                  href="https://warpcast.com/emptyblock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @emptyblock
                </Link>
              </div>
              <div className="font-medium">
                Nate Maddrey{" "}
                <Link
                  href="https://warpcast.com/nmadd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  @nmadd
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 