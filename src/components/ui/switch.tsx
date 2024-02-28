"use client";

import { forwardRef } from "react";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import { tv } from "mizuhara/utils";

const SwitchStyles = {
  Root: tv({
    base: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
  }),
  Thumb: tv({
    base: "pointer-events-none block size-5 rounded-full bg-zinc-50 shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
  }),
};

export const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={SwitchStyles.Root({ className })}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className={SwitchStyles.Thumb()} />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;
