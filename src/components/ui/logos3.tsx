"use client";

// Requires: npm install embla-carousel-auto-scroll embla-carousel-react lucide-react

import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Logo {
  id: string;
  name: string;
  gradient: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
  speed?: number;
}

import { cn } from "../../lib/utils";
import { TrueFocus } from "./true-focus";

interface InfiniteScrollCarouselProps {
  items: Logo[];
  speed?: number;
}

const InfiniteScrollCarousel = ({ items, speed = 1 }: InfiniteScrollCarouselProps) => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] // cubic-bezier for smooth ease-out
      }
    }
  } as const;

  useEffect(() => {
    if (!isInView) return;
    
    const scroll = async () => {
      // Reset position to start before beginning the animation
      await controls.set({ x: '0%' });
      
      // Start the infinite scroll
      controls.start({
        x: '-100%',
        transition: {
          duration: 30 / speed,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 0
        }
      });
    };
    
    scroll();
    
    // Clean up animation on unmount
    return () => {
      controls.stop();
    };
  }, [isInView, controls, speed]);

  // Create multiple copies of items for seamless looping
  const repeatedItems = Array(10).fill(items).flat();

  return (
    <div className="overflow-hidden py-8 w-full">
      <motion.div
        ref={containerRef}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative w-full"
      >
        <motion.div 
          className="flex whitespace-nowrap w-max"
          animate={controls}
          style={{
            willChange: 'transform',
            width: 'max-content',
          }}
        >
          {repeatedItems.map((logo, index) => (
            <motion.div
              key={`${logo.id}-${index}`}
              variants={item}
              className="inline-flex items-center justify-center px-8"
            >
              <div className="relative group">
                <span 
                  className={cn(
                    logo.gradient,
                    logo.className,
                    'transform transition-all duration-300 group-hover:scale-110'
                  )}
                >
                  {logo.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Logos3 = ({
  heading = "Trusted Businesses",
  logos = [
    {
      id: "logo-1",
      name: "Ecoshpere",
      gradient: "bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text",
      className: "text-3xl font-bold"
    },
    {
      id: "logo-2",
      name: "Rural Connect",
      gradient: "bg-gradient-to-r from-blue-900 via-blue-400 to-white text-transparent bg-clip-text",
      className: "text-3xl font-bold"
    },
    {
      id: "logo-3",
      name: "Vision AI",
      gradient: "bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text",
      className: "text-3xl font-bold"
    }
  ],
  className,
  speed = 1
}: Logos3Props) => {
  return (
    <section className={cn("py-20 overflow-hidden", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TrueFocus 
            sentence={heading} 
            animationDuration={1} 
            pauseBetweenAnimations={1} 
            borderColor="#00FFFF" 
            glowColor="rgba(0,255,255,0.6)" 
          />
        </div>
        
        <div className="relative">
          <div className="relative overflow-hidden">
            <InfiniteScrollCarousel items={logos} speed={speed} />
          </div>
          
          {/* Gradient fade effects on the sides */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
