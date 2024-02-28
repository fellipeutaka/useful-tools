"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "~/config/site";
import { Icons } from "./icons";

const navItemClasses =
  "capitalize transition-colors hover:text-foreground/80 text-foreground/60 data-[active=true]:text-foreground";

export function MainNav() {
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center gap-2">
        <Icons.Logo className="size-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/tools"
          data-active={pathname === "/tools"}
          className={navItemClasses}
        >
          {t("general.tools")}
        </Link>
        <button
          type="button"
          className={navItemClasses}
          onClick={() => {
            import("sonner").then(({ toast }) => {
              toast(t("components.navbar.pricing.toast-title"), {
                description: t("components.navbar.pricing.toast-description"),
              });
            });
          }}
        >
          {t("general.pricing")}
        </button>
        <Link
          href="/about"
          data-active={pathname === "/about"}
          className={navItemClasses}
        >
          {t("general.about")}
        </Link>
        <Link
          href={siteConfig.links.github}
          className="hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
        >
          GitHub
        </Link>
      </nav>
    </div>
  );
}
