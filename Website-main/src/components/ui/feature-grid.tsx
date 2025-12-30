import * as React from "react"
import { cn } from "../../lib/utils"
import { ArrowRight } from "lucide-react"

// Interface for a single feature item
export interface Feature {
  icon?: React.ReactNode
  imageSrc?: string
  imageAlt?: string
  title: string
  description: string
  href?: string
}

// Interface for the component props
export interface FeatureGridProps {
  features: Feature[]
  className?: string
}

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div
    className={cn(
      "group", // Group for hover effects
      "flex flex-col sm:flex-row items-start gap-6",
      "p-6 rounded-2xl border-2 border-gray-200 dark:border-black",
      "bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-black",
      "transition-all duration-300",
      "hover:shadow-xl hover:-translate-y-1 hover:border-[#780606] dark:hover:border-[#ff6b6b]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#780606] focus-visible:ring-offset-2"
    )}
  >
    {/* Icon or Image */}
    <div className="flex-shrink-0">
      {feature.icon ? (
        <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-[#780606]/10 dark:bg-[#ff6b6b]/10">
          {feature.icon}
        </div>
      ) : feature.imageSrc ? (
        <img 
          src={feature.imageSrc} 
          alt={feature.imageAlt || feature.title}
          className="h-24 w-24 object-contain"
        />
      ) : null}
    </div>
    
    {/* Text Content & Arrow */}
    <div className="flex flex-1 flex-col justify-between h-full">
      <div>
        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
          {feature.title}
        </h3>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
          {feature.description}
        </p>
      </div>
      {feature.href && (
        <div className="flex justify-end mt-4">
          <ArrowRight 
            className="h-5 w-5 text-gray-400 dark:text-gray-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#780606] dark:group-hover:text-[#ff6b6b]" 
          />
        </div>
      )}
    </div>
  </div>
)

const FeatureGrid = React.forwardRef<
  HTMLDivElement,
  FeatureGridProps
>(({ features, className }, ref) => {
  if (!features || features.length === 0) {
    return null // Don't render anything if there are no features
  }

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2", // Responsive grid layout
        className
      )}
    >
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} />
      ))}
    </div>
  )
})

FeatureGrid.displayName = "FeatureGrid"

export { FeatureGrid }

