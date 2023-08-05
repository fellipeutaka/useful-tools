"use client";

import Link from "next/link";

import { REPOSITORY_URL } from "~/constants/repository-info";
import { useI18n } from "~/lib/next-international/client";

import { useToast } from "../ui/toast/use-toast";

export function MainNav() {
  const { toast } = useToast();
  const t = useI18n();

  return (
    <div className="flex items-center space-x-6 text-sm font-medium capitalize text-foreground/60">
      <Link
        className="transition-colors hover:text-foreground/80"
        href="/tools"
      >
        {t("general.tools")}
      </Link>
      <button
        onClick={() =>
          toast({
            title: t("components.navbar.pricing.toast.title"),
            description: t("components.navbar.pricing.toast.description"),
          })
        }
        className="capitalize transition-colors hover:text-foreground/80"
      >
        {t("general.pricing")}
      </button>
      <Link
        className="transition-colors hover:text-foreground/80"
        href="/about"
      >
        {t("general.about")}
      </Link>
      <a href={REPOSITORY_URL} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
  );
}
