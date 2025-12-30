"use client"

import { cn } from "@/lib/utils"

export interface TestimonialAuthor {
  name: string
  role: string
  avatar?: string
  company?: string
}

interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({
  author,
  text,
  href,
  className,
}: TestimonialCardProps) {
  const content = (
    <div
      className={cn(
        "flex min-w-[300px] max-w-[400px] flex-col gap-4 rounded-2xl border bg-card p-6 shadow-sm",
        "sm:min-w-[350px] sm:max-w-[450px]",
        className
      )}
    >
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
        "{text}"
      </p>
      <div className="flex items-center gap-3">
        {author.avatar && (
          <img
            src={author.avatar}
            alt={author.name}
            className="h-10 w-10 rounded-full object-cover"
          />
        )}
        <div className="flex flex-col">
          <div className="text-sm font-semibold text-foreground">
            {author.name}
          </div>
          <div className="text-xs text-muted-foreground">
            {author.role}
            {author.company && `, ${author.company}`}
          </div>
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    )
  }

  return content
}



