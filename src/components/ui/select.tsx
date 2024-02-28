"use client";

import { forwardRef } from "react";

import * as SelectPrimitive from "@radix-ui/react-select";
import { tv } from "mizuhara/utils";

import { Icons } from "../icons";
import { Text } from "./text";

export const SelectStyles = {
  Trigger: tv({
    base: [
      "group flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background transition",
      "placeholder:text-muted-foreground",
      "focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
  }),
  Content: tv({
    base: [
      [
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
      ],
    ],
    variants: {
      popper: {
        true: [
          "max-h-[var(--radix-select-content-available-height)]",
          "data-[side=bottom]:translate-y-1",
          "data-[side=left]:-translate-x-1",
          "data-[side=right]:translate-x-1",
          "data-[side=top]:-translate-y-1",
        ],
      },
    },
  }),
  Viewport: tv({
    base: ["p-1"],
    variants: {
      popper: {
        true: [
          "h-[var(--radix-popper-available-height)] w-full min-w-[var(--radix-popper-anchor-width)]",
        ],
      },
    },
  }),
  Label: tv({
    base: ["py-1.5 pl-8 pr-2 text-sm font-semibold"],
  }),
  Item: tv({
    base: [
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    ],
  }),
  Separator: tv({
    base: ["-mx-1 my-1 h-px bg-muted"],
  }),
  ScrollButton: tv({
    base: ["flex h-6 items-center justify-center"],
  }),
};

export type SelectRootProps = SelectPrimitive.SelectGroupProps;
export const SelectRoot = SelectPrimitive.Root;

SelectRoot.displayName = "Select";

export type SelectGroupProps = SelectPrimitive.SelectGroupProps;
export const SelectGroup = SelectPrimitive.Group;

SelectGroup.displayName = "Select.Group";

export type SelectValueProps = SelectPrimitive.SelectValueProps;
export const SelectValue = SelectPrimitive.Value;

SelectValue.displayName = "Select.Value";

export type SelectTriggerProps = Omit<
  SelectPrimitive.SelectTriggerProps,
  "children"
> & {
  placeholder: string;
};

export const SelectTrigger = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, placeholder, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={SelectStyles.Trigger({ className })}
    {...props}
  >
    <SelectValue
      placeholder={<Text className="text-muted-foreground">{placeholder}</Text>}
    />
    <SelectPrimitive.Icon asChild>
      <Icons.ChevronDown className="h-4 w-4 opacity-50 transition-transform duration-200 group-aria-expanded:rotate-180" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = "Select.Trigger";

export type SelectContentProps = SelectPrimitive.SelectContentProps;

export const SelectContent = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={SelectStyles.Content({
        className,
        popper: position === "popper",
      })}
      position={position}
      {...props}
    >
      <SelectPrimitive.ScrollUpButton className={SelectStyles.ScrollButton()}>
        <Icons.ChevronUp className="h-4 w-4" />
      </SelectPrimitive.ScrollUpButton>
      <SelectPrimitive.Viewport
        className={SelectStyles.Viewport({ popper: position === "popper" })}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectPrimitive.ScrollDownButton className={SelectStyles.ScrollButton()}>
        <Icons.ChevronDown className="h-4 w-4" />
      </SelectPrimitive.ScrollDownButton>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = "Select.Content";

export type SelectLabelProps = SelectPrimitive.SelectLabelProps;

export const SelectLabel = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={SelectStyles.Label({ className })}
    {...props}
  />
));
SelectLabel.displayName = "Select.Label";

export type SelectItemProps = SelectPrimitive.SelectItemProps;

export const SelectItem = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={SelectStyles.Item({ className })}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Icons.Check className="size-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = "Select.Item";

export type SelectSeparatorProps = SelectPrimitive.SelectSeparatorProps;

export const SelectSeparator = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={SelectStyles.Separator({ className })}
    {...props}
  />
));
SelectSeparator.displayName = "Select.Separator";

export type SelectProps = SelectPrimitive.SelectProps;

export const Select = Object.assign(SelectRoot, {
  Group: SelectGroup,
  Value: SelectValue,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Label: SelectLabel,
  Item: SelectItem,
  Separator: SelectSeparator,
});
