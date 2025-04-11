"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, Coins, Landmark } from "lucide-react"
import Link from "next/link"

export function DryPowderCard() {
  const [imageError, setImageError] = useState(false)

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Wallet className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">Embedded Wallets</CardTitle>
        </div>
        <CardDescription>Users ready to 1-click transact</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-sm text-muted-foreground">
          <p className="pb-4">
            Embedded wallets enable one-click transactions, creating a frictionless experience for users to interact
            with mini apps and spend their &quot;dry powder&quot; assets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col p-3 border rounded-lg">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Wallet className="h-4 w-4" />
              <span>Total Dry Powder</span>
            </div>
            <div className="mt-2">
              <span className="text-2xl font-bold">$418,108,811</span>
            </div>
          </div>

          <div className="flex flex-col p-3 border rounded-lg">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Coins className="h-4 w-4" />
              <span>Stablecoins Dry Powder</span>
            </div>
            <div className="mt-2">
              <span className="text-2xl font-bold">$47,248,106</span>
            </div>
          </div>

          <div className="flex flex-col p-3 border rounded-lg">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Landmark className="h-4 w-4" />
              <span>Funded Wallets</span>
            </div>
            <div className="mt-2">
              <span className="text-2xl font-bold">80,000</span>
            </div>
          </div>
        </div>

        <div className="pt-6">
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
                <Wallet className="h-4 w-4 text-primary" />
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