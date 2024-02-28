import { forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, tv } from "mizuhara/utils";

export const HeadingStyles = tv({
  variants: {
    variant: {
      h1: [
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-balance",
      ],
      h2: [
        "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-balance",
      ],
      h3: ["scroll-m-20 text-2xl font-semibold tracking-tight text-balance"],
      h4: ["scroll-m-20 text-xl font-semibold tracking-tight text-balance"],
      h5: ["scroll-m-20 text-lg font-medium tracking-tight text-balance"],
      h6: ["scroll-m-20 text-lg tracking-tight text-balance"],
    },
  },
});

type HeadingElement = React.ElementRef<"h1">;

type HeadingAsChildProps = {
  asChild?: boolean;
  as?: never;
} & React.ComponentPropsWithoutRef<"h1">;

type HeadingH1Props = {
  as?: "h1";
  asChild?: never;
} & React.ComponentPropsWithoutRef<"h1">;

type HeadingH2Props = {
  as: "h2";
  asChild?: never;
} & React.ComponentPropsWithoutRef<"h2">;

type HeadingH3Props = {
  as: "h3";
  asChild?: never;
} & React.ComponentPropsWithoutRef<"h3">;

type HeadingH4Props = {
  as: "h4";
  asChild?: never;
} & React.ComponentPropsWithoutRef<"h4">;

type HeadingH5Props = {
  as: "h5";
  asChild?: never;
} & React.ComponentPropsWithoutRef<"h5">;

type HeadingH6Props = {
  as: "h6";
  asChild?: never;
} & React.ComponentPropsWithoutRef<"h6">;

export type HeadingProps = VariantProps<typeof HeadingStyles> &
  (
    | HeadingAsChildProps
    | HeadingH1Props
    | HeadingH2Props
    | HeadingH3Props
    | HeadingH4Props
    | HeadingH5Props
    | HeadingH6Props
  );

export const Heading = Object.assign(
  forwardRef<HeadingElement, HeadingProps>(function Heading(
    {
      children,
      className,
      asChild = false,
      as: Tag = "h1",
      variant = "h1",
      ...props
    },
    ref,
  ) {
    return (
      <Slot
        {...props}
        ref={ref}
        className={HeadingStyles({ className, variant })}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  }),
  {
    displayName: "Heading",
  },
);
