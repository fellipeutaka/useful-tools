"use client";

import * as React from "react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { tv } from "tailwind-variants";

export const CheckboxStyles = {
  Root: tv({
    base: "h-4 w-4 rounded-sm border border-primary ring-offset-background transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
  }),
  Indicator: tv({
    base: "grid place-content-center text-current",
  }),
};

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={CheckboxStyles.Root({ className })}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={CheckboxStyles.Indicator()}>
      <Check className="h-4 w-4 animate-check" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
