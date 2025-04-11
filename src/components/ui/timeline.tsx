"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface TimelineProps {
  children: React.ReactNode
  className?: string
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {children}
    </div>
  )
}

interface TimelineItemProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function TimelineItem({ title, children, className }: TimelineItemProps) {
  return (
    <div className={cn("flex flex-col space-y-1", className)}>
      <div className="flex items-center">
        <div className="h-2 w-2 rounded-full bg-primary mr-3" />
        <div className="text-sm font-medium">{title}</div>
      </div>
      <div className="ml-5">
        {children}
      </div>
    </div>
  )
} 