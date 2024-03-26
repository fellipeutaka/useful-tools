"use client";

import { forwardRef } from "react";

import { cn } from "mizuhara/utils";
import { Icons } from "../icons";
import { Button, type ButtonProps } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./command";
import { Popover } from "./popover";

export const ComboboxRoot = Popover;

export type ComboboxTriggerProps = ButtonProps & {
  value: string;
  items: readonly string[];
  placeholder: string;
};

export const ComboboxTrigger = forwardRef<
  HTMLButtonElement,
  ComboboxTriggerProps
>(function ComboboxTrigger({ placeholder, value, items, ...props }, ref) {
  return (
    <Popover.Trigger asChild>
      <Button ref={ref} variant="outline" {...props} role="combobox">
        {value
          ? items.find((item) => item.toUpperCase() === value.toUpperCase())
          : placeholder}
        <Icons.ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
      </Button>
    </Popover.Trigger>
  );
});

export type ComboboxContentProps = React.ComponentPropsWithoutRef<
  typeof Popover.Content
> & {
  placeholder: string;
  notFound: string;
};

export const ComboboxContent = forwardRef<HTMLDivElement, ComboboxContentProps>(
  function ComboboxContent(
    { className, children, placeholder, notFound, ...props },
    ref,
  ) {
    return (
      <Command>
        <Popover.Content className={cn("p-0", className)} {...props} ref={ref}>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>{notFound}</CommandEmpty>
          {children}
        </Popover.Content>
      </Command>
    );
  },
);

export type ComboboxListProps = Omit<
  React.ComponentPropsWithoutRef<typeof CommandGroup>,
  "onSelect"
> & {
  value: string;
  items: readonly string[];
  onSelect: (value: string) => void;
};

export const ComboboxList = forwardRef<HTMLDivElement, ComboboxListProps>(
  function ComboboxContent(
    { className, value, items, onSelect, ...props },
    ref,
  ) {
    return (
      <CommandGroup
        className={cn("overflow-y-auto", className)}
        {...props}
        ref={ref}
      >
        {items.map((item) => (
          <CommandItem key={item} onSelect={onSelect}>
            <Icons.Check
              className={cn(
                "mr-2 size-4",
                value.toUpperCase() === item.toUpperCase()
                  ? "fade-in animate-in"
                  : "fade-out animate-out opacity-0",
              )}
            />
            {item}
          </CommandItem>
        ))}
      </CommandGroup>
    );
  },
);
