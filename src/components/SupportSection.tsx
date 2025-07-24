"use client";
import { PinContainer } from "./ui/3d-pin";
import { GlowEffect } from "./ui/glow-effect";
import { TextShimmer } from "./ui/text-shimmer";

export function SupportSection() {
  return (
    <section id="support" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TextShimmer 
            as="h2" 
            className="text-5xl font-bold mb-4 [--base-color:theme(colors.red.600)] [--base-gradient-color:theme(colors.red.400)] dark:[--base-color:theme(colors.red.700)] dark:[--base-gradient-color:theme(colors.red.400)]"
            duration={1.5}
          >
            Support My Channel
          </TextShimmer>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Found my tools or agents helpful?
            <br />
            You can support my work by subscribing to my YouTube channel — it's a small act of kindness that really helps me keep building awesome AI agents and custom websites for you.
          </p>
        </div>

        <div className="flex justify-center items-center min-h-[500px]">
          <div className="relative">
            <GlowEffect 
              colors={['#FF0000', '#FF4D4D', '#FF9999', '#FF4D4D']} 
              mode="pulse" 
              blur="strong"
              scale={1.1}
              className="-z-10"
            />
            <PinContainer 
              title="Subscribe on YouTube" 
              href="https://www.youtube.com/@AIExplained_25"
              containerClassName="w-full h-full"
            >
              <div className="flex flex-col items-center justify-center p-10 w-[400px] h-[400px] bg-black/80 backdrop-blur-sm rounded-xl border border-white/10 relative overflow-hidden">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-red-600/30 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                  <div className="relative bg-white p-2 rounded-full overflow-hidden">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden">
                      <img 
                        src="/ChatGPT Image Jul 21, 2025, 11_47_01 AM.jpg" 
                        alt="AI Unwrapped" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="mt-10 text-3xl font-bold text-white text-center">
                  AI Unwrapped
                </h3>
                <p className="mt-3 text-red-400 text-lg text-center">
                  @AIExplained_25
                </p>
              </div>
            </PinContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
