"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export interface ImageGenerationProps {
  children: React.ReactNode
  className?: string
  triggerKey?: string | number
}

export const ImageGeneration = React.forwardRef<HTMLDivElement, ImageGenerationProps>(({ 
  children, 
  className, 
  triggerKey 
}, forwardedRef) => {
    const [progress, setProgress] = React.useState(0)
    const [loadingState, setLoadingState] = React.useState<
      "starting" | "generating" | "completed"
    >("starting")
    const duration = 3000 // Animation duration in ms
    const containerRef = React.useRef<HTMLDivElement>(null)
    
    // Use useImperativeHandle to expose methods if needed
    React.useImperativeHandle(forwardedRef, () => containerRef.current as HTMLDivElement)

    const startAnimation = React.useCallback(() => {
      setProgress(0)
      setLoadingState("starting")

      const startingTimeout = setTimeout(() => {
        setLoadingState("generating")
        const startTime = Date.now()

        const interval = setInterval(() => {
          const elapsedTime = Date.now() - startTime
          const progressPercentage = Math.min(
            100,
            (elapsedTime / duration) * 100
          )

          setProgress(progressPercentage)

          if (progressPercentage >= 100) {
            clearInterval(interval)
            setLoadingState("completed")
          }
        }, 16)

        return () => clearInterval(interval)
      }, 500) // Initial delay before starting

      return () => clearTimeout(startingTimeout)
    }, [duration])

    // Handle intersection observer for scroll-based triggering
    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAnimation()
          }
        },
        {
          threshold: 0.1, // Trigger when 10% of the element is visible
        }
      )

      const currentRef = containerRef.current
      if (currentRef) {
        observer.observe(currentRef)
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef)
        }
      }
    }, [startAnimation])

    // Also trigger on prop change
    React.useEffect(() => {
      startAnimation()
    }, [triggerKey, startAnimation])

    return (
      <div 
        className={cn("relative w-full h-full", className)} 
        ref={containerRef}
      >
        {children}
        <motion.div
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
          initial={false}
          animate={{
            opacity: loadingState === "completed" ? 0 : 1,
          }}
        >
          <motion.div
            className="absolute inset-0 bg-black/30 backdrop-blur-3xl"
            style={{
              clipPath: `polygon(0 ${progress}%, 100% ${progress}%, 100% 100%, 0 100%)`,
              maskImage:
                progress === 0
                  ? "linear-gradient(to bottom, black -5%, black 100%)"
                  : `linear-gradient(to bottom, transparent ${progress - 5}%, transparent ${progress}%, black ${progress + 5}%)`,
              WebkitMaskImage:
                progress === 0
                  ? "linear-gradient(to bottom, black -5%, black 100%)"
                  : `linear-gradient(to bottom, transparent ${progress - 5}%, transparent ${progress}%, black ${progress + 5}%)`,
            }}
          />
        </motion.div>
      </div>
    )
  }
)

ImageGeneration.displayName = "ImageGeneration"
