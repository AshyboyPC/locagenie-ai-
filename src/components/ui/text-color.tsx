"use client";

import "../../text-color.css";

import { Plus } from "lucide-react";

export function TextColor() {
  return (
    <div className="mb-10 mt-4 md:mt-6">
      <div className="px-2">
        <div className="relative p-8 w-full h-full [mask-image:radial-gradient(200rem_24rem_at_center,white,transparent)]">
          <h1 className="tracking-tighter flex select-none flex-col md:flex-col lg:flex-row text-center text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none">
            <Plus className="absolute -left-4 -top-4 h-6 w-6 text-indigo-500" />
            <Plus className="absolute -bottom-4 -left-4 h-6 w-6 text-indigo-500" />
            <Plus className="absolute -right-4 -top-4 h-6 w-6 text-indigo-500" />
            <Plus className="absolute -bottom-4 -right-4 h-6 w-6 text-indigo-500" />

            <span
              data-content="Discover."
              className="before:animate-gradient-background-1 relative before:absolute before:bottom-4 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
            >
              <span className="from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1 bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5">
                Discover.
              </span>
            </span>
            <span
              data-content="Build."
              className="before:animate-gradient-background-2 relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
            >
              <span className="from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2 bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5">
                Build.
              </span>
            </span>
            <span
              data-content="Grow."
              className="before:animate-gradient-background-3 relative before:absolute before:bottom-1 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
            >
              <span className="from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3 bg-gradient-to-r bg-clip-text px-2 text-transparent sm:px-5">
                Grow.
              </span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
