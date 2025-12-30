"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

export type Testimonial = {
  text: string
  image: string
  name: string
  role: string
}

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.scrollHeight / 2
      setContentHeight(height)
    }
  }, [props.testimonials])

  const duplicatedTestimonials = [...props.testimonials, ...props.testimonials]

  return (
    <div className={`${props.className} overflow-hidden`}>
      <motion.div
        ref={containerRef}
        animate={{
          y: contentHeight > 0 ? -contentHeight : 0,
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6"
      >
        {duplicatedTestimonials.map(({ text, image, name, role }, i) => (
          <div
            className="p-10 rounded-3xl border border-gray-200 bg-white shadow-lg shadow-gray-200/50 max-w-xs w-full flex-shrink-0"
            key={`${i}-${name}`}
          >
            <div className="text-gray-700 leading-relaxed">{text}</div>
            <div className="flex items-center gap-3 mt-5">
              <img
                width={40}
                height={40}
                src={image}
                alt={name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <div className="font-semibold tracking-tight leading-5 text-gray-900">{name}</div>
                <div className="leading-5 text-gray-500 text-sm tracking-tight">{role}</div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

