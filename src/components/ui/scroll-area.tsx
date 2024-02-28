"use client";

import { forwardRef } from "react";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "mizuhara/utils";

const ScrollAreaRoot = forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    {children}
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollAreaRoot.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-px",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-px",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

const Viewport = forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaViewport>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaViewport>
>(({ className, ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaViewport
    ref={ref}
    className={cn("size-full rounded-[inherit]", className)}
    {...props}
  />
));
Viewport.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export const ScrollArea = Object.assign(ScrollAreaRoot, {
  ScrollBar,
  Viewport,
});
