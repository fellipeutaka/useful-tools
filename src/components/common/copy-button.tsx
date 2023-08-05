"use client";

import { Check, Copy } from "lucide-react";
import { cnBase } from "tailwind-variants";

import { Button, type ButtonProps } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { useClipboard } from "~/hooks/use-clipboard";
import { useScopedI18n } from "~/lib/next-international/client";

type CopyButtonProps = ButtonProps & {
  valueToCopy: string;
};

export function CopyButton({
  valueToCopy,
  className,
  ...props
}: CopyButtonProps) {
  const { copy, copied } = useClipboard();
  const t = useScopedI18n("components.copy-button");

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              copy(valueToCopy);
            }}
            aria-label={t("copy")}
            className={cnBase("h-8 w-8", className)}
            {...props}
          >
            {copied ? (
              <Check className="h-3 w-3 animate-in fade-in" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent
          onPointerDownOutside={(e) => {
            e.preventDefault();
          }}
          className="select-none"
        >
          <p>{copied ? t("copied") : t("copy")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
