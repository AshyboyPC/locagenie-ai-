'use client'

import { motion } from "framer-motion"
import { Plus, LucideIcon } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface SocialIcon {
  Icon: LucideIcon
  href?: string
  className?: string
}

interface AnimatedSocialIconsProps {
  icons: SocialIcon[]
  className?: string
  iconSize?: number
}

export function AnimatedSocialIcons({ 
  icons, 
  className,
  iconSize = 20
}: AnimatedSocialIconsProps) {
  const [active, setActive] = useState(false)

  const buttonSize = "size-10 sm:size-12" 

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="flex items-center justify-center relative gap-2">
        <motion.div
          className="absolute left-0 bg-background w-full rounded-full z-10"
          animate={{
            x: active ? "calc(100% + 8px)" : 0,
          }}
          transition={{ ease: "easeInOut", duration: 0.4 }}
        >
          <motion.button
            className={cn(
              buttonSize,
              "rounded-full flex items-center justify-center",
              "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-opacity"
            )}
            onClick={() => setActive(!active)}
            animate={{ rotate: active ? 45 : 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0.4,
            }}
          >
            <Plus 
              size={iconSize} 
              strokeWidth={3} 
              className="text-white" 
            />
          </motion.button>
        </motion.div>
        
        {icons.map(({ Icon, href, className }, index) => (
          <motion.div
            key={index}
            className={cn(
              buttonSize,
              "rounded-full flex items-center justify-center",
              "bg-white/10 backdrop-blur-sm hover:bg-white/20",
              "border border-white/10",
              className
            )}
            animate={{
              opacity: active ? 1 : 0,
              x: active ? 0 : -20,
              scale: active ? 1 : 0.8,
              rotate: active ? 0 : 45,
              pointerEvents: active ? 'auto' : 'none',
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.3,
            }}
            style={{
              display: active ? 'flex' : 'none',
            }}
          >
            {href ? (
              <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full"
              >
                <Icon 
                  size={iconSize}
                  className="text-white transition-all hover:scale-110" 
                />
              </a>
            ) : (
              <Icon 
                size={iconSize}
                className="text-white transition-all hover:scale-110" 
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
