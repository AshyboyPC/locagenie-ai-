"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface BlurInProps {
  children?: ReactNode;
  word?: string;
  className?: string;
  variant?: Variants;
  duration?: number;
  delay?: number;
}

const BlurIn = ({ 
  children, 
  word, 
  className, 
  variant, 
  duration = 0.6,
  delay = 0 
}: BlurInProps) => {
  const defaultVariants: Variants = {
    hidden: { 
      filter: "blur(8px)", 
      opacity: 0, 
      scale: 0.95,
      y: 20
    },
    visible: { 
      filter: "blur(0px)", 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }
    },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-15% 0px -15% 0px" }}
      variants={combinedVariants}
      className={cn("inline-block will-change-transform", className)}
    >
      {children || word}
    </motion.span>
  );
};

export { BlurIn };
