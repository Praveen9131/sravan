import { cn } from "../../lib/utils"
import React from "react"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "grid md:grid-cols-3 auto-rows-max gap-6 lg:gap-8 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-8 dark:bg-black dark:border-white/[0.2] bg-white border-2 border-gray-200 dark:border-black hover:border-[#780606] dark:hover:border-[#ff6b6b] justify-between flex flex-col space-y-4 min-h-[400px]",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon && (
          <div className="flex-shrink-0 mb-4">
            {icon}
          </div>
        )}
        {title && (
          <div className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white mb-3 mt-2 tracking-tight">
            {title}
          </div>
        )}
        {description && (
          <div className="font-normal text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            {description}
          </div>
        )}
      </div>
    </div>
  )
}

