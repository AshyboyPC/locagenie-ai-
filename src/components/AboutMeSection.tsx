"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ImageGeneration } from "./ui/image-generation";

interface AnimatedTextCycleProps {
  words: string[];
  interval?: number;
  className?: string;
}

const AnimatedTextCycle: React.FC<AnimatedTextCycleProps> = ({
  words,
  interval = 3000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState<string | number>("auto");
  const measureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (measureRef.current) {
      const elements = measureRef.current.children;
      if (elements.length > currentIndex) {
        const newWidth = elements[currentIndex].getBoundingClientRect().width;
        setWidth(`${newWidth}px`);
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length]);

  const containerVariants: any = {
    hidden: {
      y: -20,
      opacity: 0,
      filter: "blur(8px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      filter: "blur(8px)",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      {/* Hidden element to measure text width */}
      <div
        ref={measureRef}
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none"
        style={{ visibility: "hidden" }}
      >
        {words.map((word, i) => (
          <span key={i} className={`font-bold ${className}`}>
            {word}
          </span>
        ))}
      </div>

      {/* Animated word */}
      <motion.span
        className="relative inline-block"
        animate={{
          width,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 1.2,
          },
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className={`inline-block font-bold ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ whiteSpace: "nowrap" }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};

interface MagicTextProps {
  text: string;
}

interface WordProps {
  children: string;
  progress: any;
  range: number[];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mt-[12px] mr-1 text-lg md:text-xl font-medium">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

const MagicText: React.FC<MagicTextProps> = ({ text }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <p ref={container} className="flex flex-wrap leading-[0.8] p-4">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const AboutMeSection: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const skills = [
    "AI Developer",
    "Founder",
    "Builder",
    "Innovator",
    "Problem Solver",
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const avatarVariants: any = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-background relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      {/* Floating elements */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl"
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Me
            </motion.h1>
            <motion.div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </motion.div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Avatar section - made larger to match content height */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start w-full h-full">
              <motion.div
                variants={avatarVariants}
                whileHover={{ scale: 1.02, rotate: 3 }}
                className="relative w-full max-w-[500px] h-auto aspect-square"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-2">
                  <div className="w-full h-full rounded-full bg-muted/50 flex items-center justify-center overflow-hidden">
                    <ImageGeneration className="w-full h-full rounded-full">
                      <img 
                        src="/WhatsApp Image 2025-07-16 at 10.14.49_0ea44a36_cleanup.png" 
                        alt="Ashwindh Ramesh"
                        className="w-full h-full object-cover"
                      />
                    </ImageGeneration>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold"
                >
                  ✨
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold"
                >
                  🚀
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Text content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Ashwindh Ramesh
                </motion.h2>
                <div className="text-xl md:text-2xl text-muted-foreground mb-6">
                  <span className="text-primary">💡</span> {" "}
                  <AnimatedTextCycle
                    words={skills}
                    interval={2500}
                    className="text-primary"
                  />
                  <span className="text-muted-foreground"> at LocaGenie</span>
                </div>
              </div>

              <motion.div
                variants={itemVariants}
                className="space-y-4 text-muted-foreground leading-relaxed"
              >
                <p className="text-lg">
                  Hey! I'm Ashwindh, a high school entrepreneur and developer passionate about building tools that use AI to solve real-world problems. I'm the creator of <strong>LocaGenie</strong> — a platform that helps local businesses get online fast with smart websites and custom AI agents.
                </p>

                <p className="text-lg">
                  My work blends voice tech, automation, and design into seamless digital experiences. Whether it's building AI-powered assistants for customer support or using calling agents to book appointments, I believe in using tech to <strong>amplify human effort, not replace it</strong>.
                </p>

                <p className="text-lg">
                  When I'm not coding or launching startups, I love exploring new ideas in machine learning, voice interfaces, and accessible design.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-muted/50 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Launch-Ready Apps</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-muted/50 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Small Businesses Helped</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-muted/50 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Voice + AI Focused</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Magic text section */}
          <motion.div variants={itemVariants} className="mt-32">
            <MagicText 
              text="I believe in the power of smart automation, clean interfaces, and tech that feels magical. Every project I build is designed to help someone — and that's what drives me."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection;
