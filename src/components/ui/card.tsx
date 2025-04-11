import * as React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className="rounded-lg border bg-white text-black shadow-sm dark:bg-gray-800 dark:text-white"
      {...props}
    />
  )
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div className="flex flex-col space-y-1.5 p-4" {...props} />
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className="text-lg font-semibold leading-none tracking-tight"
      {...props}
    />
  )
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return <p className="text-sm text-gray-500 dark:text-gray-400" {...props} />
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className="p-4 pt-0" {...props} />
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return <div className="flex items-center p-4 pt-0" {...props} />
} 