"use client";

import { cn } from "mizuhara/utils";
import { useTranslations } from "next-intl";
import { Button, type ButtonProps } from "~/components/ui/button";
import { Tooltip } from "~/components/ui/tooltip";
import { useClipboard } from "~/hooks/use-clipboard";
import { Icons } from "./icons";

type CopyButtonProps = ButtonProps & {
  valueToCopy: string;
};

export function CopyButton({
  valueToCopy,
  className,
  onClick,
  ...props
}: CopyButtonProps) {
  const { copy, copied } = useClipboard();
  const t = useTranslations("components.copy-button");

  return (
    <Tooltip.Provider>
      <Tooltip delayDuration={300}>
        <Tooltip.Trigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              copy(valueToCopy);
              onClick?.(e);
            }}
            aria-label={t("copy")}
            className={cn("size-8", className)}
            {...props}
          >
            {copied ? (
              <Icons.Check className="fade-in size-3 animate-in" />
            ) : (
              <Icons.Copy className="size-3" />
            )}
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content
          onPointerDownOutside={(e) => {
            e.preventDefault();
          }}
          className="select-none"
        >
          <p>{copied ? t("copied") : t("copy")}</p>
        </Tooltip.Content>
      </Tooltip>
    </Tooltip.Provider>
  );
}
