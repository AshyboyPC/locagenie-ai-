"use client";
import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "./button";

export type CarouselApi = UseEmblaCarouselType[1];
export type CarouselOptions = Parameters<typeof useEmblaCarousel>[0];
export type CarouselPlugin = Parameters<typeof useEmblaCarousel>[1];

interface CarouselProps {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
}

interface CarouselContextProps extends CarouselProps {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null);
const useCarouselContext = () => {
  const ctx = React.useContext(CarouselContext);
  if (!ctx) throw new Error("useCarousel must be inside Carousel");
  return ctx;
};

export const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel({ ...opts, axis: orientation === "horizontal" ? "x" : "y" }, plugins);
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
    const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

    const onSelect = React.useCallback((api: CarouselApi) => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    React.useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api.off("select", onSelect);
      };
    }, [api, onSelect]);

    React.useEffect(() => {
      if (setApi && api) setApi(api);
    }, [api, setApi]);

    const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowLeft") scrollPrev();
      else if (e.key === "ArrowRight") scrollNext();
    };

    return (
      <CarouselContext.Provider value={{ carouselRef, api: api!, opts, orientation, scrollPrev, scrollNext, canScrollPrev, canScrollNext }}>
        <div ref={ref} onKeyDownCapture={handleKey} className={cn("relative", className)} role="region" aria-roledescription="carousel" {...props}>
          {children}
        </div>
      </CarouselContext.Provider>
    );
  });
Carousel.displayName = "Carousel";

export const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>( (
  { className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarouselContext();
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

export const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const { orientation } = useCarouselContext();
  return (
    <div ref={ref} role="group" aria-roledescription="slide" className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)} {...props} />
  );
});
CarouselItem.displayName = "CarouselItem";

export const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarouselContext();
  return (
    <Button ref={ref} variant="outline" size="icon" className={cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className)} disabled={!canScrollPrev} onClick={scrollPrev} {...props}>
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarouselContext();
  return (
    <Button ref={ref} variant="outline" size="icon" className={cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className)} disabled={!canScrollNext} onClick={scrollNext} {...props}>
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";
